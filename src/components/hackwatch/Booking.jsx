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

  const input = "w-full border border-white/15 bg-[#020617] px-4 py-3 font-mono text-sm text-[#F8FAFC] outline-none focus:border-[#38BDF8]";

  return (
    <section id="demo" className="px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#38BDF8]">06 / Perimeter setup</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#F8FAFC] md:text-6xl">Book a demo.</h2>
        <div className="mt-10 border border-white/10 bg-[#0F172A] p-8">
          {done ? (
            <p className="font-mono text-[#38BDF8]">&gt; Request received. We'll be in touch shortly.</p>
          ) : (
            <form onSubmit={submit} className="space-y-6">
              <input required className={input} placeholder="> your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input required type="email" className={input} placeholder="> work email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <button disabled={busy} className="w-full bg-[#38BDF8] py-4 font-mono text-sm font-bold uppercase tracking-widest text-[#020617] transition-shadow hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] disabled:opacity-50">
                {busy ? "Authorizing..." : "Authorize demo"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}