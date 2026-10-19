import React from "react";
import { Image } from "@/components/ui/image";

const words = ["From", "live", "attacks", "to"];

export default function Hero() {
  return (
    <section id="top" className="relative z-10 px-10 pt-[90px] text-center">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image src="https://media.base44.com/images/public/6ad1475af0db89ea8a403727/11059d72b_generated_2ffce088.jpg" alt="Aurora gradient backdrop" fittingType="fill" className="h-full w-full object-cover opacity-35" />
      </div>
      <div className="mx-auto max-w-[1100px]">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.1] bg-white/[0.05] px-[18px] py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#94A3B8] animate-[hw-up_0.8s_ease_both]">
          <span className="h-[7px] w-[7px] rounded-full bg-[#4FA3E8] shadow-[0_0_10px_#4FA3E8]" />
          Network observability · any stack
        </div>
        <h1 className="mx-auto mt-8 max-w-[860px] text-[40px] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-6xl md:text-[72px]">
          {words.map((w, i) => (
            <span key={w} className="inline-block animate-[hw-up_0.8s_ease_both]" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>{w} </span>
          ))}
          <span className="inline-block bg-[linear-gradient(90deg,#4FA3E8,#6E7CE8)] bg-clip-text text-transparent animate-[hw-up_0.8s_ease_both]" style={{ animationDelay: "0.5s" }}>code-level </span>
          <span className="inline-block bg-[linear-gradient(90deg,#4FA3E8,#6E7CE8)] bg-clip-text text-transparent animate-[hw-up_0.8s_ease_both]" style={{ animationDelay: "0.6s" }}>fixes.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-[560px] text-base leading-[1.7] text-[#94A3B8] animate-[hw-up_0.8s_0.6s_ease_both] sm:text-[17px]">
          HackWatch connects runtime attack evidence to the exact vulnerable code, then proposes a reviewable fix through your existing workflow. No longer just Laravel and Nginx. Bring your own network.
        </p>
        <div className="mt-10 inline-flex items-center gap-7 rounded-[20px] border border-white/[0.12] bg-white/[0.06] px-5 py-4 shadow-[0_10px_40px_rgba(79,163,232,0.15)] animate-[hw-up_0.8s_0.8s_ease_both]">
          <a href="#demo" className="hw-focus cursor-pointer rounded-[14px] bg-[linear-gradient(135deg,#4FA3E8,#6E7CE8)] px-[26px] py-[13px] text-[15px] font-semibold text-[#0B1020] transition-shadow hover:shadow-[0_0_28px_rgba(79,163,232,0.6)] active:opacity-85">Book a demo →</a>
          <a href="#lifecycle" className="hw-focus cursor-pointer text-[15px] text-[#E2E8F0] transition-colors hover:text-[#4FA3E8]">How it works</a>
        </div>
        <div className="mx-auto mt-[70px] w-[980px] max-w-full animate-[hw-up_1s_1s_ease_both]">
          <Image src="https://media.base44.com/images/public/6ad1475af0db89ea8a403727/28164100b_generated_6c263ef0.jpg" alt="Product dashboard mockup" fittingType="fill" className="block aspect-[16/9] w-full rounded-[24px] border border-white/[0.14] object-cover shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(110,124,232,0.3)]" />
        </div>
      </div>
    </section>
  );
}