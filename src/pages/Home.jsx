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
    <div className="relative min-h-screen bg-[linear-gradient(180deg,#0B1020_0%,#131A2E_60%,#0B1020_100%)] font-sans text-[#E2E8F0]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-100px] top-[-120px] h-[560px] w-[560px] rounded-full bg-[#4FA3E8] opacity-45 blur-[90px] animate-[hw-d1_20s_ease-in-out_infinite_alternate]" />
        <div className="absolute right-[-180px] top-[80px] h-[620px] w-[620px] rounded-full bg-[#6E7CE8] opacity-45 blur-[90px] animate-[hw-d2_24s_ease-in-out_infinite_alternate]" />
        <div className="absolute left-[-160px] top-[1500px] h-[480px] w-[480px] rounded-full bg-[#6E7CE8] opacity-30 blur-[90px] animate-[hw-d2_22s_ease-in-out_infinite_alternate]" />
        <div className="absolute right-[-140px] top-[2300px] h-[520px] w-[520px] rounded-full bg-[#4FA3E8] opacity-25 blur-[90px] animate-[hw-d1_26s_ease-in-out_infinite_alternate]" />
      </div>
      <Nav />
      <Hero />
      <Networks />
      <div className="h-[120px] bg-[linear-gradient(180deg,transparent,rgba(110,124,232,0.08),transparent)]" />
      <Lifecycle />
      <Forensic />
      <Protection />
      <div className="mt-10 h-[120px] bg-[linear-gradient(180deg,transparent,rgba(110,124,232,0.08),transparent)]" />
      <Coverage />
      <Booking />
      <Footer />
    </div>
  );
}