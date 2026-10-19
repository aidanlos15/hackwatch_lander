import React from "react";

const glass = "bg-white/[0.05] border border-white/[0.1] rounded-[24px] shadow-[0_10px_36px_rgba(0,0,0,0.3)] backdrop-blur-[16px] transition hover:shadow-[0_10px_40px_rgba(79,163,232,0.22)] hover:border-[#4FA3E8]/[0.35]";

const rows = [
  ["GET & POST visibility", "Configured proxy/log coverage, bounded body parsing", "Selected fields in instrumented handlers"],
  ["Immediate blocking", "Protect mode with local rules", "On the roadmap"],
  ["Source investigation", "Assigned repository + deployment attribution", "Exact checkout pinned to a deployment"],
  ["Dashboard & PR path", "Exercised in controlled demos", "Backend reusable; live proof pending"],
];

const faqs = [
  ["Does it fix production automatically?", "No. Proposals and GitHub actions are review and permission gated."],
  ["Does it need AI to detect attacks?", "No. Local detectors and source analysis run without external AI."],
  ["Does a repeated attack burn model calls?", "No. Durable identity and cooldowns keep one vulnerability to one analysis."],
];

export default function Coverage() {
  return (
    <section id="coverage" className="relative z-10 px-10 pt-0">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-[#4FA3E8]">04</span>
          <h2 className="text-3xl font-semibold tracking-[-0.01em] text-white md:text-[38px]">What's live, and what's next.</h2>
        </div>
        <div className={`${glass} mt-12 overflow-x-auto px-7 py-3`}>
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="font-mono">
                <th className="py-4 pr-4 text-[11px] font-normal uppercase tracking-[0.14em] text-[#94A3B8]">Capability</th>
                <th className="py-4 pr-4 text-[11px] font-normal uppercase tracking-[0.14em] text-[#94A3B8]">Native Linux / Nginx</th>
                <th className="py-4 text-[11px] font-normal uppercase tracking-[0.14em] text-[#94A3B8]">Serverless pilot</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([a, b, c]) => (
                <tr key={a} className="align-top">
                  <td className="border-t border-white/[0.08] py-5 pr-4 text-sm text-white">{a}</td>
                  <td className="border-t border-white/[0.08] py-5 pr-4 text-sm leading-[1.6] text-[#94A3B8]">{b}</td>
                  <td className="border-t border-white/[0.08] py-5 text-sm leading-[1.6] text-[#94A3B8]">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {faqs.map(([q, a]) => (
            <div key={q} className={`${glass} p-[26px]`}>
              <h3 className="mb-2 text-[15px] font-semibold text-white">{q}</h3>
              <p className="text-[15px] leading-[1.7] text-[#94A3B8]">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}