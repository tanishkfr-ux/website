"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Check, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const rooms = [
  {
    title: "6-Bed Dormitory",
    short: "6-Bed Dorm",
    price: "₹400",
    priceNote: "per bed / night",
    badge: "Best Value",
    badgeColor: "#2d6a4f",
    available: true,
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&q=80",
    desc: "Our most social room — perfect for solo travellers looking to meet people, share stories, and explore Manali together. Bunk beds, individual lockers, and a communal vibe that's second to none.",
    features: [
      "6 comfortable bunk beds",
      "Individual reading lamps",
      "Personal lockers with key",
      "Shared en-suite bathrooms",
      "Free WiFi",
      "Linen & towels included",
    ],
  },
  {
    title: "4-Bed Dormitory",
    short: "4-Bed Dorm",
    price: "₹600",
    priceNote: "per bed / night",
    badge: "Popular",
    badgeColor: "#1b4332",
    available: true,
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&q=80",
    desc: "A quieter, more intimate dormitory — great for small groups of friends or solo travellers who prefer a cozier space without giving up the social hostel atmosphere.",
    features: [
      "4 premium bunk beds",
      "Larger personal lockers",
      "Reading lamps & USB ports",
      "Shared en-suite bathrooms",
      "Free WiFi",
      "Daily housekeeping",
    ],
  },
  {
    title: "Deluxe Room",
    short: "Deluxe",
    price: "₹1,800",
    priceNote: "per room / night",
    badge: "2 Available",
    badgeColor: "#c9a84c",
    available: true,
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80",
    desc: "Your private mountain retreat. The Deluxe Room offers a king-size bed, mountain-facing windows, and thoughtful touches that make it feel like a boutique hotel — at hostel prices.",
    features: [
      "King-size bed with premium linen",
      "Mountain-view window",
      "Private en-suite bathroom",
      "Hot shower & toiletries",
      "Smart TV & Free WiFi",
      "Daily housekeeping & towels",
    ],
  },
  {
    title: "Luxury Room",
    short: "Luxury",
    price: "₹3,200",
    priceNote: "per room / night",
    badge: "Only 1 Left",
    badgeColor: "#9a7a2e",
    available: true,
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80",
    desc: "Our crown jewel. Spacious, serene, and utterly spectacular. Wake up to panoramic Himalayan views, soak in the deep-soak bath, and experience what a true luxury mountain escape feels like.",
    features: [
      "Super-king bed & premium decor",
      "Panoramic Himalayan view",
      "Spacious private bathroom",
      "Deep-soak bath & rain shower",
      "Seating area & Smart TV",
      "Complimentary welcome drink",
    ],
  },
];

const policies = [
  { label: "Check-in", value: "1:00 PM" },
  { label: "Check-out", value: "10:00 AM" },
  { label: "Front Desk", value: "24 / 7" },
  { label: "Cancellation", value: "48h notice" },
  { label: "Pets", value: "Welcome ✦" },
  { label: "Min. Age", value: "18+" },
];

export default function RoomsPage() {
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
            Where You'll Sleep
          </p>
          <h1
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Our Rooms
          </h1>
          <div
            className="h-px max-w-[80px] mx-auto mb-5"
            style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }}
          />
          <p className="text-white/65 max-w-xl mx-auto text-base">
            From social dorms to panoramic luxury suites — every room is designed with
            comfort, character, and the mountains in mind.
          </p>
        </motion.div>
      </section>

      {/* Rooms */}
      <section className="py-20 px-5 max-w-6xl mx-auto space-y-16">
        {rooms.map((room, i) => (
          <ScrollReveal key={room.title} delay={0.05}>
            <div
              className={`grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              style={{ border: "1px solid rgba(0,0,0,0.07)" }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[360px]">
                <Image
                  src={room.img}
                  alt={room.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: room.badgeColor }}
                  >
                    {room.badge}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-8 lg:p-10 flex flex-col justify-between" style={{ background: "#fff" }}>
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <h2
                      className="text-3xl font-bold leading-tight"
                      style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}
                    >
                      {room.title}
                    </h2>
                    <div className="text-right shrink-0 ml-4">
                      <p className="text-2xl font-bold" style={{ color: "#c9a84c" }}>{room.price}</p>
                      <p className="text-xs text-gray-400">{room.priceNote}</p>
                    </div>
                  </div>

                  <div
                    className="h-px mb-5"
                    style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }}
                  />

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{room.desc}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check size={14} style={{ color: "#2d6a4f" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href={`/booking?room=${encodeURIComponent(room.short)}`}
                    className="flex-1 text-center py-3 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #1b4332, #2d6a4f)" }}
                  >
                    Book This Room
                  </Link>
                  <div
                    className="flex items-center gap-1.5 text-xs px-3 py-3 rounded-full"
                    style={{ background: "#f0ebe1", color: "#2d6a4f" }}
                  >
                    <Users size={13} />
                    <span className="font-medium">
                      {room.title.includes("6") ? "Up to 6" : room.title.includes("4") ? "Up to 4" : "2 Guests"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* Policies */}
      <section className="py-20 px-5" style={{ background: "#f0ebe1" }}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#c9a84c" }}>House Rules</p>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-playfair, serif)", color: "#1b4332" }}
            >
              Policies & Timings
            </h2>
            <span className="gold-bar mt-4" />
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {policies.map((p, i) => (
              <ScrollReveal key={p.label} delay={i * 0.07}>
                <div
                  className="p-5 rounded-xl text-center"
                  style={{ background: "#fff", border: "1px solid rgba(27,67,50,0.08)" }}
                >
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">{p.label}</p>
                  <p className="text-lg font-bold" style={{ color: "#1b4332", fontFamily: "var(--font-playfair, serif)" }}>
                    {p.value}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 text-center" style={{ background: "#1b4332" }}>
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair, serif)" }}>
            Ready to Book?
          </h2>
          <p className="text-white/60 mb-8">Beds fill up fast — especially in peak season.</p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white text-sm transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #c9a84c, #9a7a2e)" }}
          >
            Reserve Your Spot <ArrowRight size={15} />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
