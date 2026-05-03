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
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const solid = scrolled || !isHome;

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        background: solid ? "rgba(27,67,50,0.97)" : "transparent",
        backdropFilter: solid ? "blur(14px)" : "none",
        borderBottom: solid ? "1px solid rgba(201,168,76,0.15)" : "none",
        boxShadow: solid ? "0 2px 24px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="text-xl font-bold tracking-wide transition-opacity group-hover:opacity-80"
            style={{ fontFamily: "var(--font-playfair, serif)", color: "#c9a84c" }}
          >
            Baekar Stays
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 mt-0.5">
            Old Manali
          </span>
        </Link>

        {/* Desktop */}
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
                  className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                  style={{ background: "#c9a84c" }}
                />
              )}
            </Link>
          ))}
          <Link
            href="/booking"
            className="ml-3 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg, #c9a84c, #9a7a2e)" }}
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-5 pb-5 pt-2 flex flex-col gap-1"
            style={{ background: "rgba(18,40,30,0.98)", backdropFilter: "blur(16px)" }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium border-b transition-colors"
                style={{
                  color: pathname === l.href ? "#c9a84c" : "rgba(255,255,255,0.75)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="mt-3 py-3 rounded-full text-sm font-semibold text-white text-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #9a7a2e)" }}
            >
              Book Now
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
