# App Setup And Dependencies Report

## Run Scope

- Canonical run: 03
- Suite step: support 02
- Phase: `implementation`
- Dependency: support 01 implemented
- Required rundown: delivered before writes
- External deployment: not performed

## Current State Summary

The repository is an npm/Next.js/OpenNext Cloudflare application with a valid lockfile, strict TypeScript, flat ESLint configuration, Vitest/Testing Library tests, route-owned CSS, MUI/Emotion form controls, and Motion interactions. The pre-run project could build successfully, but it did not declare a Node engine, package-manager version, or `.nvmrc` runtime line. Its fresh-clone README used `npm install`, omitted `npm run test` from the validation sequence, and did not warn that active Next development and production builds share `.next/`.

## Source Evidence

Inspected:

- `package.json` and `package-lock.json`
- installed package engine/peer metadata for Next, OpenNext, Wrangler, Vitest, and npm
- `.gitignore`, `.env.example`, README setup/deployment instructions
- `next.config.ts`, `open-next.config.ts`, `wrangler.jsonc`
- `tsconfig.json`, `eslint.config.js`, `vitest.config.ts`
- application import searches for direct dependencies
- support-01 environment, dependency, integration, route, and validation inventories
- npm audit results before and after the dependency repair

## Findings And Decisions

### 1. Runtime And Package Manager Were Unpinned

Wrangler 4.115.0 requires Node 22 or newer. npm 11.11.1 requires Node 22.9 or newer on Node 22, while Next requires Node 20.9 or newer. The effective repository baseline is therefore Node `>=22.9.0`. The implementation adds that engine, records npm 11.11.1, and adds `.nvmrc` with the Node 22 line.

### 2. Clean Installation Guidance Was Non-Deterministic

The repository has a committed npm lockfile, so a fresh clone and CI should use `npm ci`. `npm install` remains appropriate only when intentionally updating dependencies. README and the generated setup reference now make that distinction.

### 3. Development And Production Builds Share `.next/`

An active development process can become invalid if a production build rewrites `.next/`. Setup guidance now requires stopping `npm run dev` before build/preview commands and restarting afterward.

### 4. Validation Instructions Omitted Tests

The repository owns 11 Vitest files and 21 tests. The documented validation sequence now includes `npm run test` between lint and the OpenNext production build.

### 5. Security Audit Found A Vulnerable Framework Baseline

The first audit reported six vulnerable package entries, including high-severity advisories affecting Next 16.2.9, a vulnerable PostCSS override, Sharp, and transitive brace-expansion versions. The implementation:

- aligned `next`, `eslint-config-next`, and `@next/third-parties` at 16.3.0
- changed the PostCSS override from 8.5.15 to `^8.5.23`
- ran the non-forced npm audit repair for patched transitive versions
- retained React, OpenNext, Wrangler, public behavior, and deployment config

The post-repair install/audit reported zero vulnerabilities. A later audit query briefly failed when registry DNS was unavailable; the successful repair result and lockfile remain the recorded evidence, not a claim that advisories can never change.

### 6. Installed Compatibility Packages Need Intent Before Removal

MUI X, Radix, dayjs, Tailwind/PostCSS tooling, `@next/third-parties`, Playwright, and several ESLint compatibility packages have no current application/config imports. They were retained because source evidence cannot determine whether they are accidental or reserved for planned work. Removal would be a separate dependency-cleanup decision.

## Implementation

- Added Node/npm baseline metadata to `package.json` and synchronized `package-lock.json`.
- Added `.nvmrc` for the Node 22 release line.
- Updated README install, environment, validation, and Next cache-safety guidance.
- Updated the framework/security dependency baseline without a forced major upgrade.
- Added the canonical setup reference under `support/repo-context/`.
- Refreshed the support dependency and validation inventories.
- Did not add a generator script because the current setup surface is small and source-backed manual maintenance is clearer.

## Validation Evidence

- `npm ci --ignore-scripts`: passed; installed 893 packages from the lockfile and reported zero vulnerabilities.
- Security repair: `npm audit fix` completed without `--force`; subsequent successful package/install audit reported zero vulnerabilities.
- Resolved security-sensitive packages: PostCSS 8.5.25, Sharp 0.35.3, and top-level brace-expansion 5.0.9.
- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm run test`: passed, 11 files and 21 tests.
- `npm run build`: passed on Next 16.3.0; OpenNext created `.open-next/worker.js` and generated all 13 application/metadata routes.
- Required setup/report/TODO files: present and non-empty.
- `git diff --check`: passed.

The clean install emitted nonblocking upstream deprecation warnings for transitive `whatwg-encoding`, `node-domexception`, and older nested `glob` packages. They are not direct application dependencies and the successful audit reported no known vulnerabilities. A later standalone audit request encountered temporary registry DNS failure; no conclusion relies on that failed request.

No deployment, production inquiry, secret read, public content change, or visual change occurred.

## Supporting Artifact

- `docs/v2-generated-docs/support/repo-context/README_APP_SETUP_AND_DEPENDENCIES.md`
- `docs/v2-generated-docs/support/DEPENDENCY_INVENTORY.md`
- `docs/v2-generated-docs/support/VALIDATION_COMMANDS.md`
