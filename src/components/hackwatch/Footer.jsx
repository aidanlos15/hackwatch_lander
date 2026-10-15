import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <span className="text-xl font-bold text-[#F8FAFC]">Hack<span className="text-[#38BDF8]">Watch</span></span>
        <p className="max-w-xl text-sm text-[#94A3B8]">Not a security certification or universal coverage promise. Runtime evidence, source context and human-reviewed fixes.</p>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest text-[#94A3B8]">
          <a href="#networks" className="hover:text-[#38BDF8]">Networks</a>
          <a href="#coverage" className="hover:text-[#38BDF8]">Coverage</a>
          <a href="#demo" className="hover:text-[#38BDF8]">Demo</a>
        </div>
      </div>
    </footer>
  );
}