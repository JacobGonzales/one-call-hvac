# Search Doc Alignment Support Handoff 2.0

Objective:
Help Codex separate primary-source-backed SEO guidance from heuristic search tooling before making recommendations or implementation claims.

Use this when:

- a handoff cites Google Search, Google Ads, Analytics, schema, robots, sitemap, or indexing guidance
- Codex is about to use crawler output, scraped SERP observations, or third-party SEO tool output
- a report needs to distinguish verified facts from directional recommendations

Rules:

- Prefer official documentation and repo source code over tool guesses.
- Treat Search Console and Analytics exports as directional performance evidence, not proof that a technical implementation is correct.
- Treat crawler output as a prompt to inspect code, not as the final source of truth.
- Do not claim Google will index, rank, or show a rich result because code changed.
- State when a recommendation is inferred from repo behavior rather than confirmed by a live platform.

Generated output:

- Put any alignment notes in `docs/v2-generated-docs/support/`.

Validation:

- `git diff --check`
- targeted documentation or SEO tests only when code changed
