import React from "react";
import { Image } from "@/components/ui/image";
import { Activity, Lock, ShieldCheck } from "lucide-react";

const glass = "bg-white/[0.05] border border-white/[0.1] rounded-[24px] shadow-[0_10px_36px_rgba(0,0,0,0.3)] backdrop-blur-[16px] transition hover:shadow-[0_10px_40px_rgba(79,163,232,0.22)] hover:border-[#4FA3E8]/[0.35]";

const specs = [
  { Icon: Activity, t: "Traffic ≠ spend", d: "10,000 identical confirmed inputs produced one analysis and one primary model call in recorded regression tests." },
  { Icon: Lock, t: "Local first", d: "Detection, source tracing and protect-mode decisions never wait on AI or the dashboard." },
  { Icon: ShieldCheck, t: "Human gated", d: "Proposals become GitHub PRs only after a permitted person approves. Your CI/CD ships them." },
];

export default function Forensic() {
  return (
    <section className="relative z-10 px-10 pt-[96px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[24px] border border-white/[0.12] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <Image src="https://media.base44.com/images/public/6ad1475af0db89ea8a403727/060ded319_generated_27a62d7e.jpg" alt="Fiber-optic light trails" fittingType="fill" className="block h-full min-h-[560px] w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,#0B1020_0%,rgba(11,16,32,0.5)_45%,rgba(11,16,32,0.1)_100%)]" />
            <p className="absolute bottom-6 left-7 font-mono text-[11px] uppercase tracking-[0.18em] text-[#94A3B8]">fig. 03 — signal under inspection</p>
          </div>
          <div className="flex flex-col gap-6">
            {specs.map(({ Icon, t, d }) => (
              <div key={t} className={`${glass} flex-1 p-8`}>
                <div className="mb-[18px] flex h-[42px] w-[42px] items-center justify-center rounded-[12px] border border-white/[0.12] bg-[linear-gradient(135deg,rgba(79,163,232,0.2),rgba(110,124,232,0.2))]">
                  <Icon className="h-[22px] w-[22px] text-[#4FA3E8]" strokeWidth={1.6} />
                </div>
                <h3 className="text-[28px] font-semibold tracking-[-0.01em] text-white">{t}</h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-[#94A3B8]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}