import React from "react";

const links = [
  ["Networks", "#networks"],
  ["Lifecycle", "#lifecycle"],
  ["Protection", "#protection"],
  ["Coverage", "#coverage"],
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#020617]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="text-xl font-bold tracking-tight text-[#F8FAFC]">
          Hack<span className="text-[#38BDF8]">Watch</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="font-mono text-xs uppercase tracking-[0.2em] text-[#94A3B8] transition-colors hover:text-[#38BDF8]">
              {l}
            </a>
          ))}
        </nav>
        <a href="#demo" className="border border-[#38BDF8]/60 px-4 py-2 font-mono text-xs uppercase tracking-widest text-[#38BDF8] transition-all hover:bg-[#38BDF8] hover:text-[#020617]">
          Book demo
        </a>
      </div>
    </header>
  );
}