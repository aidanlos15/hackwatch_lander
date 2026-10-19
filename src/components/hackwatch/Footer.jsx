import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/[0.08] py-12">
      <div className="mx-auto flex max-w-[1100px] items-end justify-between px-10">
        <div>
          <span className="text-[16px] font-semibold text-white">HackWatch</span>
          <p className="mt-3 max-w-[380px] text-xs leading-[1.7] text-[#94A3B8]">Not a security certification or universal coverage promise. Runtime evidence, source context and human-reviewed fixes.</p>
        </div>
        <nav className="flex gap-[30px] font-mono">
          <a href="#networks" className="hw-focus text-[11px] uppercase tracking-[0.16em] text-[#94A3B8] transition-colors hover:text-[#4FA3E8]">Networks</a>
          <a href="#coverage" className="hw-focus text-[11px] uppercase tracking-[0.16em] text-[#94A3B8] transition-colors hover:text-[#4FA3E8]">Coverage</a>
          <a href="#demo" className="hw-focus text-[11px] uppercase tracking-[0.16em] text-[#94A3B8] transition-colors hover:text-[#4FA3E8]">Demo</a>
        </nav>
      </div>
    </footer>
  );
}