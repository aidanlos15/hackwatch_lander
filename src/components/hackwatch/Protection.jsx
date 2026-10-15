import React from "react";
import { Eye, Ghost, ShieldCheck } from "lucide-react";

const modes = [
  { icon: Eye, name: "Observe", blocks: "Never blocks", body: "Inspect supported evidence and investigate findings." },
  { icon: Ghost, name: "Shadow", blocks: "Never blocks", body: "Calculate policy decisions and record what would have been blocked." },
  { icon: ShieldCheck, name: "Protect", blocks: "Blocks when eligible", body: "Enforce explicit request contracts and managed high-confidence rules at the Nginx boundary." },
];

const roles = ["Owner", "Admin", "Security analyst", "Developer", "Viewer"];

export default function Protection() {
  return (
    <section id="protection" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#38BDF8]">04 / Runtime enforcement</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[#F8FAFC] md:text-6xl">Observe. Shadow. Then protect.</h2>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {modes.map((m, i) => (
            <div key={m.name} className={`border p-8 ${i === 2 ? "border-[#38BDF8]/60 bg-[#38BDF8]/5" : "border-white/10 bg-[#0F172A]/60"}`}>
              <m.icon className="h-8 w-8 text-[#38BDF8]" />
              <h3 className="mt-6 text-2xl font-semibold text-[#F8FAFC]">{m.name}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-[#F472B6]">{m.blocks}</p>
              <p className="mt-4 text-[#94A3B8]">{m.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 border border-[#F472B6]/30 bg-[#F472B6]/5 p-6 text-[#94A3B8]">
          <strong className="text-[#F8FAFC]">A deliberate trade-off.</strong> Local decision failures fail open to keep your app available. HackWatch is not a universal WAF or a guarantee that every attack is stopped.
        </div>
        <div className="mt-24 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold text-[#F8FAFC]">Least privilege, by design</h3>
            <p className="mt-4 text-[#94A3B8]">People and agents use separate identities. Agents enroll with expiring single-use tokens and signed requests. Raw request bodies are discarded by default and sensitive data is redacted before it is stored, sent or shown to a model.</p>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {roles.map((r) => (
              <span key={r} className="border border-white/15 px-4 py-2 font-mono text-xs uppercase tracking-widest text-[#F8FAFC]">{r}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}