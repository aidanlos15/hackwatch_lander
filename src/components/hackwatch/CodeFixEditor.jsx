import React from "react";

export default function CodeFixEditor({ example, filename }) {
  const { label, note, code, highlights } = example;
  return (
    <div className="min-w-0">
      <h5 className="font-heading text-base font-semibold text-foreground">{label}</h5>
      <p className="mt-2 min-h-10 text-sm leading-relaxed text-muted-foreground">{note}</p>
      <div className="mt-4 overflow-hidden rounded-xl border border-code-border bg-code text-code-foreground">
        <div className="flex items-center gap-2 border-b border-code-border px-4 py-3">
          <span aria-hidden="true" className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-code-muted" /><span className="h-2 w-2 rounded-full bg-code-muted" /><span className="h-2 w-2 rounded-full bg-code-muted" /></span>
          <span className="ml-2 font-mono text-xs text-code-muted">{filename}</span>
        </div>
        <pre className="min-h-52 overflow-x-auto py-4 text-xs leading-7" tabIndex={0} aria-label={`${label} sample code`}><code className="block min-w-max font-mono">{code.split("\n").map((line, index) => (
          <span key={index} className={`flex border-l-2 pr-4 ${highlights.includes(index) ? label === "Before" ? "border-code-removed text-code-removed bg-code-removed/15" : "border-code-added text-code-added bg-code-added/15" : "border-transparent"}`}><span aria-hidden="true" className="w-10 shrink-0 select-none pr-3 text-right text-code-muted">{index + 1}</span><span className="whitespace-pre">{line || " "}</span></span>
        ))}</code></pre>
      </div>
    </div>
  );
}