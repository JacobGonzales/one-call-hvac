# Search Appearance Human TODO

## 1. Approve And Supply A Square Favicon

- Action: provide or approve a square, brand-representative favicon that remains legible at small sizes; use at least 48×48 pixels, preferably a larger multiple of 48, at a stable tracked public URL.
- Reason: the current favicon source is a 1051×718 wide logo and does not satisfy Google's 1:1 favicon shape requirement.
- Affected scope: browser favicon and Google Search favicon eligibility.
- Priority: high.
- Status: nonblocking for the repository preview-image implementation; blocks complete favicon readiness.
- Evidence: favicon section in `16_SEARCH_APPEARANCE_REPORT.md` and current `src/app/layout.tsx` icon metadata.
- Completion condition: approved square artwork is added to `public/`, root metadata points to it, the asset resolves, and generated HTML exposes the stable favicon URL.

## 2. Deploy And Verify The Current Repository State

- Action: deploy the validated repository state, then verify generated metadata on `/`, `/services`, `/about`, `/location`, and `/contact` and repeat the handoff 15 crawl checks.
- Reason: the live Worker was previously confirmed behind the repository; repository-only changes do not update production.
- Affected scope: production Open Graph/Twitter previews, robots, sitemap, placeholder noindex output, and crawl readiness.
- Priority: critical.
- Status: blocks production readiness, not local handoff completion.
- Evidence: `16_SEARCH_APPEARANCE_REPORT.md` and `15_INDEXING_AND_CRAWL_HUMAN_TODO.md`.
- Completion condition: production pages expose the absolute preview image, its dimensions/alt text, `summary_large_image`, and the intended robots/indexability metadata; `/robots.txt` and `/sitemap.xml` return the validated outputs.

## 3. Verify External Rendering After Deployment

- Action: use the relevant social preview debuggers and, when Search Console becomes available, inspect canonical pages and monitor actual title/snippet/site-name/favicon behavior without assuming immediate recrawl.
- Reason: metadata makes pages eligible but external systems choose, cache, crop, and refresh previews independently.
- Affected scope: social cards and observed Google search appearance.
- Priority: medium.
- Status: nonblocking and post-deployment.
- Evidence: non-guarantee and preview sections in `16_SEARCH_APPEARANCE_REPORT.md`.
- Completion condition: the deployed preview image renders acceptably in external cards, and any later rewrite is based on captured evidence rather than guesses.

## 4. Reopen Identity-Dependent Schema Only With Verified Facts

- Action: provide verified service-area versus storefront/hybrid status, public address if applicable, public hours, Google Business Profile URL, and approved social-profile URLs before requesting richer local identity markup.
- Reason: those facts are not established in repository evidence, and adding them now would change schema meaning.
- Affected scope: future `LocalBusiness`/`HVACBusiness`, address, hours, and `sameAs` implementation in handoff 17 or later.
- Priority: conditional.
- Status: nonblocking unless richer local schema is requested.
- Evidence: structured-data readiness matrix in `16_SEARCH_APPEARANCE_REPORT.md`.
- Completion condition: each fact has an owner-approved public source and matches visible page content before schema changes.

## Search Console And Analytics

No Search Console or Analytics setup task is assigned. Those inputs remain intentionally skipped until the project has real material to provide.

