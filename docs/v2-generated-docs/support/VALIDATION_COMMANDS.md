# Validation Commands

## Standard Repository Commands

| Command | Purpose | Writes or side effects | When required |
|---|---|---|---|
| `npm run typecheck` | Run strict TypeScript checks | Reads/generated Next types; TypeScript may update incremental metadata | After TypeScript, route, metadata, or config changes |
| `npm run lint` | Run Next Core Web Vitals and TypeScript ESLint rules | Read-only normally | After application or config changes |
| `npm run test` | Run the Vitest unit/component suite | May create transient caches | After behavior, helper, component, route, metadata, or integration changes |
| `npm run next:build` | Build Next.js without the Cloudflare packaging layer | Writes `.next/` | Targeted Next.js production validation |
| `npm run build` | Build Next.js and package OpenNext for Cloudflare | Writes `.next/` and `.open-next/` | After page, route, metadata, server API, or deployment changes |
| `npm run cf:build` | Explicit OpenNext Cloudflare build alias | Writes `.next/` and `.open-next/` | Deployment-focused validation |
| `npx wrangler deploy --dry-run` | Validate packaged Worker configuration without publishing | Reads `.open-next/`; may write Wrangler diagnostics | After a successful Cloudflare build or Wrangler change |
| `npm run dev` | Start Next.js on `0.0.0.0:3000` | Starts a persistent development server and writes `.next/` | Interactive browser development |
| `npm run start` | Start a completed Next.js production build on port 3000 | Starts a persistent server | Local Next-only production smoke testing |
| `npm run preview` | Rebuild and preview the OpenNext Worker | Writes build output and starts a persistent server | Cloudflare-runtime browser verification |
| `npm run cf:deploy` | Publish an existing/current OpenNext application through its deploy workflow | Mutates the configured Cloudflare Worker/domain | Only with explicit deploy authorization and authentication |
| `npm run deploy` | Build and publish the Worker | Mutates build output and Cloudflare production state | Only with explicit deploy authorization and authentication |
| `npm run sync:agents` | Regenerate `AGENTS.md` from its source guides | Overwrites `AGENTS.md` | After editing `AGENTS.base-react.md` or `AGENTS.repo-one-call-hvac.md` |
| `git diff --check` | Detect whitespace errors in current changes | Read-only | Before completing every handoff |

## Installation

- Run `nvm use` to select the Node 22 line and verify Node 22.9 or newer.
- Use npm 11.11.1 as declared by `packageManager`.
- Use `npm ci` for a deterministic clean install from `package-lock.json`.
- Use `npm install` only when intentionally changing dependencies or updating the lockfile.
- Stop `npm run dev` before build/preview commands because they reuse `.next/`; restart development afterward.

## Current Test Coverage Shape

`npm run test` currently discovers 23 files covering 58 tests across page metadata and preview controls, SERP-ready answer structure, robots/sitemap contracts, organization/service-area structured data, primary-navigation anchors, typed page journeys, related-page rendering, navigation effects, quote validation/form behavior, inquiry API and Resend helpers, Google reviews, location data, service-guide and content-depth semantics, company-fact and planning-reference contracts, cross-page search journeys, progressive-enhancement-safe section reveals, and hero-carousel behavior/loading priority. No repository Playwright/E2E configuration, accessibility suite, coverage script, or docs-lint command was found.

## Scope-Based Minimums

- Documentation-only handoff: source cross-checks plus `git diff --check`; skip app tests/build when no app or generator code changed and record the skip.
- Component/helper behavior: targeted Vitest file while iterating, then `npm run typecheck`, `npm run lint`, and `npm run test`.
- Page/route/metadata/API change: typecheck, lint, tests, `npm run build`, and relevant browser/direct-route checks.
- Wrangler/OpenNext change: build, `npx wrangler deploy --dry-run`, and authorized preview/live checks.
- Deployment: never infer authorization from a validation request; publishing requires an explicit user request.

## Secret Handling

Wrangler authentication may use an approved login session or a deployment secret such as `CLOUDFLARE_API_TOKEN`. Never commit deployment credentials, print secret values, or expose them with `NEXT_PUBLIC_*`.
