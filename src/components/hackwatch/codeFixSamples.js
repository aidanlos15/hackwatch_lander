const codeFixSamples = [
  {
    title: "SQL injection", filename: "users.js",
    description: "Stops someone from using a form field to change a database command.",
    context: "Node.js and PostgreSQL",
    examples: [
      { label: "Before", note: "User input goes straight into the database command.", highlights: [3], code: 'const email = req.body.email;\n\nconst result = await db.query(\n  `SELECT id FROM users WHERE email = \'${email}\'`\n);' },
      { label: "After", note: "User input is passed separately, so it cannot change the command.", highlights: [3, 4], code: 'const email = req.body.email;\n\nconst result = await db.query(\n  "SELECT id FROM users WHERE email = $1",\n  [email]\n);' },
    ],
  },
  {
    title: "Cross-site scripting (XSS)", filename: "profile.js",
    description: "Stops a profile name from being treated as HTML that could run unwanted scripts.",
    context: "browser JavaScript",
    examples: [
      { label: "Before", note: "The browser treats the supplied name as HTML.", highlights: [3], code: 'const name = profile.displayName;\nconst heading = document.querySelector("h1");\n\nheading.innerHTML = name;' },
      { label: "After", note: "The browser displays the name as plain text instead.", highlights: [3], code: 'const name = profile.displayName;\nconst heading = document.querySelector("h1");\n\nheading.textContent = name;' },
    ],
  },
  {
    title: "Command injection", filename: "message.js",
    description: "Stops someone from turning a message into an extra server command.",
    context: "Node.js on Linux",
    examples: [
      { label: "Before", note: "The message is inserted into a command interpreted by a shell.", highlights: [3], code: 'import { exec } from "node:child_process";\nconst message = req.body.message;\n\nexec(`printf \'%s\' "${message}"`);' },
      { label: "After", note: "A fixed program receives the message as data, without a shell.", highlights: [0, 3, 4, 5], code: 'import { execFile } from "node:child_process";\nconst message = req.body.message;\n\nexecFile("/usr/bin/printf", [\n  "%s", message\n]);' },
    ],
  },
];

export default codeFixSamples;