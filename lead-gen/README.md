# Lead Generation Automation

A self-contained B2B lead capture and CRM system. No external services required to start.

## What's included

- **Landing page** (`public/index.html`) — branded capture form for strategy-call requests
- **Dashboard** (`public/dashboard.html`) — searchable, filterable view of all leads with status tracking and lead-score badges
- **Backend** (`api/server.py`) — zero-dependency Python HTTP server: stores leads, scores them, sends notifications and auto-replies
- **Storage** (`data/leads.json`) — simple JSON store, easy to back up or migrate

## Quick start

```bash
python3 lead-gen/api/server.py
```

Open:
- Landing page: <http://localhost:8000/>
- Dashboard:    <http://localhost:8000/dashboard.html>

## How leads are scored (0–100)

| Signal              | Points                                            |
|---------------------|---------------------------------------------------|
| Budget              | Under $5k = 5, $5–25k = 20, $25–100k = 40, $100k+ = 50 |
| Role                | Founder/CEO = 30, VP/Director = 25, Manager = 15  |
| Work email (non-free domain) | +15                                      |
| Detailed message (≥80 chars) | +5                                       |

Hot ≥ 70 · Warm 40–69 · Cold < 40.

## Email automation (optional)

Set these env vars before starting the server to enable notifications and auto-replies:

```bash
export LEAD_NOTIFY_EMAIL="you@yourcompany.com"
export SMTP_HOST="smtp.gmail.com"
export SMTP_PORT="587"
export SMTP_USER="you@gmail.com"
export SMTP_PASS="app-password"
export SMTP_FROM="you@gmail.com"
python3 lead-gen/api/server.py
```

When a lead submits the form:
1. The lead receives an instant auto-reply confirming receipt
2. You receive an alert with the lead's score and message

## API

| Method | Path                | Description                          |
|--------|---------------------|--------------------------------------|
| POST   | `/api/leads`        | Submit a new lead (form posts here)  |
| GET    | `/api/leads`        | List all leads (used by dashboard)   |
| PATCH  | `/api/leads/<id>`   | Update status (`New`/`Contacted`/`Qualified`/`Closed`) |

## Workflow

1. Share your landing page URL on LinkedIn, in cold outreach, or as your site footer
2. Leads submit the form → automatically scored and stored
3. Open the dashboard to triage: hot leads first, mark contacted, advance through the pipeline
4. Click ✉ Email on any row to draft a personalized reply

## Extending

- **Embed the form on any site:** copy the `<form>` block from `public/index.html` and point it at `/api/leads`
- **Migrate to a database:** replace the read/write in `load_leads()` and `save_leads()` in `api/server.py`
- **Add Slack alerts:** in `notify_new_lead()` POST to a Slack webhook alongside the email send
- **Sync to a CRM:** add a webhook call (HubSpot, Pipedrive, etc.) inside `notify_new_lead()`
