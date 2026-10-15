import React from "react";
import { Cloud, Server, Cpu, Building2, Zap } from "lucide-react";

const nets = [
  { icon: Server, name: "Linux / Nginx hosts", status: "Established", body: "Native Python agent beside your app. Observe, shadow, then protect at the Nginx boundary. Exercised end to end in controlled Laravel demos." },
  { icon: Zap, name: "Serverless & edge", status: "Pilot", body: "A Next.js SDK for Vercel sends signed observations to a persistent worker. Observe-only today; live acceptance in progress." },
  { icon: Cloud, name: "Cloud workloads", status: "Adapter-based", body: "Same investigation engine, with collection adapters for the logs and entry points your cloud already exposes." },
  { icon: Building2, name: "Enterprise networks", status: "Adapter-based", body: "Organisation-scoped roles, audit log and per-agent credentials for teams spread across many applications." },
  { icon: Cpu, name: "IoT & custom stacks", status: "Roadmap", body: "A stable observation model means new collectors can feed the same source tracing and review flow." },
];

const tone = { Established: "text-[#38BDF8] border-[#38BDF8]/40", Pilot: "text-[#F472B6] border-[#F472B6]/40", "Adapter-based": "text-[#F8FAFC] border-white/20", Roadmap: "text-[#94A3B8] border-white/10" };

export default function Networks() {
  return (
    <section id="networks" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#38BDF8]">01 / The threat matrix</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[#F8FAFC] md:text-6xl">One core. Every network plugs in.</h2>
        <p className="mt-6 max-w-2xl text-lg text-[#94A3B8]">The investigation engine is portable. Collection and enforcement adapters decide real coverage on each platform, and we label exactly where each one stands.</p>
        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {nets.map((n) => (
            <div key={n.name} className="group relative bg-[#0F172A] p-8 transition-colors hover:bg-[#13213f]">
              <span className="absolute left-0 top-0 h-px w-0 bg-[#38BDF8] transition-all duration-500 group-hover:w-full" />
              <div className="flex items-center justify-between">
                <n.icon className="h-7 w-7 text-[#38BDF8]" />
                <span className={`border px-2 py-1 font-mono text-[10px] uppercase tracking-widest ${tone[n.status]}`}>{n.status}</span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-[#F8FAFC]">{n.name}</h3>
              <p className="mt-3 leading-relaxed text-[#94A3B8]">{n.body}</p>
            </div>
          ))}
          <div className="flex items-center justify-center bg-[#020617] p-8 font-mono text-xs uppercase tracking-[0.3em] text-[#94A3B8]">
            <span className="text-[#38BDF8]">◉</span>&nbsp;HackWatch core
          </div>
        </div>
      </div>
    </section>
  );
}