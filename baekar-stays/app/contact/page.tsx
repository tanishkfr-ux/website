"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Phone, Mail, Share2, Globe, Clock, Check } from "lucide-react";

const FOREST = "#1e3a2f";
const GOLD = "#c9a84c";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const canSend = form.name && form.email && form.message;

  const fieldCls = "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2 focus:ring-[#1e3a2f]/30";
  const fieldStyle = { borderColor: "rgba(30,58,47,0.2)", background: "#fff", color: "#222" };
  const labelCls = "block text-xs font-semibold uppercase tracking-wider mb-1.5";

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6" style={{ background: `linear-gradient(135deg,#0e2218,${FOREST})` }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>Get in Touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display',serif" }}>
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-base" style={{ color: "rgba(255,255,255,0.55)" }}>
            We&apos;re always here — whether you have a question or just want to say hello.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Contact Form */}
          <ScrollReveal direction="left">
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-3xl text-center"
                style={{ background: "#fff", border: `2px solid ${GOLD}`, boxShadow: "0 4px 40px rgba(0,0,0,0.07)" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(201,168,76,0.12)" }}>
                  <Check size={26} style={{ color: GOLD }} />
                </div>
                <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>
                  Message Sent!
                </h2>
                <p className="text-sm mb-6" style={{ color: "#666" }}>
                  Thanks, <strong>{form.name}</strong>! We&apos;ll get back to you at <strong>{form.email}</strong> within 24 hours.
                </p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="px-7 py-3 rounded-full text-sm font-semibold transition-all hover:shadow-lg"
                  style={{ background: FOREST, color: "#fff" }}>
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <div className="p-8 rounded-3xl space-y-6"
                style={{ background: "#fff", boxShadow: "0 4px 40px rgba(0,0,0,0.07)" }}>
                <h2 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>
                  Send a Message
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls} style={{ color: FOREST }}>Your Name *</label>
                    <input type="text" placeholder="Full name" value={form.name} onChange={set("name")}
                      className={fieldCls} style={fieldStyle} />
                  </div>
                  <div>
                    <label className={labelCls} style={{ color: FOREST }}>Email Address *</label>
                    <input type="email" placeholder="your@email.com" value={form.email} onChange={set("email")}
                      className={fieldCls} style={fieldStyle} />
                  </div>
                </div>
                <div>
                  <label className={labelCls} style={{ color: FOREST }}>Subject</label>
                  <select value={form.subject} onChange={set("subject")} className={fieldCls} style={fieldStyle}>
                    <option value="">Select a subject...</option>
                    <option value="booking">Room Booking Enquiry</option>
                    <option value="availability">Availability Check</option>
                    <option value="group">Group Booking</option>
                    <option value="transfer">Airport Transfer</option>
                    <option value="other">General Query</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls} style={{ color: FOREST }}>Message *</label>
                  <textarea placeholder="How can we help you?" value={form.message} onChange={set("message")}
                    rows={5} className={`${fieldCls} resize-none`} style={fieldStyle} />
                </div>
                <button onClick={() => canSend && setSent(true)} disabled={!canSend}
                  className="w-full py-4 rounded-xl text-sm font-semibold transition-all hover:shadow-lg"
                  style={{ background: canSend ? `linear-gradient(135deg,${FOREST},#2d5540)` : "rgba(30,58,47,0.25)", color: "#fff", cursor: canSend ? "pointer" : "not-allowed" }}>
                  Send Message
                </button>
              </div>
            )}
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right" delay={0.12}>
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: GOLD }}>Reach Us Directly</p>
                <h2 className="text-3xl font-bold mb-5" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>
                  We&apos;re Always Here
                </h2>
                <p className="text-[15px] leading-relaxed" style={{ color: "#555" }}>
                  Whether you have questions about availability, directions, local activities, or just want to chat —
                  our team is available 24/7 to help make your Manali experience unforgettable.
                </p>
              </div>

              {[
                { icon: MapPin, title: "Address", text: "Goshal Road, near Clubhouse Road, Old Manali, Manali, Himachal Pradesh – 175131" },
                { icon: Phone, title: "Phone / WhatsApp", text: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: Mail, title: "Email", text: "hello@baekarstays.com", href: "mailto:hello@baekarstays.com" },
                { icon: Clock, title: "Front Desk Hours", text: "24 hours, 7 days a week" },
              ].map((c) => (
                <div key={c.title} className="flex gap-4 p-5 rounded-2xl"
                  style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.14)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                  <div className="p-2.5 rounded-xl shrink-0 self-start" style={{ background: "rgba(30,58,47,0.08)" }}>
                    <c.icon size={18} style={{ color: FOREST }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: GOLD }}>{c.title}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-medium transition-colors hover:underline" style={{ color: FOREST }}>
                        {c.text}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: "#444" }}>{c.text}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="p-5 rounded-2xl"
                style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.14)" }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: GOLD }}>Follow the Vibe</p>
                <div className="flex gap-3">
                  {[
                    { icon: Share2, label: "@baekarstays", href: "#" },
                    { icon: Globe, label: "Baekar Stays", href: "#" },
                  ].map((s) => (
                    <a key={s.label} href={s.href}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:shadow-md"
                      style={{ background: "rgba(30,58,47,0.07)", color: FOREST }}>
                      <s.icon size={16} style={{ color: GOLD }} />
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Check-in info */}
              <div className="p-5 rounded-2xl" style={{ background: FOREST }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: GOLD }}>Check-in Details</p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[["1:00 PM","Check-in"],["10:00 AM","Check-out"],["24/7","Front Desk"]].map(([v,l]) => (
                    <div key={l}>
                      <div className="text-base font-bold" style={{ color: GOLD }}>{v}</div>
                      <div className="text-[10px] uppercase tracking-wider mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="rounded-3xl overflow-hidden shadow-xl" style={{ height: 380 }}>
            <iframe src="https://maps.google.com/maps?q=32.2573058,77.1825794&z=16&output=embed"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Baekar Stays" />
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
