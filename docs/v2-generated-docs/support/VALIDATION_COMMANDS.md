# Validation Commands

## Standard Repository Commands

| Command | Purpose | Writes or side effects | When required |
|---|---|---|---|
| `npm run typecheck` | Strict TypeScript checks for `src/` and `vite.config.ts` | No JS output; may update TypeScript build-info files under `node_modules/.tmp/` | After source/config changes |
| `npm run lint` | ESLint for the repository | Read-only under normal operation | After source changes |
| `npm run build` | Typecheck and create the Vite production bundle | Writes `dist/` | After page, route, asset, metadata, or production behavior changes |
| `npm run dev` | Start Vite at `0.0.0.0:3000` | Starts a persistent local server | Interactive development/browser checks |
| `npm run preview` | Preview the production bundle at `0.0.0.0:3000` | Starts a persistent local server; requires a current build | Production-bundle browser verification |
| `npm run sync:agents` | Regenerate `AGENTS.md` from its two source guides | Overwrites generated `AGENTS.md` | After editing `AGENTS.base-react.md` or `AGENTS.repo-one-call-hvac.md` |

## Installation

- `npm install`: documented developer setup; may update the lockfile when dependency ranges resolve differently.
- `npm ci`: deterministic clean install supported by the existing lockfile, though not currently documented as the primary setup command.

Node and npm versions are not pinned, so installation reproducibility still depends on the operator's runtime.

## Test Coverage

No `test` script, repository test files, Vitest configuration, or Playwright configuration was found. Testing packages are installed but no runnable project test suite is currently defined.

Do not claim unit, integration, E2E, route, SEO, accessibility, or browser-test coverage from dependency presence alone.

## Browser And Route Checks

When navigation, routes, assets, metadata, fallback behavior, forms, or responsive CSS change:

1. Build the production bundle.
2. Run the production preview on port 3000.
3. Check every route listed in `ROUTE_INVENTORY.md`, including a direct visit and an unmatched pathname.
4. Check desktop and mobile navigation, hash anchors, hero carousel, FAQ, sticky CTAs, and form controls as relevant.
5. Verify the intended host returns appropriate behavior for direct routes and not-found paths.

External Formspree delivery should only be tested with authorization and a non-sensitive test submission.

## Documentation Validation

No Markdown linter or docs-validation script exists. Generated documentation should therefore be checked with targeted path, heading, source-reference, and cross-document consistency checks.

`git diff --check`, `git status`, and related repository-diff checks require valid Git metadata. This workspace currently has no `.git` directory, so those checks are unavailable rather than passed.
