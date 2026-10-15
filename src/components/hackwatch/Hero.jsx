import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <div className="absolute right-[-10%] top-1/2 h-[900px] w-[900px] -translate-y-1/2 opacity-90">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 240, repeat: Infinity, ease: "linear" }} className="h-full w-full">
          <Image src="https://media.base44.com/images/public/6ad1475af0db89ea8a403727/d366e69c3_generated_f04c9d62.png" alt="Crystalline sphere of glowing network nodes" className="h-full w-full rounded-full" />
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-[#F472B6]">
          ● Now watching any network
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-[#F8FAFC] md:text-8xl">
          From live attacks to <span className="text-[#38BDF8]">code-level fixes.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 max-w-xl text-lg leading-relaxed text-[#94A3B8]">
          HackWatch connects runtime attack evidence to the exact vulnerable code, then proposes a reviewable fix through your existing workflow. No longer just Laravel and Nginx. Bring your own network.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10 flex flex-wrap gap-4">
          <a href="#demo" className="bg-[#38BDF8] px-7 py-4 font-mono text-sm font-bold uppercase tracking-widest text-[#020617] transition-shadow hover:shadow-[0_0_40px_rgba(56,189,248,0.5)]">
            Book a demo
          </a>
          <a href="#lifecycle" className="border border-white/15 px-7 py-4 font-mono text-sm uppercase tracking-widest text-[#F8FAFC] transition-colors hover:border-[#38BDF8]">
            See how it works
          </a>
        </motion.div>
        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs uppercase tracking-widest text-[#94A3B8]">
          <span>Detect</span><span className="text-[#38BDF8]">→</span><span>Investigate</span><span className="text-[#38BDF8]">→</span><span>Propose</span><span className="text-[#38BDF8]">→</span><span>Review</span>
        </div>
      </div>
    </section>
  );
}