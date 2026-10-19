import React from "react";

const glass = "bg-white border border-slate-200 rounded-[24px] shadow-[0_10px_36px_rgba(15,23,42,0.08)] backdrop-blur-[16px] transition hover:shadow-[0_14px_44px_rgba(37,99,235,0.15)] hover:border-blue-300";

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
          <span className="font-mono text-[13px] text-blue-600">04</span>
          <h2 className="text-3xl font-semibold tracking-[-0.01em] text-slate-900 md:text-[38px]">What's live, and what's next.</h2>
        </div>
        <div className={`${glass} mt-12 overflow-x-auto px-7 py-3`}>
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="font-mono">
                <th className="py-4 pr-4 text-[11px] font-normal uppercase tracking-[0.14em] text-slate-500">Capability</th>
                <th className="py-4 pr-4 text-[11px] font-normal uppercase tracking-[0.14em] text-slate-500">Native Linux / Nginx</th>
                <th className="py-4 text-[11px] font-normal uppercase tracking-[0.14em] text-slate-500">Serverless pilot</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([a, b, c]) => (
                <tr key={a} className="align-top">
                  <td className="border-t border-slate-200 py-5 pr-4 text-sm text-slate-900">{a}</td>
                  <td className="border-t border-slate-200 py-5 pr-4 text-sm leading-[1.6] text-slate-500">{b}</td>
                  <td className="border-t border-slate-200 py-5 text-sm leading-[1.6] text-slate-500">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {faqs.map(([q, a]) => (
            <div key={q} className={`${glass} p-[26px]`}>
              <h3 className="mb-2 text-[15px] font-semibold text-slate-900">{q}</h3>
              <p className="text-[15px] leading-[1.7] text-slate-500">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}