import { readFile, writeFile } from "node:fs/promises";

const sourceFiles = [
  "AGENTS.base-react.md",
  "AGENTS.repo-one-call-hvac.md",
];

const sections = await Promise.all(
  sourceFiles.map((file) => readFile(new URL(`../${file}`, import.meta.url), "utf8")),
);

const header = `# AGENTS.md

## File Role

- This is the effective merged guide for this repository.
- It is generated from \`${sourceFiles[0]}\` and \`${sourceFiles[1]}\`.
- Run \`npm run sync:agents\` after changing either source file.
- Update shared guidance in the base file and local conventions in the repo addendum.
- Avoid editing this file manually.
`;

const output = [header, ...sections].join("\n\n").trimEnd() + "\n";

await writeFile(new URL("../AGENTS.md", import.meta.url), output);
