# One Call HVAC: App Setup And Dependencies

## Purpose

This is the repository-specific setup reference for `one-call-hvac`. It records the source-backed install, development, validation, build, and deployment baseline that later V2 handoffs should use. It is documentation, not runtime content and not proof that an external environment is configured.

## Stack Summary

| Area | Baseline |
|---|---|
| Framework | Next.js 16.3.0 App Router |
| UI runtime | React 19, React DOM 19, strict TypeScript |
| Styling | Route-owned CSS, Google Fonts, MUI/Emotion for the quote form |
| Interaction | Motion with reduced-motion handling |
| Routing/metadata | `src/app/`, Next metadata routes, shared route constants and metadata helper |
| Tests | Vitest, jsdom, Testing Library; 11 files and 21 tests |
| Package manager | npm 11.11.1 with `package-lock.json` lockfile version 3 |
| Supported Node | Node.js 22.9.0 or newer; `.nvmrc` selects the Node 22 release line |
| Production packaging | OpenNext Cloudflare 1.19.11 |
| Hosting | Node-compatible Cloudflare Worker through Wrangler 4.115.0 |
| Canonical domain | `https://utahonecall.com` |

## Prerequisites

- Git
- Node.js `>=22.9.0`
- npm `11.11.1`
- Network access to the npm registry for a cold install
- A local `.env.local` only when exercising Resend-backed inquiry delivery
- Cloudflare/Resend account access only for authorized deployment or live email verification

The Node minimum is the intersection of current tooling requirements: Next.js requires Node 20.9 or newer, Wrangler 4.115.0 requires Node 22 or newer, and npm 11.11.1 requires Node 22.9 or newer on the selected Node 22 line.

## Fresh Clone Setup

```bash
nvm use
npm ci
cp .env.example .env.local
npm run dev
```

Edit `.env.local` before testing inquiry delivery. Do not overwrite an existing configured `.env.local`, and never commit it.

The development server listens on `http://localhost:3000` through `0.0.0.0:3000`.

## Environment Variable Names

### Required Secret

- `RESEND_API_KEY`

### Required Server Configuration

- `RESEND_FROM_EMAIL`
- `RESEND_TO_EMAIL`

All three are required for successful inquiry email delivery. The API returns a phone fallback when the combined configuration is unavailable.

### Recommended Public Variables

None. The application does not read `NEXT_PUBLIC_*` variables.

### Optional Application Variables

None found.

### Deployment-Only Authentication

- `CLOUDFLARE_API_TOKEN` may be used by non-interactive Wrangler workflows when an approved Cloudflare session/connection is unavailable.

Cloudflare bindings `ASSETS` and `WORKER_SELF_REFERENCE` are declared in `wrangler.jsonc`; they are not application environment-variable reads.

## Commands

| Command | Purpose | Important behavior |
|---|---|---|
| `npm ci` | Deterministic install from the committed lockfile | Replaces `node_modules`; use for fresh/CI installs |
| `npm install` | Intentionally change dependencies and the lockfile | Do not use as the default clean-clone command |
| `npm run dev` | Start Next development on port 3000 | Writes `.next/dev` and stays running |
| `npm run typecheck` | Strict TypeScript validation | No application output |
| `npm run lint` | Next Core Web Vitals and TypeScript lint | No application output normally |
| `npm run test` | Run the complete Vitest suite | Currently 11 files / 21 tests |
| `npm run next:build` | Create the Next-only production build | Writes `.next/` |
| `npm run build` | Build Next and package the OpenNext Worker | Writes `.next/` and `.open-next/` |
| `npm run cf:build` | Explicit alias for the OpenNext Cloudflare build | Same output class as `npm run build` |
| `npm run start` | Serve a completed Next production build on port 3000 | Requires a valid `.next/` build |
| `npm run preview` | Rebuild and preview the Cloudflare Worker locally | Writes build output and starts a server |
| `npm run cf:deploy` | Run the OpenNext Cloudflare deploy workflow | Mutates external Cloudflare state; explicit authorization required |
| `npm run deploy` | Build and deploy | Mutates build output and external Cloudflare state; explicit authorization required |
| `npm run sync:agents` | Regenerate `AGENTS.md` from source guides | Overwrites `AGENTS.md` |

### Next Development/Build Safety

Stop `npm run dev` before running `npm run next:build`, `npm run build`, `npm run cf:build`, or `npm run preview`. Development and production commands share `.next/`; running them concurrently can invalidate the active dev server cache and produce misleading route errors. Restart development after the build finishes.

## Direct Runtime Dependencies

| Dependency | Declared range/version | Role |
|---|---|---|
| `next` | `16.3.0` | Framework, App Router, metadata, image and link primitives |
| `react`, `react-dom` | `^19.0.0` | Component runtime |
| `motion` | `^12.38.0` | Carousels, reveals, disclosure animation, reduced motion |
| `@mui/material`, `@mui/icons-material` | `^7.3.9` | Quote form fields, feedback, checkbox, and icons |
| `@emotion/react`, `@emotion/styled` | `^11.14.x` | MUI styling engine |
| `@next/third-parties` | `16.3.0` | Installed Next-aligned integration package; no current source import |
| MUI X, Radix, and `dayjs` packages | declared in `package.json` | Installed compatibility packages; no current application imports found |

## Direct Development Dependencies

| Dependency group | Role |
|---|---|
| `@opennextjs/cloudflare`, `wrangler` | Cloudflare Worker packaging, preview, and deployment |
| `typescript`, React/Node types | Strict type checking and framework types |
| `eslint`, `eslint-config-next`, `typescript-eslint` | Linting |
| `vitest`, `jsdom`, Testing Library, coverage provider | Unit/component testing and optional coverage support |
| `@playwright/test` | Installed browser-test tooling; no repository Playwright config/spec suite currently exists |
| Tailwind/PostCSS packages | Installed compatibility/build tooling; route CSS is the active styling source |
| React Refresh/globals packages | Installed compatibility tooling; not referenced by current flat ESLint config |

Framework-coupled Next packages are intentionally aligned at 16.3.0. Installed-but-unused packages were not removed because repository evidence does not establish whether they are accidental or reserved for planned work.

## Package Overrides

| Package | Override | Reason/status |
|---|---|---|
| `esbuild` | `0.28.1` | Aligned with current Wrangler toolchain |
| `postcss` | `^8.5.23` | Patched baseline after the prior 8.5.15 override was reported vulnerable |
| `undici` | `^7.24.0` | Compatibility/security override retained |
| `ws` | `8.21.0` | Compatibility/security override retained |

Do not remove overrides without a dedicated dependency check and full validation.

The validated lockfile currently resolves PostCSS 8.5.25, Sharp 0.35.3, and top-level brace-expansion 5.0.9 alongside Next 16.3.0.

## Important Configuration Files

| File | Ownership |
|---|---|
| `package.json` | Scripts, direct dependencies, npm pin, Node engine, overrides |
| `package-lock.json` | Deterministic dependency graph |
| `.nvmrc` | Recommended Node 22 line for local development |
| `.env.example` | Server environment contract without secret values |
| `next.config.ts` | Next image and response-header behavior |
| `open-next.config.ts` | OpenNext build command and Cloudflare adapter config |
| `wrangler.jsonc` | Worker entrypoint, assets, compatibility flags, vars, binding, custom domain |
| `tsconfig.json` | Strict TypeScript, bundler resolution, `@/` alias |
| `eslint.config.js` | Next Core Web Vitals/TypeScript flat config and generated/reference ignores |
| `vitest.config.ts` | Vitest `@/` path alias |
| route CSS files | Active visual styling and Google Font imports |
| `AGENTS.md` and its source guides | Repository working and validation rules |

## Deployment Baseline

1. Ensure the local/CI runtime satisfies Node `>=22.9.0` and npm 11.11.1.
2. Install with `npm ci`.
3. Configure `RESEND_API_KEY` as an encrypted Cloudflare secret; sender and recipient vars live in `wrangler.jsonc`.
4. Run `npm run build`.
5. Optionally run `npx wrangler deploy --dry-run` for deployment-shape validation.
6. Publish only with explicit authorization through `npm run deploy`, `npm run cf:deploy`, or the connected Cloudflare build workflow.
7. Verify direct routes, 404, robots, sitemap, and one authorized inquiry after deployment.

## Validation Checklist

- [ ] `npm ci` succeeds from the committed lockfile
- [ ] `npm audit` reports no known vulnerabilities when registry access is available
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run test` passes
- [ ] `npm run build` completes and creates `.open-next/worker.js`
- [ ] `/robots.txt` and `/sitemap.xml` are present in the build
- [ ] `git diff --check` passes
- [ ] Live deployment checks are performed only after authorization

## Risks And Refresh Triggers

- Cloudflare's build environment must honor the declared Node/npm baseline.
- Running dev and build concurrently can corrupt only the active local cache; stop the dev server first.
- A clean audit is time-sensitive and must be rerun after dependency or advisory changes.
- Installed-but-unused compatibility dependencies add maintenance surface; remove them only after intent is confirmed.
- Clean installation currently emits upstream deprecation warnings for transitive `whatwg-encoding`, `node-domexception`, and older nested `glob` releases even though npm reports zero known vulnerabilities.
- Resend source/mocked tests do not prove live domain or email delivery.
- Refresh this file after scripts, direct dependencies, runtime engines, package manager, framework, test tooling, bindings, env reads, or deployment provider changes.

No setup generator script was added. The repository is small enough that source-backed manual refresh is currently simpler than maintaining another generator.
