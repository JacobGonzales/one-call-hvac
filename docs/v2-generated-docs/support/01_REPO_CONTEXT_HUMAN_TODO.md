# Repository Context Human TODO

No human action blocks the next setup-and-dependencies handoff.

| Action | Reason | Affected scope | Priority | Status | Evidence | Completion condition |
|---|---|---|---|---|---|---|
| Publish the corrected OpenNext Worker | The live domain currently serves the old `Hello world` Worker and this desktop session has no Cloudflare authentication | Cloudflare Worker and `utahonecall.com` | High | Blocking the live deployment fix | OpenNext/Wrangler configuration and validation output | Connected Git build deploys the commit, or an authenticated operator runs `npm run deploy`, and the domain serves the Next.js app |
| Verify root, direct routes, and 404 behavior after publication | Dry run proves the upload shape but not live routing | `/`, `/services`, `/about`, `/contact`, placeholders, unmatched path | High after publish | Blocking production verification | `ROUTE_INVENTORY.md` | Live responses render the intended application and unmatched paths return branded HTTP 404 responses |
| Approve indexing policy for placeholder paths | Placeholder routes have canonicals but no explicit index/noindex decision | `/about/social-media`, `/location`, `/emergency` | High before SEO implementation/launch | Nonblocking now; blocking relevant indexing changes | `ROUTE_INVENTORY.md` | Each placeholder has an approved index/noindex decision |
| Verify Formspree account ownership, recipients, and production delivery | Repository source proves the public endpoint but cannot prove external account behavior | Contact form | High before launch | Nonblocking for documentation | `INTEGRATIONS_INVENTORY.md` | Authorized test submission and account review confirm intended delivery and response handling |
