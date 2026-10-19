import React from "react";
import { Server, Zap, Cloud, Network, Cpu } from "lucide-react";

const glass = "bg-white/[0.05] border border-white/[0.1] rounded-[24px] shadow-[0_10px_36px_rgba(0,0,0,0.3)] backdrop-blur-[16px] transition hover:shadow-[0_10px_40px_rgba(79,163,232,0.22)] hover:border-[#4FA3E8]/[0.35]";

const nets = [
  { name: "Linux / Nginx hosts", status: "Established", Icon: Server, body: "Native agent beside your app. Observe, shadow, then protect at the Nginx boundary. Exercised end to end in controlled Laravel demos." },
  { name: "Serverless & edge", status: "Pilot", Icon: Zap, body: "A Next.js SDK for Vercel sends signed observations to a persistent worker. Observe-only today; live acceptance in progress." },
  { name: "Cloud workloads", status: "Adapter-based", Icon: Cloud, body: "Same investigation engine, with collection adapters for the logs and entry points your cloud already exposes." },
  { name: "Enterprise networks", status: "Adapter-based", Icon: Network, body: "Organisation-scoped roles, audit log and per-agent credentials for teams spread across many applications." },
  { name: "IoT & custom stacks", status: "Roadmap", Icon: Cpu, body: "A stable observation model means new collectors can feed the same source tracing and review flow." },
];

const dot = {
  Established: "bg-[#4FA3E8] shadow-[0_0_8px_#4FA3E8]",
  Pilot: "bg-[#6E7CE8]",
  "Adapter-based": "bg-[#94A3B8]",
  Roadmap: "bg-[#475569]",
};

export default function Networks() {
  return (
    <section id="networks" className="relative z-10 px-10 pt-[96px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-[#4FA3E8]">01</span>
          <h2 className="text-3xl font-semibold tracking-[-0.01em] text-white md:text-[38px]">One core. Every network plugs in.</h2>
        </div>
        <p className="mt-5 max-w-[620px] text-[15px] leading-[1.7] text-[#94A3B8]">The investigation engine is portable. Collection and enforcement adapters decide real coverage on each platform, and we label exactly where each one stands.</p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {nets.map(({ name, status, Icon, body }) => (
            <div key={name} className={`${glass} flex flex-col p-7`}>
              <div className="mb-[18px] flex h-[42px] w-[42px] items-center justify-center rounded-[12px] border border-white/[0.12] bg-[linear-gradient(135deg,rgba(79,163,232,0.2),rgba(110,124,232,0.2))]">
                <Icon className="h-[22px] w-[22px] text-[#4FA3E8]" strokeWidth={1.6} />
              </div>
              <h3 className="mb-2.5 text-[19px] font-semibold text-white">{name}</h3>
              <p className="text-[15px] leading-[1.7] text-[#94A3B8]">{body}</p>
              <div className="mt-auto pt-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.06] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#E2E8F0]">
                  <span className={`h-[7px] w-[7px] rounded-full ${dot[status]}`} />
                  {status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}