# InHouse AI Rewrite Handoff 2.0

## Purpose

Give InHouse a concrete editorial assignment, a short page brief, and the complete current page copy. InHouse writes the page; Codex retains audits, fingerprints, cross-route comparisons, implementation details, and final verification.

## Codex Transfer Rules

Before sending:

1. Read the shared execution contract, content-rewriting README, and suite ledger.
2. Give the user the required pre-execution rundown before changing transfer or status files.
3. Confirm the route status is `prepared` and the source fingerprint is current.
4. Confirm all route-owned content states are present, including FAQ answers, quick answers, disclosures, tabs, and carousel slides.
5. Confirm the Simple InHouse Brief lists every requested keyword or approved variant with a target count and hard maximum.
6. Send only the prompt below, the route's Simple InHouse Brief, narrow Metadata section, and Source Content.
7. Do not send the Page Uniqueness Brief, preservation tables, keyword-source analysis, Search Console notes, fingerprints, paths, or implementation reports.
8. Update the route to `sent_to_inhouse`, record `inhouse_sent_at`, and update the suite ledger plus cumulative content-rewriting report, summary, and TODO.

After receiving:

1. Place the complete response in that route's `02_REWRITTEN_CONTENT.md`.
2. Preserve the expected source fingerprint.
3. Update the route to `rewrite_received`, record `rewrite_received_at`, and set `codex_review_required`.
4. Update the suite ledger and cumulative content-rewriting outputs.
5. Do not change live application content during this handoff.

## Prompt To Give InHouse

```text
ONE CALL HEATING & AIR PAGE REWRITE INSTRUCTIONS

I am rewriting website pages for One Call Heating & Air, an owner-operated HVAC company serving northern Utah. I will provide one page at a time with a short page brief, metadata, keyword targets, protected content, and the complete current copy.

For each page, produce a complete rewrite that is useful to a homeowner, sounds like a real local HVAC company, and gives the reader a clear next step.

WHAT THE REWRITE NEEDS TO DO

Remove repetition. Do not let several sections repeat the same promises about honesty, local service, fast help, or owner accountability. Give each section a distinct job and make each one teach the reader something new.

Add real substance. Use the verified facts in the supplied page to give homeowners concrete information they can use. Depending on the page, that can include:

- how to choose between repair, replacement, a tune-up, or a maintenance plan
- what happens when the customer calls
- what the technician checks or explains during the visit
- steps in the service or estimate process
- warning signs, practical questions, or decision factors
- side-by-side distinctions between service options
- realistic homeowner situations grounded in the supplied facts

Do not pad the page with generic HVAC advice. If a heading promises to answer a question, the section must answer it directly.

Make the service experience concrete. Prefer language such as “You call, Jesse answers, we diagnose the system, explain the options, and you decide” over vague statements about guidance, quality, passion, or customer care.

Keep the page focused on its assigned job. Do not turn every page into a general company overview. Preserve the intended reader, decision, and next action in the Simple InHouse Brief.

Preserve useful coverage, not weak wording. Keep the important facts, distinctions, qualifications, questions, answers, and calls to action. You may rewrite headings, reorganize paragraphs, combine repetitive marketing passages, shorten filler, and replace weak explanations. Keep all structural and interactive content identified in the source, including complete FAQ answers, quick answers, disclosures, and carousel states.

PROTECTED CONTENT AND ACCURACY

- Do not invent or expand services, prices, discounts, guarantees, credentials, response times, locations, equipment support, tax incentives, rebates, warranties, or business commitments.
- Keep phone numbers, email addresses, link destinations, prices, geographic facts, safety instructions, offer terms, and verified service details accurate.
- Content marked [LOCKED] must remain unchanged. This includes customer-authored reviews, form labels, helper text, consent language, disclosures, and operational UI.
- Do not change the route or suggest a new page.
- If a supplied claim seems unclear or risky, retain the most accurate source wording and report it briefly in Writer Notes.

KEYWORDS: COUNT, NOT PLACEMENT

The Simple InHouse Brief lists each requested phrase or approved variant with a target count and hard maximum.

- Meet the target count naturally whenever possible.
- A target of 1 means use the phrase once. A target of 1–2 means one or two uses are acceptable.
- Never exceed the hard maximum.
- The target controls how many times the phrase appears, not where it appears.
- Move a phrase to any heading, paragraph, answer, or callout where it reads naturally. It does not need to remain in its original source location.
- Use only the exact requested phrase or an approved variant supplied in the brief.
- Distribute repeated phrases instead of clustering them.
- Wrap every use in paired plus signs, such as +air conditioning repair+, so Codex can verify the final count.
- If meeting a target would make the copy awkward or misleading, use the best natural count and explain the shortfall in Writer Notes. Do not stuff the phrase.

METADATA

- The supplied meta title is marked DO NOT CHANGE. Do not rewrite it or suggest another title.
- You may rewrite the meta description when you can make it more useful and accurate.
- A rewritten meta description must be no longer than 160 characters, including spaces.
- If the current description is already stronger, return “Unchanged.”

TONE

Direct, confident, local, practical, and easy to understand. Zero jargon, zero canned SEO language, zero exaggerated sales pressure, and zero “we are passionate about comfort” filler.

The voice is: you call, a real local owner answers, the system gets diagnosed, the options are explained, and you decide what happens next.

OUTPUT

Return exactly these four sections:

1. Rewritten Page
   - Return the complete page, not excerpts or a summary.
   - Keep useful structural markers such as [H1], [H2], [H3], [LINK], [BUTTON], [QUESTION], [ANSWER], [INTERACTIVE], and [LOCKED].
   - Keep all valid paired +keyword phrase+ markers.
2. Meta Description
   - Return the proposed description or “Unchanged.”
   - Include the exact character count when changed.
3. Keyword Check
   - List every requested phrase or approved variant.
   - Report its target, maximum, version used, final count, and pass/needs-review status.
   - A phrase can appear anywhere on the page; judge the count, not its location.
4. Writer Notes
   - Include only genuine accuracy concerns, keyword shortfalls, changed claims requiring approval, or useful owner recommendations.
   - Write “None” when there are no issues.

Do not explain SEO. Do not provide a long change log. Spend the effort on writing a page that is worth reading.
```

## Expected Output

```md
## Rewritten Page

[Complete rewritten page]

## Meta Description

- Description: Unchanged.
- Character count: Not applicable.

## Keyword Check

| Requested phrase | Target | Maximum | Version used | Final count | Status |
|---|---:|---:|---|---:|---|

## Writer Notes

None.
```

## Focused Correction Prompt

```text
Revise the previous rewrite only where needed to fix the items below. Preserve the rest of the draft.

- [Keyword below target or above maximum]
- [Awkward keyword use]
- [Repeated or generic passage]
- [Missing useful information]
- [Changed or invented claim]
- [Locked content changed]
- [Important action or answer lost]
- [Meta description over 160 characters]

Remember: keyword targets control final frequency, not placement. Move a phrase wherever it reads naturally.

Return the complete page again using the same four-section format.
```
