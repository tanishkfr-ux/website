"""Lead generation backend.

A zero-dependency HTTP server (Python stdlib only) that:
  * Serves the landing page and dashboard
  * Captures lead submissions to a JSON store
  * Scores leads on B2B fit signals (budget, role, work email)
  * Sends a notification + auto-reply via SMTP (if configured)
  * Exposes a REST API for the dashboard

Run:  python3 lead-gen/api/server.py
Env:
  LEAD_PORT             default 8000
  LEAD_NOTIFY_EMAIL     where to send "new lead" alerts
  SMTP_HOST/PORT/USER/PASS/FROM   optional SMTP for emails
"""

from __future__ import annotations

import json
import os
import re
import smtplib
import ssl
import threading
import uuid
from datetime import datetime, timezone
from email.message import EmailMessage
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
PUBLIC_DIR = ROOT / "public"
LEADS_FILE = DATA_DIR / "leads.json"

DATA_DIR.mkdir(exist_ok=True)
if not LEADS_FILE.exists():
    LEADS_FILE.write_text("[]")

_lock = threading.Lock()

FREE_EMAIL_DOMAINS = {
    "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com",
    "aol.com", "proton.me", "protonmail.com", "live.com", "msn.com",
}

BUDGET_SCORES = {
    "Under $5k": 5, "$5k–$25k": 20, "$25k–$100k": 40, "$100k+": 50,
}
ROLE_SCORES = {
    "Founder / CEO": 30, "VP / Director": 25, "Manager / Lead": 15,
    "Individual Contributor": 5, "Other": 5,
}


def score_lead(lead: dict) -> int:
    score = 0
    score += BUDGET_SCORES.get(lead.get("budget", ""), 0)
    score += ROLE_SCORES.get(lead.get("role", ""), 0)

    email = lead.get("email", "").lower()
    domain = email.split("@")[-1] if "@" in email else ""
    if domain and domain not in FREE_EMAIL_DOMAINS:
        score += 15

    msg = lead.get("message", "")
    if len(msg) >= 80:
        score += 5
    return min(score, 100)


def load_leads() -> list[dict]:
    with _lock:
        return json.loads(LEADS_FILE.read_text() or "[]")


def save_leads(leads: list[dict]) -> None:
    with _lock:
        LEADS_FILE.write_text(json.dumps(leads, indent=2))


EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


def validate(payload: dict) -> str | None:
    for f in ("name", "email", "company", "role", "budget", "message"):
        if not str(payload.get(f, "")).strip():
            return f"Missing field: {f}"
    if not EMAIL_RE.match(payload["email"]):
        return "Invalid email"
    return None


def send_email(to: str, subject: str, body: str) -> bool:
    host = os.environ.get("SMTP_HOST")
    if not host:
        return False
    port = int(os.environ.get("SMTP_PORT", "587"))
    user = os.environ.get("SMTP_USER", "")
    pwd = os.environ.get("SMTP_PASS", "")
    sender = os.environ.get("SMTP_FROM", user)

    msg = EmailMessage()
    msg["From"] = sender
    msg["To"] = to
    msg["Subject"] = subject
    msg.set_content(body)
    try:
        with smtplib.SMTP(host, port, timeout=15) as s:
            s.starttls(context=ssl.create_default_context())
            if user:
                s.login(user, pwd)
            s.send_message(msg)
        return True
    except Exception as e:
        print(f"[email] failed: {e}")
        return False


def notify_new_lead(lead: dict) -> None:
    notify_to = os.environ.get("LEAD_NOTIFY_EMAIL")
    if notify_to:
        body = (
            f"New lead: {lead['name']} ({lead['email']})\n"
            f"Company: {lead['company']} | Role: {lead['role']}\n"
            f"Budget: {lead['budget']} | Score: {lead['score']}/100\n\n"
            f"{lead['message']}\n"
        )
        send_email(notify_to, f"🚀 New lead: {lead['name']} (score {lead['score']})", body)

    first = lead["name"].split()[0]
    auto_reply = (
        f"Hi {first},\n\n"
        f"Thanks for reaching out — I received your message and will get back "
        f"to you within one business day with next steps.\n\n"
        f"In the meantime, feel free to share anything else that would help us "
        f"prepare for the call.\n\n"
        f"— The team"
    )
    send_email(lead["email"], "We got your message", auto_reply)


class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        print(f"[{datetime.now().strftime('%H:%M:%S')}] {fmt % args}")

    def _json(self, status: int, payload: dict):
        body = json.dumps(payload).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _read_json(self) -> dict:
        length = int(self.headers.get("Content-Length") or 0)
        if not length:
            return {}
        return json.loads(self.rfile.read(length))

    def _serve_file(self, path: Path):
        if not path.exists() or not path.is_file():
            self.send_error(404, "Not found")
            return
        ctype = {
            ".html": "text/html; charset=utf-8",
            ".css": "text/css",
            ".js": "application/javascript",
            ".json": "application/json",
        }.get(path.suffix, "application/octet-stream")
        data = path.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        url = urlparse(self.path)
        if url.path == "/api/leads":
            return self._json(200, {"leads": load_leads()})
        if url.path in ("/", "/index.html"):
            return self._serve_file(PUBLIC_DIR / "index.html")
        if url.path == "/dashboard.html":
            return self._serve_file(PUBLIC_DIR / "dashboard.html")
        safe = url.path.lstrip("/").replace("..", "")
        return self._serve_file(PUBLIC_DIR / safe)

    def do_POST(self):
        if urlparse(self.path).path != "/api/leads":
            return self.send_error(404)
        try:
            data = self._read_json()
        except Exception:
            return self._json(400, {"error": "Invalid JSON"})

        err = validate(data)
        if err:
            return self._json(400, {"error": err})

        now = datetime.now(timezone.utc).isoformat()
        lead = {
            "id": uuid.uuid4().hex[:12],
            "name": data["name"].strip(),
            "email": data["email"].strip().lower(),
            "company": data["company"].strip(),
            "role": data["role"].strip(),
            "budget": data["budget"].strip(),
            "message": data["message"].strip(),
            "source": data.get("source", "unknown"),
            "status": "New",
            "created_at": now,
            "updated_at": now,
        }
        lead["score"] = score_lead(lead)

        leads = load_leads()
        leads.append(lead)
        save_leads(leads)

        threading.Thread(target=notify_new_lead, args=(lead,), daemon=True).start()
        print(f"[lead] {lead['name']} <{lead['email']}> score={lead['score']}")
        return self._json(201, {"ok": True, "id": lead["id"], "score": lead["score"]})

    def do_PATCH(self):
        url = urlparse(self.path)
        m = re.match(r"^/api/leads/([a-f0-9]+)$", url.path)
        if not m:
            return self.send_error(404)
        lead_id = m.group(1)
        try:
            data = self._read_json()
        except Exception:
            return self._json(400, {"error": "Invalid JSON"})

        leads = load_leads()
        for lead in leads:
            if lead["id"] == lead_id:
                if data.get("status") in ("New", "Contacted", "Qualified", "Closed"):
                    lead["status"] = data["status"]
                    lead["updated_at"] = datetime.now(timezone.utc).isoformat()
                    save_leads(leads)
                    return self._json(200, {"ok": True, "lead": lead})
                return self._json(400, {"error": "Invalid status"})
        return self._json(404, {"error": "Lead not found"})


def main():
    port = int(os.environ.get("LEAD_PORT", "8000"))
    server = ThreadingHTTPServer(("0.0.0.0", port), Handler)
    print(f"Lead-gen server running at http://localhost:{port}")
    print(f"  Landing page: http://localhost:{port}/")
    print(f"  Dashboard:    http://localhost:{port}/dashboard.html")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down…")
        server.shutdown()


if __name__ == "__main__":
    main()
