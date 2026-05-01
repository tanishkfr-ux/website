import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Baekar Stays – Not Just a Hostel, But a Vibe",
  description:
    "Luxury boutique hostel in Old Manali. Rooftop restaurant, mountain views, live music, bonfire nights. Starting from ₹400/night.",
  keywords: "hostel manali, old manali hostel, baekar stays, luxury hostel himachal pradesh",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased" style={{ background: "#f8f4ed" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
