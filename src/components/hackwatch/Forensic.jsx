import React from "react";
import { Image } from "@/components/ui/image";
import { Activity, Lock, ShieldCheck } from "lucide-react";

const glass = "bg-white border border-slate-200 rounded-[24px] shadow-[0_10px_36px_rgba(15,23,42,0.08)] backdrop-blur-[16px] transition hover:shadow-[0_14px_44px_rgba(37,99,235,0.15)] hover:border-blue-300";

const specs = [
  { Icon: Activity, t: "Traffic ≠ spend", d: "10,000 identical confirmed inputs produced one analysis and one primary model call in recorded regression tests." },
  { Icon: Lock, t: "Local first", d: "Detection, source tracing and protect-mode decisions never wait on AI or the dashboard." },
  { Icon: ShieldCheck, t: "Human gated", d: "Proposals become GitHub PRs only after a permitted person approves. Your CI/CD ships them." },
];

export default function Forensic() {
  return (
    <section className="hidden">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[24px] border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
            <Image src="https://media.base44.com/images/public/6ad1475af0db89ea8a403727/060ded319_generated_27a62d7e.jpg" alt="Fiber-optic light trails" fittingType="fill" className="block h-full min-h-[560px] w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,#0F172A_0%,rgba(15,23,42,0.35)_45%,rgba(15,23,42,0.05)_100%)]" />
            <p className="absolute bottom-6 left-7 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-300">fig. 03 — signal under inspection</p>
          </div>
          <div className="flex flex-col gap-6">
            {specs.map(({ Icon, t, d }) => (
              <div key={t} className={`${glass} flex-1 p-8`}>
                <div className="mb-[18px] flex h-[42px] w-[42px] items-center justify-center rounded-[12px] border border-slate-200 bg-gradient-to-br from-blue-500/10 to-indigo-500/10">
                  <Icon className="h-[22px] w-[22px] text-blue-600" strokeWidth={1.6} />
                </div>
                <h3 className="text-[28px] font-semibold tracking-[-0.01em] text-slate-900">{t}</h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-slate-500">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}