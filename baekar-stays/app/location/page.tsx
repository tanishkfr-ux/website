"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Clock, Car, Plane, Navigation } from "lucide-react";

const FOREST = "#1e3a2f";
const GOLD = "#c9a84c";

const attractions = [
  { name: "Hidimba Devi Temple", dist: "1.8 km", time: "5 min drive", icon: "🛕", desc: "Ancient temple dedicated to Hidimba Devi, set amidst towering cedar trees." },
  { name: "Manu Temple", dist: "0.9 km", time: "11 min walk", icon: "⛩️", desc: "Sacred shrine dedicated to Manu, the progenitor of mankind in Hindu mythology." },
  { name: "Himalayan Extreme Centre", dist: "50 m", time: "1 min walk", icon: "🧗", desc: "Adventure sports hub for paragliding, river crossing, rappelling & more." },
  { name: "Jogini Falls", dist: "3 km", time: "5 min drive", icon: "💧", desc: "Beautiful 160-ft waterfall reachable via a scenic trek through apple orchards." },
  { name: "Manali Club House", dist: "0.7 km", time: "9 min walk", icon: "🎭", desc: "Entertainment & recreation complex by the Beas River — perfect for evenings." },
  { name: "Vashisht Hot Springs", dist: "3.5 km", time: "8 min drive", icon: "♨️", desc: "Natural sulphur hot springs with ancient temples. Ideal post-trek relaxation." },
  { name: "Solang Valley", dist: "14.8 km", time: "25 min drive", icon: "⛷️", desc: "Adventure valley famous for skiing, snow activities, and cable car rides." },
  { name: "Kullu-Manali Airport", dist: "52 km", time: "1.5 hr drive", icon: "✈️", desc: "Bhuntar Airport — nearest domestic airport connecting Manali to major cities." },
];

const howToGet = [
  {
    icon: Plane,
    title: "By Air",
    desc: "Fly to Kullu-Manali Airport (Bhuntar) — 52 km away. Taxis available for ₹900–1,200. We also offer airport transfers — just let us know!",
  },
  {
    icon: Car,
    title: "By Road / Bus",
    desc: "Volvo buses run daily from Delhi (14 hrs), Chandigarh (7 hrs) and Shimla (7 hrs). Get off at Manali Bus Stand, then take a local taxi to Old Manali.",
  },
  {
    icon: Navigation,
    title: "Walking from Bus Stand",
    desc: "Manali Bus Stand is ~2.5 km from us. Take a 5-min auto-rickshaw to Old Manali bridge, then it's a short walk. We'll guide you via WhatsApp!",
  },
];

export default function LocationPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6" style={{ background: `linear-gradient(135deg,#0e2218,${FOREST})` }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>Find Us</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display',serif" }}>
            Our Location
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-base flex items-center justify-center gap-2" style={{ color: "rgba(255,255,255,0.6)" }}>
            <MapPin size={16} style={{ color: GOLD }} />
            Goshal Road, near Clubhouse Road, Old Manali, HP – 175131
          </motion.p>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 -mt-1">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ height: 440 }}>
              <iframe
                src="https://maps.google.com/maps?q=32.2573058,77.1825794&z=16&output=embed"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                title="Baekar Stays Location" />
            </div>
          </ScrollReveal>

          {/* Quick info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
            {[
              { icon: MapPin, title: "Address", text: "Goshal Road, near Clubhouse Road, Old Manali, Manali, HP 175131" },
              { icon: Clock, title: "Coordinates", text: "32.2573058° N, 77.1825794° E" },
              { icon: Car, title: "Parking", text: "Free on-site parking available for all guests" },
            ].map((c) => (
              <ScrollReveal key={c.title} delay={0.08}>
                <div className="p-5 rounded-2xl flex gap-4 items-start"
                  style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.15)", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
                  <div className="p-2.5 rounded-xl shrink-0" style={{ background: "rgba(30,58,47,0.08)" }}>
                    <c.icon size={18} style={{ color: FOREST }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: GOLD }}>{c.title}</p>
                    <p className="text-sm" style={{ color: "#444" }}>{c.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-24 px-6" style={{ background: "#f0ebe0" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>Explore Nearby</p>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>
                Everything at Your Doorstep
              </h2>
              <div style={{ width: 55, height: 2, background: `linear-gradient(90deg,transparent,${GOLD},transparent)`, margin: "1.25rem auto 0" }} />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((a, i) => (
              <ScrollReveal key={a.name} delay={i * 0.07}>
                <div className="p-6 rounded-2xl h-full transition-all hover:shadow-lg hover:-translate-y-1"
                  style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.14)" }}>
                  <div className="text-3xl mb-3">{a.icon}</div>
                  <h3 className="font-bold text-base mb-1" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>{a.name}</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: "rgba(201,168,76,0.12)", color: GOLD }}>{a.dist}</span>
                    <span className="text-xs" style={{ color: "#999" }}>{a.time}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#666" }}>{a.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Here */}
      <section className="py-24 px-6" style={{ background: FOREST }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>Getting Here</p>
              <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display',serif" }}>How to Reach Us</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howToGet.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 0.1}>
                <div className="p-7 rounded-2xl h-full"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="p-3 rounded-xl w-fit mb-5" style={{ background: "rgba(201,168,76,0.15)" }}>
                    <h.icon size={22} style={{ color: GOLD }} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display',serif" }}>{h.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{h.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 p-6 rounded-2xl text-center"
              style={{ background: "rgba(201,168,76,0.1)", border: `1px solid rgba(201,168,76,0.3)` }}>
              <p className="text-sm text-white mb-3">Need help finding us? We&apos;re always reachable!</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="tel:+919876543210" className="font-semibold transition-colors hover:opacity-80" style={{ color: GOLD }}>
                  📞 +91 98765 43210
                </a>
                <a href="mailto:hello@baekarstays.com" className="font-semibold transition-colors hover:opacity-80" style={{ color: GOLD }}>
                  ✉️ hello@baekarstays.com
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
