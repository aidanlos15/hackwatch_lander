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
            <pre className="mt-4 overflow-x-auto rounded-xl border border-border bg-muted p-4 text-xs leading-6 text-foreground" tabIndex={0} aria-label={`${label} sample code`}><code className="font-mono">{code}</code></pre>
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs text-muted-foreground">Illustrative example using Node.js and PostgreSQL, not a fix generated from your application.</p>
    </div>
  );
}