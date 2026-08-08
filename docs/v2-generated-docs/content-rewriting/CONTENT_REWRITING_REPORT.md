# Content Rewriting Report

## Canonical Run 37 Scope

Generated the paired rewrite workspace for all seven public indexable marketing routes after the SEO and page-architecture phases stabilized. The noindex `/404` utility, API, robots, sitemap, framework output, assets, and external embed content are excluded with recorded reasons.

## Evidence And Decisions

- Next.js App Router page ownership, `INDEXABLE_PUBLIC_ROUTES`, sitemap policy, metadata, route-owned source, generated HTML, keyword strategy outputs, and the user-provided Planner tier map were inspected.
- There is no protected-keyword ledger or Search Console export. Route-owned metadata and the fixed-route strategy matrix control rewrite protection; Planner data remains opportunity evidence only.
- Each package contains a source fingerprint, required phrase tiers and counts, a section-preservation inventory, a cross-route uniqueness brief, visible source content, internal links, and review limits.
- Every rewrite file is blank except for the simplified four-section transfer template.
- Shared reviews and operational form UI are visible evidence but remain protected component content.

## Outputs

- [Directory README](./page-content-directory/README.md)
- [Rewrite status](./page-content-directory/REWRITE_STATUS.csv)
- [Route keyword map](./page-content-directory/ROUTE_KEYWORD_MAP.csv)
- [Required phrases](./page-content-directory/REQUIRED_PHRASES.csv)
- [Keyword coverage](./page-content-directory/KEYWORD_COVERAGE_MATRIX.csv)
- [Rewrite coverage checklist](./page-content-directory/REWRITE_COVERAGE_CHECKLIST.md)
- [Gaps and review notes](./page-content-directory/GAPS_AND_REVIEW_NOTES.md)

## Limitations And Risks

- Static extraction represents the server-rendered state; client-controlled carousel states have authoritative TypeScript sources and are flagged rather than guessed.
- Planner geography is unspecified, so no city-level search-volume conclusion is included.
- Public reviews, contact/form facts, service scope, safety claims, and response expectations must not be rewritten beyond approved evidence.
- Step 02 must refresh a route's fingerprint and finalize its narrow package before any InHouse handoff.

## Metadata Rewrite Rule

- Every route package marks its existing meta title `DO NOT CHANGE`.
- InHouse may rewrite the existing meta description, but the result may not exceed 160 characters including spaces.
- Any proposed description and its character count belong under Meta Description.
- This rule changes transfer instructions only; no live title or description was changed.

## Interactive Content Completeness Correction

- The initial HTML extractor omitted interaction-revealed content by treating collapsed or inactive states as absent.
- The homepage package now includes the two inactive hero slides and all six FAQ answers in addition to its already-included quick answer.
- The Home and Contact packages now include the optional property/system form disclosure as locked operational content.
- The workflow instructions now require reconciliation with route-owned data for FAQ, accordion, disclosure, tab, and carousel states.
- Shared customer reviews remain verbatim/protected; completeness does not authorize InHouse to rewrite customer-authored text.

## Validation

- Seven status rows exactly match the seven indexable marketing routes.
- Seven populated source packages and seven blank rewrite templates exist.
- All seven source fingerprints use 64-character SHA-256 values and every package/rewrite/status record agrees on its value.
- All 32 required-phrase rows agree with the paired-plus markers in their source-content sections.
- The route keyword map and keyword coverage matrix each contain 63 route-keyword rows.
- All section-preservation rows default merge/removal permission to `No`.
- All 24 generated workflow files passed the structural validator.
- `git diff --check` passed after completion updates.
- Application tests, lint, typecheck, build, and browser QA were not repeated because canonical run 37 changed documentation outputs only and used the freshly validated run-36 build output for extraction.

## Canonical Run 38 — `/services` Preparation

### Readiness Decision

`ready_for_inhouse`

### Findings And Fixes

- The current generated Services page still contains 131 normalized visible blocks and matches the recorded SHA-256 fingerprint `3393f894c8aa634568874bfc8072de07af7edf846ee2140bf6e4992eaca10067`.
- The run-37 inventory had mechanically truncated section summaries. All 12 sections now record their complete reader purpose, distinct information, claims/prices that must remain verbatim unless owner-approved, actions, and default `No` merge/removal rule.
- `HVAC repair near me` was removed from the exact requirement set because forcing the Planner query would reduce readability and no Search Console evidence requires it. It remains visible as optional opportunity context.
- The prepared package uses five natural phrases: `air conditioning repair`, `furnace repair`, `AC tune-up`, `heat pump installation`, and `mini-split installation`.
- Current exact/approved-variant marker counts are 1, 2, 4, 0, and 0 respectively. Rewrite targets deliberately reduce AC tune-up repetition and allow one natural use for each supported installation concept.
- The source package now identifies its audience, intended action, preferred tone, and a strict InHouse transfer boundary that excludes metadata, canonical/source mechanics, keyword-source explanations, and technical context.
- The paired rewrite body remains blank and now carries the prepared five-phrase count table.

### Route Artifacts

- [Prepared Services source package](./page-content-directory/services/overview/01_SOURCE_CONTENT.md)
- [Blank Services rewrite template](./page-content-directory/services/overview/02_REWRITTEN_CONTENT.md)
- [Central rewrite status](./page-content-directory/REWRITE_STATUS.csv)

### Validation

- Recomputed 131-block fingerprint matched the source package, rewrite template, and status row.
- Five required phrases, five rewrite count rows, 12 preservation rows, marker counts, blank rewrite body, and `prepared` status passed.
- At that checkpoint, the other six routes remained `source_generated`.
- The central inventories retain 31 current required-phrase rows, 63 keyword-map rows, and 63 coverage rows.
- `git diff --check` passed.
- Application tests, lint, typecheck, build, and browser QA were skipped because no runtime or application-owned content changed.

## Canonical Run 38 — Homepage Preparation Correction

### Readiness Decision

`ready_for_inhouse`

### Findings And Fixes

- The homepage was present in the run-37 directory but had been left at `source_generated` while Services was prepared first. The owner correctly required it to remain in the rewrite sequence.
- The earlier decision not to add a separate SEO content section to the homepage remains binding; this package rewrites only existing homepage content and does not authorize another section or route.
- The current generated homepage contains the same 111 normalized visible blocks recorded in Source Content. Block-for-block comparison passed, and the existing SHA-256 `50af5ddd891d2bc45ff1fdb3c0404ffd402e53e94bf827165de49731bfc94b9b` remains aligned across the paired files and status inventory.
- The run-37 ten-section inventory was mechanically truncated. It now preserves the full hero, shared reviews, service lanes, local differentiators, pricing, four-step process, FAQ, coverage/map, quote/form boundary, and final call-to-action information.
- The package uses four natural one-use phrases: `northern Utah HVAC service`, `HVAC in Brigham City`, `northern Utah HVAC contractor`, and `northern Utah heating and cooling`. The latter three use approved natural forms rather than awkward query word order.
- Shared reviews, customer-authored text, quote-form controls and consent, prices, incentives, response expectations, service scope, and public claims remain protected.
- Audience, intended action, preferred tone, and the strict InHouse transfer boundary are now explicit. The paired rewrite body remains blank.

### Route Artifacts

- [Prepared homepage source package](./page-content-directory/general/home/01_SOURCE_CONTENT.md)
- [Blank homepage rewrite template](./page-content-directory/general/home/02_REWRITTEN_CONTENT.md)
- [Central rewrite status](./page-content-directory/REWRITE_STATUS.csv)

### Validation

- Current 111-block rendered content and recorded Source Content match block-for-block.
- Four prepared phrase rows, four blank rewrite-count rows, ten complete no-merge preservation rows, blank rewrite body, and `prepared` status passed.
- Homepage and Services are prepared; the other five routes remain `source_generated`.
- Central inventories retain 31 required-phrase rows, 63 keyword-map rows, and 63 coverage rows.
- `git diff --check` passed.
- Application tests, lint, typecheck, build, and browser QA were skipped because no runtime or application-owned content changed.

## InHouse Handoff Simplification

### Decision

The first homepage test showed that the transfer package constrained the writer with too much audit language and too many reporting sections. The handoff now prioritizes useful page copy and keeps detailed compliance work inside Codex.

### Changes

- InHouse now receives only the rewrite prompt, a short route-specific writer brief, the narrow Metadata section, and complete marked Source Content.
- Page uniqueness comparisons, preservation tables, phrase targets, fingerprints, and SEO analysis remain internal Codex review evidence.
- InHouse may rewrite, shorten, reorder, and combine marketing copy while verified facts, locked UI, reviews, links, prices, and claims stay protected.
- Keywords are guidance: approved variants are allowed, awkward phrases may be omitted and reported, and maximums still apply.
- Returned output now has four sections only: Rewritten Page, Meta Description, Keyword Check, and Writer Notes.
- The title remains locked. A proposed description is optional and must be no longer than 160 characters including spaces.
- Homepage and Services now include Simple InHouse Briefs. The other five routes receive one when their step-02 preparation is run.

### Runtime Impact

- No live application content or metadata changed.
- The earlier experimental homepage rewrite remains outside the expected `02_REWRITTEN_CONTENT.md` workflow file and is not approved for implementation.

### Validation

- All seven expected rewrite templates contain exactly Rewritten Page, Meta Description, Keyword Check, and Writer Notes.
- Every template remains blank, retains the correct source fingerprint, and contains no superseded output headings.
- All seven source packages retain locked titles and the 160-character description rule.
- Home and Services contain the new Simple InHouse Brief; route statuses remain two `prepared` and five `source_generated`.
- `git diff --check` passed. Application tests, lint, typecheck, build, and browser QA were not run because no runtime code changed.

## InHouse Creative-Prompt Calibration

The owner supplied a proven Mountain West Hydro Jetting rewrite prompt that produced stronger creative work. The One Call handoff now follows the same editorial pattern without importing blog-only rules, Mountain West facts, route-renaming permission, pricing, or equipment claims.

- The prompt identifies concrete weaknesses to fix: repeated promises, vague sections, generic advice, and headings that do not answer their promise.
- It asks for useful substance from verified page facts: service distinctions, decision factors, customer scenarios, appointment expectations, steps, questions, and comparisons.
- It defines a direct local voice with a concrete service-experience example instead of generic tone adjectives alone.
- InHouse may rewrite headings, reorganize paragraphs, combine repetitive marketing passages, and replace weak explanations.
- Keyword targets now control final frequency rather than source placement. Every requested phrase has a target and hard maximum; phrases may move anywhere they read naturally.
- The Keyword Check now reports requested phrase, target, maximum, version used, final count, and status. Codex still verifies the counts independently.
- Protected facts, reviews, operational form content, links, prices, claims, routes, and locked meta titles remain outside creative permission.

Validation confirmed that all seven rewrite templates reproduce the target and maximum values from their paired Required Phrase Usage tables, all seven retain the four-section output contract, both prepared briefs expose approved variants and count-not-placement guidance, and `git diff --check` passes.

No live page copy, metadata, route, component, or runtime behavior changed.
