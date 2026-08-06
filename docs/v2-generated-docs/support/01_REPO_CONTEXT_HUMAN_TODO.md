# Repository Context Human TODO

No human action blocks the next setup-and-dependencies handoff.

| Action | Reason | Affected scope | Priority | Status | Evidence | Completion condition |
|---|---|---|---|---|---|---|
| Identify the intended production host and verify SPA fallback/status behavior | No deployment config is checked in; direct routes and not-found HTTP status depend on the host | Deployment and all direct route visits | High before launch | Nonblocking for current discovery | `ROUTE_INVENTORY.md` and repository README | Provider/config is documented and direct known/unknown routes return intended behavior |
| Approve indexing policy for placeholder and not-found paths | No noindex, robots, canonical, or sitemap policy currently distinguishes these paths | `/about/social-media`, `/location`, `/emergency`, `/404`, unmatched paths | High before SEO implementation/launch | Nonblocking now; blocking relevant indexing changes | `ROUTE_INVENTORY.md` | Each path has an approved index/noindex and canonical/status decision |
| Verify Formspree account ownership, recipients, and production delivery | Repository source proves the public endpoint but cannot prove external account behavior | Contact form | High before launch | Nonblocking for documentation | `INTEGRATIONS_INVENTORY.md` | Authorized test submission and account review confirm intended delivery and response handling |
| Provide or restore a Git baseline if change attribution is required | Branch, commit, and dirty-state checks cannot run without `.git` metadata | Whole repository | Medium | Nonblocking | `01_REPO_CONTEXT_REPORT.md` | Valid Git metadata or another immutable baseline is available |
