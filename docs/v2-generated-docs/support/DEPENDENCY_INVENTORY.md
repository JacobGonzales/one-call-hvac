# Dependency Inventory

## Package Manager And Runtime Baseline

- Package manager: npm (`package-lock.json`).
- Package: `one-call-hvac@0.1.0`, ESM.
- Node/npm versions: not pinned.
- Active framework: Next.js 16 App Router with React 19 and strict TypeScript.
- Production outputs: `.next/` and OpenNext package `.open-next/`.
- Deployment: `@opennextjs/cloudflare@1.19.11` and `wrangler@4.115.0`.

## Active Dependencies

| Package | Role |
|---|---|
| `next`, `react`, `react-dom` | Server/client framework, routing, metadata, and rendering |
| `motion` | Drawers, reveals, carousel, FAQ, marquee, and reduced-motion behavior |
| `typescript` and React/Node types | Strict no-emit checks and Next production type validation |
| `eslint`, `eslint-config-next`, `typescript-eslint` | Flat-config linting with Core Web Vitals |
| `@opennextjs/cloudflare`, `wrangler` | Cloudflare Worker packaging, preview, and deployment |
| `vitest`, `jsdom`, Testing Library | Focused metadata and route-effect tests |

Playwright and coverage tooling are installed but do not yet have repository-wide configured suites. Tailwind, MUI/Emotion, Radix, and `dayjs` are installed but not referenced by the current application source. This inventory does not authorize dependency removal.

## Overrides

`package.json` pins `esbuild`, `postcss`, `undici`, and `ws`. Preserve these unless a dedicated dependency change proves they are unnecessary.

Refresh after dependency changes, framework/deployment changes, new test configuration, or Node version pinning.
