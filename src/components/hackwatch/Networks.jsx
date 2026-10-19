import React from "react";
import { Server, Zap, Cloud, Network, Cpu } from "lucide-react";

const glass = "bg-white border border-slate-200 rounded-[24px] shadow-[0_10px_36px_rgba(15,23,42,0.08)] backdrop-blur-[16px] transition hover:shadow-[0_14px_44px_rgba(37,99,235,0.15)] hover:border-blue-300";

const nets = [
  { name: "Linux / Nginx hosts", status: "Established", Icon: Server, body: "Native agent beside your app. Observe, shadow, then protect at the Nginx boundary. Exercised end to end in controlled Laravel demos." },
  { name: "Serverless & edge", status: "Pilot", Icon: Zap, body: "A Next.js SDK for Vercel sends signed observations to a persistent worker. Observe-only today; live acceptance in progress." },
  { name: "Cloud workloads", status: "Adapter-based", Icon: Cloud, body: "Same investigation engine, with collection adapters for the logs and entry points your cloud already exposes." },
  { name: "Enterprise networks", status: "Adapter-based", Icon: Network, body: "Organisation-scoped roles, audit log and per-agent credentials for teams spread across many applications." },
  { name: "IoT & custom stacks", status: "Roadmap", Icon: Cpu, body: "A stable observation model means new collectors can feed the same source tracing and review flow." },
];

const dot = {
  Established: "bg-blue-600 shadow-[0_0_8px_#3B82F6]",
  Pilot: "bg-indigo-500",
  "Adapter-based": "bg-slate-400",
  Roadmap: "bg-slate-300",
};

export default function Networks() {
  return (
    <section id="networks" className="relative z-10 px-10 pt-[96px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-blue-600">01</span>
          <h2 className="text-3xl font-semibold tracking-[-0.01em] text-slate-900 md:text-[38px]">One core. Every network plugs in.</h2>
        </div>
        <p className="mt-5 max-w-[620px] text-[15px] leading-[1.7] text-slate-500">The investigation engine is portable. Collection and enforcement adapters decide real coverage on each platform, and we label exactly where each one stands.</p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {nets.map(({ name, status, Icon, body }) => (
            <div key={name} className={`${glass} flex flex-col p-7`}>
              <div className="mb-[18px] flex h-[42px] w-[42px] items-center justify-center rounded-[12px] border border-slate-200 bg-gradient-to-br from-blue-500/10 to-indigo-500/10">
                <Icon className="h-[22px] w-[22px] text-blue-600" strokeWidth={1.6} />
              </div>
              <h3 className="mb-2.5 text-[19px] font-semibold text-slate-900">{name}</h3>
              <p className="text-[15px] leading-[1.7] text-slate-500">{body}</p>
              <div className="mt-auto pt-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-700">
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