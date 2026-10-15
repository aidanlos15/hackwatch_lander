import React from "react";

const modes = [
  { name: "Observe", blocks: "Never blocks", body: "Inspect supported evidence and investigate findings." },
  { name: "Shadow", blocks: "Never blocks", body: "Calculate policy decisions and record what would have been blocked." },
  { name: "Protect", blocks: "Blocks when eligible", body: "Enforce explicit request contracts and managed high-confidence rules at the Nginx boundary." },
];

const roles = ["Owner", "Admin", "Security analyst", "Developer", "Viewer"];

export default function Protection() {
  return (
    <section id="protection" className="border-t border-white/[0.06] px-8 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[11px] text-neutral-600">03</span>
          <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">Observe. Shadow. Then protect.</h2>
        </div>
        <div className="mt-16 border-y border-white/[0.06]">
          {modes.map((m) => (
            <div key={m.name} className="flex items-start justify-between gap-8 border-b border-white/[0.06] py-6 last:border-0">
              <div>
                <h3 className="text-lg text-white">{m.name}</h3>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-neutral-500">{m.body}</p>
              </div>
              <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-widest text-neutral-400">{m.blocks}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 border-l border-white/20 pl-4 text-sm leading-relaxed text-neutral-500">
          <span className="text-neutral-300">A deliberate trade-off.</span> Local decision failures fail open to keep your app available. HackWatch is not a universal WAF or a guarantee that every attack is stopped.
        </p>
        <div className="mt-24 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-medium tracking-tight text-white">Least privilege, by design</h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              People and agents use separate identities. Agents enroll with expiring single-use tokens and signed requests. Raw request bodies are discarded by default and sensitive data is redacted before it is stored, sent or shown to a model.
            </p>
          </div>
          <div className="flex flex-wrap content-start gap-2">
            {roles.map((r) => (
              <span key={r} className="border border-white/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-neutral-400">{r}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}