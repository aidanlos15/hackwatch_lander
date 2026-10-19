import React from "react";

const links = [
  ["Networks", "#networks"],
  ["Lifecycle", "#lifecycle"],
  ["Protection", "#protection"],
  ["Coverage", "#coverage"],
];

export default function Nav() {
  return (
    <header className="hw-focus sticky top-6 z-50 mx-auto mt-6 flex max-w-[1100px] items-center justify-between rounded-[18px] border border-white/10 bg-white/5 px-7 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-md">
      <a href="#top" className="flex items-center gap-2.5 text-[18px] font-semibold text-white">
        <span className="h-3 w-3 rounded-full bg-[linear-gradient(135deg,#4FA3E8,#6E7CE8)] shadow-[0_0_14px_#4FA3E8]" />
        HackWatch
      </a>
      <nav className="hidden gap-[34px] md:flex">
        {links.map(([l, h]) => (
          <a key={h} href={h} className="hw-focus text-sm text-[#94A3B8] transition-colors hover:text-[#4FA3E8]">{l}</a>
        ))}
      </nav>
      <a href="#demo" className="hw-focus cursor-pointer rounded-[12px] border border-white/20 bg-[linear-gradient(135deg,rgba(79,163,232,0.25),rgba(110,124,232,0.25))] px-5 py-2.5 text-sm text-white transition-shadow hover:shadow-[0_0_22px_rgba(79,163,232,0.45)]">Book demo</a>
    </header>
  );
}