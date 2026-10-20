import React from "react";

const glass = "bg-white border border-slate-200 rounded-[24px] shadow-[0_10px_36px_rgba(15,23,42,0.08)] backdrop-blur-[16px] transition hover:shadow-[0_14px_44px_rgba(37,99,235,0.15)] hover:border-blue-300";

const steps = [
  ["01", "Spot suspicious activity", "Watch for signs of an attack and group related activity together."],
  ["02", "Find the weak spot", "Trace the suspicious activity to the code that may be at risk."],
  ["03", "Review a possible fix", "When enabled, HackWatch checks a suggested fix. You review and approve it before it’s applied."],
];

export default function Lifecycle() {
  return (
    <section id="lifecycle" className="relative z-10 px-10 pt-0">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-blue-600">02</span>
          <h2 className="text-3xl font-semibold tracking-[-0.01em] text-slate-900 md:text-[38px]">Find the code, not just the URL.</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map(([num, t, d]) => (
            <div key={num} className={`${glass} flex gap-[18px] p-6`}>
              <span className="pt-[3px] font-mono text-[13px] text-indigo-500">{num}</span>
              <div>
                <h3 className="mb-1.5 text-[17px] font-semibold text-slate-900">{t}</h3>
                <p className="text-[15px] leading-[1.7] text-slate-500">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}