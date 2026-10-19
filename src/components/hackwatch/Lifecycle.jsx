import React from "react";

const glass = "bg-white/[0.05] border border-white/[0.1] rounded-[24px] shadow-[0_10px_36px_rgba(0,0,0,0.3)] backdrop-blur-[16px] transition hover:shadow-[0_10px_40px_rgba(79,163,232,0.22)] hover:border-[#4FA3E8]/[0.35]";

const steps = [
  ["01", "Observe", "Read supported logs or a bounded HTTP observation, configured per application."],
  ["02", "Detect", "Deterministic rules flag suspicious inputs. A signature is a trigger, not proof."],
  ["03", "Correlate", "Group related requests and count attempts without a new investigation per payload."],
  ["04", "Resolve source", "Map method and route to candidate handlers in the assigned repository."],
  ["05", "Confirm flow", "Trace request-controlled input toward a sensitive sink."],
  ["06", "Gate AI", "Check vulnerability identity, cooldown, policy and daily budget."],
  ["07", "Analyse & validate", "Optional structured fix, locally validated and semantically reviewed."],
  ["08", "Publish & review", "A proposal appears only when a valid one exists. People approve the PR."],
];

export default function Lifecycle() {
  return (
    <section id="lifecycle" className="relative z-10 px-10 pt-0">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-[#4FA3E8]">02</span>
          <h2 className="text-3xl font-semibold tracking-[-0.01em] text-white md:text-[38px]">Find the code, not just the URL.</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map(([num, t, d]) => (
            <div key={num} className={`${glass} flex gap-[18px] p-6`}>
              <span className="pt-[3px] font-mono text-[13px] text-[#6E7CE8]">{num}</span>
              <div>
                <h3 className="mb-1.5 text-[17px] font-semibold text-white">{t}</h3>
                <p className="text-[15px] leading-[1.7] text-[#94A3B8]">{d}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-7 rounded-[16px] border-l-2 border-[#4FA3E8] bg-white/[0.04] px-6 py-[18px] text-[14px] leading-[1.7] text-[#94A3B8]">Static confirmation is supported evidence, not proof an exploit succeeded. "No finding" is not proof an application is secure.</p>
      </div>
    </section>
  );
}