"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Wifi, Car, Coffee, Music, Flame, Users, Package, MapPin, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const amenities = [
  { icon: Coffee,  label: "Rooftop Restaurant" },
  { icon: Coffee,  label: "Café & Lounge" },
  { icon: Wifi,    label: "Free WiFi" },
  { icon: Car,     label: "Free Parking" },
  { icon: Music,   label: "Karaoke Nights" },
  { icon: Music,   label: "Live Music" },
  { icon: Flame,   label: "Bonfire" },
  { icon: Users,   label: "Game Room" },
  { icon: Package, label: "Luggage Storage" },
  { icon: Car,     label: "Airport Transfers" },
  { icon: Users,   label: "Pet Friendly" },
  { icon: Users,   label: "24h Front Desk" },
];

const rooms = [
  {
    title: "6-Bed Dorm",
    price: "₹400",
    desc: "Social & budget-friendly. Meet fellow travellers in our cozy mixed dorm.",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80",
    badge: "Best Value",
  },
  {
    title: "4-Bed Dorm",
    price: "₹600",
    desc: "A little more intimate — ideal for small groups or solo explorers.",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
    badge: "Popular",
  },
  {
    title: "Deluxe Room",
    price: "₹1,800",
    desc: "Private comfort with mountain-view windows and premium bedding.",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    badge: "2 Available",
  },
  {
    title: "Luxury Room",
    price: "₹3,200",
    desc: "Our crown jewel. Spacious, serene, and utterly spectacular.",
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
    badge: "Limited",
  },
];

const reviews = [
  { name: "Arjun M.", quote: "Perfect location, friendly management — cozy and hassle-free stay!", stars: 5 },
  { name: "Priya S.", quote: "The rooftop is everything. Woke up to snow-capped peaks every morning.", stars: 5 },
  { name: "Rahul K.", quote: "Bonfire nights and live music made this the best trip of my life.", stars: 5 },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
        {/* Parallax bg */}
        <motion.div
          style={{ y: yParallax }}
          className="absolute inset-0 scale-110"
        >
          <Image
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=90"
            alt="Himalayan mountains — Old Manali"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(15,45,30,0.6) 60%, rgba(10,25,16,0.85) 100%)",
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity: opacityHero }}
          className="relative z-10 text-center px-5 max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-xs uppercase text-white/60 tracking-[0.25em] mb-6"
          >
            Old Manali · Himachal Pradesh · India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-7xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Baekar Stays
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="h-px max-w-[120px] mx-auto mb-4"
            style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl sm:text-2xl font-light text-white/85 italic mb-10"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            "Not Just a Hostel, But a Vibe"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/booking"
              className="px-8 py-3.5 rounded-full font-semibold text-white text-sm transition-all hover:opacity-90 hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, #c9a84c, #9a7a2e)", boxShadow: "0 4px 24px rgba(201,168,76,0.4)" }}
            >
              Book Your Stay
            </Link>
            <Link
              href="/rooms"
              className="px-8 py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.35)" }}
            >
              View Rooms
            </Link>
          </motion.div>

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-12 flex items-center justify-center gap-2"
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="#c9a84c" color="#c9a84c" />
              ))}
            </div>
            <span className="text-white/70 text-sm">5.0 / 5 — Loved by 200+ guests</span>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-white/40 text-[10px] tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 rounded-full"
            style={{ background: "linear-gradient(to bottom, #c9a84c, transparent)" }}
          />
        </motion.div>
      </section>

      {/* ── AMENITIES STRIP ── */}
      <section style={{ background: "#1b4332" }} className="py-5 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          className="flex gap-10 whitespace-nowrap w-max"
        >
          {[...amenities, ...amenities].map((a, i) => (
            <div key={i} className="flex items-center gap-2 text-sm font-medium" style={{ color: "#c9a84c" }}>
              <a.icon size={15} />
              <span>{a.label}</span>
              <span className="opacity-40 ml-4">✦</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 px-5 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85"
                alt="Old Manali valley"
                fill
                className="object-cover"
                unoptimized
              />
              <div
                className="absolute bottom-4 left-4 rounded-xl px-4 py-3 text-sm"
                style={{ background: "rgba(27,67,50,0.9)", backdropFilter: "blur(10px)", border: "1px solid rgba(201,168,76,0.3)" }}
              >
                <p className="font-bold text-white" style={{ fontFamily: "var(--font-playfair, serif)" }}>From ₹400/night</p>
                <p className="text-white/60 text-xs">Old Manali, HP</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>
              About Baekar Stays
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight mb-5"
              style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}
            >
              Where the Mountains<br />
              <em>Meet the Vibe</em>
            </h2>
            <span className="gold-bar-left mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Nestled in the heart of Old Manali, Baekar Stays is not your average hostel.
              We blend luxury comfort with a soulful, community-driven atmosphere — rooftop
              dining under the stars, bonfire nights that go on forever, and rooms designed
              to feel like a home far from home.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you're a solo wanderer, a couple seeking romance in the mountains, or a
              group chasing adventure — Baekar Stays is your base camp for the extraordinary.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { val: "5.0", label: "Guest Rating" },
                { val: "200+", label: "Happy Guests" },
                { val: "4", label: "Room Types" },
                { val: "24/7", label: "Front Desk" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}>
                    {s.val}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ROOMS PREVIEW ── */}
      <section className="py-24 px-5" style={{ background: "#f0ebe1" }}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>
              Where You'll Sleep
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}
            >
              Choose Your Stay
            </h2>
            <span className="gold-bar mt-4" />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room, i) => (
              <ScrollReveal key={room.title} delay={i * 0.1}>
                <div
                  className="rounded-2xl overflow-hidden group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-2xl"
                  style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={room.img}
                      alt={room.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className="px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                        style={{ background: "rgba(27,67,50,0.85)", backdropFilter: "blur(8px)" }}
                      >
                        {room.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}
                    >
                      {room.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3 leading-relaxed">{room.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold" style={{ color: "#c9a84c" }}>
                        {room.price}<span className="text-xs font-normal text-gray-400">/night</span>
                      </span>
                      <Link
                        href="/booking"
                        className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:opacity-80"
                        style={{ background: "#1b4332", color: "#fff" }}
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-10">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:gap-3"
              style={{ color: "#1b4332" }}
            >
              See all rooms & details <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── AMENITIES GRID ── */}
      <section className="py-24 px-5 max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>
            Life at Baekar
          </p>
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}
          >
            Everything You Need
          </h2>
          <span className="gold-bar mt-4" />
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {amenities.map((a, i) => (
            <ScrollReveal key={a.label} delay={i * 0.05}>
              <div
                className="p-5 rounded-xl flex flex-col items-center gap-3 text-center transition-all hover:-translate-y-1"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(27,67,50,0.08)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(27,67,50,0.08)" }}
                >
                  <a.icon size={20} style={{ color: "#1b4332" }} />
                </div>
                <p className="text-xs font-medium text-gray-700">{a.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── REVIEWS TEASER ── */}
      <section className="py-24 px-5" style={{ background: "#1b4332" }}>
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>
              What Guests Say
            </p>
            <h2
              className="text-4xl font-bold text-white mb-10"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Loved by Every Guest
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {reviews.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 0.1}>
                <div
                  className="p-6 rounded-2xl text-left"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div className="flex mb-3">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star key={j} size={13} fill="#c9a84c" color="#c9a84c" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed italic mb-4">"{r.quote}"</p>
                  <p className="text-xs font-semibold" style={{ color: "#c9a84c" }}>{r.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-all hover:opacity-90"
              style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.3)" }}
            >
              Read all reviews <ArrowRight size={15} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── LOCATION TEASER ── */}
      <section className="py-24 px-5 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>Where We Are</p>
            <h2
              className="text-4xl font-bold mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}
            >
              Heart of Old Manali
            </h2>
            <span className="gold-bar-left mb-6" />
            <p className="text-gray-600 leading-relaxed mb-6">
              Goshal Road, near Clubhouse Road — steps away from the best cafés,
              temples, waterfalls, and adventure sports Old Manali has to offer.
            </p>
            <ul className="space-y-3">
              {[
                { label: "Hidimba Devi Temple", dist: "1.8 km" },
                { label: "Himalayan Extreme Centre", dist: "1 min walk" },
                { label: "Jogini Falls", dist: "5 min drive" },
                { label: "Solang Valley", dist: "14.8 km" },
              ].map((attr) => (
                <li key={attr.label} className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin size={14} style={{ color: "#c9a84c" }} />
                  <span>{attr.label}</span>
                  <span className="ml-auto text-xs font-medium" style={{ color: "#1b4332" }}>{attr.dist}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/location"
              className="inline-flex items-center gap-2 text-sm font-semibold mt-8 transition-colors hover:gap-3"
              style={{ color: "#1b4332" }}
            >
              View full map & directions <ArrowRight size={15} />
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849.5!2d77.1825794!3d32.2573058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDE1JzI2LjMiTiA3N8KwMTAnNTcuMyJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Baekar Stays location"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 px-5 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.15), transparent 70%)" }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>
              Starting from ₹400 / night
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-5"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Ready for the Vibe?
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              Book your stay at Baekar Stays and wake up to the Himalayas.
            </p>
            <Link
              href="/booking"
              className="inline-block px-10 py-4 rounded-full font-bold text-white text-sm transition-all hover:opacity-90 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #9a7a2e)",
                boxShadow: "0 4px 30px rgba(201,168,76,0.45)",
              }}
            >
              Book Now — It's Easy
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
