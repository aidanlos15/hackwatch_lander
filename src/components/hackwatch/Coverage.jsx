import React from "react";

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
    <section id="coverage" className="border-t border-white/[0.06] px-8 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[11px] text-neutral-600">04</span>
          <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">What's live, and what's next.</h2>
        </div>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                <th className="py-4 pr-6 font-normal">Capability</th>
                <th className="py-4 pr-6 font-normal">Native Linux / Nginx</th>
                <th className="py-4 font-normal">Serverless pilot</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([a, b, c]) => (
                <tr key={a} className="border-t border-white/[0.06] align-top">
                  <td className="py-5 pr-6 text-sm text-white">{a}</td>
                  <td className="py-5 pr-6 text-sm text-neutral-400">{b}</td>
                  <td className="py-5 text-sm text-neutral-400">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-16 grid gap-px bg-white/[0.06] md:grid-cols-3">
          {faqs.map(([q, a]) => (
            <div key={q} className="bg-[#0A0A0B] p-8">
              <h3 className="text-sm text-white">{q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}