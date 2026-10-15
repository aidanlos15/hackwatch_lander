import React from "react";

const nets = [
  { name: "Linux / Nginx hosts", status: "Established", body: "Native agent beside your app. Observe, shadow, then protect at the Nginx boundary. Exercised end to end in controlled Laravel demos." },
  { name: "Serverless & edge", status: "Pilot", body: "A Next.js SDK for Vercel sends signed observations to a persistent worker. Observe-only today; live acceptance in progress." },
  { name: "Cloud workloads", status: "Adapter-based", body: "Same investigation engine, with collection adapters for the logs and entry points your cloud already exposes." },
  { name: "Enterprise networks", status: "Adapter-based", body: "Organisation-scoped roles, audit log and per-agent credentials for teams spread across many applications." },
  { name: "IoT & custom stacks", status: "Roadmap", body: "A stable observation model means new collectors can feed the same source tracing and review flow." },
];

const dot = { Established: "bg-white", Pilot: "bg-neutral-400", "Adapter-based": "bg-neutral-500", Roadmap: "bg-neutral-700" };

export default function Networks() {
  return (
    <section id="networks" className="border-t border-white/[0.06] px-8 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[11px] text-neutral-600">01</span>
          <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">One core. Every network plugs in.</h2>
        </div>
        <p className="ml-10 mt-6 max-w-xl text-sm leading-relaxed text-neutral-400">
          The investigation engine is portable. Collection and enforcement adapters decide real coverage on each platform, and we label exactly where each one stands.
        </p>
        <div className="mt-16 border-y border-white/[0.06]">
          {nets.map((n) => (
            <div key={n.name} className="flex items-start justify-between gap-8 border-b border-white/[0.06] py-6 last:border-0">
              <div>
                <h3 className="text-lg text-white">{n.name}</h3>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-neutral-500">{n.body}</p>
              </div>
              <span className="flex items-center gap-2 whitespace-nowrap font-mono text-[11px] uppercase tracking-widest text-neutral-400">
                <span className={`h-1.5 w-1.5 rounded-full ${dot[n.status]}`} />
                {n.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}