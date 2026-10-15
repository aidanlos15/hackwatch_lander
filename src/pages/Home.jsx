import React from "react";
import Nav from "@/components/hackwatch/Nav";
import Hero from "@/components/hackwatch/Hero";
import Networks from "@/components/hackwatch/Networks";
import Lifecycle from "@/components/hackwatch/Lifecycle";
import Forensic from "@/components/hackwatch/Forensic";
import Protection from "@/components/hackwatch/Protection";
import Coverage from "@/components/hackwatch/Coverage";
import Booking from "@/components/hackwatch/Booking";
import Footer from "@/components/hackwatch/Footer";

export default function Home() {
  return (
    <div
      className="relative min-h-screen scroll-smooth bg-[#020617] font-sans text-[#F8FAFC]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    >
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-px animate-[scan_8s_linear_infinite] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent" />
      <Nav />
      <Hero />
      <Networks />
      <Lifecycle />
      <Forensic />
      <Protection />
      <Coverage />
      <Booking />
      <Footer />
    </div>
  );
}