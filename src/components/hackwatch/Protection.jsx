import React from "react";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";

const glass = "bg-white/[0.05] border border-white/[0.1] rounded-[24px] shadow-[0_10px_36px_rgba(0,0,0,0.3)] backdrop-blur-[16px] transition hover:shadow-[0_10px_40px_rgba(79,163,232,0.22)] hover:border-[#4FA3E8]/[0.35]";

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
          <span className="font-mono text-[13px] text-[#4FA3E8]">03</span>
          <h2 className="text-3xl font-semibold tracking-[-0.01em] text-white md:text-[38px]">Observe. Shadow. Then protect.</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {modes.map(({ Icon, name, body, bl }) => (
            <div key={name} className={`${glass} p-7`}>
              <div className="mb-[18px] flex h-[42px] w-[42px] items-center justify-center rounded-[12px] border border-white/[0.12] bg-[linear-gradient(135deg,rgba(79,163,232,0.2),rgba(110,124,232,0.2))]">
                <Icon className="h-[22px] w-[22px] text-[#4FA3E8]" strokeWidth={1.6} />
              </div>
              <h3 className="mb-2.5 text-[20px] font-semibold text-white">{name}</h3>
              <p className="text-[15px] leading-[1.7] text-[#94A3B8]">{body}</p>
              <span className="mt-[18px] inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-[#4FA3E8]">{bl}</span>
            </div>
          ))}
        </div>
        <p className="mt-7 rounded-[16px] border-l-2 border-[#4FA3E8] bg-white/[0.04] px-6 py-[18px] text-[14px] leading-[1.7] text-[#94A3B8]">
          <span className="font-semibold text-[#E2E8F0]">A deliberate trade-off.</span> Local decision failures fail open to keep your app available. HackWatch is not a universal WAF or a guarantee that every attack is stopped.
        </p>
        <div className="mt-14 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-3.5 text-[26px] font-semibold text-white">Least privilege, by design</h3>
            <p className="text-[15px] leading-[1.7] text-[#94A3B8]">People and agents use separate identities. Agents enroll with expiring single-use tokens and signed requests. Raw request bodies are discarded by default and sensitive data is redacted before it is stored, sent or shown to a model.</p>
          </div>
          <div className="flex flex-wrap content-start gap-2.5 font-mono">
            {roles.map((r) => (
              <span key={r} className="hw-focus cursor-pointer rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-2.5 text-[11px] uppercase tracking-[0.12em] text-[#E2E8F0] transition-shadow hover:shadow-[0_0_16px_rgba(110,124,232,0.5)]">{r}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}