import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-8 py-12">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="text-sm font-medium text-white">HackWatch</span>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-neutral-500">
            Not a security certification or universal coverage promise. Runtime evidence, source context and human-reviewed fixes.
          </p>
        </div>
        <div className="flex gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">
          <a href="#networks" className="hover:text-white">Networks</a>
          <a href="#coverage" className="hover:text-white">Coverage</a>
          <a href="#demo" className="hover:text-white">Demo</a>
        </div>
      </div>
    </footer>
  );
}