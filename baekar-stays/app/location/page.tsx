"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Car, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const attractions = [
  { name: "Hidimba Devi Temple", dist: "1.8 km", time: "6 min drive", type: "Temple" },
  { name: "Manu Temple", dist: "~0.9 km", time: "11 min walk", type: "Temple" },
  { name: "Himalayan Extreme Centre", dist: "100 m", time: "1 min walk", type: "Adventure" },
  { name: "Jogini Falls", dist: "~3 km", time: "5 min drive", type: "Nature" },
  { name: "Manali Club House", dist: "~0.7 km", time: "9 min walk", type: "Leisure" },
  { name: "Vashisht Hot Springs", dist: "~3.5 km", time: "8 min drive", type: "Wellness" },
  { name: "Solang Valley", dist: "14.8 km", time: "30 min drive", type: "Adventure" },
  { name: "Kullu-Manali Airport", dist: "52 km", time: "~1.5 hr drive", type: "Transport" },
];

const typeColors: Record<string, string> = {
  Temple:    "#c9a84c",
  Adventure: "#2d6a4f",
  Nature:    "#40916c",
  Leisure:   "#1b4332",
  Wellness:  "#9a7a2e",
  Transport: "#555",
};

const howToGet = [
  {
    icon: Car,
    title: "By Air",
    desc: "Fly into Kullu-Manali Airport (KUU), 52 km away. We offer airport transfer on request — just let us know your flight details.",
  },
  {
    icon: Car,
    title: "By Bus / Taxi",
    desc: "HRTC buses and private taxis run regularly from Delhi (~14 hrs), Chandigarh (~7 hrs), and Shimla (~8 hrs) to Manali Bus Stand, 2 km from us.",
  },
  {
    icon: MapPin,
    title: "Local Directions",
    desc: "From Manali Bus Stand, take a taxi or walk to Old Manali. We're on Goshal Road, near the Clubhouse Road junction. Look for our green signboard.",
  },
];

export default function LocationPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-20 px-5 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0f2d1e 0%, #1b4332 60%, #2d6a4f 100%)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Find Us</p>
          <h1
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Location
          </h1>
          <div
            className="h-px max-w-[80px] mx-auto mb-5"
            style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }}
          />
          <p className="text-white/65 max-w-xl mx-auto">
            Goshal Road, near Clubhouse Road, Old Manali, HP – 175131
          </p>
        </motion.div>
      </section>

      {/* Map */}
      <section className="py-16 px-5 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5!2d77.1825794!3d32.2573058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDE1JzI2LjMiTiA3N8KwMTAnNTcuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="460"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Baekar Stays on Google Maps"
            />
          </div>
        </ScrollReveal>

        {/* Address card */}
        <ScrollReveal delay={0.1} className="mt-6">
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-xl"
            style={{ background: "#fff", border: "1px solid rgba(27,67,50,0.1)" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "rgba(27,67,50,0.08)" }}
            >
              <MapPin size={22} style={{ color: "#1b4332" }} />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm" style={{ color: "#1b4332" }}>Baekar Stays</p>
              <p className="text-gray-500 text-sm">Goshal Road, near Clubhouse Road, Old Manali, Manali, HP – 175131</p>
            </div>
            <a
              href="https://maps.google.com/?q=32.2573058,77.1825794"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "#1b4332" }}
            >
              Get Directions
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Nearby Attractions */}
      <section className="py-20 px-5" style={{ background: "#f0ebe1" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>
              Explore the Area
            </p>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}
            >
              Nearby Attractions
            </h2>
            <span className="gold-bar mt-4" />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {attractions.map((a, i) => (
              <ScrollReveal key={a.name} delay={i * 0.07}>
                <div
                  className="p-5 rounded-xl transition-all hover:-translate-y-1 hover:shadow-md"
                  style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: `${typeColors[a.type]}18`,
                        color: typeColors[a.type],
                      }}
                    >
                      {a.type}
                    </span>
                    <MapPin size={14} style={{ color: "#c9a84c" }} />
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "#1b4332" }}>{a.name}</h3>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <MapPin size={11} />
                      {a.dist}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Clock size={11} />
                      {a.time}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get There */}
      <section className="py-20 px-5 max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>
            Getting Here
          </p>
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}
          >
            How to Reach Us
          </h2>
          <span className="gold-bar mt-4" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {howToGet.map((h, i) => (
            <ScrollReveal key={h.title} delay={i * 0.1}>
              <div
                className="p-7 rounded-2xl h-full"
                style={{ background: "#fff", border: "1px solid rgba(27,67,50,0.08)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "rgba(27,67,50,0.08)" }}
                >
                  <h.icon size={22} style={{ color: "#1b4332" }} />
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}
                >
                  {h.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{h.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2} className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Need airport transfers or local assistance? We&apos;ve got you covered.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: "#1b4332", color: "#fff" }}
          >
            Contact Us <ArrowRight size={14} />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
