import React from "react";

const rows = [
  ["GET & POST visibility", "Configured proxy/log coverage, bounded body parsing", "Selected fields in instrumented handlers"],
  ["Immediate blocking", "Protect mode with local rules", "On the roadmap"],
  ["Source investigation", "Assigned repository + deployment attribution", "Exact checkout pinned to a deployment"],
  ["Dashboard & PR path", "Exercised in controlled demos", "Backend reusable; live proof pending"],
];

export default function Coverage() {
  return (
    <section id="coverage" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#38BDF8]">05 / Honest coverage</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[#F8FAFC] md:text-6xl">What's live, and what's next.</h2>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="font-mono text-xs uppercase tracking-widest text-[#38BDF8]">
                <th className="py-4 pr-6">Capability</th><th className="py-4 pr-6">Native Linux / Nginx</th><th className="py-4">Serverless pilot</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([a, b, c]) => (
                <tr key={a} className="border-t border-white/10 align-top">
                  <td className="py-5 pr-6 font-semibold text-[#F8FAFC]">{a}</td>
                  <td className="py-5 pr-6 text-[#94A3B8]">{b}</td>
                  <td className="py-5 text-[#94A3B8]">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            ["Does it fix production automatically?", "No. Proposals and GitHub actions are review and permission gated."],
            ["Does it need AI to detect attacks?", "No. Local detectors and source analysis run without external AI."],
            ["Does a repeated attack burn model calls?", "No. Durable identity and cooldowns keep one vulnerability to one analysis."],
          ].map(([q, a]) => (
            <div key={q} className="border border-white/10 bg-[#0F172A]/60 p-6">
              <h3 className="font-semibold text-[#F8FAFC]">{q}</h3>
              <p className="mt-2 text-[#94A3B8]">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}