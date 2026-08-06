# Dependency Inventory

## Package Manager And Runtime Baseline

- Package manager: npm, evidenced by `package-lock.json` and npm scripts.
- Package name/version: `one-call-hvac@0.1.0`.
- Module system: ESM (`"type": "module"`).
- Node/npm versions: not pinned; no `engines`, `.nvmrc`, `.node-version`, Volta, or equivalent version file was found.
- Active framework: Vite 6 with React 19 and strict TypeScript.
- Production output: static files in `dist/`.

## Source-Referenced Runtime Dependencies

| Package | Declared version | Evidence | Current role |
|---|---|---|---|
| `react` | `^19.0.0` | Imports throughout `src/` | Component runtime, state, effects, lazy loading, external-store subscription |
| `react-dom` | `^19.0.0` | `src/main.tsx` | Browser root rendering |
| `motion` | `^12.38.0` | `motion/react` imports | Drawers, section reveals, carousel, FAQ, marquee, reduced-motion behavior |

## Source-Referenced Build And Lint Dependencies

| Package | Current role | Evidence |
|---|---|---|
| `vite`, `@vitejs/plugin-react` | Dev server and production bundling | `vite.config.ts`, package scripts |
| `typescript`, `@types/node`, `@types/react`, `@types/react-dom` | Strict no-emit type checking | TypeScript configs and source types |
| `eslint`, `typescript-eslint`, `globals`, `eslint-plugin-react-refresh` | Flat-config linting | `eslint.config.js`, `npm run lint` |

## Installed Testing Stack Without Repository Tests

The following are declared but no repository test files, test configs, or test scripts were found:

- `vitest`
- `@vitest/coverage-v8`
- `jsdom`
- `@testing-library/react`
- `@testing-library/jest-dom`
- `@testing-library/user-event`
- `@playwright/test`

Their presence indicates available compatibility/tooling, not verified test coverage.

## Declared Compatibility Stack Not Referenced By Current Source Or Scripts

The following direct dependencies are installed but were not found in current application imports, configuration, or package scripts:

- Next.js/OpenNext: `next`, `@next/third-parties`, `@opennextjs/cloudflare`
- Tailwind: `tailwindcss`, `@tailwindcss/postcss`
- MUI/Emotion: `@mui/material`, `@mui/icons-material`, `@mui/x-date-pickers`, `@mui/x-tree-view`, `@emotion/react`, `@emotion/styled`
- Radix: `@radix-ui/react-dropdown-menu`, `@radix-ui/react-select`
- Date utility: `dayjs`

This inventory does not authorize dependency removal. Later cleanup must verify intended future use, lockfile effects, and build compatibility separately.

## Overrides

`package.json` pins compatibility/security overrides for `esbuild`, `postcss`, `undici`, and `ws`. `vite.config.ts` explicitly targets modern ESM because of the pinned esbuild version. Preserve these settings unless a dedicated dependency change proves they are no longer needed.

## Refresh Conditions

Refresh after dependency installation/removal, framework migration, new test configuration, deployment tooling, Node version pinning, or changes to package scripts/overrides.
