import React from "react";

const steps = [
  ["Observe", "Read supported logs or a bounded HTTP observation, configured per application."],
  ["Detect", "Deterministic rules flag suspicious inputs. A signature is a trigger, not proof."],
  ["Correlate", "Group related requests and count attempts without a new investigation per payload."],
  ["Resolve source", "Map method and route to candidate handlers in the assigned repository."],
  ["Confirm flow", "Trace request-controlled input toward a sensitive sink."],
  ["Gate AI", "Check vulnerability identity, cooldown, policy and daily budget."],
  ["Analyse & validate", "Optional structured fix, locally validated and semantically reviewed."],
  ["Publish & review", "A proposal appears only when a valid one exists. People approve the PR."],
];

export default function Lifecycle() {
  return (
    <section id="lifecycle" className="border-t border-white/[0.06] px-8 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[11px] text-neutral-600">02</span>
          <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">Find the code, not just the URL.</h2>
        </div>
        <div className="mt-16 grid gap-x-12 md:grid-cols-2">
          {steps.map(([t, d], i) => (
            <div key={t} className="flex gap-6 border-t border-white/[0.06] py-6">
              <span className="font-mono text-xs text-neutral-600">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-base text-white">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-500">{d}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 border-l border-white/20 pl-4 text-sm leading-relaxed text-neutral-500">
          Static confirmation is supported evidence, not proof an exploit succeeded. "No finding" is not proof an application is secure.
        </p>
      </div>
    </section>
  );
}