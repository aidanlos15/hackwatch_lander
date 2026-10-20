import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CodeFixEditor from "@/components/hackwatch/CodeFixEditor";
import codeFixSamples from "@/components/hackwatch/codeFixSamples";

export default function CodeFixExample() {
  const [active, setActive] = React.useState(0);
  const sample = codeFixSamples[active];
  const move = (direction) => setActive((index) => (index + direction + codeFixSamples.length) % codeFixSamples.length);
  return (
    <div className="mt-10 rounded-3xl border border-border bg-card p-6 md:p-8" aria-labelledby="code-fix-heading">
      <h3 id="code-fix-heading" className="font-heading text-xl font-semibold text-foreground">What a fix can look like</h3>
      <div className="mt-5 flex items-center justify-between gap-4">
        <h4 className="font-heading text-lg font-semibold text-foreground" aria-live="polite" aria-atomic="true">{sample.title}</h4>
        <div className="flex shrink-0 items-center gap-3">
          <button type="button" onClick={() => move(-1)} aria-label="Previous attack example" className="hw-focus rounded-full border border-border bg-background p-2 text-foreground transition-colors hover:bg-muted"><ChevronLeft className="h-5 w-5" /></button>
          <span className="text-xs tabular-nums text-muted-foreground">{active + 1} / {codeFixSamples.length}</span>
          <button type="button" onClick={() => move(1)} aria-label="Next attack example" className="hw-focus rounded-full border border-border bg-background p-2 text-foreground transition-colors hover:bg-muted"><ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sample.description}</p>
      <div key={sample.title} className="mt-6 grid min-w-0 gap-6 md:grid-cols-2">
        {sample.examples.map((example) => <CodeFixEditor key={example.label} example={example} filename={sample.filename} />)}
      </div>
      <p className="mt-5 text-xs text-muted-foreground">Illustrative example using {sample.context}, not a fix generated from your application.</p>
    </div>
  );
}