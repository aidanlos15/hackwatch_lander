import React from "react";

const glass = "bg-white border border-slate-200 rounded-[24px] shadow-[0_10px_36px_rgba(15,23,42,0.08)] backdrop-blur-[16px] transition hover:shadow-[0_14px_44px_rgba(37,99,235,0.15)] hover:border-blue-300";

const steps = [
  ["01", "Detect the attack", "Monitor supported application traffic, flag suspicious inputs and group related attempts into one investigation."],
  ["02", "Trace the vulnerable code", "Connect the request to candidate handlers in your repository, then trace input toward a sensitive operation."],
  ["03", "Validate a fix. Keep control.", "When policy and budget allow, analyse and validate a proposed fix. Only valid proposals reach review, and people approve the PR."],
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
        <p className="mt-7 rounded-[16px] border-l-2 border-blue-500 bg-slate-50 px-6 py-[18px] text-[14px] leading-[1.7] text-slate-500">Static confirmation is supported evidence, not proof an exploit succeeded. "No finding" is not proof an application is secure.</p>
      </div>
    </section>
  );
}