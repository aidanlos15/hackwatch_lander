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

  const input = "block w-full rounded-[14px] border border-slate-200 bg-slate-50 px-[18px] py-4 font-mono text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:shadow-[0_0_18px_rgba(59,130,246,0.25)]";

  return (
    <section id="demo" className="relative z-10 px-10 pt-[96px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-blue-600">05</span>
          <h2 className="text-3xl font-semibold tracking-[-0.01em] text-slate-900 md:text-[38px]">Book a demo.</h2>
        </div>
        {done ? (
          <p className="mx-auto mt-7 max-w-[760px] px-12 font-mono text-sm text-blue-600">&gt; Request received. We'll be in touch shortly.</p>
        ) : (
          <form onSubmit={submit} className="mx-auto mt-12 max-w-[760px] rounded-[24px] border border-slate-200 bg-white p-12 shadow-[0_10px_36px_rgba(15,23,42,0.08)] backdrop-blur-[16px]">
            <input required className={`${input} mb-5`} placeholder="> your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required type="email" className={`${input} mb-5`} placeholder="> work email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <button disabled={busy} className="hw-focus cursor-pointer rounded-[14px] bg-gradient-to-br from-blue-500 to-indigo-500 px-8 py-4 font-mono text-[12px] uppercase tracking-[0.16em] text-white transition-shadow hover:shadow-[0_0_28px_rgba(59,130,246,0.55)] active:opacity-85 disabled:opacity-50">
              {busy ? "Authorizing..." : "Authorize demo →"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}