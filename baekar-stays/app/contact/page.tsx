"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const inputCls = "w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all focus:ring-2";
const inputStyle = { borderColor: "rgba(27,67,50,0.18)", background: "#fff", color: "#1a1a1a" };

const socials = [
  { label: "Instagram", handle: "@baekarstays", href: "https://instagram.com" },
  { label: "Facebook", handle: "Baekar Stays", href: "https://facebook.com" },
  { label: "WhatsApp", handle: "+91 98765 43210", href: "https://wa.me/919876543210" },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["Goshal Road, near Clubhouse Road", "Old Manali, Manali, HP – 175131"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 98765 43210", "24 / 7 Front Desk"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["hello@baekarstays.com", "We reply within a few hours"],
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-20 px-5 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0f2d1e 0%, #1b4332 60%, #2d6a4f 100%)" }}
      >
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Get in Touch</p>
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair, serif)" }}>
            Contact Us
          </h1>
          <div className="h-px max-w-[80px] mx-auto mb-5" style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
          <p className="text-white/65 max-w-md mx-auto text-sm">
            Questions, requests, or just want to say hi — we're here 24/7.
          </p>
        </motion.div>
      </section>

      {/* Main */}
      <section className="py-20 px-5 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Info panel */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#c9a84c" }}>
                  Baekar Stays
                </p>
                <h2
                  className="text-3xl font-bold mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}
                >
                  We'd Love to Hear From You
                </h2>
                <span className="gold-bar-left" />
              </div>

              <p className="text-gray-600 text-sm leading-relaxed pt-2">
                Whether you have a booking question, need travel advice, or want to arrange something special —
                our team is always happy to help. Reach out through any channel below.
              </p>

              {contactInfo.map((c) => (
                <div key={c.title} className="flex gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(27,67,50,0.08)" }}
                  >
                    <c.icon size={18} style={{ color: "#1b4332" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#c9a84c" }}>
                      {c.title}
                    </p>
                    {c.lines.map((l) => (
                      <p key={l} className="text-sm text-gray-600">{l}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div
                className="pt-5 mt-5 border-t"
                style={{ borderColor: "rgba(27,67,50,0.1)" }}
              >
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#c9a84c" }}>
                  Social Media
                </p>
                <div className="flex flex-col gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm transition-colors hover:opacity-70"
                    >
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                        style={{ background: "#1b4332" }}
                      >
                        {s.label[0]}
                      </span>
                      <div>
                        <p className="font-medium" style={{ color: "#1b4332" }}>{s.label}</p>
                        <p className="text-xs text-gray-400">{s.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map embed small */}
              <div className="rounded-xl overflow-hidden mt-2" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5!2d77.1825794!3d32.2573058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDE1JzI2LjMiTiA3N8KwMTAnNTcuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Baekar Stays location"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="right" delay={0.1}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col items-center justify-center text-center p-10 rounded-2xl"
                style={{ background: "#fff", border: "1px solid rgba(27,67,50,0.1)", boxShadow: "0 4px 32px rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "rgba(27,67,50,0.08)" }}
                >
                  <Check size={28} style={{ color: "#1b4332" }} />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}>
                  Message Sent!
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Thanks, <strong>{form.name}</strong>! We've received your message and will get back to you at{" "}
                  <strong>{form.email}</strong> within a few hours.
                </p>
                <button
                  onClick={() => { setForm({ name: "", email: "", message: "" }); setSent(false); }}
                  className="px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-80"
                  style={{ background: "rgba(27,67,50,0.08)", color: "#1b4332" }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 lg:p-10 rounded-2xl space-y-5"
                style={{ background: "#fff", border: "1px solid rgba(27,67,50,0.1)", boxShadow: "0 4px 32px rgba(0,0,0,0.06)" }}
              >
                <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}>
                  Send a Message
                </h2>
                <div className="h-px" style={{ background: "linear-gradient(90deg, #c9a84c40, transparent)" }} />

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#1b4332" }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Arjun Mehta"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className={inputCls}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#1b4332" }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className={inputCls}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#1b4332" }}>
                    Message *
                  </label>
                  <textarea
                    placeholder="Tell us how we can help — booking questions, travel tips, special occasions..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className={inputCls + " resize-none"}
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #1b4332, #2d6a4f)" }}
                >
                  Send Message
                </button>

                <p className="text-center text-xs text-gray-400">
                  Or call us anytime · <a href="tel:+919876543210" style={{ color: "#1b4332" }}>+91 98765 43210</a>
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
