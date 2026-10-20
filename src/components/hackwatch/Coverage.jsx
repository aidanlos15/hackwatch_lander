import React from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  ["Which requests can HackWatch see?", "Native Linux / Nginx supports configured proxy and log coverage with bounded body parsing for GET and POST requests. The serverless pilot captures selected fields in instrumented handlers."],
  ["Can HackWatch block attacks immediately?", "On native Linux / Nginx, Protect mode can block using local rules. Immediate blocking for the serverless pilot is on the roadmap."],
  ["How does HackWatch find the source code?", "Native Linux / Nginx investigations use an assigned repository and deployment attribution. The serverless pilot uses an exact checkout pinned to a deployment."],
  ["What is the status of the dashboard and pull-request workflow?", "The native Linux / Nginx dashboard and PR path have been exercised in controlled demos. For the serverless pilot, the backend is reusable, but live proof is still pending."],
  ["Does it fix production automatically?", "No. Proposals and GitHub actions are review and permission gated."],
  ["Does it need AI to detect attacks?", "No. Local detectors and source analysis run without external AI."],
  ["Does a repeated attack burn model calls?", "No. Durable identity and cooldowns keep one vulnerability to one analysis."],
];

export default function Coverage() {
  return (
    <section id="coverage" className="relative z-10 px-10 pt-0">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-blue-600">04</span>
          <h2 className="text-3xl font-semibold tracking-[-0.01em] text-slate-900 md:text-[38px]">Frequently asked questions.</h2>
        </div>
        <div className="mt-10 overflow-hidden rounded-[24px] border border-border bg-card px-6 shadow-sm md:px-8">
          {faqs.map(([q, a]) => (
            <details key={q} className="group border-b border-border last:border-b-0">
              <summary className="hw-focus flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-base font-semibold text-card-foreground [&::-webkit-details-marker]:hidden">
                {q}
                <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" />
              </summary>
              <p className="max-w-[850px] pb-6 pr-8 text-[15px] leading-[1.8] text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}