import React from "react";

const examples = [
  { label: "Before", note: "User input goes straight into the database command.", code: 'const email = req.body.email;\n\nconst result = await db.query(\n  `SELECT id FROM users WHERE email = \'${email}\'`\n);' },
  { label: "After", note: "User input is passed separately, so it cannot change the command.", code: 'const email = req.body.email;\n\nconst result = await db.query(\n  "SELECT id FROM users WHERE email = $1",\n  [email]\n);' },
];

export default function CodeFixExample() {
  return (
    <div className="mt-10 rounded-3xl border border-border bg-card p-6 md:p-8" aria-labelledby="code-fix-heading">
      <h3 id="code-fix-heading" className="font-heading text-xl font-semibold text-foreground">What a fix can look like</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">This sample fixes a SQL injection risk, where someone could use a form field to change a database command.</p>
      <div className="mt-6 grid min-w-0 gap-6 md:grid-cols-2">
        {examples.map(({ label, note, code }) => (
          <div key={label} className="min-w-0">
            <h4 className="font-heading text-base font-semibold text-foreground">{label}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{note}</p>
            <div className="mt-4 overflow-hidden rounded-xl border border-code-border bg-code text-code-foreground">
              <div className="flex items-center gap-2 border-b border-code-border px-4 py-3">
                <span aria-hidden="true" className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-code-muted" /><span className="h-2 w-2 rounded-full bg-code-muted" /><span className="h-2 w-2 rounded-full bg-code-muted" /></span>
                <span className="ml-2 font-mono text-xs text-code-muted">users.js</span>
              </div>
              <pre className="overflow-x-auto py-4 text-xs leading-7" tabIndex={0} aria-label={`${label} sample code`}><code className="block min-w-max font-mono">{code.split("\n").map((line, index) => {
                const highlighted = label === "Before" ? index === 3 : index === 3 || index === 4;
                return <span key={index} className={`flex border-l-2 pr-4 ${highlighted ? label === "Before" ? "border-code-removed text-code-removed bg-code-removed/15" : "border-code-added text-code-added bg-code-added/15" : "border-transparent"}`}><span aria-hidden="true" className="w-10 shrink-0 select-none pr-3 text-right text-code-muted">{index + 1}</span><span className="whitespace-pre">{line || " "}</span></span>;
              })}</code></pre>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs text-muted-foreground">Illustrative example using Node.js and PostgreSQL, not a fix generated from your application.</p>
    </div>
  );
}