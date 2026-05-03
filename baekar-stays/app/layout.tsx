import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baekar Stays – Not Just a Hostel, But a Vibe",
  description:
    "Luxury boutique hostel in Old Manali. Rooftop restaurant, mountain views, live music & bonfire nights. Starting ₹400/night.",
  keywords: "hostel manali, old manali hostel, baekar stays, luxury hostel himachal pradesh",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
