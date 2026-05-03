"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const reviews = [
  {
    name: "Arjun Mehta",
    location: "Mumbai, India",
    date: "March 2025",
    stars: 5,
    title: "Perfect base camp for Manali!",
    quote:
      "Perfect location, friendly management — cozy and hassle-free stay! The rooftop restaurant has the most breathtaking views I've ever seen. Woke up every morning to snow-capped peaks. Will definitely be back.",
    avatar: "AM",
  },
  {
    name: "Priya Sharma",
    location: "Bangalore, India",
    date: "February 2025",
    stars: 5,
    title: "The vibe is absolutely real",
    quote:
      "The name says it all — it's not just a hostel, it truly is a vibe. The bonfire nights, the live music, the incredibly warm staff — I made friends for life here. Baekar Stays has ruined all other hostels for me.",
    avatar: "PS",
  },
  {
    name: "Rahul Kapoor",
    location: "Delhi, India",
    date: "January 2025",
    stars: 5,
    title: "Best hostel in Old Manali, hands down",
    quote:
      "Stayed in the Deluxe Room and it felt like a boutique hotel. Impeccably clean, super comfortable, and the location is unbeatable — everything is walking distance. The staff went out of their way to make us feel at home.",
    avatar: "RK",
  },
  {
    name: "Sofia Martinez",
    location: "Barcelona, Spain",
    date: "December 2024",
    stars: 5,
    title: "A hidden gem in the Himalayas",
    quote:
      "I've stayed in hostels across 30+ countries and Baekar Stays stands out as one of the best experiences ever. The community here is special. Karaoke night was legendary — we sang until 2am!",
    avatar: "SM",
  },
  {
    name: "Vikram Nair",
    location: "Kochi, India",
    date: "November 2024",
    stars: 5,
    title: "Value for money is off the charts",
    quote:
      "Starting at ₹400 — I was skeptical, but this place is incredible value. Clean, well-maintained, great food on the rooftop, and the staff remembered my name by day two. That's rare anywhere.",
    avatar: "VN",
  },
  {
    name: "Emma Wilson",
    location: "London, UK",
    date: "October 2024",
    stars: 5,
    title: "My Himalayan home",
    quote:
      "I came for 3 nights and stayed for 10. That says everything. The garden terrace, the café, the people — Baekar Stays creates a little world of its own. Absolutely magical.",
    avatar: "EW",
  },
];

const highlights = [
  { quote: "Perfect location, friendly management, cozy and hassle-free stay!", author: "Arjun M." },
  { quote: "It's not just a hostel, it truly is a vibe.", author: "Priya S." },
  { quote: "One of the best hostel experiences in 30+ countries.", author: "Sofia M." },
];

export default function ReviewsPage() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

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
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>
            Guest Voices
          </p>
          <h1
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Reviews
          </h1>
          <div
            className="h-px max-w-[80px] mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }}
          />
          {/* Rating summary */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={22} fill="#c9a84c" color="#c9a84c" />
              ))}
            </div>
            <p className="text-4xl font-bold text-white" style={{ fontFamily: "var(--font-playfair, serif)" }}>
              5.0 <span className="text-xl font-normal text-white/50">/ 5.0</span>
            </p>
            <p className="text-white/55 text-sm">Based on 200+ verified reviews</p>
          </div>
        </motion.div>
      </section>

      {/* Highlight Quotes */}
      <section className="py-16 px-5" style={{ background: "#f0ebe1" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-5">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.author} delay={i * 0.1}>
                <div
                  className="p-6 rounded-2xl relative"
                  style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.2)" }}
                >
                  <span
                    className="text-6xl leading-none absolute top-3 left-5 opacity-10"
                    style={{ fontFamily: "var(--font-playfair, serif)", color: "#c9a84c" }}
                  >
                    "
                  </span>
                  <div className="flex mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={13} fill="#c9a84c" color="#c9a84c" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed italic mb-4 relative z-10">
                    "{h.quote}"
                  </p>
                  <p className="text-xs font-semibold" style={{ color: "#1b4332" }}>— {h.author}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="py-20 px-5 max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>
            Guest Stories
          </p>
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}
          >
            What Our Guests Say
          </h2>
          <span className="gold-bar mt-4" />
        </ScrollReveal>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 sm:p-12 rounded-2xl"
              style={{ background: "#fff", border: "1px solid rgba(27,67,50,0.1)", boxShadow: "0 8px 48px rgba(0,0,0,0.07)" }}
            >
              {/* Stars */}
              <div className="flex mb-6">
                {Array.from({ length: reviews[current].stars }).map((_, i) => (
                  <Star key={i} size={16} fill="#c9a84c" color="#c9a84c" />
                ))}
              </div>

              <p
                className="text-xl sm:text-2xl font-semibold mb-3 leading-tight"
                style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}
              >
                "{reviews[current].title}"
              </p>

              <p className="text-gray-600 leading-relaxed mb-8 text-base italic">
                "{reviews[current].quote}"
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: "linear-gradient(135deg, #1b4332, #2d6a4f)" }}
                >
                  {reviews[current].avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#1b4332" }}>
                    {reviews[current].name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {reviews[current].location} · {reviews[current].date}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "#1b4332" }}
            >
              <ChevronLeft size={18} /> Prev
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current ? "#c9a84c" : "rgba(201,168,76,0.3)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "#1b4332" }}
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* All reviews grid */}
      <section className="py-20 px-5" style={{ background: "#f0ebe1" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}
            >
              All Reviews
            </h2>
            <span className="gold-bar mt-4" />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 0.08}>
                <div
                  className="p-6 rounded-2xl h-full flex flex-col"
                  style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <div className="flex mb-3">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star key={j} size={13} fill="#c9a84c" color="#c9a84c" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold mb-2" style={{ color: "#1b4332" }}>"{r.title}"</p>
                  <p className="text-xs text-gray-500 leading-relaxed italic flex-1 mb-5">
                    {r.quote.length > 120 ? r.quote.slice(0, 120) + "…" : r.quote}
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ background: "linear-gradient(135deg, #1b4332, #40916c)" }}
                    >
                      {r.avatar}
                    </div>
                    <div>
                      <p className="text-xs font-semibold" style={{ color: "#1b4332" }}>{r.name}</p>
                      <p className="text-xs text-gray-400">{r.location} · {r.date}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
