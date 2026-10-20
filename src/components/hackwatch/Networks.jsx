import React from "react";
import IntegrationOrbit from "@/components/hackwatch/IntegrationOrbit";

const coverage = [
  { name: "Cloud workloads", status: "Adapter-based", body: "Collection adapters use the logs and entry points your cloud already exposes." },
  { name: "Enterprise networks", status: "Adapter-based", body: "Organisation-scoped roles, audit log and per-agent credentials across applications." },
  { name: "IoT & custom stacks", status: "Roadmap", body: "New collectors can feed the same source tracing and review flow as coverage expands." },
];

export default function Networks() {
  return (
    <section id="networks" className="relative z-10 px-10 pt-[96px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-blue-600">01</span>
          <h2 className="text-3xl font-semibold tracking-[-0.01em] text-slate-900 md:text-[38px]">One core. Every network plugs in.</h2>
        </div>
        <p className="mt-5 max-w-[620px] text-[15px] leading-[1.7] text-slate-500">The investigation engine is portable. Collection and enforcement adapters decide real coverage on each platform, and we label exactly where each one stands.</p>
        <IntegrationOrbit />
        <div className="mt-7 grid gap-6 md:grid-cols-3">
          {coverage.map(({ name, status, body }) => (
            <div key={name} className="border-t border-border pt-5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{status}</p>
              <h3 className="mt-2 font-semibold text-foreground">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}