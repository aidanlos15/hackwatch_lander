import React from "react";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-8 pt-24">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
          Network observability · any stack
        </div>
        <h1 className="mt-10 max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-7xl">
          From live attacks to <span className="text-neutral-500">code-level fixes.</span>
        </h1>
        <p className="mt-8 max-w-lg text-base leading-relaxed text-neutral-400">
          HackWatch connects runtime attack evidence to the exact vulnerable code, then proposes a reviewable fix through your existing workflow. No longer just Laravel and Nginx. Bring your own network.
        </p>
        <div className="mt-12 flex gap-8">
          <a href="#demo" className="text-sm text-white border-b border-white pb-1 transition-colors hover:border-neutral-500">
            Book a demo →
          </a>
          <a href="#lifecycle" className="text-sm text-neutral-400 border-b border-white/20 pb-1 transition-colors hover:text-white hover:border-white/60">
            How it works
          </a>
        </div>
      </div>
    </section>
  );
}