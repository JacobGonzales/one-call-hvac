# Search-Safe Refactor Support Handoff 2.0

Objective:
Give Codex a safe refactor checklist for cleanup work that touches SEO, metadata, schema, routing, navigation, or generated docs.

Use this when:

- reorganizing route helpers, SEO helpers, constants, navigation, or schema code
- moving generated docs or changing handoff output paths
- simplifying duplicated SEO or content logic
- cleaning up old docs without changing live behavior

Rules:

- Preserve public routes, canonical URLs, redirects, metadata, sitemap behavior, robots behavior, schema intent, and form submission behavior unless the user explicitly asks to change them.
- Keep route files thin and move reusable logic into `lib/`.
- Prefer source-backed docs over copied historical content.
- Update generated output paths wherever a source handoff references them.
- Run focused tests when code behavior changes; use `git diff --check` for docs-only changes.

Generated output:

- Put refactor summaries and TODOs in `docs/v2-generated-docs/` for main v2 work.
- Put support-process notes in `docs/v2-generated-docs/support/`.
