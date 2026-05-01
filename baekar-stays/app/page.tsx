"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Wifi, Car, Coffee, Music, Flame, Clock, Dog, Plane, Star, MapPin, ChevronDown, Utensils, Sun, Package } from "lucide-react";

const FOREST = "#1e3a2f";
const GOLD = "#c9a84c";
const CREAM_ALT = "#f0ebe0";

const amenities = [
  { icon: Utensils, label: "Rooftop Restaurant" },
  { icon: Coffee, label: "Café" },
  { icon: Wifi, label: "Free WiFi" },
  { icon: Sun, label: "Garden & Sun Terrace" },
  { icon: Car, label: "Free Parking" },
  { icon: Package, label: "Luggage Storage" },
  { icon: Plane, label: "Airport Transfers" },
  { icon: Music, label: "Karaoke Nights" },
  { icon: Music, label: "Live Music Nights" },
  { icon: Flame, label: "Bonfire" },
  { icon: Clock, label: "24h Front Desk" },
  { icon: Dog, label: "Pet Friendly" },
];

const rooms = [
  { name: "6-Bed Dorm", price: "₹400", tag: "Most Popular", img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80" },
  { name: "4-Bed Dorm", price: "₹600", tag: "Great Value", img: "https://images.unsplash.com/photo-1520637836862-4d197d17c939?w=600&q=80" },
  { name: "Deluxe Room", price: "₹1,200", tag: "2 Available", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80" },
  { name: "Luxury Room", price: "₹2,000", tag: "Exclusive", img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80" },
];

const reviews = [
  { name: "Priya S.", from: "Mumbai", quote: "Perfect location, friendly management. Woke up to Himalayan views every morning!" },
  { name: "Rahul K.", from: "Delhi", quote: "Cozy, hassle-free stay with the most amazing bonfire nights. Felt like home." },
  { name: "Sarah M.", from: "London", quote: "The rooftop restaurant is a dream. Best hostel experience in all of Manali!" },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <>
      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            y: bgY,
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            scale: 1.12,
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(18,35,24,0.5) 0%,rgba(18,35,24,0.25) 45%,rgba(18,35,24,0.82) 100%)" }} />

        <motion.div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto" style={{ opacity: textOpacity }}>
          <motion.p initial={{ opacity: 0, letterSpacing: "0.15em" }} animate={{ opacity: 1, letterSpacing: "0.38em" }}
            transition={{ duration: 1.2, delay: 0.2 }} className="text-xs uppercase mb-5" style={{ color: GOLD }}>
            Old Manali · Himachal Pradesh
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display',serif" }}>
            Baekar Stays
          </motion.h1>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.7, delay: 0.95 }}
            className="mx-auto mb-6"
            style={{ width: 80, height: 2, background: `linear-gradient(90deg,transparent,${GOLD},transparent)` }} />

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="text-xl md:text-2xl italic mb-10"
            style={{ fontFamily: "'Playfair Display',serif", color: "rgba(255,255,255,0.88)" }}>
            &ldquo;Not Just a Hostel, But a Vibe&rdquo;
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking"
              className="px-9 py-4 rounded-full text-sm font-semibold tracking-wide uppercase transition-all hover:scale-105 hover:shadow-2xl"
              style={{ background: `linear-gradient(135deg,${GOLD},#a07c2e)`, color: "#fff", boxShadow: "0 4px 22px rgba(201,168,76,0.45)" }}>
              Book Your Stay
            </Link>
            <Link href="/rooms"
              className="px-9 py-4 rounded-full text-sm font-semibold tracking-wide uppercase transition-all hover:bg-white/10"
              style={{ border: "1.5px solid rgba(255,255,255,0.65)", color: "rgba(255,255,255,0.9)" }}>
              Explore Rooms
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
            className="mt-11 flex flex-wrap justify-center gap-4 text-[11px] tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.5)" }}>
            <span>From ₹400/night</span>
            <span style={{ color: GOLD }}>◆</span>
            <span>5.0 ⭐ Rating</span>
            <span style={{ color: GOLD }}>◆</span>
            <span>24/7 Front Desk</span>
          </motion.div>
        </motion.div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown size={26} style={{ color: "rgba(255,255,255,0.45)" }} />
        </motion.div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section style={{ background: FOREST }} className="py-7 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[["5.0★","Guest Rating"],["₹400+","Starting Price"],["1:00 PM","Check-in"],["24/7","Front Desk"]].map(([v,l]) => (
            <div key={l}>
              <div className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display',serif", color: GOLD }}>{v}</div>
              <div className="text-[10px] uppercase tracking-widest mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: GOLD }}>Welcome to Baekar Stays</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>
              Where the Mountains<br /><em>Meet the Vibe</em>
            </h2>
            <div style={{ width: 55, height: 2, background: `linear-gradient(90deg,${GOLD},transparent)`, marginBottom: "1.5rem" }} />
            <p className="text-[15px] leading-relaxed mb-5" style={{ color: "#555" }}>
              Nestled in the heart of Old Manali, Baekar Stays is more than a place to sleep — it&apos;s a community,
              a feeling, a story waiting to unfold. From rooftop views of pine-covered slopes to the warmth of bonfire nights,
              every moment is curated for the free spirit.
            </p>
            <p className="text-[15px] leading-relaxed mb-9" style={{ color: "#555" }}>
              Whether you&apos;re a solo backpacker, a couple seeking mountain magic, or a group chasing adventure —
              we have the perfect room and the perfect vibe waiting.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/rooms" className="px-6 py-3 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:scale-105"
                style={{ background: FOREST, color: "#fff" }}>View Rooms</Link>
              <Link href="/contact" className="px-6 py-3 rounded-full text-sm font-semibold transition-all"
                style={{ border: `1.5px solid ${FOREST}`, color: FOREST }}>Contact Us</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["https://images.unsplash.com/photo-1520637836862-4d197d17c939?w=400&q=80","",""],
                ["https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80","mt-6",""],
                ["https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&q=80","",""],
                ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80","mt-6",""],
              ].map(([src, extra], i) => (
                <img key={i} src={src} alt="Baekar Stays"
                  className={`rounded-2xl w-full h-52 object-cover shadow-xl ${extra}`} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── AMENITIES ─── */}
      <section className="py-24 px-6" style={{ background: CREAM_ALT }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>What We Offer</p>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>
                Every Comfort, Every Vibe
              </h2>
              <div style={{ width: 55, height: 2, background: `linear-gradient(90deg,transparent,${GOLD},transparent)`, margin: "1.25rem auto 0" }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {amenities.map((a, i) => (
              <ScrollReveal key={`${a.label}-${i}`} delay={i * 0.05}>
                <div className="flex flex-col items-center gap-3 p-5 rounded-2xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.14)" }}>
                  <div className="p-3 rounded-full" style={{ background: "rgba(30,58,47,0.07)" }}>
                    <a.icon size={20} style={{ color: FOREST }} />
                  </div>
                  <span className="text-xs font-medium leading-tight" style={{ color: "#333" }}>{a.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROOMS PREVIEW ─── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>Accommodation</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>Choose Your Stay</h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((r, i) => (
            <ScrollReveal key={r.name} delay={i * 0.09}>
              <div className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
                style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.05)" }}>
                <div className="relative overflow-hidden h-48">
                  <img src={r.img} alt={r.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: GOLD, color: "#fff" }}>{r.tag}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>{r.name}</h3>
                  <p className="text-xs mb-4" style={{ color: "#999" }}>Starting from</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold" style={{ color: GOLD }}>
                      {r.price}<span className="text-xs font-normal ml-1" style={{ color: "#999" }}>/night</span>
                    </span>
                    <Link href="/booking" className="px-4 py-2 rounded-full text-xs font-semibold transition-all hover:shadow"
                      style={{ background: FOREST, color: "#fff" }}>Book</Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/rooms" className="text-sm font-semibold hover:underline underline-offset-4" style={{ color: FOREST }}>
            View All Rooms & Details →
          </Link>
        </div>
      </section>

      {/* ─── LOCATION TEASER ─── */}
      <section className="py-24 px-6" style={{ background: FOREST }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: GOLD }}>Prime Location</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display',serif" }}>
              Heart of <em style={{ color: GOLD }}>Old Manali</em>
            </h2>
            <p className="text-[15px] leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.68)" }}>
              Steps from Manu Temple, minutes from Himalayan adventure trails, and surrounded by the best cafés of Old Manali.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[["Hidimba Devi Temple","1.8 km"],["Manu Temple","11 min walk"],["Jogini Falls","5 min drive"],["Solang Valley","14.8 km"]].map(([p,d]) => (
                <div key={p} className="flex items-start gap-2">
                  <MapPin size={13} className="mt-0.5 shrink-0" style={{ color: GOLD }} />
                  <div>
                    <p className="text-xs font-medium text-white">{p}</p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/location" className="inline-block px-6 py-3 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:scale-105"
              style={{ background: GOLD, color: "#fff" }}>View Full Location</Link>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.15}>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-80">
              <iframe
                src="https://maps.google.com/maps?q=32.2573058,77.1825794&z=16&output=embed"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Baekar Stays on Map" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── REVIEWS TEASER ─── */}
      <section className="py-24 px-6" style={{ background: CREAM_ALT }}>
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>Guest Love</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>
              What Our Guests Say
            </h2>
            <div className="flex justify-center gap-1 mb-12">
              {[...Array(5)].map((_,i) => <Star key={i} size={20} fill={GOLD} color={GOLD} />)}
              <span className="ml-2 font-bold text-lg" style={{ color: FOREST }}>5.0 / 5</span>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 0.1}>
                <div className="p-6 rounded-2xl text-left" style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.18)" }}>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_,j) => <Star key={j} size={12} fill={GOLD} color={GOLD} />)}
                  </div>
                  <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "#444" }}>&ldquo;{r.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                      style={{ background: FOREST }}>{r.name[0]}</div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: FOREST }}>{r.name}</p>
                      <p className="text-xs" style={{ color: "#999" }}>{r.from}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.25}>
            <Link href="/reviews" className="inline-block mt-10 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:shadow-lg"
              style={{ background: FOREST, color: "#fff" }}>Read All Reviews</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA PARALLAX BANNER ─── */}
      <section className="py-28 px-6 relative overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0" style={{ background: "rgba(12,28,18,0.8)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: GOLD }}>Limited Rooms Available</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display',serif" }}>
              Ready for the<br /><em style={{ color: GOLD }}>Mountain Vibe?</em>
            </h2>
            <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
              Book your stay at Baekar Stays today. Starting from just ₹400/night.
            </p>
            <Link href="/booking"
              className="inline-block px-11 py-4 rounded-full text-sm font-semibold uppercase tracking-wide transition-all hover:shadow-2xl hover:scale-105"
              style={{ background: `linear-gradient(135deg,${GOLD},#a07c2e)`, color: "#fff", boxShadow: "0 4px 28px rgba(201,168,76,0.5)" }}>
              Book Now – From ₹400/night
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
