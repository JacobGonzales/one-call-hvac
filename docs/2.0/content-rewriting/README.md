# Content Rewriting Workflow 2.0

## Purpose

This folder contains the post-v2 workflow for rewriting page content with InHouse AI.

Run this workflow only after the entire v2 suite is complete. The v2 suite determines what each page needs. This workflow turns those completed requirements into natural, human-friendly page copy without teaching InHouse how SEO works.

## AI Audience

These files are execution prompts for AI systems:

- Codex reads and executes steps `01`, `02`, `04`, and `05`.
- platform.inhouse receives only the prompt block from step `03` plus one prepared page package.
- The user does not need to translate the workflow between systems.

Each step defines its inputs, outputs, blockers, and completion state. An AI must execute the requested artifacts and checks rather than only summarize the instructions.

## Required V2 Suite Controls

Before executing this workflow:

1. Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md`.
2. Read `docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md`.
3. Give the user the required pre-execution rundown before the first generated-file or application write.
4. Update the relevant content-rewriting ledger row as each step begins and ends.

Because this workflow repeats per page, maintain one cumulative three-document set for the workflow:

- `docs/v2-generated-docs/content-rewriting/CONTENT_REWRITING_REPORT.md`
- `docs/v2-generated-docs/content-rewriting/CONTENT_REWRITING_IMPLEMENTATION_SUMMARY.md`
- `docs/v2-generated-docs/content-rewriting/CONTENT_REWRITING_HUMAN_TODO.md`

Each step and page updates these files and links its per-page source, rewrite, review, and implementation artifacts. The cumulative human TODO should link route-specific blockers without duplicating the complete page package.

## Start Prompt For Codex

Use this prompt after the complete v2 suite finishes:

```text
Execute the post-v2 content rewriting workflow in docs/2.0/content-rewriting/README.md.

Follow files 01 through 05 in order. First generate the complete paired page-content directory and central rewrite-status inventory. Then prepare one page at a time for platform.inhouse, preserve source fingerprints and workflow states, and stop at the InHouse handoff when external output is required. After the returned rewrite is placed in the page's 02_REWRITTEN_CONTENT.md, resume with the Codex post-rewrite review. When approved, run step 05 to place the content into the route's existing application-owned content source. Never make files under docs/ or docs/v2-generated-docs/ runtime content sources.

Before each step's first write, provide the pre-execution rundown required by docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md. Maintain docs/v2-generated-docs/V2_SUITE_RUN_LEDGER.md and the cumulative content-rewriting report, implementation summary, and human TODO throughout the workflow.
```

## Core Model

The workflow separates five stages:

1. Codex generates paired source and blank rewrite files for every page.
2. Codex prepares each page's phrase and information requirements.
3. InHouse rewrites the page in its preferred voice and places required phrases naturally.
4. Codex reviews and approves the publish-ready result.
5. Codex places the approved content into the application's existing runtime source and validates it.

Required phrases use paired plus signs, such as `+sewer camera inspection+`. Do not use parentheses or asterisks as rewrite markers. Plus signs identify the phrase but do not lock its position.

## Workflow Files

1. [`01_PAGE_CONTENT_DIRECTORY_GENERATION.md`](./01_PAGE_CONTENT_DIRECTORY_GENERATION.md)
   - Generates a paired workspace for every public indexable content page.
   - Populates `01_SOURCE_CONTENT.md`.
   - Creates a blank `02_REWRITTEN_CONTENT.md`.

2. [`02_CODEX_REWRITE_PREPARATION.md`](./02_CODEX_REWRITE_PREPARATION.md)
   - Builds the per-page content inventory.
   - Compares related routes and creates the Page Uniqueness Brief.
   - Assigns target and maximum phrase counts.
   - Records the distinct information each section must preserve.
   - Finalizes the source package sent to InHouse.

3. [`03_INHOUSE_AI_REWRITE_HANDOFF.md`](./03_INHOUSE_AI_REWRITE_HANDOFF.md)
   - Contains the short prompt given to InHouse.
   - Allows InHouse to rewrite freely and place phrases wherever they fit naturally.
   - Defines the difference between removing repeated wording and deleting information.

4. [`04_CODEX_POST_REWRITE_REVIEW.md`](./04_CODEX_POST_REWRITE_REVIEW.md)
   - Verifies required phrase counts.
   - Checks that distinct information and section purposes survived.
   - Reviews additions and recommendations.
   - Produces the approved publish-ready transfer copy.

5. [`05_CODEX_APPLICATION_CONTENT_IMPLEMENTATION.md`](./05_CODEX_APPLICATION_CONTENT_IMPLEMENTATION.md)
   - Builds a repository-specific route-family content inventory.
   - Traces the route to its existing runtime content source.
   - Updates application-owned TypeScript, TSX, constants, fixtures, or the established content system.
   - Prohibits runtime imports or reads from generated Markdown.
   - Validates the application and records the implementation.

## Recommended Generated Output

Store per-page rewrite packages and reviews under:

```text
docs/v2-generated-docs/content-rewriting/
```

Recommended structure:

```text
docs/v2-generated-docs/content-rewriting/
  page-content-directory/
    README.md
    REWRITE_STATUS.csv
    services/
      drain-cleaning/
        01_SOURCE_CONTENT.md
        02_REWRITTEN_CONTENT.md
        03_CODEX_REVIEW.md
        04_APPLICATION_IMPLEMENTATION.md
    locations/
    blog/
```

Generated rewrite files belong outside `docs/2.0/`. This folder contains reusable instructions only.

Every source file records its generation time, source commit when available, and normalized visible-content SHA-256. Codex checks that fingerprint before sending a page to InHouse and again before implementation.

`REWRITE_STATUS.csv` tracks every route from source generation through validation so batch work can stop and resume safely.

## Keyword And Phrase Rule

Codex provides each required phrase in a usage table and marks its occurrences in rewrite drafts:

| Required phrase | Target uses | Maximum uses |
|---|---:|---:|
| sewer camera inspection | 1–2 | 2 |
| hydro jetting Denver | 1 | 1 |

InHouse may place a phrase anywhere it fits naturally. Its original position does not need to be preserved.

Example draft:

```text
Our +sewer camera inspection+ service provides a clearer look inside an accessible line.
```

InHouse keeps the paired plus signs in its returned draft. Codex removes only those marker signs after the rewrite passes review.

A valid marker is recognized only when the text inside the plus signs exactly matches a phrase or approved variant in that page's requirements table. Legitimate content such as `+1`, `C++`, mathematical notation, and Markdown lists is not a phrase marker.

A target is not permission to stuff a phrase. The maximum is a hard ceiling. When an exact count is genuinely required, Codex may set the same number for the target minimum and maximum.

## Information Preservation Rule

InHouse may remove redundant wording, but it must preserve distinct information.

Repeated sentences may be condensed. A section, fact, service detail, benefit, qualification, limitation, example, reader question, or call to action must not disappear merely because a nearby section discusses a similar topic.

The preparation package records the purpose and required information for every section so Codex can verify this after the rewrite.

Every section defaults to not mergeable or removable. InHouse may merge or remove a section only when Codex explicitly permits it in the Section Preservation Inventory. Permission to shorten repeated wording is not permission to delete a section.

## Page Uniqueness Rule

InHouse has narrow page context, while Codex can inspect the complete repository and v2 suite. Codex therefore creates a Page Uniqueness Brief for every page before the handoff.

The brief identifies:

- the page's exclusive reader job
- the closest related routes
- meaningful differences from those routes
- unique information that must survive
- unique angles InHouse may strengthen
- generic overlap that may be reduced
- content belonging to another route that must not be imported

Uniqueness means distinct reader value and page-specific information. It does not mean replacing shared wording with synonyms. When Codex cannot identify a defensible distinct purpose, the route requires review instead of an invented rewrite.

## Complete Sequence

1. Finish the entire v2 suite.
2. Generate paired source and blank rewrite files for all pages.
3. Run the preparation instructions for one page.
4. Give InHouse only the short rewrite prompt, phrase table, section-preservation table, Page Uniqueness Brief, and marked source content.
5. Save the returned rewrite in that page's `02_REWRITTEN_CONTENT.md`.
6. Run the Codex post-rewrite review.
7. Request a focused correction when phrase coverage or information coverage is incomplete.
8. Store the clean approved content in `03_CODEX_REVIEW.md`.
9. Run the application-content implementation handoff.
10. Update the route's existing application-owned content source.
11. Run the repository's relevant content, SEO, lint, test, and build validation.
12. Mark the route `validated` in the central status inventory.

## Key Principle

Codex controls requirements, cross-page uniqueness evidence, application-code ownership, and validation. InHouse controls the human-facing rewrite. Markdown files transfer and audit the work; application code remains the runtime source of truth.
