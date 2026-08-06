# Codex Rewrite Preparation 2.0

Before executing, read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md`, the content-rewriting README, and `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md`. Give the user the required pre-execution rundown, then update the ledger and cumulative content-rewriting report, implementation summary, and human TODO when this step begins and ends.

## Objective

Prepare one generated page pair for InHouse. Required phrases use paired plus signs, while phrase counts and section requirements remain separate from the public-facing rewrite.

## Codex Execution Contract

- Execute this workflow for one route at a time.
- Read that route's `01_SOURCE_CONTENT.md`, `02_REWRITTEN_CONTENT.md`, completed v2 evidence, and `REWRITE_STATUS.csv`.
- Do not send internal v2 explanations to InHouse.
- Do not advance the route when a required input, phrase decision, section inventory, or freshness check is unresolved.
- Update the paired files and status inventory directly.
- Return a concise readiness decision: `ready_for_inhouse`, `human_input_required`, or `regeneration_required`.

## Preconditions

Do not prepare an InHouse package until:

1. The entire v2 suite is complete.
2. The page route, purpose, audience, and intended action are settled.
3. The page's sections and content requirements are complete.
4. Codex has enough evidence to assign phrase targets without guessing.
5. The route's recorded source fingerprint matches the current normalized visible content.

If the fingerprint does not match, stop preparation for that route, preserve any existing rewrite, mark the status appropriately, and regenerate the source package.

## Step 1: Capture The Page

Collect:

- route
- page type
- audience
- intended reader action
- preferred tone, if the page needs a tone different from the site default
- current visible page copy
- headings, lists, FAQs, calls to action, and important link labels

Do not send metadata, schema, canonical logic, indexability rules, or other technical SEO fields to InHouse.

## Step 2: Create The Required Phrase Table

Create or verify the separate phrase table in `01_SOURCE_CONTENT.md`.

```md
## Required Phrases

| Required phrase | Target uses | Maximum uses | Notes |
|---|---:|---:|---|
| exact phrase | 1–2 | 2 | Use wherever it fits naturally. |
```

Rules:

- Use the exact phrase spelling InHouse must return.
- Wrap each visible required phrase occurrence in the source content with paired plus signs, such as `+exact phrase+`.
- Do not use parentheses or asterisks as rewrite markers.
- Plus signs identify the required phrase but do not preserve its current position.
- Assign counts from the completed v2 evidence rather than a universal keyword-density formula.
- Prefer a target range over an exact count when either count would provide natural coverage.
- Use a maximum to prevent unnecessary repetition.
- When one exact count is required, set the target and maximum to the same number.
- Do not assign a placement requirement unless the completed page specification genuinely depends on it.
- Do not require a phrase merely because it appears somewhere in the current copy.
- Keep the phrase list small enough to support natural writing.

## Step 3: Build The Information Preservation Inventory

The v2 suite may produce several sections that sound related but serve different reader needs. Before rewriting, record the purpose and distinct information of every section.

```md
## Section Preservation Inventory

| Section | Reader purpose | Distinct information that must survive | May wording be consolidated? | May section be merged or removed? |
|---|---|---|---|---|
| Signs of a blocked line | Helps readers recognize symptoms | slow drains; recurring backups; gurgling | Yes, within this section | No |
| How hydro jetting helps | Explains the service | high-pressure cleaning; buildup removal; service suitability varies | Yes, but do not remove qualifications | No |
```

Inventory rules:

- Record information, not exact sentences.
- Include every distinct fact, service detail, benefit, limitation, qualification, example, question answered, and call to action.
- Treat two sections as separate when they answer different reader questions, even if they use similar vocabulary.
- Identify genuinely duplicated explanations that may be condensed.
- Default every section to not mergeable or removable.
- Allow a section to be merged or removed only when another named section fully preserves its reader purpose and every distinct information point.
- Treat permission to consolidate wording as separate from permission to merge or remove a section.
- Do not assume that similar wording means redundant information.

## Step 4: Build The Page Uniqueness Brief

Use repository-wide content and completed v2 evidence to complete:

```md
## Page Uniqueness Brief

### Page's Exclusive Job

### Closest Related Pages

| Related route | Overlapping subject | How this page must remain meaningfully different |
|---|---|---|

### Unique Information That Must Survive

### Unique Angles To Strengthen

### Generic Overlap To Reduce

### Do Not Import
```

Rules:

- Compare the page with its closest service, location, blog, and informational neighbors.
- Describe unique reader value, not merely unique wording.
- Preserve actual page-specific facts, experience, details, examples, questions, limitations, and calls to action.
- Give InHouse source-backed angles it may emphasize or develop.
- Identify generic overlap that may be shortened without losing distinct information.
- Identify content belonging to another route that must not be imported.
- If the page does not have a defensible distinct job or meaningful unique value, return `human_input_required` instead of inventing a distinction.

## Step 5: Prepare Marked Source Content

Provide the complete human-visible page content. Wrap required phrase occurrences with paired plus signs.

Example:

```text
Our +sewer camera inspection+ service helps provide a clearer look inside an accessible line.
```

Marker rules:

- Put one plus sign immediately before and after the exact phrase.
- Do not include surrounding punctuation inside the markers.
- Mark every required phrase occurrence that currently appears.
- A single ordinary plus sign and a Markdown `+ ` list item are not markers.
- InHouse may move the marked phrase anywhere in the rewritten page.

Preserve section boundaries so InHouse can see the intended coverage. Do not include code, component names, technical metadata, or implementation details unless they are visible page copy.

## Step 6: Verify The Paired Files

For each route, confirm both files already exist:

```text
docs/v2-generated-docs/content-rewriting/page-content-directory/[route-group]/[route-slug]/01_SOURCE_CONTENT.md
docs/v2-generated-docs/content-rewriting/page-content-directory/[route-group]/[route-slug]/02_REWRITTEN_CONTENT.md
```

The source file must contain the completed InHouse package. The rewrite file must still have a blank `Rewritten Page` body before it is sent to InHouse.

Recompute the normalized visible-content SHA-256 and compare it with both paired files. When they match, update the route in `REWRITE_STATUS.csv` to `prepared`. When they do not match, do not send the package.

## Preparation Checklist

- the complete v2 suite is finished
- the page content is complete enough to rewrite
- phrases are listed in the requirements table
- every phrase has a target and maximum
- every existing required occurrence uses paired `+phrase+` markers
- no universal keyword-density formula was used
- each section has a recorded reader purpose
- every section defaults to not mergeable or removable unless explicit evidence permits it
- every distinct information point is represented in the inventory
- the Page Uniqueness Brief is based on comparison with the closest related routes
- the page's exclusive job is explicit
- unique information, strengthening opportunities, reducible overlap, and do-not-import boundaries are complete
- uniqueness describes meaningful reader value rather than superficial paraphrasing
- genuinely repeated wording is distinguished from unique information
- the content contains no rewrite-only parentheses or asterisks
- `02_REWRITTEN_CONTENT.md` exists and its rewrite body is blank
- source generation time, commit reference, and content fingerprint are present
- the current source fingerprint matches both paired files
- `REWRITE_STATUS.csv` is updated to `prepared`
- InHouse will receive no unnecessary v2 or technical SEO explanation
