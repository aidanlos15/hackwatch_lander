import React from "react";
import { Image } from "@/components/ui/image";

const specs = [
  ["Traffic ≠ spend", "10,000 identical confirmed inputs produced one analysis and one primary model call in recorded regression tests."],
  ["Local first", "Detection, source tracing and protect-mode decisions never wait on AI or the dashboard."],
  ["Human gated", "Proposals become GitHub PRs only after a permitted person approves. Your CI/CD ships them."],
];

export default function Forensic() {
  return (
    <section className="relative border-y border-white/10">
      <div className="grid md:grid-cols-2">
        <div className="relative h-[50vh] md:sticky md:top-0 md:h-screen">
          <Image src="https://media.base44.com/images/public/6ad1475af0db89ea8a403727/9c06db3c7_generated_4efc6720.png" alt="Macro fiber-optic light trails" className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
          <p className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-widest text-[#38BDF8]">fig. 03 — signal under inspection</p>
        </div>
        <div className="divide-y divide-white/10">
          {specs.map(([t, d]) => (
            <div key={t} className="flex min-h-[70vh] flex-col justify-center overflow-hidden px-8 py-16">
              <h3 className="whitespace-nowrap text-6xl font-bold tracking-tighter text-[#F8FAFC] md:text-8xl">{t}</h3>
              <p className="mt-8 max-w-md text-lg text-[#94A3B8]">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}