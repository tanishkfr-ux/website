"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const FOREST = "#1e3a2f";
const GOLD = "#c9a84c";

const reviews = [
  { name: "Priya Sharma", from: "Mumbai", date: "March 2025", rating: 5, room: "Deluxe Room", quote: "Perfect location, friendly management. Woke up to Himalayan views every morning. The rooftop breakfast was absolutely magical!", highlight: true },
  { name: "Rahul Kumar", from: "Delhi", date: "February 2025", rating: 5, room: "4-Bed Dorm", quote: "Cozy, hassle-free stay with the most amazing bonfire nights. Met travellers from 8 countries in one evening. Felt like home.", highlight: false },
  { name: "Sarah Mitchell", from: "London, UK", date: "January 2025", rating: 5, room: "Luxury Room", quote: "The rooftop restaurant is an absolute dream. Best hostel experience in all of Manali! The staff went above and beyond.", highlight: true },
  { name: "Arjun Mehta", from: "Bangalore", date: "December 2024", rating: 5, room: "6-Bed Dorm", quote: "Budget friendly but never felt budget! Great vibes, live music every night, and the café had the best chai I've ever had.", highlight: false },
  { name: "Emma Johansson", from: "Stockholm, Sweden", date: "November 2024", rating: 5, room: "Deluxe Room", quote: "Woke up to a blanket of snow on the mountains. The property is stunning and the community here is incredible.", highlight: false },
  { name: "Vikram Singh", from: "Jaipur", date: "October 2024", rating: 5, room: "6-Bed Dorm", quote: "Met my best travel buddies here. Karaoke night was legendary. The staff organised a bonfire and it turned into an unforgettable night.", highlight: true },
  { name: "Aisha Patel", from: "Ahmedabad", date: "September 2024", rating: 5, room: "4-Bed Dorm", quote: "Super clean, warm, and vibey. The garden area is perfect for morning yoga with mountain views. Will definitely be back!", highlight: false },
  { name: "Tom Brennan", from: "Dublin, Ireland", date: "August 2024", rating: 5, room: "Luxury Room", quote: "I've stayed in hostels across 40 countries and Baekar Stays is genuinely top 3. The attention to detail is remarkable.", highlight: true },
  { name: "Neha Joshi", from: "Pune", date: "July 2024", rating: 5, room: "Deluxe Room", quote: "Such a beautiful property. Everything from the rooms to the food to the location was perfect. Highly recommend the sunrise trek they arrange!", highlight: false },
];

const featured = reviews.filter((r) => r.highlight);

function Stars({ n = 5, size = 14 }: { n?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(n)].map((_, i) => <Star key={i} size={size} fill={GOLD} color={GOLD} />)}
    </div>
  );
}

export default function ReviewsPage() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + featured.length) % featured.length);
  const next = () => setCurrent((c) => (c + 1) % featured.length);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6" style={{ background: `linear-gradient(135deg,#0e2218,${FOREST})` }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>Guest Reviews</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display',serif" }}>
            Voices from the Vibe
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2">
            <Stars size={22} />
            <span className="text-2xl font-bold ml-2" style={{ color: GOLD }}>5.0</span>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>/ 5 · {reviews.length}+ reviews</span>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section style={{ background: FOREST }} className="py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[["5.0★","Overall Rating"],["100%","Would Recommend"],["9.8/10","Cleanliness"],["9.9/10","Location"]].map(([v,l]) => (
            <div key={l}>
              <div className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display',serif", color: GOLD }}>{v}</div>
              <div className="text-[10px] uppercase tracking-widest mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-24 px-6" style={{ background: "#f0ebe0" }}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>Featured Stories</p>
              <h2 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>
                Highlights from Our Guests
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div key={current}
                initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}
                className="p-10 rounded-3xl text-center relative"
                style={{ background: "#fff", boxShadow: "0 8px 50px rgba(0,0,0,0.1)", border: `1px solid rgba(201,168,76,0.2)` }}>
                <Quote size={40} className="mx-auto mb-6 opacity-20" style={{ color: FOREST }} />
                <Stars size={18} />
                <p className="text-lg md:text-xl italic leading-relaxed my-8"
                  style={{ fontFamily: "'Playfair Display',serif", color: "#333" }}>
                  &ldquo;{featured[current].quote}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold text-white"
                    style={{ background: FOREST }}>{featured[current].name[0]}</div>
                  <div className="text-left">
                    <p className="font-bold text-sm" style={{ color: FOREST }}>{featured[current].name}</p>
                    <p className="text-xs" style={{ color: "#999" }}>{featured[current].from} · {featured[current].room} · {featured[current].date}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prev} className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:shadow-md"
                style={{ border: `1.5px solid ${FOREST}`, color: FOREST }}>
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {featured.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className="rounded-full transition-all"
                    style={{ width: i === current ? 24 : 8, height: 8, background: i === current ? GOLD : "rgba(30,58,47,0.25)" }} />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:shadow-md"
                style={{ border: `1.5px solid ${FOREST}`, color: FOREST }}>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>All Reviews</p>
            <h2 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>
              What Everyone Says
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <ScrollReveal key={`${r.name}-${i}`} delay={(i % 3) * 0.08}>
              <div className="p-6 rounded-2xl h-full transition-all hover:shadow-lg"
                style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.15)" }}>
                <div className="flex items-start justify-between mb-4">
                  <Stars size={13} />
                  <span className="text-xs" style={{ color: "#bbb" }}>{r.date}</span>
                </div>
                <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "#444" }}>
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                      style={{ background: FOREST }}>{r.name[0]}</div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: FOREST }}>{r.name}</p>
                      <p className="text-xs" style={{ color: "#bbb" }}>{r.from}</p>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: "rgba(30,58,47,0.08)", color: FOREST }}>{r.room}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Write a Review CTA */}
      <section className="py-20 px-6 text-center" style={{ background: FOREST }}>
        <ScrollReveal>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>Share Your Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display',serif" }}>
            Stayed With Us? We&apos;d Love to Hear Your Story
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
            Your review helps future travellers and means the world to our team.
          </p>
          <a href="mailto:hello@baekarstays.com?subject=My Review"
            className="inline-block px-8 py-3 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:scale-105"
            style={{ background: `linear-gradient(135deg,${GOLD},#a07c2e)`, color: "#fff" }}>
            Send Your Review
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
