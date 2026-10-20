import React from "react";
import IntegrationOrbit from "@/components/hackwatch/IntegrationOrbit";

export default function Networks() {
  return (
    <section id="networks" className="relative z-10 px-10 pt-[96px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-blue-600">01</span>
          <h2 className="text-3xl font-semibold tracking-[-0.01em] text-slate-900 md:text-[38px]">Every network plugs in.</h2>
        </div>
        <p className="mt-5 max-w-[620px] text-[15px] leading-[1.7] text-slate-500">The investigation engine is portable. Collection and enforcement adapters decide real coverage on each platform, and we label exactly where each one stands.</p>
        <IntegrationOrbit />

      </div>
    </section>
  );
}