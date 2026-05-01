"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/location", label: "Location" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(18,35,24,0.97)" : "linear-gradient(to bottom,rgba(0,0,0,0.45),transparent)",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow: scrolled ? "0 2px 30px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between py-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display',serif", color: "#c9a84c" }}>
            Baekar Stays
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
            Old Manali
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {l.label}
              {pathname === l.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-2/3 rounded-full"
                  style={{ background: "#c9a84c" }}
                />
              )}
            </Link>
          ))}
          <Link
            href="/booking"
            className="ml-3 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
            style={{ background: "linear-gradient(135deg,#c9a84c,#a07c2e)" }}
          >
            Book Now
          </Link>
        </nav>

        <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ background: "rgba(12,28,18,0.98)", backdropFilter: "blur(16px)" }}
          >
            <nav className="flex flex-col px-6 py-5 gap-1">
              {[...links, { href: "/booking", label: "Book Now" }].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-medium border-b transition-colors"
                  style={{
                    color: pathname === l.href ? "#c9a84c" : "rgba(255,255,255,0.8)",
                    borderColor: "rgba(255,255,255,0.07)",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
