# Codex Post-Rewrite Review 2.0

Before executing, read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md`, the content-rewriting README, and `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md`. Give the user the required pre-execution rundown, then update the ledger and cumulative content-rewriting report, implementation summary, and human TODO when this step begins and ends.

## Objective

Verify each page's `02_REWRITTEN_CONTENT.md` against its paired `01_SOURCE_CONTENT.md` before changing live application content.

## Codex Execution Contract

- Execute every review check; do not approve from InHouse's self-reported tables alone.
- Treat the source package, completed v2 outputs, and current application content as evidence.
- Stop approval when freshness, phrase coverage, information preservation, page uniqueness, recommendations, or unresolved InHouse notes fail review.
- Request focused corrections instead of silently repairing a failed InHouse draft.
- Update `03_CODEX_REVIEW.md` and `REWRITE_STATUS.csv`.
- Return one decision: `approved`, `correction_required`, or `human_input_required`.

Recommended review output:

```text
docs/v2-generated-docs/content-rewriting/page-content-directory/[route-group]/[route-slug]/03_CODEX_REVIEW.md
```

Decision-to-status rules:

- Phrase, information-preservation, page-uniqueness, marker, or correctable formatting failures: `correction_required`
- Missing owner confirmation, stale-source decision, or unresolved business claim: `human_input_required`
- Every review gate passes: `approved` and record `codex_reviewed_at`
- Never mark a route `approved` while `Needs Codex Review` contains an unresolved item.

## Step 1: Verify Phrase Coverage

Count each required phrase independently. Do not rely only on the count reported by InHouse.

Every required phrase occurrence in the rewritten draft must use paired `+phrase+` markers. The marker does not need to remain in its original source position.

Recognize a marker only when its inner text matches a required phrase or approved variant from the source table exactly and case-sensitively. Do not treat `+1`, `C++`, mathematical notation, or Markdown `+ ` list markers as required-phrase markers.

```md
## Required Phrase Review

| Required phrase | Target uses | Maximum uses | Original uses | Rewritten uses | Status |
|---|---:|---:|---:|---:|---|
```

Status values:

- `pass`
- `below target`
- `above maximum`
- `unnatural placement`
- `needs human decision`

A phrase can meet its numerical target and still fail when its use is awkward, misleading, repetitive, or disconnected from the surrounding section.

Also confirm:

- every paired marker contains a recognized required phrase
- the phrase inside each marker has the approved spelling and word order
- no required occurrence uses parentheses, asterisks, or Markdown emphasis as its marker
- there are no unmatched or malformed plus-sign pairs
- ordinary plus signs and Markdown list markers are not counted as phrase markers

## Step 2: Verify Source Freshness

Before reviewing content:

1. Re-extract and normalize the current visible source content using the same method used during generation.
2. Calculate its SHA-256 fingerprint.
3. Compare it with the fingerprint in both paired files and `REWRITE_STATUS.csv`.

If any fingerprint differs:

- do not approve or implement the rewrite
- preserve the received rewrite
- record the mismatch
- return `human_input_required` or `correction_required`
- regenerate the source package before continuing

The content fingerprint is authoritative when the worktree contains uncommitted content changes. The commit reference remains useful provenance.

## Step 3: Verify Information Preservation

Compare the rewrite with the Section Preservation Inventory.

```md
## Information Preservation Review

| Section | Reader purpose preserved? | Distinct information preserved? | Result | Notes |
|---|---|---|---|---|
```

Check every:

- section purpose
- fact
- service detail
- benefit
- qualification
- limitation
- example
- reader question
- call to action

Allow clearer consolidation when all distinct information survives. Reject a rewrite that reduces repetition by deleting information that serves a different reader need.

An entire section may be merged or removed only when its inventory row explicitly allows it. A blank or unclear permission means `No`.

## Step 4: Verify Page Uniqueness

Compare the rewrite with the Page Uniqueness Brief and the closest related routes.

```md
## Page Uniqueness Review

| Requirement | Preserved or strengthened? | Evidence in rewrite | Related-page conflict | Result |
|---|---|---|---|---|
| Page's exclusive job | | | | |
| Unique information that must survive | | | | |
| Unique angles to strengthen | | | | |
| Generic overlap to reduce | | | | |
| Do-not-import boundaries | | | | |
```

Confirm that:

- the page still performs its exclusive reader job
- every required page-specific information point survives
- source-backed unique angles are preserved or strengthened
- generic overlap may be reduced without deleting distinct information
- content assigned exclusively to another route was not imported
- the page remains meaningfully different from its closest related routes
- differentiation comes from useful information and reader value, not synonym replacement
- InHouse did not invent facts or artificial differences merely to make the wording appear unique

Review every item in InHouse's Uniqueness Notes against repository evidence. Do not accept InHouse's uniqueness assessment without comparison to related routes.

If the completed v2 evidence does not support a distinct page purpose, return `human_input_required`. Do not approve superficial uniqueness.

## Step 5: Review Additions And Recommendations

InHouse may add or recommend services, facts, prices, guarantees, locations, offers, and claims. Review each addition before implementation.

Record:

- what was added or changed
- whether it is suitable for the business and page
- whether implementation requires owner confirmation
- whether application data, pricing, service areas, policies, or structured content must also change
- whether the addition should be accepted, revised, or rejected

Do not silently publish a new price, guarantee, service area, offer, or business commitment without the appropriate confirmation.

Review every item under `Needs Codex Review`. An unresolved item blocks approval.

## Step 6: Review Page Quality

Confirm that:

- the page still serves its intended reader and search purpose
- the writing sounds natural and not mechanically optimized
- phrases are distributed naturally
- no section became thin or vague
- headings still match their sections
- calls to action remain appropriate
- important internal links and labels remain usable
- the rewrite does not duplicate a related page's purpose

## Step 7: Request Focused Corrections

Do not ask for a full rewrite when only a few items failed. Use the correction prompt from `03_INHOUSE_AI_REWRITE_HANDOFF.md` and identify the exact missing phrase, information point, or section purpose.

Repeat phrase and information checks after every correction.

## Step 8: Create And Validate Publish-Ready Copy

Before approval:

1. Create the publish-ready copy by removing only the paired marker plus signs around approved required phrases.
2. Confirm the words inside every former marker remain unchanged after removing the markers.
3. Search the publish-ready copy for each exact marker string built from the required-phrase table.
4. Block approval when any exact `+required phrase+` or `+approved variant+` marker remains.
5. Ignore legitimate non-marker uses such as `+1`, C++, mathematical notation, and Markdown lists.

Do not remove every plus sign blindly. Remove and validate only recognized paired markers.

Place the complete cleaned copy under `Approved Publish-Ready Content` in `03_CODEX_REVIEW.md`. This remains a transfer artifact and is not the application's runtime source of truth.

## Step 9: Finalize The Application Handoff

1. Recompute the current source fingerprint and record it in the review.
2. Run `git diff --check` and available documentation validation.
3. Write the complete review and Approved Publish-Ready Content to `03_CODEX_REVIEW.md`.
4. Set the route status to `approved` and record `codex_reviewed_at`.
5. Hand the route to `05_CODEX_APPLICATION_CONTENT_IMPLEMENTATION.md`.

Do not update application content during step 04. Do not import, parse, read, or serve any rewrite Markdown from the application. Step 05 performs the application-code change.

## Final Review Template

```md
# Codex Rewrite Review

Route:
Review date:
Decision: Approved / Correction required / Human input required
Expected source content SHA-256:
Current source content SHA-256:

## Required Phrase Review

| Required phrase | Target uses | Maximum uses | Rewritten uses | Status |
|---|---:|---:|---:|---|

## Information Preservation Review

| Section | Reader purpose preserved? | Distinct information preserved? | Result | Notes |
|---|---|---|---|---|

## Page Uniqueness Review

| Requirement | Preserved or strengthened? | Evidence in rewrite | Related-page conflict | Result |
|---|---|---|---|---|

## Additions And Recommendations

| Addition or change | Decision | Confirmation needed | Notes |
|---|---|---|---|

## Marker Validation

- Recognized markers before cleanup:
- Recognized markers remaining after cleanup:
- Legitimate non-marker plus signs preserved:

## Needs Codex Review

- Item:
  - Resolution:

## Approved Publish-Ready Content

[Complete approved page content without recognized plus-sign markers]

## Validation

- Check:
  - Result:

## Final Notes
```

## Acceptance Criteria

- all required phrases fall within their approved ranges
- no phrase exceeds its maximum
- all required phrase occurrences use valid paired plus-sign markers during review
- phrase placement reads naturally
- every section's reader purpose survives
- every distinct information point survives or has an approved reason for removal
- no section was merged or removed without explicit inventory permission
- redundant wording may be reduced without deleting unique information
- the page's exclusive job remains clear
- every required unique information point survives
- meaningful differences from related routes remain intact
- uniqueness comes from useful page-specific value rather than superficial rewording
- no do-not-import content was pulled from another route
- no unsupported uniqueness was invented
- additions and recommendations are reviewed
- every `Needs Codex Review` item is resolved
- marker plus signs are removed only from the approved publish-ready transfer copy
- no recognized marker remains in Approved Publish-Ready Content
- legitimate non-marker plus signs remain unchanged
- the source fingerprint matches at review time
- the completed v2 requirements remain satisfied
- `03_CODEX_REVIEW.md` contains the complete approved publish-ready content
- the route status is `approved`
- no application content was changed during this review handoff
- documentation validation passes
