# AGENTS.md

## File Role

- This is the effective merged guide for this repository.
- It is generated from `AGENTS.base-react.md` and `AGENTS.repo-one-call-hvac.md`.
- Run `npm run sync:agents` after changing either source file.
- Update shared guidance in the base file and local conventions in the repo addendum.
- Avoid editing this file manually.


# AGENTS.base-react.md

## Purpose

- Use this file to guide refactors and feature work in React repositories.
- Optimize for these priorities in order:

1. Simplicity
2. Performance
3. Beginner readability
4. Clean organization
5. Maintainability

## Working Style

- Review the existing code before editing and detect the best structure for the current stack.
- Match the repo's established patterns before introducing a new one.
- Refactor within the existing repository structure unless a change clearly improves clarity.
- Prefer clear, consolidated logic over scattered abstractions.
- Lean OOP only when it improves clarity. Do not add classes, interfaces, or abstraction layers just to appear architectural.
- Do not change unrelated behavior while refactoring.

## Before Coding

- Summarize the current structure.
- List the top issues.
- Give a brief refactor plan.

## File Splitting Rules

- Split code when reusability is real, not hypothetical.
- In React, a page or large component should usually be divided when a new visual section starts a new subject or responsibility.
- Extract a component when a section can stand on its own, has its own props, or is likely to be reused across pages or flows.
- Extract helper files when data shaping, formatting, transformation, filtering, mapping, or validation logic can be reused elsewhere or would distract from the main component flow.
- Keep helpers grouped by purpose. Validation belongs with validation helpers, formatting with formatting helpers, and domain-specific transformations with their domain.
- Do not split files into tiny wrappers with no clarity benefit.
- Do not create abstractions before there is a clear second use, a strong readability win, or a clear separation of concerns.
- Use complexity as a signal. If a function is hard to scan in one pass, nests too many branches, mixes multiple responsibilities, or would likely trigger lint or code review concern for complexity, break it up.
- Favor extracting focused internal helpers first before inventing new cross-project abstractions.

## Coding Standards

- Use strict TypeScript and prefer explicit types at module boundaries.
- Prefer named exports. Default exports are appropriate for route-level pages loaded with `React.lazy`.
- Keep React components focused on rendering, state orchestration, and user interaction.
- Move domain logic, shaping, formatting, validation, and server integration logic into helpers or `lib/`.
- Prefer pure helper functions and immutable state updates.
- Reuse project path aliases instead of long relative import chains when the repo provides them.
- Follow existing styling patterns before adding a new one.
- Preserve accessibility by default with semantic HTML, labeled controls, keyboard support, and reduced-motion-friendly behavior.
- Memoization is opt-in, not automatic. Only add `useMemo`, `useCallback`, or similar tools when they solve a real rerender or recomputation problem.

## Preferred Architecture

- Keep route-level page files focused and compose them from components and helpers.
- Keep UI in components, not in helper files.
- Keep shared logic in helpers or `lib/`, especially anything reused across pages, routes, tests, or server code.
- Keep data-access modules thin. Parse input, call a helper or service, and return typed results.
- Keep browser-specific behavior inside effects, event handlers, and focused hooks.
- Mirror important behavior with tests close to the current repo pattern instead of inventing a new folder layout.

## Naming Conventions

- React components: PascalCase file names and PascalCase exports
- Hooks: camelCase names with a `use` prefix
- Helpers and utilities: lower-case kebab-case file names
- Constants: `UPPER_SNAKE_CASE` for stable exported constants, regular object names for grouped config
- Route pages: use PascalCase page names such as `HomePage.tsx` and `ContactPage.tsx`
- Tests: mirror the subject name and use `.test.ts` or `.test.tsx`
- Folders: organize by domain first, then by detail level

## Comment Style

- Write comments for beginners and new contributors, but keep them brief.
- Prefer clear naming and small functions over explanatory comments.
- Add comments when logic is not obvious from the code itself, especially in validation, transformations, conditional rendering, state transitions, async flows, and edge-case handling.
- Comment the reason behind a decision, not the obvious mechanics of the next line.
- Do not comment routine JSX, trivial assignments, or self-evident code.
- Use short block comments or JSDoc for shared helpers, exported constants, or domain rules that are not obvious to a new reader.
- Remove stale comments when behavior changes.

## Dependency Policy

- Prefer built-in React, browser APIs, and current repo utilities before adding packages.
- Reuse the existing UI and testing stack before introducing another abstraction layer.
- Favor small, well-maintained packages with a single clear purpose.
- Keep runtime dependencies justified. Testing and build-only tools belong in `devDependencies`.
- Keep related framework packages version-aligned.
- Update the lockfile with dependency changes.
- Remove unused dependencies instead of letting them accumulate.
- Use overrides only for a concrete compatibility, bug, or security reason.

## Refactor Safety Rules

- Do not rename public exports, props, route paths, environment variables, or test-visible behavior unless the task explicitly requires it.
- Do not change API shapes, metadata behavior, or form submission behavior unless required by the task.
- Do not move files purely for aesthetics if it makes imports, ownership, or test mapping harder to follow.
- Do not mix refactors with unrelated style rewrites.
- Keep behavior stable while improving structure.

## Testing Minimum

- If behavior changes, run at least one targeted test plus lint before finishing.
- If structure changes without intended behavior changes, run lint and the most relevant smoke or targeted suite.
- Run the smallest relevant suite while iterating.
- Expand coverage for route, metadata, form, search, API, or cross-page changes.
- For major UI flow or browser-behavior changes, run the relevant end-to-end or UAT coverage when available.

## Response Template

Use this structure for meaningful refactors:

### Current Structure

- Brief summary of how the relevant code is organized today.

### Top Issues

- List the main problems affecting readability, structure, reuse, performance, or maintainability.

### Refactor Plan

- Brief plan of what will change and what will stay stable.

### Files Changed

- List each changed file.
- Explain why each change helps.

### Validation

- List lint, unit, integration, or browser checks that were run.
- If something was not run, say so clearly.

### Remaining Issues

- Note follow-up opportunities, constraints, or risks that still remain.

## Always Do

- Check for an existing helper, constant, or pattern before creating a new one.
- Keep new logic close to the relevant domain structure.
- Add or update tests when behavior changes.
- Preserve mobile and desktop behavior for UI work.
- Keep metadata, structured data, and route-related helpers in sync when adding or changing pages.
- Sanitize and validate user input before it reaches server-side workflows.
- Keep env-driven behavior behind configuration helpers or server-only modules.
- After coding, report files changed, why each change helps, validation results, and remaining issues.

## Never Do

- Never introduce complexity for the sake of architecture.
- Never weaken TypeScript strictness or silence errors with `any` when a real type is practical.
- Never put heavy business logic directly in route components or API handlers.
- Never add client-only state or effects to broad route trees unless they are truly required.
- Never introduce duplicate dependencies that overlap with the current UI, testing, or routing stack.
- Never hardcode secrets, private tokens, or environment-specific values into source files.
- Never leave behavior changes without corresponding verification.
- Never rewrite folder structure or naming patterns casually. Extend the architecture with intent.


# AGENTS.repo-one-call-hvac.md

## Purpose

- This file contains repository-specific guidance for `one-call-hvac`.
- Pair it with `AGENTS.base-react.md` when reusing the shared React guidance.

## Current Stack

- Framework: Next.js 16 App Router on Node.js
- UI: React 19, strict TypeScript, and route-level CSS
- Routing: file-system routes in `src/app/` with `next/link`
- Linting: ESLint flat config with Next.js Core Web Vitals and TypeScript rules
- Build output: `.next/`, packaged for Cloudflare in `.open-next/`
- Deployment: OpenNext on a Node.js-compatible Cloudflare Worker via `wrangler.jsonc`
- Production domain: `https://utahonecall.com`
- Supporting stack: OpenNext Cloudflare, Tailwind CSS 4, MUI, Radix UI, Motion, Vitest, Testing Library, and Playwright

## Current Structure

- `src/app/`: App Router route files, layouts, and server-owned metadata
- `src/screens/`: page compositions
- `src/screens/<route>/`: route-owned sections, data, primitives, and CSS
- `src/components/`: shared routing, image, and application helpers
- `src/config/`: shared business and route constants
- `src/hooks/`: shared browser interaction hooks
- `public/onecall-heating-and-air/`: site images and SVG assets
- `scripts/`: repository maintenance scripts

## Route Inventory

- `/`: home page
- `/services`: HVAC services
- `/about`: company and service-area information
- `/about/social-media`: placeholder for social channels and community updates
- `/location`: placeholder for business location and directions
- `/emergency`: placeholder for 24/7 emergency HVAC information
- `/contact`: service request and contact information
- `/404`: branded not-found page; unmatched paths render the same fallback

Keep `src/app/`, route metadata, `src/config/site.ts`, and this inventory synchronized when routes change.

## Commands

- `npm run dev`: start Next.js on `localhost:3000`
- `npm run typecheck`: run strict TypeScript checks
- `npm run lint`: run ESLint
- `npm run build`: create the Next.js production build
- `npm run cf:build`: package the Next.js build with OpenNext
- `npm run deploy`: package and deploy the OpenNext Worker
- `npm run preview`: package and preview the OpenNext Worker
- `npm run sync:agents`: rebuild `AGENTS.md` from its source guides

## React and Next.js Conventions

- Use the `@/` alias for imports from `src/`.
- Keep route declarations and metadata in `src/app/`.
- Keep route files as Server Components unless browser state or event handling requires a focused Client Component boundary.
- Use named exports for reusable components, hooks, constants, and helpers.
- Keep route files as composition and state orchestration only; put each major visual section in its route folder.
- Keep route-specific copy and list data in the route’s `*-data.ts` or `*-data.tsx` file.
- Keep route CSS in the route folder instead of embedding large `<style>` blocks in components.
- Keep static assets under `public/onecall-heating-and-air/` and reference them with root-relative URLs.
- Preserve the suite page class prefixes (`oc-`, `ocs-`, `oca-`, and `occ-`) unless the related styles are intentionally consolidated.
- Use the shared `Link` component for client-side internal navigation. Use ordinary anchors for phone, email, external, and form actions.
- Preserve the mobile drawer, hero carousel, FAQ, anchor navigation, and contact form behavior when refactoring.
- Keep the contact form endpoint, phone number, email address, business hours, and service-area copy centralized if a future change touches them across multiple pages.

## Validation Minimum

- Run `npm run typecheck`, `npm run lint`, and `npm run build` after page or route changes.
- Check every route in the production bundle when navigation, assets, or fallback behavior changes.
- Verify mobile layout when changing page-level CSS, navigation, fixed calls to action, or form controls.

## Git Workflow

- Do not run `git push`, `git pull`, or `git commit` unless the user explicitly asks for that exact action.
- Read-only commands such as `git status`, `git diff`, and `git log` are allowed when the repository has Git metadata.

## Local Server Policy

- Use `localhost:3000` as the default local development and preview port.
- If port 3000 is already serving this repository, reuse it rather than starting a second server.
- Stop temporary local servers after verification.

## Deployment Notes

- OpenNext packages the Next.js server and assets under `.open-next/`; Wrangler runs the worker with `nodejs_compat`.
- The custom domain is `utahonecall.com`; keep `src/config/site.ts`, `wrangler.jsonc`, metadata/canonical behavior, and generated context docs synchronized when it changes.
- The contact form submits to Formspree and requires network access in production.
- Google Fonts are imported by the migrated page styles; the visual design depends on external font loading unless fonts are localized later.
