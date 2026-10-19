import React from "react";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";

const glass = "bg-white border border-slate-200 rounded-[24px] shadow-[0_10px_36px_rgba(15,23,42,0.08)] backdrop-blur-[16px] transition hover:shadow-[0_14px_44px_rgba(37,99,235,0.15)] hover:border-blue-300";

const modes = [
  { Icon: Eye, name: "Observe", body: "Inspect supported evidence and investigate findings.", bl: "Never blocks" },
  { Icon: EyeOff, name: "Shadow", body: "Calculate policy decisions and record what would have been blocked.", bl: "Never blocks" },
  { Icon: ShieldCheck, name: "Protect", body: "Enforce explicit request contracts and managed high-confidence rules at the Nginx boundary.", bl: "Blocks when eligible" },
];

const roles = ["Owner", "Admin", "Security analyst", "Developer", "Viewer"];

export default function Protection() {
  return (
    <section id="protection" className="relative z-10 px-10 pt-[96px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-blue-600">03</span>
          <h2 className="text-3xl font-semibold tracking-[-0.01em] text-slate-900 md:text-[38px]">Observe. Shadow. Then protect.</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {modes.map(({ Icon, name, body, bl }) => (
            <div key={name} className={`${glass} p-7`}>
              <div className="mb-[18px] flex h-[42px] w-[42px] items-center justify-center rounded-[12px] border border-slate-200 bg-gradient-to-br from-blue-500/10 to-indigo-500/10">
                <Icon className="h-[22px] w-[22px] text-blue-600" strokeWidth={1.6} />
              </div>
              <h3 className="mb-2.5 text-[20px] font-semibold text-slate-900">{name}</h3>
              <p className="text-[15px] leading-[1.7] text-slate-500">{body}</p>
              <span className="mt-[18px] inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-blue-600">{bl}</span>
            </div>
          ))}
        </div>
        <p className="mt-7 rounded-[16px] border-l-2 border-blue-500 bg-slate-50 px-6 py-[18px] text-[14px] leading-[1.7] text-slate-500">
          <span className="font-semibold text-slate-800">A deliberate trade-off.</span> Local decision failures fail open to keep your app available. HackWatch is not a universal WAF or a guarantee that every attack is stopped.
        </p>
        <div className="mt-14 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-3.5 text-[26px] font-semibold text-slate-900">Least privilege, by design</h3>
            <p className="text-[15px] leading-[1.7] text-slate-500">People and agents use separate identities. Agents enroll with expiring single-use tokens and signed requests. Raw request bodies are discarded by default and sensitive data is redacted before it is stored, sent or shown to a model.</p>
          </div>
          <div className="flex flex-wrap content-start gap-2.5 font-mono">
            {roles.map((r) => (
              <span key={r} className="hw-focus cursor-pointer rounded-full border border-slate-200 bg-white px-4 py-2.5 text-[11px] uppercase tracking-[0.12em] text-slate-700 shadow-sm transition-shadow hover:shadow-[0_0_16px_rgba(99,102,241,0.4)]">{r}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}