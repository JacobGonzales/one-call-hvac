# App Setup And Dependencies Doc Handoff 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before writing generated context files.
- Create or refresh the ledger-assigned detailed report, implementation summary, and human TODO in addition to the setup artifact.
- Update this handoff's ledger row when work begins and ends.

Objective:
Codex should generate or refresh a repo-specific app setup and dependency document before applying generic implementation, SEO, analytics, or search handoffs. The goal is to give portable handoffs accurate local facts about the stack, package manager, commands, dependency baseline, deployment target, and validation expectations.

Why:
Generic handoffs should not guess how a repo is installed, built, tested, or deployed. This support handoff creates the setup reference that later Codex runs can inspect first without making the generic `docs/2.0/` suite repo-specific.

Relevant context:
- Stack: Detect the target repo's framework, package manager, runtime, styling system, UI libraries, test stack, and deployment target before generating the doc.
- Key files:
  - `docs/2.0/support/02_APP_SETUP_AND_DEPENDENCIES_DOC_HANDOFF.md`
  - `package.json`
  - lockfiles such as `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, or equivalents
  - framework config files such as `next.config.ts`, `vite.config.ts`, `astro.config.*`, or equivalents
  - TypeScript, lint, test, and styling config files
  - deployment config such as `wrangler.toml`, `vercel.json`, Netlify config, Docker files, or equivalents
  - existing repo context docs when present
- Related systems:
  - repo context generator
  - dependency inventory
  - environment-variable inventory
  - validation commands
  - deployment and build handoffs

Scope:
- Only modify docs or lightweight generator scripts needed for repo-context output
- Do not change app behavior, dependencies, package versions, or scripts unless the user explicitly asks for implementation work after reviewing the generated doc
- Keep generic handoffs generic
- Put repo-specific setup facts in repo-specific docs
- Prefer source-backed summaries over manual guesses

Primary output:
- `docs/v2-generated-docs/support/repo-context/README_APP_SETUP_AND_DEPENDENCIES.md`
- `docs/v2-generated-docs/support/02_APP_SETUP_REPORT.md`
- `docs/v2-generated-docs/support/02_APP_SETUP_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/support/02_APP_SETUP_HUMAN_TODO.md`

Optional outputs when useful:
- `docs/v2-generated-docs/support/DEPENDENCY_INVENTORY.md`
- `docs/v2-generated-docs/support/VALIDATION_COMMANDS.md`

Constraints:
- Keep implementation simple and beginner-readable
- Prefer clear naming over clever abstractions
- Match the current stack and project conventions
- Avoid unnecessary dependencies
- Do not print or commit secret values
- Do not infer production settings that are not present in code, config, supplied docs, or verified deployment files
- Distinguish install/build/test commands from optional scripts
- Distinguish runtime dependencies from dev-only tooling
- Do not treat the generated doc as proof that production is correctly configured

Required process:
1. Inspect the current implementation first.
2. Identify package manager, framework, deployment target, scripts, Node/runtime requirements, and validation commands.
3. Build the setup/dependency summary from:
- `package.json`
- lockfile type and package-manager hints
- framework config
- TypeScript, lint, test, and styling config
- deployment config
- env docs or env helpers
- existing setup docs
4. Before editing, identify:
- hidden assumptions
- likely edge cases
- risks of stale generated docs
- whether a generated script should be added later
5. Write or refresh `docs/v2-generated-docs/support/repo-context/README_APP_SETUP_AND_DEPENDENCIES.md`.
6. Include:
- stack summary
- prerequisites
- install command
- local development command
- build command
- start/preview command when relevant
- test and lint commands
- deployment command or deployment notes when present
- direct runtime dependencies
- direct dev dependencies
- important config files and what each controls
- required, optional, and deployment-only env groups by name only
- validation checklist
- follow-up risks or owner TODOs
7. Run lightweight validation:
- `git diff --check`
- targeted docs lint or formatting command if the repo has one
- targeted unit tests only when app code or generator code changed
8. Report files changed, results, and follow-up risks.

Acceptance criteria:
- Generic handoffs can remain portable.
- The generated setup doc gives enough local context for future Codex runs to install, build, test, and understand the repo's dependency baseline.
- The generated doc is source-backed and does not expose secrets.
- The doc identifies stale, ambiguous, or externally verified areas instead of hiding them.
- This support handoff can be copied to another repo.

Return format:
- Current state summary
- Setup doc generated
- Source files inspected
- Validation results
- Risks / follow-ups

## New Support File


Recommended workflow:
1. Run `01_REPO_CONTEXT_DOC_GENERATOR_HANDOFF.md`.
2. Run this support handoff to create the repo-specific setup/dependency doc.
3. Use `docs/v2-generated-docs/support/repo-context/README_APP_SETUP_AND_DEPENDENCIES.md` as local input for the generic v2 suite.

## Quick Prompt Version

```text
Generate or refresh docs/v2-generated-docs/support/repo-context/README_APP_SETUP_AND_DEPENDENCIES.md for this repo. Inspect package.json, the lockfile, framework config, TypeScript/lint/test/styling config, deployment config, env docs/helpers, and existing setup docs. Document the stack, prerequisites, package manager, install/dev/build/start/test/lint/deploy commands, direct runtime and dev dependencies, important config files, env variable groups by name only, validation checklist, and owner follow-ups. Keep generic docs in docs/2.0 portable, do not change app behavior or dependency versions, and run git diff --check.
```
