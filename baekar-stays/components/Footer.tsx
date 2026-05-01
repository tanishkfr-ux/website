import Link from "next/link";
import { MapPin, Phone, Mail, Share2, Globe, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#0e2218", color: "rgba(255,255,255,0.65)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="text-2xl font-bold mb-1" style={{ fontFamily: "'Playfair Display',serif", color: "#c9a84c" }}>
            Baekar Stays
          </p>
          <p className="text-xs italic mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
            "Not Just a Hostel, But a Vibe"
          </p>
          <div className="flex items-center gap-0.5 mb-5">
            {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#c9a84c" color="#c9a84c" />)}
            <span className="ml-2 text-xs" style={{ color: "#c9a84c" }}>5.0 / 5</span>
          </div>
          <div className="flex gap-3">
            {[Share2, Globe].map((Icon, i) => (
              <a key={i} href="#" className="p-2 rounded-full transition-colors hover:opacity-80"
                style={{ background: "rgba(201,168,76,0.12)", color: "#c9a84c" }}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-white">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ["/", "Home"], ["/rooms", "Rooms & Rates"], ["/booking", "Book a Stay"],
              ["/location", "Location"], ["/reviews", "Reviews"], ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-white">Amenities</h4>
          <ul className="space-y-2.5 text-sm">
            {["Rooftop Restaurant","Café","Free WiFi","Garden & Sun Terrace","Karaoke & Live Music","Bonfire Nights","Pet Friendly","24h Front Desk"].map((a) => (
              <li key={a} className="flex items-center gap-2">
                <span style={{ color: "#c9a84c", fontSize: "0.45rem" }}>◆</span>{a}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-5 text-white">Contact</h4>
          <ul className="space-y-4 text-sm mb-6">
            <li className="flex gap-3">
              <MapPin size={15} className="shrink-0 mt-0.5" style={{ color: "#c9a84c" }} />
              <span>Goshal Road, near Clubhouse Road, Old Manali, HP – 175131</span>
            </li>
            <li className="flex gap-3">
              <Phone size={15} className="shrink-0" style={{ color: "#c9a84c" }} />
              <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
            </li>
            <li className="flex gap-3">
              <Mail size={15} className="shrink-0" style={{ color: "#c9a84c" }} />
              <a href="mailto:hello@baekarstays.com" className="hover:text-white transition-colors">hello@baekarstays.com</a>
            </li>
          </ul>
          <div className="p-3 rounded-lg text-xs" style={{ background: "rgba(201,168,76,0.08)", borderLeft: "2px solid #c9a84c" }}>
            <p className="font-semibold text-white mb-1">Hours</p>
            <p>Check-in: 1:00 PM &nbsp;|&nbsp; Check-out: 10:00 AM</p>
            <p className="mt-0.5">Front Desk: 24/7</p>
          </div>
        </div>
      </div>

      <div className="border-t px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs"
        style={{ borderColor: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.35)" }}>
        <p>© 2025 Baekar Stays. All rights reserved.</p>
        <p>Old Manali, Himachal Pradesh, India</p>
      </div>
    </footer>
  );
}
