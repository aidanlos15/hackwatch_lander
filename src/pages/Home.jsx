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
      className="relative min-h-screen scroll-smooth bg-[#0A0A0B] font-sans text-neutral-200"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    >
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