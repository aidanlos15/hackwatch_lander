import React from "react";
import { motion } from "framer-motion";

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
    <section id="lifecycle" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#38BDF8]">02 / The forensic core</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[#F8FAFC] md:text-6xl">Find the code, not just the URL.</h2>
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {steps.map(([t, d], i) => (
            <motion.div key={t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 2) * 0.1 }} className="flex gap-6 border border-white/10 bg-[#0F172A]/60 p-6">
              <span className="font-mono text-3xl text-[#38BDF8]/60">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl font-semibold text-[#F8FAFC]">{t}</h3>
                <p className="mt-1 text-[#94A3B8]">{d}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 border-l-2 border-[#F472B6] pl-4 text-[#94A3B8]">Static confirmation is supported evidence, not proof an exploit succeeded. "No finding" is not proof an application is secure.</p>
      </div>
    </section>
  );
}