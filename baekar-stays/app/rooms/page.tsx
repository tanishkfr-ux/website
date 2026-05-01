"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { Users, Check, Star } from "lucide-react";

const FOREST = "#1e3a2f";
const GOLD = "#c9a84c";

const rooms = [
  {
    name: "6-Bed Dormitory",
    short: "6-Bed Dorm",
    price: "₹400",
    tag: "Most Popular",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&q=80",
    guests: 6,
    desc: "Our most social space — meet fellow travellers from around the world. Each bed comes with a personal locker, reading light, and power outlet. Perfect for budget explorers who love the hostel community vibe.",
    features: ["Personal locker per guest","Reading lamp & power outlet","Shared modern bathroom","Free WiFi","Linen & towel included","Air cooling"],
  },
  {
    name: "4-Bed Dormitory",
    short: "4-Bed Dorm",
    price: "₹600",
    tag: "Great Value",
    img: "https://images.unsplash.com/photo-1520637836862-4d197d17c939?w=900&q=80",
    guests: 4,
    desc: "A smaller, more intimate dorm experience. Ideal for small friend groups or those who prefer a quieter shared space while still enjoying the hostel community feeling.",
    features: ["More space per person","Personal locker & power outlet","Shared modern bathroom","Free WiFi","Linen & towel included","Air cooling"],
  },
  {
    name: "Deluxe Room",
    short: "Deluxe Room",
    price: "₹1,200",
    tag: "2 Available",
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80",
    guests: 2,
    desc: "Private comfort with mountain character. Our Deluxe Rooms feature a double bed, en-suite bathroom, and Himachali-inspired decor. Mountain views guaranteed.",
    features: ["Private double bed","En-suite bathroom with hot water","Mountain view window","Free WiFi","Complimentary breakfast","Room service"],
  },
  {
    name: "Luxury Room",
    short: "Luxury Room",
    price: "₹2,000",
    tag: "Exclusive",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=80",
    guests: 2,
    desc: "The pinnacle of comfort at Baekar Stays. Our single Luxury Room offers a plush king bed, panoramic Himalayan views, premium bath amenities, and priority access to all experiences.",
    features: ["King-size plush bed","Panoramic Himalayan view","Premium en-suite bathroom","Welcome kit & toiletries","Daily complimentary breakfast","Priority experience booking"],
  },
];

export default function RoomsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 flex items-end"
        style={{ background: `linear-gradient(135deg,#0e2218 0%,${FOREST} 60%,#2d5540 100%)`, minHeight: 320 }}>
        <div className="max-w-4xl mx-auto w-full">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>Accommodation</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display',serif" }}>
            Rooms & Rates
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.35 }}
            className="text-base" style={{ color: "rgba(255,255,255,0.55)" }}>
            From social dorms to exclusive luxury — find your perfect mountain retreat.
          </motion.p>
        </div>
      </section>

      {/* Room cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-14">
        {rooms.map((room, i) => (
          <ScrollReveal key={room.name} delay={0.08}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-md transition-shadow hover:shadow-xl`}
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.05)" }}>
              <div className={`relative overflow-hidden min-h-[300px] lg:min-h-[400px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={room.img} alt={room.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 absolute inset-0" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: GOLD, color: "#fff" }}>{room.tag}</div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}>
                  <Users size={11} /><span>Up to {room.guests} guests</span>
                </div>
              </div>
              <div className={`p-8 lg:p-12 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1.5" style={{ color: GOLD }}>Available Now</p>
                    <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>{room.name}</h2>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-3xl font-bold" style={{ color: GOLD }}>{room.price}</div>
                    <div className="text-xs" style={{ color: "#aaa" }}>per night</div>
                  </div>
                </div>
                <div style={{ width: 40, height: 2, background: `linear-gradient(90deg,${GOLD},transparent)`, marginBottom: "1.1rem" }} />
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#555" }}>{room.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#444" }}>
                      <Check size={13} style={{ color: GOLD }} />{f}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 flex-wrap">
                  <Link href="/booking"
                    className="px-7 py-3 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:scale-105"
                    style={{ background: FOREST, color: "#fff" }}>Book {room.short}</Link>
                  <Link href="/contact"
                    className="px-7 py-3 rounded-full text-sm font-semibold transition-all"
                    style={{ border: `1.5px solid ${FOREST}`, color: FOREST }}>Enquire</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* Policies */}
      <section className="py-20 px-6" style={{ background: "#f0ebe0" }}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-10" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>Stay Policies</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Check-in / Check-out", items: ["Check-in: 1:00 PM","Check-out: 10:00 AM","Early check-in on request","24/7 front desk"] },
              { title: "What's Included", items: ["Free WiFi","Linen & towel","Luggage storage","Access to all common areas"] },
              { title: "House Rules", items: ["Pet friendly","No smoking indoors","Quiet hours: 11 PM","Visitors welcome until 10 PM"] },
            ].map((p) => (
              <ScrollReveal key={p.title} delay={0.08}>
                <div className="p-6 rounded-2xl" style={{ background: "#fff", border: "1px solid rgba(201,168,76,0.14)" }}>
                  <h3 className="font-bold mb-4" style={{ fontFamily: "'Playfair Display',serif", color: FOREST }}>{p.title}</h3>
                  <ul className="space-y-2">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#555" }}>
                        <span style={{ color: GOLD, fontSize: "0.4rem" }}>◆</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: FOREST }}>
        <ScrollReveal>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_,i) => <Star key={i} size={18} fill={GOLD} color={GOLD} />)}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display',serif" }}>
            Ready to Experience the Vibe?
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>Rooms fill up fast — book yours today.</p>
          <Link href="/booking"
            className="inline-block px-9 py-4 rounded-full text-sm font-semibold uppercase tracking-wide transition-all hover:shadow-2xl hover:scale-105"
            style={{ background: `linear-gradient(135deg,${GOLD},#a07c2e)`, color: "#fff" }}>Book Now</Link>
        </ScrollReveal>
      </section>
    </>
  );
}
