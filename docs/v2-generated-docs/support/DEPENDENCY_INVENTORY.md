# Dependency Inventory

## Package Manager And Runtime Baseline

- Package manager: npm, locked by `package-lock.json`.
- Package: `one-call-hvac@0.1.0`, private ESM package.
- Node: `>=22.9.0` in `package.json`; `.nvmrc` selects the Node 22 release line.
- Package manager: npm 11.11.1 declared by `packageManager`.
- Framework: Next.js 16.3.0 App Router with React 19 and strict TypeScript.
- Local build output: `.next/`.
- Cloudflare package output: `.open-next/`.
- Deployment tooling: `@opennextjs/cloudflare@1.19.11` and `wrangler@4.115.0`.

## Active Runtime Dependencies

| Package group | Current source-backed role |
|---|---|
| `next`, `react`, `react-dom` | App Router, server/client rendering, metadata, images, links, navigation, and component runtime |
| `motion` | Hero and reviews carousels, reveals, FAQ/disclosure transitions, and reduced-motion-aware interaction |
| `@mui/material`, `@mui/icons-material` | Quote-form text fields, selects, checkbox, alerts, and icons |
| `@emotion/react`, `@emotion/styled` | MUI styling engine/runtime support |

## Active Build, Quality, And Deployment Dependencies

| Package group | Current role |
|---|---|
| `typescript`, `@types/node`, `@types/react`, `@types/react-dom` | Strict no-emit type checking and Next production typing |
| `eslint`, `eslint-config-next`, `typescript-eslint` | Flat-config Next Core Web Vitals and TypeScript linting |
| `vitest`, `jsdom`, Testing Library packages | Unit/component tests for metadata, route effects, quote forms, inquiry delivery/API behavior, reviews, location data, and hero carousel |
| `@vitest/coverage-v8` | Installed coverage provider; no coverage command is currently declared |
| `@opennextjs/cloudflare`, `wrangler` | Cloudflare Worker build, preview, binding resolution, and deployment |

## Installed Without Current Application Imports

The following packages are present but were not found in current application/config imports:

- `@mui/x-date-pickers`, `@mui/x-tree-view`, and `dayjs`
- `@radix-ui/react-dropdown-menu` and `@radix-ui/react-select`
- `@next/third-parties`
- `tailwindcss` and `@tailwindcss/postcss`
- `@playwright/test` (installed, but no repository Playwright config/spec inventory was found)
- `eslint-plugin-react-refresh` and `globals` (installed compatibility dependencies, not referenced by the current ESLint config)

This inventory does not authorize removing packages. Dependency cleanup belongs in a separate reviewed task after confirming no planned handoff or reference package still needs them.

## Overrides

`package.json` pins:

- `esbuild` to `0.28.1`
- `postcss` to patched range `^8.5.23`
- `undici` to `^7.24.0`
- `ws` to `8.21.0`

Preserve overrides until a dedicated dependency audit records why each is safe to change or remove. The PostCSS override was raised during canonical run 03 after npm reported the prior 8.5.15 baseline as vulnerable.

## Security Baseline

Canonical run 03 aligned `next`, `eslint-config-next`, and `@next/third-parties` at 16.3.0 and applied a non-forced transitive audit repair. The validated graph resolves PostCSS 8.5.25, Sharp 0.35.3, and top-level brace-expansion 5.0.9. The successful post-repair clean install/audit reported zero vulnerabilities. Audit results are time-sensitive and require registry access; rerun them after dependency or advisory changes.

## Test Inventory

Eleven test files are currently present:

- inquiry API route
- free-quote validation/sanitization
- Resend email/config delivery
- metadata helper
- Google review data and carousel
- route effects
- free-quote form disclosure
- hero background carousel
- location data
- search metadata routes

The current package script is `vitest run`; no repository E2E or coverage script is declared.

## Maintenance Risks

- The external Cloudflare build image must honor the declared Node/npm baseline.
- Clean installs emit deprecation warnings from upstream transitive `whatwg-encoding`, `node-domexception`, and older nested `glob` packages; track them through normal dependency upgrades rather than overriding them blindly.
- Exact Next/OpenNext compatibility should be reviewed together during upgrades.
- Unused-package removal should update both `package.json` and `package-lock.json` and run the full validation set.
- Refresh this inventory after package, framework, test, or deployment changes.
