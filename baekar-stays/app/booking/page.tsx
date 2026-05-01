"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Check, ChevronRight, Calendar, Users, User, Mail, MessageSquare } from "lucide-react";

const FOREST = "#1e3a2f";
const GOLD = "#c9a84c";

const roomOptions = [
  { value: "6bed", label: "6-Bed Dormitory", price: "₹400/night" },
  { value: "4bed", label: "4-Bed Dormitory", price: "₹600/night" },
  { value: "deluxe", label: "Deluxe Room", price: "₹1,200/night" },
  { value: "luxury", label: "Luxury Room", price: "₹2,000/night" },
];

type FormData = {
  checkin: string; checkout: string; guests: string; room: string;
  name: string; email: string; phone: string; requests: string;
};

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({
    checkin: "", checkout: "", guests: "1", room: "",
    name: "", email: "", phone: "", requests: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const step1Valid = form.checkin && form.checkout && form.room;
  const step2Valid = form.name && form.email;

  const fieldCls = "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2";
  const fieldStyle = { borderColor: "rgba(30,58,47,0.2)", background: "#fff", color: "#222" };
  const labelCls = "block text-xs font-semibold uppercase tracking-wider mb-1.5";

  const selectedRoom = roomOptions.find((r) => r.value === form.room);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6" style={{ background: `linear-gradient(135deg,#0e2218,${FOREST})` }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>Reservations</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Playfair Display',serif" }}>
            Book Your Stay
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            From ₹400/night · Check-in 1:00 PM · Check-out 10:00 AM
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Step indicators */}
          {!confirmed && (
            <div className="flex items-center justify-center gap-4 mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all"
                    style={{
                      background: step >= s ? FOREST : "rgba(30,58,47,0.1)",
                      color: step >= s ? "#fff" : "#999",
                    }}>
                    {step > s ? <Check size={14} /> : s}
                  </div>
                  <span className="text-xs font-medium hidden sm:block"
                    style={{ color: step >= s ? FOREST : "#aaa" }}>
                    {s === 1 ? "Stay Details" : s === 2 ? "Your Info" : "Confirm"}
                  </span>
                  {s < 3 && <ChevronRight size={14} style={{ color: "#ccc" }} />}
                </div>
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            {confirmed ? (
              <motion.div key="confirmed" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 px-8 rounded-3xl"
                style={{ background: "#fff", border: `2px solid ${GOLD}` }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ background: "rgba(201,168,76,0.12)" }}>
                  <Check size={28} style={{ color: GOLD }} />
                </div>
                <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>
                  Booking Confirmed!
                </h2>
                <p className="text-sm mb-2" style={{ color: "#555" }}>
                  Thank you, <strong>{form.name}</strong>! We&apos;ve received your request.
                </p>
                <p className="text-sm mb-8" style={{ color: "#777" }}>
                  A confirmation will be sent to <strong>{form.email}</strong> shortly.
                </p>
                <div className="p-5 rounded-2xl text-left mb-8 text-sm space-y-2"
                  style={{ background: "#f8f4ed", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <p><span style={{ color: GOLD }} className="font-semibold">Room:</span> {selectedRoom?.label}</p>
                  <p><span style={{ color: GOLD }} className="font-semibold">Check-in:</span> {form.checkin}</p>
                  <p><span style={{ color: GOLD }} className="font-semibold">Check-out:</span> {form.checkout}</p>
                  <p><span style={{ color: GOLD }} className="font-semibold">Guests:</span> {form.guests}</p>
                </div>
                <button onClick={() => { setConfirmed(false); setStep(1); setForm({ checkin:"",checkout:"",guests:"1",room:"",name:"",email:"",phone:"",requests:"" }); }}
                  className="px-8 py-3 rounded-full text-sm font-semibold transition-all hover:shadow-lg"
                  style={{ background: FOREST, color: "#fff" }}>
                  Make Another Booking
                </button>
              </motion.div>
            ) : step === 1 ? (
              <motion.div key="s1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                className="p-8 rounded-3xl space-y-6" style={{ background: "#fff", boxShadow: "0 4px 40px rgba(0,0,0,0.07)" }}>
                <h2 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>Stay Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls} style={{ color: FOREST }}>Check-in Date</label>
                    <div className="relative">
                      <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: GOLD }} />
                      <input type="date" value={form.checkin} onChange={set("checkin")}
                        min={new Date().toISOString().split("T")[0]}
                        className={`${fieldCls} pl-10 focus:ring-[${FOREST}]`} style={fieldStyle} />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls} style={{ color: FOREST }}>Check-out Date</label>
                    <div className="relative">
                      <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: GOLD }} />
                      <input type="date" value={form.checkout} onChange={set("checkout")}
                        min={form.checkin || new Date().toISOString().split("T")[0]}
                        className={`${fieldCls} pl-10`} style={fieldStyle} />
                    </div>
                  </div>
                </div>
                <div>
                  <label className={labelCls} style={{ color: FOREST }}>Number of Guests</label>
                  <div className="relative">
                    <Users size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: GOLD }} />
                    <select value={form.guests} onChange={set("guests")} className={`${fieldCls} pl-10`} style={fieldStyle}>
                      {[1,2,3,4,5,6].map((n) => <option key={n} value={n}>{n} guest{n > 1 ? "s" : ""}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelCls} style={{ color: FOREST }}>Room Type</label>
                  <div className="grid grid-cols-1 gap-3">
                    {roomOptions.map((r) => (
                      <label key={r.value} className="flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all"
                        style={{
                          border: `1.5px solid ${form.room === r.value ? GOLD : "rgba(30,58,47,0.15)"}`,
                          background: form.room === r.value ? "rgba(201,168,76,0.06)" : "#fff",
                        }}>
                        <input type="radio" name="room" value={r.value} checked={form.room === r.value} onChange={set("room")} className="accent-[#c9a84c]" />
                        <span className="flex-1 text-sm font-medium" style={{ color: FOREST }}>{r.label}</span>
                        <span className="text-sm font-bold" style={{ color: GOLD }}>{r.price}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button onClick={() => step1Valid && setStep(2)} disabled={!step1Valid}
                  className="w-full py-4 rounded-xl text-sm font-semibold transition-all hover:shadow-lg"
                  style={{ background: step1Valid ? FOREST : "rgba(30,58,47,0.25)", color: "#fff", cursor: step1Valid ? "pointer" : "not-allowed" }}>
                  Continue to Your Info
                </button>
              </motion.div>
            ) : step === 2 ? (
              <motion.div key="s2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                className="p-8 rounded-3xl space-y-6" style={{ background: "#fff", boxShadow: "0 4px 40px rgba(0,0,0,0.07)" }}>
                <h2 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>Your Information</h2>
                <div>
                  <label className={labelCls} style={{ color: FOREST }}>Full Name *</label>
                  <div className="relative">
                    <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: GOLD }} />
                    <input type="text" placeholder="Your full name" value={form.name} onChange={set("name")}
                      className={`${fieldCls} pl-10`} style={fieldStyle} />
                  </div>
                </div>
                <div>
                  <label className={labelCls} style={{ color: FOREST }}>Email Address *</label>
                  <div className="relative">
                    <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: GOLD }} />
                    <input type="email" placeholder="your@email.com" value={form.email} onChange={set("email")}
                      className={`${fieldCls} pl-10`} style={fieldStyle} />
                  </div>
                </div>
                <div>
                  <label className={labelCls} style={{ color: FOREST }}>Phone Number</label>
                  <div className="relative">
                    <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: GOLD }} />
                    <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set("phone")}
                      className={`${fieldCls} pl-10`} style={fieldStyle} />
                  </div>
                </div>
                <div>
                  <label className={labelCls} style={{ color: FOREST }}>Special Requests</label>
                  <div className="relative">
                    <MessageSquare size={15} className="absolute left-3.5 top-3.5" style={{ color: GOLD }} />
                    <textarea placeholder="Any special requirements or requests..." value={form.requests} onChange={set("requests")}
                      rows={3} className={`${fieldCls} pl-10 resize-none`} style={fieldStyle} />
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="flex-1 py-4 rounded-xl text-sm font-semibold transition-all"
                    style={{ border: `1.5px solid ${FOREST}`, color: FOREST }}>Back</button>
                  <button onClick={() => step2Valid && setStep(3)} disabled={!step2Valid}
                    className="flex-1 py-4 rounded-xl text-sm font-semibold transition-all hover:shadow-lg"
                    style={{ background: step2Valid ? FOREST : "rgba(30,58,47,0.25)", color: "#fff", cursor: step2Valid ? "pointer" : "not-allowed" }}>
                    Review Booking
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div key="s3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
                className="p-8 rounded-3xl" style={{ background: "#fff", boxShadow: "0 4px 40px rgba(0,0,0,0.07)" }}>
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>Confirm Booking</h2>
                <div className="space-y-3 mb-8 p-5 rounded-2xl text-sm" style={{ background: "#f8f4ed", border: "1px solid rgba(201,168,76,0.18)" }}>
                  {[
                    ["Room", selectedRoom?.label],
                    ["Check-in", form.checkin],
                    ["Check-out", form.checkout],
                    ["Guests", `${form.guests} guest${Number(form.guests) > 1 ? "s" : ""}`],
                    ["Name", form.name],
                    ["Email", form.email],
                    ["Phone", form.phone || "—"],
                    ["Requests", form.requests || "None"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4">
                      <span className="font-semibold" style={{ color: FOREST }}>{k}</span>
                      <span style={{ color: "#555" }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="flex-1 py-4 rounded-xl text-sm font-semibold transition-all"
                    style={{ border: `1.5px solid ${FOREST}`, color: FOREST }}>Back</button>
                  <button onClick={() => setConfirmed(true)}
                    className="flex-1 py-4 rounded-xl text-sm font-semibold transition-all hover:shadow-lg"
                    style={{ background: `linear-gradient(135deg,${GOLD},#a07c2e)`, color: "#fff" }}>
                    Confirm Booking
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
