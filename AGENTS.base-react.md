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
