# Repo Context Doc Generator Handoff 2.0

Required suite controls:
- Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md` and `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md` before executing this handoff.
- Give the user the required pre-execution rundown before writing generated context files.
- Create or refresh the ledger-assigned detailed report, implementation summary, and human TODO in addition to the context artifacts.
- Update this handoff's ledger row when work begins and ends.

Objective:
Codex should generate or refresh repo-specific context documents before applying generic SEO, subpage, analytics, or search handoffs. The goal is to give generic handoffs accurate local facts without making the generic handoff files repo-specific.

Why:
Portable handoffs work best when they are paired with local context. This support handoff creates the repo-specific facts that future Codex runs should inspect first: environment variables, route inventory, route indexability, sitemap coverage, integrations, and validation commands.

Relevant context:
- Stack: Detect the target repo's framework, routing system, package manager, deployment target, and config files before generating docs.
- Key files:
  - `docs/2.0/support/01_REPO_CONTEXT_DOC_GENERATOR_HANDOFF.md`
  - `package.json`
  - framework config files such as `next.config.ts`, `vite.config.ts`, `astro.config.*`, or equivalents
  - deployment config such as `wrangler.toml`, `vercel.json`, Netlify config, Docker files, or equivalents
  - env helpers and server integration files
  - route files and route constants
  - sitemap and robots files
  - existing repo context docs such as `docs/v2-generated-docs/support/ENVIRONMENT_VARIABLES.md` and `docs/v2-generated-docs/support/ROUTE_INVENTORY.md`
- Related systems:
  - generic setup handoffs
  - SEO baseline handoffs
  - Search Console support handoff
  - Analytics support handoff
  - route and metadata validation tests

Scope:
- Only modify docs or lightweight generator scripts needed for repo-context output
- Do not change app behavior unless the user explicitly asks for implementation work after reviewing the context docs
- Keep generic handoffs generic
- Put repo-specific facts in repo-specific docs
- Prefer source-backed summaries over manual guesses

Primary outputs:
- `docs/v2-generated-docs/support/ENVIRONMENT_VARIABLES.md`
- `docs/v2-generated-docs/support/ROUTE_INVENTORY.md`
- `docs/v2-generated-docs/support/01_REPO_CONTEXT_REPORT.md`
- `docs/v2-generated-docs/support/01_REPO_CONTEXT_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/support/01_REPO_CONTEXT_HUMAN_TODO.md`

Optional outputs when useful:
- `docs/v2-generated-docs/support/DEPENDENCY_INVENTORY.md`
- `docs/v2-generated-docs/support/INTEGRATIONS_INVENTORY.md`
- `docs/v2-generated-docs/support/VALIDATION_COMMANDS.md`

Constraints:
- Keep implementation simple and beginner-readable
- Prefer clear naming over clever abstractions
- Match the current stack and project conventions
- Avoid unnecessary dependencies
- Do not print or commit secret values
- Do not infer live production settings that are not present in code, config, or supplied docs
- Distinguish variables read by app code from variables merely present in deployment config
- Distinguish indexable routes from redirects, noindex routes, private routes, and API routes
- Do not treat generated docs as a substitute for live production validation

Required process:
1. Inspect the current implementation first.
2. Identify package manager, framework, deployment target, scripts, and test commands.
3. Build the environment-variable inventory from:
- env helper modules
- `process.env` access
- deployment config
- server integration files
- scripts that read env
4. Build the route inventory from:
- route files
- route constants
- sitemap generation
- robots generation
- redirects
- metadata noindex branches
- dynamic route static params or route data maps
5. Before editing, identify:
- hidden assumptions
- likely edge cases
- risks of stale generated docs
- whether a generated script should be added later
6. Write or refresh repo context docs.
7. Run lightweight validation:
- `git diff --check`
- targeted docs lint or formatting command if the repo has one
- targeted unit tests only when app code or generator code changed
8. Report files changed, results, and follow-up risks.

Environment-variable doc requirements:
- Separate required secrets, recommended public config, optional config, and deployment-only values.
- Name the source file that reads each variable.
- Explain defaults and fallbacks.
- Clearly mark secrets.
- Never include secret values.

Route-inventory doc requirements:
- List static public routes.
- List dynamic route families and their source constants.
- List intentionally noindex/private routes.
- List API routes only when they matter to crawl, user flows, or integrations.
- Document sitemap and robots policy.
- Document former redirect-only routes or migration routes separately.
- Document schema/metadata coverage by route type.
- Include follow-up notes for canonical, redirect, sitemap, and route-generation risks.

Acceptance criteria:
- Generic handoffs can remain portable.
- Repo-specific docs give enough local context for the generic handoffs to run accurately.
- The generated docs are source-backed and do not expose secrets.
- Route and env docs identify stale or ambiguous areas instead of hiding them.
- The support handoff itself can be copied to another repo.

Return format:
- Current state summary
- Context docs generated
- Source files inspected
- Validation results
- Risks / follow-ups

## New Support File


Recommended workflow:
1. Run this support handoff first to create repo context docs.
2. Run the generic setup, subpage, SEO, Search Console, Analytics, and later numbered handoffs against the refreshed repo context.

## Quick Prompt Version

```text
Generate repo-specific context docs before running the generic SEO handoff suite. Inspect package/config/deployment files, env helpers, server integrations, route files, route constants, sitemap, robots, redirects, metadata noindex branches, and tests. Create or refresh docs/v2-generated-docs/support/ENVIRONMENT_VARIABLES.md and docs/v2-generated-docs/support/ROUTE_INVENTORY.md with source-backed facts, no secret values, clear required/optional env groups, public/dynamic/noindex/API route groups, sitemap/robots policy, schema coverage, and route migration notes. Keep generic docs in docs/2.0/ portable and put local facts only in repo-specific docs. Run git diff --check and targeted tests only if app or generator code changed.
```
