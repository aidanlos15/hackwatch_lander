import React from "react";
import { Image } from "@/components/ui/image";

const words = ["From", "live", "attacks", "to"];

export default function Hero() {
  return (
    <section id="top" className="relative z-10 px-10 pt-[40px] text-center">
      <div className="mx-auto max-w-[1100px]">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-[18px] py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 shadow-sm animate-[hw-up_0.8s_ease_both]">
          <span className="h-[7px] w-[7px] rounded-full bg-blue-500 shadow-[0_0_10px_#3B82F6]" />
          Network observability · any stack
        </div>
        <h1 className="mx-auto mt-8 max-w-[860px] text-[40px] font-semibold leading-[1.08] tracking-[-0.02em] text-slate-900 sm:text-6xl md:text-[72px]">
          {words.map((w, i) => (
            <span key={w} className="inline-block animate-[hw-up_0.8s_ease_both]" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>{w}{"\u00a0"}</span>
          ))}
          <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent animate-[hw-up_0.8s_ease_both]" style={{ animationDelay: "0.5s" }}>code-level{"\u00a0"}</span>
          <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent animate-[hw-up_0.8s_ease_both]" style={{ animationDelay: "0.6s" }}>fixes.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-[560px] text-base leading-[1.7] text-slate-500 animate-[hw-up_0.8s_0.6s_ease_both] sm:text-[17px]">
          HackWatch connects runtime attack evidence to the exact vulnerable code, then proposes a reviewable fix through your existing workflow.
        </p>
        <div className="mt-10 inline-flex items-center gap-7 rounded-[20px] border border-slate-200 bg-white px-5 py-4 shadow-[0_10px_40px_rgba(59,130,246,0.1)] animate-[hw-up_0.8s_0.8s_ease_both]">
          <a href="#demo" className="hw-focus cursor-pointer rounded-[14px] bg-gradient-to-br from-blue-500 to-indigo-500 px-[26px] py-[13px] text-[15px] font-semibold text-white transition-shadow hover:shadow-[0_0_28px_rgba(59,130,246,0.55)] active:opacity-85">Book a demo →</a>
          <a href="#lifecycle" className="hw-focus cursor-pointer text-[15px] text-slate-600 transition-colors hover:text-blue-600">How it works</a>
        </div>
        <div className="mx-auto mt-[70px] w-[980px] max-w-full animate-[hw-up_1s_1s_ease_both]">
          <Image src="https://media.base44.com/images/public/6ad1475af0db89ea8a403727/28164100b_generated_6c263ef0.jpg" alt="Product dashboard mockup" fittingType="fill" className="block aspect-[16/9] w-full rounded-[24px] border border-slate-200 object-cover shadow-[0_30px_80px_rgba(15,23,42,0.18)]" />
        </div>
      </div>
    </section>
  );
}