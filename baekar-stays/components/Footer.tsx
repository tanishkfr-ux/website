import Link from "next/link";
import { MapPin, Phone, Mail, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#0f2d1e", color: "rgba(255,255,255,0.65)" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3
            className="text-2xl font-bold mb-1"
            style={{ fontFamily: "var(--font-playfair, serif)", color: "#c9a84c" }}
          >
            Baekar Stays
          </h3>
          <p className="text-xs italic mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
            "Not Just a Hostel, But a Vibe"
          </p>
          <div className="flex items-center gap-1 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13} fill="#c9a84c" color="#c9a84c" />
            ))}
            <span className="ml-2 text-xs font-semibold" style={{ color: "#c9a84c" }}>5.0 / 5</span>
          </div>
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all hover:opacity-80"
              style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.3)" }}
            >
              IG
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all hover:opacity-80"
              style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.3)" }}
            >
              FB
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all hover:opacity-80"
              style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.3)" }}
            >
              WA
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-white">
            Explore
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/rooms", label: "Rooms & Rates" },
              { href: "/booking", label: "Book a Stay" },
              { href: "/location", label: "Location & Map" },
              { href: "/reviews", label: "Guest Reviews" },
              { href: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Amenities */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-white">
            Amenities
          </h4>
          <ul className="space-y-2.5 text-sm">
            {[
              "Rooftop Restaurant",
              "Café & Lounge",
              "Free WiFi",
              "Garden & Terrace",
              "Karaoke Nights",
              "Live Music",
              "Bonfire",
              "Pet Friendly",
            ].map((a) => (
              <li key={a} className="flex items-center gap-2">
                <span style={{ color: "#c9a84c" }}>✦</span>
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-white">
            Find Us
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={15} className="shrink-0 mt-0.5" style={{ color: "#c9a84c" }} />
              <span>Goshal Road, near Clubhouse Road, Old Manali, HP – 175131</span>
            </li>
            <li className="flex gap-3">
              <Phone size={15} className="shrink-0 mt-0.5" style={{ color: "#c9a84c" }} />
              <a href="tel:+919876543210" className="hover:text-white transition-colors">
                +91 98765 43210
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={15} className="shrink-0 mt-0.5" style={{ color: "#c9a84c" }} />
              <a href="mailto:hello@baekarstays.com" className="hover:text-white transition-colors">
                hello@baekarstays.com
              </a>
            </li>
          </ul>
          <div
            className="mt-5 p-3 rounded-lg text-xs space-y-1"
            style={{ background: "rgba(201,168,76,0.08)", borderLeft: "2px solid #c9a84c" }}
          >
            <p className="font-semibold text-white">Timings</p>
            <p>Check-in: 1:00 PM</p>
            <p>Check-out: 10:00 AM</p>
            <p>Front Desk: 24 / 7</p>
          </div>
        </div>
      </div>

      <div
        className="border-t px-5 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
        style={{ borderColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.35)" }}
      >
        <p>© {new Date().getFullYear()} Baekar Stays. All rights reserved.</p>
        <p>Old Manali, Himachal Pradesh, India</p>
      </div>
    </footer>
  );
}
