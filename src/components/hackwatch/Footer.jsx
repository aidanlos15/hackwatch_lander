import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-slate-200 py-12">
      <div className="mx-auto flex max-w-[1100px] items-end justify-between px-10">
        <div>
          <span className="text-[16px] font-semibold text-slate-900">HackWatch</span>
          <p className="mt-3 max-w-[380px] text-xs leading-[1.7] text-slate-500">Not a security certification or universal coverage promise. Runtime evidence, source context and human-reviewed fixes.</p>
        </div>
        <nav className="flex gap-[30px] font-mono">
          <a href="#networks" className="hw-focus text-[11px] uppercase tracking-[0.16em] text-slate-500 transition-colors hover:text-blue-600">Networks</a>
          <a href="#coverage" className="hw-focus text-[11px] uppercase tracking-[0.16em] text-slate-500 transition-colors hover:text-blue-600">Coverage</a>
          <a href="#demo" className="hw-focus text-[11px] uppercase tracking-[0.16em] text-slate-500 transition-colors hover:text-blue-600">Demo</a>
        </nav>
      </div>
    </footer>
  );
}