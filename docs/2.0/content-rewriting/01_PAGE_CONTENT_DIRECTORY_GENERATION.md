# Page Content Directory Generation 2.0

Before executing, read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md`, the content-rewriting README, and `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md`. Give the user the required pre-execution rundown, then update the ledger and cumulative content-rewriting report, implementation summary, and human TODO when this step begins and ends.

Objective:
Codex should create or refresh a repo-local directory that exports every public page into a paired rewrite workspace. Each page receives a populated source-content file and a second blank rewritten-content file. Required phrases are marked with paired plus signs such as `+sewer camera inspection+`.

Why:
The rewrite workflow needs a source-backed view of what every page says, which phrases it should use, and where the returned rewrite will be stored. Paired files keep original and rewritten content separate so Codex can compare them during post-rewrite review.

## Codex Execution Contract

This file is an execution prompt for Codex.

- Execute the directory-generation work; do not merely summarize these instructions.
- Use repository evidence and completed v2 outputs as the source of truth.
- Produce the exact required files and schemas.
- Process every eligible route unless a route is explicitly excluded with a recorded reason.
- Do not rewrite live application content during this step.
- Do not silently skip incomplete or dynamically assembled pages. Create their files and record the limitation.
- Return the output paths, route counts, exclusions, validation results, and unresolved inputs.

Relevant context:
- Stack: Detect the target repo's framework, routing system, content sources, metadata helpers, and keyword mapping before generating the directory.
- Key files to inspect when present:
  - route files such as `app/**/page.tsx`, `pages/**`, `src/routes/**`, or framework equivalents
  - content constants, CMS fixtures, markdown/MDX files, JSON content files, or page-builder data files
  - metadata helpers, title helpers, SEO helpers, schema helpers, and sitemap generation
  - keyword maps such as `lib/seo/keywords.*`, `docs/content/keywords/*`, `docs/v2-generated-docs/SEO_KEYWORDS*`, or equivalent repo-local keyword docs
  - protected keyword ledgers such as `docs/content/keywords/CURRENT_PROTECTED_KEYWORDS.md`, `docs/content/keywords/PROTECTED_KEYWORD_LEDGER.csv`, `docs/content/keywords/ADDITIONAL_REPO_SEO_KEYWORDS.csv`, and `docs/content/keywords/SEO_PHRASES_AND_TOPICS.csv`
  - route inventory docs such as `docs/v2-generated-docs/support/ROUTE_INVENTORY.md`
  - generated page-content directory if it already exists
- Related systems:
  - SEO baseline handoff
  - page metadata handoff
  - content depth and entity coverage handoff
  - internal architecture handoff
  - Search Console support handoff
  - repo context doc generator handoff

Scope:
- Create or refresh documentation outputs only.
- Do not change live page copy, page metadata, route behavior, sitemap behavior, analytics, redirects, or schema unless the user separately asks for implementation changes.
- Include public indexable marketing/content pages by default.
- Exclude private routes, API routes, admin routes, redirects, noindex pages, generated assets, manifest files, and utility endpoints unless the user explicitly asks to audit them.
- Keep the handoff generic enough to copy into another repo.

Primary output:
- `docs/v2-generated-docs/content-rewriting/page-content-directory/README.md`
- `docs/v2-generated-docs/content-rewriting/page-content-directory/REWRITE_STATUS.csv`

Recommended per-page outputs:
- `docs/v2-generated-docs/content-rewriting/page-content-directory/[route-group]/[route-slug]/01_SOURCE_CONTENT.md`
- `docs/v2-generated-docs/content-rewriting/page-content-directory/[route-group]/[route-slug]/02_REWRITTEN_CONTENT.md`

Examples:
- `docs/v2-generated-docs/content-rewriting/page-content-directory/services/drain-cleaning/01_SOURCE_CONTENT.md`
- `docs/v2-generated-docs/content-rewriting/page-content-directory/services/drain-cleaning/02_REWRITTEN_CONTENT.md`
- `docs/v2-generated-docs/content-rewriting/page-content-directory/locations/layton/01_SOURCE_CONTENT.md`
- `docs/v2-generated-docs/content-rewriting/page-content-directory/locations/layton/02_REWRITTEN_CONTENT.md`

Additional outputs when useful:
- `docs/v2-generated-docs/content-rewriting/page-content-directory/KEYWORD_COVERAGE_MATRIX.csv`
- `docs/v2-generated-docs/content-rewriting/page-content-directory/ROUTE_KEYWORD_MAP.csv`
- `docs/v2-generated-docs/content-rewriting/page-content-directory/REQUIRED_PHRASES.csv`
- `docs/v2-generated-docs/content-rewriting/page-content-directory/SEARCH_CONSOLE_KEYWORD_OPPORTUNITIES.csv`
- `docs/v2-generated-docs/content-rewriting/page-content-directory/REWRITE_COVERAGE_CHECKLIST.md`
- `docs/v2-generated-docs/content-rewriting/page-content-directory/GAPS_AND_REVIEW_NOTES.md`

Constraints:
- Keep implementation simple and beginner-readable.
- Prefer source-backed extraction over guessing.
- Preserve the repo's existing route and content naming conventions.
- Do not expose secrets or private customer data.
- Do not rewrite content while building the directory.
- Do not invent keywords that are not present in source files, metadata, docs, Search Console exports, or user-provided inputs.
- Clearly distinguish page-target keywords from incidental terms found in the copy.
- Clearly distinguish required rewrite phrases from optional/supporting keywords.
- Clearly mark pages where content is assembled dynamically and only partial extraction was possible.
- Do not treat this directory as a substitute for rendered browser QA when page content is client-rendered or CMS-driven.

Keyword source priority:
1. Treat repo-local content keyword ledgers as the rewrite-protection source of truth when they exist. In this repo shape, that means `docs/content/keywords/CURRENT_PROTECTED_KEYWORDS.md` plus the CSV files in `docs/content/keywords/`.
2. Treat SEO helper files such as `lib/seo/keywords.*`, page metadata, H1s, titles, route slugs, blog keywords, and content constants as page-to-keyword mapping evidence.
3. Treat Google Search Console exports as performance/opportunity evidence. Search Console queries can become protected keywords only when they are also present in the content keyword ledgers, route/page keyword maps, visible content, metadata, or the user explicitly approves them.
4. Treat visible body content as occurrence evidence, not automatically as protection evidence. A repeated phrase in page copy should become a rewrite requirement only when it appears in the protected ledgers, page keyword maps, metadata, or a relevant Search Console opportunity.
5. When ledgers and route SEO helpers conflict, keep both signals visible: use route SEO helpers for target keyword context, use content keyword ledgers for rewrite-protection decisions, and add a review note instead of silently dropping either source.
6. If the repo has no `docs/content/keywords/` equivalent, create the directory from the best available route metadata, Search Console exports, source content, and user-provided keyword docs, and mark that limitation in the README and review notes.

Required process:
1. Inspect the current implementation first.
2. Identify the framework, route structure, sitemap/indexable route policy, content sources, and keyword sources.
3. Inspect `docs/content/keywords/` or the repo's equivalent protected keyword directory before generating page docs. Record which keyword ledgers were used.
4. Use `docs/v2-generated-docs/content-rewriting/page-content-directory/` as the output directory.
5. Build a route list from sitemap generation, route constants, static params, route inventory docs, or framework route files.
6. Filter the list to public content pages that should be reviewed for keyword coverage.
7. For each included page, collect:
   - canonical route
   - source file or source constant
   - page type
   - page title / H1 when available
   - metadata title and description when available
   - target keywords from route SEO helpers, metadata, route slugs, page constants, and keyword ledgers
   - protected keywords grouped by rewrite importance
   - supporting keywords
   - closest related routes and meaningful areas of content overlap
   - page-specific information, experience, examples, questions, limitations, and calls to action
   - visible body content or source-backed page copy
   - FAQ/question content when present
   - CTA/link text only when relevant to the page's search intent
8. Map protected ledger keywords to pages using route, source files, metadata, H1/title, visible content, page keyword maps, and Search Console page/query relevance. Do not rely only on a hardcoded route keyword helper when a protected ledger exists.
9. Classify keywords into rewrite-requirement tiers.
10. Create the README overview and one route folder for each included page.
11. Create `01_SOURCE_CONTENT.md` with the source content, phrase requirements, section inventory, Page Uniqueness Brief, and paired `+phrase+` markers.
12. Create `02_REWRITTEN_CONTENT.md` with the required blank rewrite template. Do not copy the original body into this file.
13. Create or refresh the required `REWRITE_STATUS.csv`.
14. Add required-phrase and before/after coverage outputs when the repo has enough structured keyword data.
15. Run lightweight validation.

Protected keyword rules:
- Add a required "Required Phrases For Rewrites" section to every per-page file.
- Group keywords into:
  - "Must preserve exact phrase"
  - "Preserve exact phrase or approved close variant"
  - "Optional/supporting"
- Put a keyword in "Must preserve exact phrase" when it is:
  - listed as protected in a repo-local protected keyword ledger and relevant to the page
  - the page's primary target term
  - an exact Search Console query already mapped to the page
  - a service/location phrase that the page title, H1, canonical slug, or business strategy clearly depends on
  - a phrase the user explicitly marked as protected
- Put a keyword in "Preserve exact phrase or approved close variant" when:
  - the concept matters, but natural wording can vary
  - plural/singular, geography order, or service wording can change without losing intent
  - the existing page already uses multiple versions of the phrase
- Put a keyword in "Optional/supporting" when:
  - it is a secondary entity, symptom, related service, or informational phrase
  - it is useful but not required for the rewrite to preserve the page's main search intent
- If the source data is unclear, mark the keyword as "needs human confirmation" instead of guessing.
- Do not protect every keyword. Protecting too many terms makes the rewrite worse and weakens the usefulness of the checklist.
- Do not downgrade a ledger-protected keyword to optional just because the route keyword helper listed it late or did not list it. Add a review note if the page relationship is weak.

Rewrite safety rules:
- The directory should support rewriting, but it should not perform the rewrite unless the user explicitly asks.
- Give each required phrase a natural target range and a hard maximum instead of preserving its original position.
- A rewrite may place required phrases anywhere they fit naturally.
- A rewrite may replace a close-variant keyword only when the replacement is listed in the page's approved close variants.
- If a phrase falls below its target or exceeds its maximum after a rewrite, flag it in the coverage checklist before finalizing.
- Do not stuff required phrases into unnatural copy. If a target cannot be met naturally, list it for Codex review; Codex may approve an omission when page intent and useful coverage remain intact.
- Keep title/H1/body/FAQ coverage separate. A keyword preserved only in metadata may still be weak if it disappeared from visible body copy.

Phrase-usage requirement rules:
- Preserve one source-content section and mark required phrase occurrences with paired plus signs, for example `+hydro jetting Denver+`.
- A protected marker begins and ends with one plus sign with no space immediately inside the pair.
- A Markdown list beginning with `+ `, a mathematical plus sign, or an ordinary single plus sign is not a phrase marker.
- Mark only the phrase itself. Do not include surrounding punctuation inside the plus signs.
- The plus signs identify the phrase but do not lock its current position.
- Record each phrase's current visible count, target uses, maximum uses, and approved close variants.
- Prefer a target range when more than one count could provide natural coverage.
- Use the same target and maximum only when one exact count is genuinely required.
- Do not use a universal keyword-density formula.
- Keep the required list focused. A phrase that is only optional or supporting does not need a required count.
- If a required phrase is absent from the source page, list it in the requirements table without inventing an inline occurrence.
- The post-v2 workflow under `docs/2.0/content-rewriting/` converts this evidence into the package sent to InHouse.

Section-preservation rules:

- Add every human-visible content section to the Section Preservation Inventory, including content revealed by accordions, disclosures, tabs, and carousels.
- Do not equate a collapsed or inactive client state with absent content. Reconcile generated HTML with route-owned data and component sources so every FAQ answer, quick answer, alternate slide, and optional disclosure is captured.
- Keep customer-authored reviews and operational form controls explicitly locked when they are included; completeness does not grant permission to paraphrase them.
- Record the reader purpose and distinct information for each section.
- Default `May section be merged or removed?` to `No`.
- Set it to `Yes` only when completed v2 evidence shows that another named section fully covers the same reader purpose and every distinct information point.
- Permission to consolidate wording does not grant permission to merge or remove the section.
- If uncertain, preserve the section and add a review note.

Page-uniqueness rules:

- Compare each page with its closest related routes using the completed v2 outputs and repository content.
- Identify the page's exclusive reader job: what it helps someone understand, decide, or do that nearby pages do not.
- Record meaningful differences in audience, service scope, location, reader problem, evidence, experience, examples, limitations, recommendations, and intended action.
- Distinguish unique information from merely different wording.
- Do not label generic paraphrasing as unique value.
- Record generic overlap that InHouse may shorten.
- Record topics, claims, and details that belong to another route and must not be imported.
- If the page lacks a defensible distinct purpose or meaningful unique information, flag it for Codex or human review instead of inventing uniqueness.

Search Console opportunity rules:
- When Google Search Console exports are present, inspect the latest dated export under `docs/data/google-search-performance/`.
- Prefer the latest `Queries.csv` and `Pages.csv` files. If multiple exports exist, use the newest dated directory unless the user names a specific export.
- Use Search Console data as directional performance evidence, not proof that a page should be rewritten around a term.
- Prioritize query opportunities with meaningful impressions, low CTR, and average position close enough to improve, especially positions 4-20.
- Include page-level Search Console context when `Pages.csv` contains the route.
- Add a "Search Console Keyword Opportunities" section to each page when source-backed query terms appear relevant to that page's route, title, H1, description, or target keywords.
- Do not add irrelevant high-impression queries to a page just because they have volume. Relevance to the page's intent is required.
- Do not treat Search Console opportunities as mandatory protected keywords unless the term is also a page target, exact route/H1 dependency, or user-approved rewrite target.
- Create `SEARCH_CONSOLE_KEYWORD_OPPORTUNITIES.csv` when Search Console exports are available.

Recommended `01_SOURCE_CONTENT.md` format:

```md
# [Page Title]

Route: `/example-route`
Page type: Service / Location / Blog / About / Landing / Other
Canonical: `/example-route`
Generated at: `YYYY-MM-DDTHH:mm:ssZ`
Source commit: `[git commit SHA or unavailable]`
Source content SHA-256: `[hash of normalized extracted visible content]`
Source files:
- `path/to/source-file.ts`

## Page Intent

Short source-backed summary of what this page is supposed to help the user decide or do.

## Simple InHouse Brief

- Reader: [who this page is for]
- Goal: [what the reader should understand or do]
- Writing freedom: [what may be rewritten, shortened, reordered, or combined]
- Must preserve accurately: [important facts, sections, actions, and complete interactive states]
- Locked: [reviews, forms, prices, claims, links, or other protected content]
- Keywords: [short phrase list with target counts and hard maximums]; counts matter, placement does not; omit/report awkward phrases rather than stuffing them.
- Metadata: Do not change the current title; an optional description must be 160 characters or fewer.

## Page Uniqueness Brief

### Page's Exclusive Job

What this page helps the reader understand, decide, or do that nearby pages do not.

### Closest Related Pages

| Related route | Overlapping subject | How this page must remain meaningfully different |
|---|---|---|

### Unique Information That Must Survive

- Page-specific facts, experience, examples, service details, location details, reader questions, limitations, recommendations, or calls to action

### Unique Angles To Strengthen

- Source-backed information InHouse should emphasize, clarify, or develop

### Generic Overlap To Reduce

- Boilerplate or repeated explanations that may be shortened without removing distinct information

### Do Not Import

- Topics, claims, examples, or details that belong exclusively to another route

## Metadata

- Title: [current title] — DO NOT CHANGE
- Description:
- Description rule: May be rewritten; maximum 160 characters including spaces.
- H1:

## Target Keywords

- primary keyword
- secondary keyword

## Required Phrase Usage

| Required phrase | Requirement level | Current visible count | Target uses | Maximum uses | Approved variants | Notes |
|---|---|---:|---:|---:|---|---|
| exact keyword phrase | Exact phrase | 2 | 1–2 | 2 | None | May be placed anywhere naturally. |

## Supporting Keywords

- supporting keyword
- related entity

## Section Preservation Inventory

| Section | Reader purpose | Distinct information that must survive | May wording be consolidated? | May section be merged or removed? |
|---|---|---|---|---|

## Source Content

Page content with required phrases identified using paired plus signs:

We provide +drain cleaning+ and sewer camera inspection for recurring backups.

## Missing / Weak Keyword Coverage

- Keyword or topic that appears in metadata but not visible content
- Keyword that appears only in navigation or boilerplate

## Search Console Keyword Opportunities

| Query | Clicks | Impressions | CTR | Position | Recommended use |
|---|---:|---:|---:|---:|---|
| exact Search Console query | 0 | 250 | 0% | 8.4 | Strengthen naturally in body, FAQ, or internal links if it matches page intent. |

## Rewrite Safety Checklist

| Required phrase | Requirement level | Current visible count | Target uses | Maximum uses | Notes |
|---|---|---:|---:|---:|---|
| exact keyword phrase | Exact phrase | 2 | 1–2 | 2 | InHouse may place it wherever it fits naturally. |

## Internal Links / Next Steps

- Important route links from the page
- Related pages that support this page's topical cluster

## Review Notes

- Extraction limitations
- Human copy review needs
- Potential duplicate/thin-content concerns
```

Required `02_REWRITTEN_CONTENT.md` format:

```md
# Rewritten Content

Route: `/example-route`
Source file: `./01_SOURCE_CONTENT.md`
Expected source content SHA-256: `[copy from 01_SOURCE_CONTENT.md]`
Rewrite status: Awaiting InHouse

## Rewritten Page

<!-- Paste the complete InHouse rewrite here. Keep structural and paired +keyword phrase+ markers. -->

## Meta Description

- Description:
- Character count:

## Keyword Check

| Requested phrase | Target | Maximum | Version used | Final count | Status |
|---|---:|---:|---|---:|---|

## Writer Notes

<!-- Include only genuine concerns or approval needs. Write "None" when there are no issues. -->
```

The generator must create this second file for every page even though its rewritten body and tables are initially blank. InHouse output is pasted into this file. Codex uses the paired source and rewrite files during post-rewrite review.

## Required Rewrite Status Inventory

Create `REWRITE_STATUS.csv` with one row per included route.

Required columns:

- `route`
- `route_group`
- `source_file`
- `rewrite_file`
- `review_file`
- `implementation_report_file`
- `source_generated_at`
- `source_commit`
- `source_content_sha256`
- `status`
- `inhouse_sent_at`
- `rewrite_received_at`
- `codex_reviewed_at`
- `implemented_at`
- `validated_at`
- `human_input_needed`
- `notes`

Allowed status values:

- `source_generated`
- `prepared`
- `sent_to_inhouse`
- `rewrite_received`
- `codex_review_required`
- `human_input_required`
- `correction_required`
- `approved`
- `implemented`
- `validated`

Status rules:

- Use exactly one allowed status per route.
- Do not advance a route past `source_generated` until preparation is complete.
- Do not mark `rewrite_received` until `02_REWRITTEN_CONTENT.md` contains the returned rewrite.
- Do not mark `approved` until phrase, information-preservation, page-uniqueness, recommendation, and freshness checks pass.
- Do not mark `implemented` until live content is updated.
- Do not mark `validated` until the required repository checks pass.
- Update timestamps when the corresponding state is first reached.
- Never overwrite a later state with an earlier state during directory refresh.

## Source Freshness Rules

- Calculate the fingerprint from extracted visible content before adding plus-sign markers.
- When the base fingerprint represents only the initial server-rendered state, separately verify and record the authoritative source data for collapsed, inactive, or interaction-revealed content.
- Use this exact normalization sequence:
  1. Preserve content in rendered reading order.
  2. Normalize Unicode to NFC.
  3. Convert CRLF and CR line endings to LF.
  4. Remove trailing spaces and tabs from each line.
  5. Remove blank lines only from the beginning and end.
  6. Preserve internal spaces, internal blank lines, capitalization, and punctuation.
  7. Encode the normalized result as UTF-8 and calculate SHA-256.
- Record the current commit when available. A dirty worktree does not invalidate the fingerprint; the content hash remains authoritative.
- Recompute the live source-content fingerprint immediately before sending a page to InHouse.
- Recompute it again immediately before implementing an approved rewrite.
- When the current fingerprint differs from `Source content SHA-256`, mark the route `human_input_required` or `correction_required` and do not implement the stale rewrite.
- Do not overwrite a received rewrite when regenerating stale source files. Preserve it for comparison and create a review note.
- Record timestamps in UTC ISO 8601 format.

README requirements:
- Explain what the directory is and how to use it.
- List included route groups.
- List keyword source files used, especially protected keyword ledgers under `docs/content/keywords/` when present.
- Explain the difference between protected keyword ledgers, route SEO helper keywords, visible extracted copy, and Search Console opportunities.
- Explain the paired `+required phrase+` marker convention.
- Explain the purpose of `01_SOURCE_CONTENT.md` and the blank `02_REWRITTEN_CONTENT.md`.
- Explain how Codex creates and validates each Page Uniqueness Brief from repository-wide evidence.
- Explain `REWRITE_STATUS.csv`, its states, and how a route advances.
- Explain source generation timestamps, commit references, and content fingerprints.
- Explain the protected keyword tiers.
- Explain how to use the rewrite safety checklist before and after rewriting.
- Link to `docs/2.0/content-rewriting/` for the post-v2 rewrite workflow.
- Explain which pages were excluded and why.
- Link to coverage matrix outputs if created.
- Link to protected keyword and rewrite checklist outputs if created.
- Include a generation date.
- Include source files inspected.
- Include validation commands run.

Coverage matrix requirements when created:
- One row per route and keyword pairing.
- Recommended columns:
  - `route`
  - `page_type`
  - `keyword`
  - `keyword_role` such as primary, secondary, supporting, observed query, or metadata keyword
  - `present_in_title`
  - `present_in_description`
  - `present_in_h1`
  - `present_in_body`
  - `present_in_faq`
  - `current_visible_count`
  - `source_file`
  - `notes`

Required phrases CSV requirements when created:
- One row per route and required phrase.
- Recommended columns:
  - `route`
  - `page_type`
  - `keyword`
  - `protection_level`
  - `approved_close_variants`
  - `source_reason` such as metadata, H1, Search Console query, keyword map, user-provided, or visible body
  - `current_visible_count`
  - `target_minimum_after_rewrite`
  - `target_maximum_after_rewrite`
  - `present_in_title`
  - `present_in_h1`
  - `present_in_body`
  - `present_in_faq`
  - `needs_human_confirmation`

Search Console opportunities CSV requirements when created:
- One row per route and Search Console opportunity.
- Recommended columns:
  - `route`
  - `page_type`
  - `query`
  - `clicks`
  - `impressions`
  - `ctr`
  - `position`
  - `opportunity_type` such as low CTR near page one, high-impression page two, or relevant supporting query
  - `recommended_use`
  - `source_export`
  - `notes`

Before/after rewrite coverage requirements when the user asks Codex to rewrite content:
- Create or refresh a checklist that compares original content against rewritten content.
- Recommended columns:
  - `route`
  - `keyword`
  - `requirement_level`
  - `target_minimum`
  - `target_maximum`
  - `before_count`
  - `after_count`
  - `status` such as pass, below target, above maximum, unnatural placement, replaced by approved variant, or needs review
  - `replacement_variant`
  - `notes`
- Treat above-maximum or unnatural usage as a correction blocker. Treat below-target usage as a Codex review item that may pass when forcing the phrase would reduce readability and the page still covers the intended topic; require human approval only when the omission changes business or search strategy.

Validation commands:
- `git diff --check`
- Run the repo's docs lint/format command if one exists.
- Run route/SEO tests only when generator code, route inventory code, or SEO helper code changed.
- Do not run full browser automation unless the user asks or extraction depends on rendered browser output.

Acceptance criteria:
- The directory can be copied or regenerated in another repo with minimal repo-specific assumptions.
- Each included page has a populated `01_SOURCE_CONTENT.md`.
- Each included page has a blank four-section `02_REWRITTEN_CONTENT.md` ready for InHouse output.
- `REWRITE_STATUS.csv` has exactly one row for every included page.
- Required phrases in source content use paired plus-sign markers consistently.
- Each included page has protected keyword tiers for rewrite safety.
- The directory gives Codex enough information to assign natural target and maximum phrase counts.
- The handoff defines a before/after coverage check for future rewrite passes.
- Required phrase tables and marked source content agree.
- every page has a source-backed Page Uniqueness Brief
- closest related routes and meaningful differences are identified
- weak or unsupported uniqueness is flagged instead of invented
- source metadata includes a generation time, commit reference when available, and content fingerprint
- Missing keywords are called out instead of silently ignored.
- Excluded routes are documented.
- No secrets or private data are exposed.

Return format:
- Current state summary
- Directory outputs created or refreshed
- Source files inspected
- Validation results
- Risks / follow-ups

Recommended workflow:
1. Complete the entire numbered v2 suite.
2. Run this file to create paired source and blank rewrite files for every included page.
3. Run `02_CODEX_REWRITE_PREPARATION.md` to finish phrase targets and section-preservation requirements.
4. Run `03_INHOUSE_AI_REWRITE_HANDOFF.md`.
5. Place InHouse output into the page's `02_REWRITTEN_CONTENT.md`.
6. Run `04_CODEX_POST_REWRITE_REVIEW.md` before implementation.

## Quick Prompt Version

```text
After the entire v2 suite is complete, create or refresh `docs/v2-generated-docs/content-rewriting/page-content-directory/` as a paired rewrite workspace for every public indexable content page. Inspect route files, sitemap/indexable route policy, content sources, metadata helpers, keyword maps, protected keyword ledgers, completed v2 outputs, route inventory docs, and Search Console exports when present. Create one route folder per page. Populate `01_SOURCE_CONTENT.md` with route context, generation time, source commit, normalized visible-content SHA-256, page intent, phrase requirements, target and maximum counts, a section-preservation inventory, complete source content, and a Page Uniqueness Brief derived by comparing the page with its closest related routes. During preparation, add a Simple InHouse Brief that reduces this evidence to the reader, goal, writing freedom, must-preserve facts, locked content, natural keyword guidance, and metadata rule. Flag pages without defensible unique value instead of inventing differences. Default every section to not mergeable or removable unless evidence explicitly permits it. Wrap every visible required phrase occurrence with paired plus signs such as `+hydro jetting Denver+`; the markers identify the phrase but do not lock its position. Also create `02_REWRITTEN_CONTENT.md` for every page with the expected source fingerprint and four blank output sections: Rewritten Page, Meta Description, Keyword Check, and Writer Notes. Do not copy the source body into the rewrite file. Create `REWRITE_STATUS.csv` with one row per page and the required workflow state, paths, source fingerprint, timestamps, human-input flag, and notes. Preserve later route states when refreshing the directory. Exclude private, API, noindex, redirect, and asset routes. Do not change live page copy. Run `git diff --check` and repo docs validation if available.
```
