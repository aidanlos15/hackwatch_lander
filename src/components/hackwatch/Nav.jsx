import React from "react";

const links = [
  ["Networks", "#networks"],
  ["Lifecycle", "#lifecycle"],
  ["Protection", "#protection"],
  ["Coverage", "#coverage"],
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-[#0A0A0B]/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-8">
        <a href="#top" className="text-sm font-medium tracking-tight text-white">
          HackWatch
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-white">
              {l}
            </a>
          ))}
        </nav>
        <a href="#demo" className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-300 border-b border-white/30 pb-0.5 transition-colors hover:text-white hover:border-white">
          Book demo
        </a>
      </div>
    </header>
  );
}