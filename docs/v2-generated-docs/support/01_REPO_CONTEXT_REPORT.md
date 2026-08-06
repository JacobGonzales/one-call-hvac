# Repository Context Report

## Current State Summary

`one-call-hvac` is an npm-managed Vite 6 static SPA using React 19, strict TypeScript, route-level CSS, lazy route chunks, and a small browser-history router. Application content is stored in TS/TSX. Production output is `dist/`. The repository documents a required SPA host fallback but does not identify or configure a deployment provider.

The application reads no environment variables and has no server boundary. Its active external dependencies are Formspree, Google Fonts, public phone/email handlers, and an external footer-credit link. It has seven declared public pathnames plus branded fallback behavior. Metadata is limited to one static description and client-updated route titles; no sitemap, robots, canonical, schema, redirect, or explicit noindex system was found.

## Scope And Sources Inspected

- Repository instructions and README
- `package.json`, `package-lock.json`, `.gitignore`
- Vite, TypeScript, and ESLint configuration
- `src/App.tsx`, site constants, navigation/link helpers, route effects
- All route pages and placeholder/not-found behavior
- Form source, CSS external URLs, public assets
- `scripts/sync-agents.mjs`
- Repository-owned environment, deployment, SEO-file, test-file, and external-integration searches
- Current V2 ledger and shared execution contract

## Context Documents Generated

- `ENVIRONMENT_VARIABLES.md`
- `ROUTE_INVENTORY.md`
- `DEPENDENCY_INVENTORY.md`
- `INTEGRATIONS_INVENTORY.md`
- `VALIDATION_COMMANDS.md`
- this detailed report
- `01_REPO_CONTEXT_IMPLEMENTATION_SUMMARY.md`
- `01_REPO_CONTEXT_HUMAN_TODO.md`

## Findings And Decisions

### Environment and deployment

No application environment contract exists. There are no `.env` files, env reads, or checked-in deployment bindings. The deployment target is therefore unknown. Installed OpenNext/Cloudflare packages do not prove Cloudflare is the active target because no matching config or script exists.

### Routes and search controls

Known routes are explicit, static, and exact-match. Placeholder routes are public at runtime but have no explicit indexing decision. Unknown paths render branded not-found content, while HTTP status depends on the host. No route contract test reconciles constants, resolver branches, navigation, titles, documentation, or future SEO files.

### Dependencies

React, React DOM, and Motion are source-referenced runtime dependencies. Vite/TypeScript/ESLint packages support the active toolchain. The larger Next/OpenNext, Tailwind, MUI, Radix, date, and test stacks are installed compatibility tooling but are not referenced by current app source or scripts. No dependency cleanup was performed or authorized.

### Integrations

Formspree is the only data-submission integration. It is a direct browser POST with no repository-controlled backend. There is no analytics, CMS/database, auth, booking, payment, monitoring, or app-owned API integration.

### Generator decision

A repo-context generator was not added. With seven static routes and no env/deployment schema, explicit Markdown inventories are simpler and easier to audit. Reconsider automation if route declarations grow, dynamic routes appear, or repeated drift makes manual reconciliation unreliable.

## Hidden Assumptions And Edge Cases

- Direct routes work only if the eventual host implements the documented SPA fallback.
- Unknown routes may be soft 404s when the host returns `index.html` with HTTP 200.
- Exact path comparisons make trailing-slash and case variants fall through to not found.
- Placeholder routes may be indexed because no noindex policy exists.
- Formspree account ownership, recipients, delivery, spam controls, and response UX are external and unverified.
- Node/npm versions are unpinned.
- Git branch, commit, and dirty-state evidence is unavailable because `.git` metadata is absent.
- Generated docs become stale when routes, env usage, integrations, dependencies, or deployment change.

## Validation Evidence

- Required and optional context documents were generated from repository evidence.
- Environment searches found no app-owned env reads or `.env` files.
- Route searches found no dynamic/API/private routes, redirects, sitemap, robots, canonical, schema, or noindex implementation.
- Dependency imports were reconciled against `package.json` categories.
- No repository test files/config/scripts were found.
- No Markdown lint/docs script exists.
- `git diff --check` is unavailable because this workspace is not a Git worktree.
- No application tests were run because no application or generator code changed.

## Risks And Follow-Ups

Human-owned deployment, external account, and indexing decisions are isolated in `01_REPO_CONTEXT_HUMAN_TODO.md`. Generic downstream handoffs should read all five context inventories before making repository-specific assumptions.
