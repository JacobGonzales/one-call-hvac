# Gaps And Review Notes

## Current Limits

- No protected-keyword ledger files exist under `docs/content/keywords/`; the only keyword file is the user-provided ranked Planner map. Route-owned `PAGE_METADATA.targetKeywords` and the completed fixed-route strategy matrix therefore control rewrite requirements.
- No Google Search Console export exists under `docs/data/google-search-performance/`. No performance query is promoted to a protected phrase.
- The Planner export geography is unspecified, and its tiers are opportunity rankings rather than organic positions.
- Static HTML extraction captures the initial server-rendered state. Client-controlled hero and review carousels can reveal additional component-owned copy after interaction; the packages identify their source files and prohibit silently paraphrasing testimonials.
- Contact form labels, consent, validation text, payload meaning, Resend behavior, public contact values, and response-state copy are operational contracts and require separate approval before modification.

## Exclusions

- `/404`: noindex utility and recovery page, not an indexable marketing-content rewrite target.
- `/api/inquiries`: operational API route with no public page body.
- `/robots.txt` and `/sitemap.xml`: generated metadata routes, not content pages.
- Framework error output, static assets, manifests, generated build files, and external Google Maps content.

## Review Gate

Run step 02 separately for a route before sending anything to InHouse. Recompute the source fingerprint, confirm phrase targets and section preservation, and keep public reviews plus form behavior outside the rewrite unless the owner explicitly changes that scope.
