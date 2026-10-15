import React, { useState } from "react";
import { base44 } from "@/api/base44Client";

export default function Booking() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    await base44.entities.DemoRequest.create(form);
    setBusy(false);
    setDone(true);
  };

  const input = "w-full border-b border-white/15 bg-transparent px-0 py-3 font-mono text-sm text-white placeholder-neutral-600 outline-none focus:border-white";

  return (
    <section id="demo" className="border-t border-white/[0.06] px-8 py-32">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[11px] text-neutral-600">05</span>
          <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">Book a demo.</h2>
        </div>
        <div className="mt-12">
          {done ? (
            <p className="font-mono text-sm text-neutral-300">&gt; Request received. We'll be in touch shortly.</p>
          ) : (
            <form onSubmit={submit} className="space-y-8">
              <input required className={input} placeholder="> your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input required type="email" className={input} placeholder="> work email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <button disabled={busy} className="bg-white px-8 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#0A0A0B] transition-opacity hover:opacity-80 disabled:opacity-50">
                {busy ? "Authorizing..." : "Authorize demo →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}