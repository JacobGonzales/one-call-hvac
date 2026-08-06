# InHouse AI Rewrite Handoff 2.0

## Purpose

This is the only rewriting instruction InHouse needs. Give InHouse this prompt followed by one prepared page package.

Do not send the rest of the v2 suite.

The text inside the following prompt block is the platform.inhouse execution prompt. The surrounding document is for Codex only.

## Codex Transfer Rules

Before sending:

1. Read `docs/2.0/V2_SUITE_SHARED_EXECUTION_CONTRACT.md`, the v2 suite ledger, and the content-rewriting README.
2. Give the user the required pre-execution rundown before changing transfer or status files.
3. Confirm the route status is `prepared`.
4. Confirm the current source fingerprint matches the paired files.
5. Send only the prompt block and that page's prepared source package.
6. Update the route to `sent_to_inhouse` and record `inhouse_sent_at`.
7. Update the v2 suite ledger and cumulative content-rewriting report, implementation summary, and human TODO.

After receiving:

1. Place the complete response into that page's `02_REWRITTEN_CONTENT.md`.
2. Preserve the expected source fingerprint.
3. Update the route to `rewrite_received`, record `rewrite_received_at`, and then set `codex_review_required`.
4. Do not edit live page content during this handoff.

## Prompt To Give InHouse

```text
Rewrite the supplied page using your natural writing style and tone.

Make it clear, approachable, polished, useful, and pleasant for people to read. You may rewrite sentences, reorganize paragraphs, improve headings, and strengthen the presentation. You may improve or recommend content involving services, facts, prices, guarantees, locations, offers, and claims when it helps the page.

PRIORITY ORDER

When instructions compete, follow this order:

1. Preserve every section that is not explicitly marked mergeable or removable.
2. Preserve every distinct information point in the Section Preservation Inventory.
3. Preserve and strengthen the meaningful page-specific value in the Page Uniqueness Brief.
4. Use every required phrase within its target range without exceeding its maximum.
5. Improve readability, organization, tone, and persuasive value.

REQUIRED PHRASES

Required phrases are identified with paired plus signs, for example +sewer camera inspection+.

Use every phrase in the Required Phrases table within its target range. Do not exceed its maximum. You may place each phrase wherever it fits naturally; its current location and surrounding wording do not need to stay the same.

Wrap every required phrase occurrence in the rewritten page with one plus sign immediately before and after the exact phrase. Keep the phrase's spelling and word order unchanged inside the markers. The plus signs help Codex review the draft and will be removed later.

A plus-sign pair is a phrase marker only when the text inside it exactly and case-sensitively matches a phrase or approved variant in the Required Phrases table. Do not treat +1, C++, mathematical plus signs, or Markdown list markers as required phrases.

Do not use parentheses, asterisks, bold text, or other symbols as required-phrase markers. Do not force a phrase into an awkward sentence or cluster repeated phrases together merely to meet a count. If a target cannot be met naturally, preserve the best natural draft and report the conflict under Needs Codex Review.

CONTENT AND SECTION PRESERVATION

Preserve every section's reader purpose and every distinct information point listed in the Section Preservation Inventory.

You may remove or consolidate repeated wording. However, similar wording does not automatically mean the information is redundant. Do not remove a section, fact, service detail, benefit, qualification, limitation, example, reader question, or call to action merely because another section discusses a related topic.

Do not remove or merge an entire section unless the Section Preservation Inventory explicitly says that section may be merged or removed. If that field is blank or unclear, preserve the section.

When two passages truly communicate the same information, you may express that information once more clearly within the allowed section boundaries. When passages answer different reader questions or contain different details, preserve both.

Use the Required Phrases table, Section Preservation Inventory, and Page Uniqueness Brief as requirements, not as text that should appear on the public page.

PAGE UNIQUENESS

Use the Page Uniqueness Brief as page-specific context distilled from the wider website.

Preserve every item under Unique Information That Must Survive. Emphasize or develop the source-backed items under Unique Angles To Strengthen when doing so improves the page.

You may shorten Generic Overlap To Reduce, but do not remove distinct information or a section's reader purpose. Do not import topics, claims, examples, or details listed under Do Not Import.

Maintain the Page's Exclusive Job and its meaningful differences from the Closest Related Pages. Create differentiation through useful page-specific information, examples, explanations, and reader value—not merely through synonyms or superficial rephrasing.

Do not invent uniqueness. If the brief is incomplete, contradictory, or does not provide enough support for a meaningful distinction, preserve the best accurate rewrite and report the problem under Needs Codex Review.

OUTPUT

Return exactly these sections in this order:

1. Rewritten Page
   - Include the complete page.
   - Keep valid paired +required phrase+ markers.
   - Do not omit unchanged sections.
2. Required Phrase Counts
   - Report every required phrase, its target, maximum, and final count.
3. Consolidation Notes
   - List every passage consolidated or substantially reorganized.
   - State which information was preserved.
   - State "None" when no consolidation occurred.
4. InHouse Recommendations
   - List recommended services, facts, prices, guarantees, locations, offers, or claims.
   - State "None" when there are no recommendations.
5. Uniqueness Notes
   - List the unique information preserved.
   - List the unique angles strengthened.
   - List generic overlap reduced.
   - List any possible conflict with a related page.
6. Needs Codex Review
   - List any phrase target, section requirement, conflicting instruction, or unclear input you could not satisfy naturally.
   - State "None" when there are no unresolved items.

Do not include an explanation of SEO or the rewriting process inside the rewritten page.
The returned content will be placed in the page's blank 02_REWRITTEN_CONTENT.md file.
```

## Why The Preservation Instruction Matters

Removing repeated wording is useful. Removing distinct information is not.

Acceptable consolidation:

- Two paragraphs both say that grease can contribute to drain buildup.
- InHouse replaces them with one stronger explanation containing the same meaningful information.

Unacceptable deletion:

- One section explains the warning signs of buildup.
- Another explains how the service addresses buildup.
- InHouse deletes the service explanation because both sections mention buildup.

The subjects overlap, but the reader purposes and information are different.

## InHouse Output Format

```md
# Rewritten Page

[Complete rewritten content]

## Required Phrase Counts

| Required phrase | Target uses | Maximum uses | Final uses |
|---|---:|---:|---:|

## Consolidation Notes

- Section or passage:
  - What changed:
  - Information preserved:

## InHouse Recommendations

- Recommendation:
  - Where it appears:

## Uniqueness Notes

- Unique information preserved:
- Unique angle strengthened:
- Generic overlap reduced:
- Related-page conflict:

## Needs Codex Review

- Item:
  - Reason:
```

## Correction Prompt

If the first rewrite misses a requirement, send only a focused correction:

```text
Revise the previous rewrite only as needed to address the items below. Preserve the rest of the approved wording.

- [Missing phrase or incorrect count]
- [Missing information point]
- [Section purpose that was lost]
- [Unique page information or exclusive job that was weakened]
- [Content imported from another route]
- [Unnatural repetition to correct]

Return the complete corrected page with paired +required phrase+ markers and all six required output sections. Do not return only the changed fragment.
```
