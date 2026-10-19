import React from "react";
import { Image } from "@/components/ui/image";

const links = [
  ["Networks", "#networks"],
  ["Lifecycle", "#lifecycle"],
  ["Protection", "#protection"],
  ["Coverage", "#coverage"],
];

export default function Nav() {
  return (
    <header className="hw-focus sticky top-6 z-50 mx-auto mt-6 flex max-w-[1100px] items-center justify-between rounded-[18px] border border-slate-200 bg-white/80 px-7 py-3.5 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-md">
      <a href="#top" className="flex items-center">
        <Image src="https://media.base44.com/images/public/6ad1475af0db89ea8a403727/2b94932bb_hackwatch_logo_transparent.png" alt="HackWatch" fittingType="fit" className="h-9 w-auto" />
      </a>
      <nav className="hidden gap-[34px] md:flex">
        {links.map(([l, h]) => (
          <a key={h} href={h} className="hw-focus text-sm text-slate-500 transition-colors hover:text-blue-600">{l}</a>
        ))}
      </nav>
      <a href="#demo" className="hw-focus cursor-pointer rounded-[12px] bg-gradient-to-br from-blue-500 to-indigo-500 px-5 py-2.5 text-sm text-white transition-shadow hover:shadow-[0_0_22px_rgba(59,130,246,0.45)]">Book demo</a>
    </header>
  );
}