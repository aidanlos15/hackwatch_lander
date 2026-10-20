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
        <p className="mt-5 max-w-[620px] text-[15px] leading-[1.7] text-slate-500">HackWatch connects to different platforms to help you investigate attacks. Available features vary by platform, and we show you what each one supports.</p>
        <IntegrationOrbit />

      </div>
    </section>
  );
}