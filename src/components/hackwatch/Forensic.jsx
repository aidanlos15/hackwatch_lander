import React from "react";
import { Image } from "@/components/ui/image";

const specs = [
  ["Traffic ≠ spend", "10,000 identical confirmed inputs produced one analysis and one primary model call in recorded regression tests."],
  ["Local first", "Detection, source tracing and protect-mode decisions never wait on AI or the dashboard."],
  ["Human gated", "Proposals become GitHub PRs only after a permitted person approves. Your CI/CD ships them."],
];

export default function Forensic() {
  return (
    <section className="border-t border-white/[0.06]">
      <div className="grid md:grid-cols-2">
        <div className="relative h-[50vh] md:sticky md:top-0 md:h-screen">
          <Image src="https://media.base44.com/images/public/6ad1475af0db89ea8a403727/9c06db3c7_generated_4efc6720.png" alt="Macro fiber-optic light trails" className="h-full w-full opacity-60" fittingType="fit" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/40 to-transparent" />
          <p className="absolute bottom-8 left-8 font-mono text-[11px] uppercase tracking-widest text-neutral-400">fig. 03 — signal under inspection</p>
        </div>
        <div className="divide-y divide-white/[0.06]">
          {specs.map(([t, d]) => (
            <div key={t} className="px-8 py-20 md:px-12">
              <h3 className="text-3xl font-medium tracking-tight text-white md:text-4xl">{t}</h3>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-400">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}