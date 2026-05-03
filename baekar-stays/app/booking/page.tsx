"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Check, ArrowRight, ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const roomOptions = [
  { value: "6-Bed Dorm",    label: "6-Bed Dorm",    price: "₹400 / bed" },
  { value: "4-Bed Dorm",    label: "4-Bed Dorm",    price: "₹600 / bed" },
  { value: "Deluxe Room",   label: "Deluxe Room",   price: "₹1,800 / room" },
  { value: "Luxury Room",   label: "Luxury Room",   price: "₹3,200 / room" },
];

const inputCls =
  "w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all focus:ring-2";
const inputStyle = {
  borderColor: "rgba(27,67,50,0.2)",
  background: "#fff",
  color: "#1a1a1a",
};
const focusRing = { "--tw-ring-color": "rgba(27,67,50,0.3)" } as React.CSSProperties;

type Step1 = { checkIn: string; checkOut: string; guests: string; room: string };
type Step2 = { name: string; email: string; phone: string; requests: string };

const defaultStep1: Step1 = { checkIn: "", checkOut: "", guests: "1", room: "" };
const defaultStep2: Step2 = { name: "", email: "", phone: "", requests: "" };

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [step1, setStep1] = useState<Step1>(defaultStep1);
  const [step2, setStep2] = useState<Step2>(defaultStep2);
  const [confirmed, setConfirmed] = useState(false);

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!step1.checkIn || !step1.checkOut || !step1.room) return;
    setStep(2);
  };

  const handleStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!step2.name || !step2.email) return;
    setConfirmed(true);
  };

  const selectedRoom = roomOptions.find((r) => r.value === step1.room);

  const today = new Date().toISOString().split("T")[0];

  if (confirmed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-5 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-lg w-full text-center p-10 rounded-3xl"
          style={{ background: "#fff", border: "1px solid rgba(27,67,50,0.1)", boxShadow: "0 20px 80px rgba(0,0,0,0.1)" }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(27,67,50,0.08)" }}
          >
            <Check size={36} style={{ color: "#1b4332" }} />
          </div>
          <h2
            className="text-3xl font-bold mb-3"
            style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}
          >
            Booking Confirmed!
          </h2>
          <div
            className="h-px max-w-[80px] mx-auto mb-5"
            style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }}
          />
          <p className="text-gray-600 text-sm mb-8 leading-relaxed">
            Thank you, <strong>{step2.name}</strong>! Your reservation request for the{" "}
            <strong>{step1.room}</strong> has been received. We'll send a confirmation
            to <strong>{step2.email}</strong> shortly.
          </p>

          <div
            className="p-5 rounded-xl text-left text-sm space-y-2 mb-8"
            style={{ background: "#f0ebe1" }}
          >
            <div className="flex justify-between">
              <span className="text-gray-500">Room</span>
              <span className="font-semibold" style={{ color: "#1b4332" }}>{step1.room}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Check-in</span>
              <span className="font-semibold" style={{ color: "#1b4332" }}>{step1.checkIn}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Check-out</span>
              <span className="font-semibold" style={{ color: "#1b4332" }}>{step1.checkOut}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Guests</span>
              <span className="font-semibold" style={{ color: "#1b4332" }}>{step1.guests}</span>
            </div>
            {selectedRoom && (
              <div className="flex justify-between border-t pt-2 mt-2" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <span className="text-gray-500">Rate</span>
                <span className="font-bold" style={{ color: "#c9a84c" }}>{selectedRoom.price}</span>
              </div>
            )}
          </div>

          <button
            onClick={() => { setStep(1); setStep1(defaultStep1); setStep2(defaultStep2); setConfirmed(false); }}
            className="px-8 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "#1b4332" }}
          >
            Make Another Booking
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-20 px-5 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0f2d1e 0%, #1b4332 60%, #2d6a4f 100%)" }}
      >
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Reserve Your Stay</p>
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair, serif)" }}>
            Book Now
          </h1>
          <div className="h-px max-w-[80px] mx-auto mb-5" style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
          <p className="text-white/65 max-w-md mx-auto text-sm">
            Starting from ₹400 / night · Check-in 1 PM · Check-out 10 AM
          </p>
        </motion.div>
      </section>

      {/* Progress */}
      <div className="py-8 px-5">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center gap-4">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-3 flex-1">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all"
                  style={{
                    background: s <= step ? "#1b4332" : "rgba(27,67,50,0.1)",
                    color: s <= step ? "#fff" : "#1b4332",
                  }}
                >
                  {s < step ? <Check size={14} /> : s}
                </div>
                <span className="text-xs font-medium" style={{ color: s <= step ? "#1b4332" : "#aaa" }}>
                  {s === 1 ? "Stay Details" : "Your Info"}
                </span>
                {s < 2 && (
                  <div
                    className="h-px flex-1 transition-all"
                    style={{ background: step > 1 ? "#c9a84c" : "rgba(0,0,0,0.1)" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Forms */}
      <section className="pb-24 px-5">
        <div className="max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.form
                key="step1"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                onSubmit={handleStep1}
                className="space-y-5"
              >
                <div
                  className="p-8 rounded-2xl"
                  style={{ background: "#fff", border: "1px solid rgba(27,67,50,0.1)", boxShadow: "0 4px 32px rgba(0,0,0,0.06)" }}
                >
                  <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}>
                    Stay Details
                  </h2>

                  {/* Room type */}
                  <div className="mb-5">
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#1b4332" }}>
                      Room Type *
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {roomOptions.map((r) => (
                        <label
                          key={r.value}
                          className="flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all"
                          style={{
                            border: `1.5px solid ${step1.room === r.value ? "#1b4332" : "rgba(0,0,0,0.1)"}`,
                            background: step1.room === r.value ? "rgba(27,67,50,0.04)" : "#fff",
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0"
                              style={{ borderColor: step1.room === r.value ? "#1b4332" : "#ccc" }}
                            >
                              {step1.room === r.value && (
                                <div className="w-2 h-2 rounded-full" style={{ background: "#1b4332" }} />
                              )}
                            </div>
                            <span className="text-sm font-medium" style={{ color: "#1a1a1a" }}>{r.label}</span>
                          </div>
                          <span className="text-xs font-semibold" style={{ color: "#c9a84c" }}>{r.price}</span>
                          <input
                            type="radio"
                            name="room"
                            value={r.value}
                            className="sr-only"
                            onChange={() => setStep1({ ...step1, room: r.value })}
                          />
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#1b4332" }}>
                        Check-in *
                      </label>
                      <div className="relative">
                        <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#2d6a4f" }} />
                        <input
                          type="date"
                          min={today}
                          value={step1.checkIn}
                          onChange={(e) => setStep1({ ...step1, checkIn: e.target.value })}
                          required
                          className={inputCls + " pl-9"}
                          style={{ ...inputStyle, ...focusRing }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#1b4332" }}>
                        Check-out *
                      </label>
                      <div className="relative">
                        <Calendar size={15} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#2d6a4f" }} />
                        <input
                          type="date"
                          min={step1.checkIn || today}
                          value={step1.checkOut}
                          onChange={(e) => setStep1({ ...step1, checkOut: e.target.value })}
                          required
                          className={inputCls + " pl-9"}
                          style={{ ...inputStyle, ...focusRing }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#1b4332" }}>
                      Number of Guests
                    </label>
                    <div className="relative">
                      <Users size={15} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#2d6a4f" }} />
                      <select
                        value={step1.guests}
                        onChange={(e) => setStep1({ ...step1, guests: e.target.value })}
                        className={inputCls + " pl-9 appearance-none"}
                        style={{ ...inputStyle, ...focusRing }}
                      >
                        {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>{n} Guest{n > 1 ? "s" : ""}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #1b4332, #2d6a4f)" }}
                >
                  Continue <ArrowRight size={16} />
                </button>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form
                key="step2"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                onSubmit={handleStep2}
                className="space-y-5"
              >
                {/* Summary */}
                <div
                  className="p-4 rounded-xl text-sm flex items-center justify-between"
                  style={{ background: "rgba(27,67,50,0.06)", border: "1px solid rgba(27,67,50,0.12)" }}
                >
                  <div>
                    <p className="font-semibold" style={{ color: "#1b4332" }}>{step1.room}</p>
                    <p className="text-xs text-gray-500">{step1.checkIn} → {step1.checkOut} · {step1.guests} guest{Number(step1.guests) > 1 ? "s" : ""}</p>
                  </div>
                  {selectedRoom && <p className="font-bold text-sm" style={{ color: "#c9a84c" }}>{selectedRoom.price}</p>}
                </div>

                <div
                  className="p-8 rounded-2xl space-y-5"
                  style={{ background: "#fff", border: "1px solid rgba(27,67,50,0.1)", boxShadow: "0 4px 32px rgba(0,0,0,0.06)" }}
                >
                  <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}>
                    Your Information
                  </h2>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#1b4332" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Arjun Mehta"
                      value={step2.name}
                      onChange={(e) => setStep2({ ...step2, name: e.target.value })}
                      required
                      className={inputCls}
                      style={{ ...inputStyle, ...focusRing }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#1b4332" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={step2.email}
                      onChange={(e) => setStep2({ ...step2, email: e.target.value })}
                      required
                      className={inputCls}
                      style={{ ...inputStyle, ...focusRing }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#1b4332" }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={step2.phone}
                      onChange={(e) => setStep2({ ...step2, phone: e.target.value })}
                      className={inputCls}
                      style={{ ...inputStyle, ...focusRing }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#1b4332" }}>
                      Special Requests
                    </label>
                    <textarea
                      placeholder="Early check-in, airport transfer, dietary needs..."
                      value={step2.requests}
                      onChange={(e) => setStep2({ ...step2, requests: e.target.value })}
                      rows={3}
                      className={inputCls + " resize-none"}
                      style={{ ...inputStyle, ...focusRing }}
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2 transition-all hover:opacity-70"
                    style={{ background: "rgba(27,67,50,0.08)", color: "#1b4332" }}
                  >
                    <ArrowLeft size={15} /> Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded-full font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #c9a84c, #9a7a2e)" }}
                  >
                    Confirm Booking <Check size={16} />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
