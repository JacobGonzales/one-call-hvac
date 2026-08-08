# Repository Context Human TODO

No human action blocks canonical run 03, the app-setup and dependencies handoff.

| Action | Reason | Affected scope | Priority | Blocking status | Evidence | Completion condition |
|---|---|---|---|---|---|---|
| Deploy and verify the search metadata fixes | The repository now generates robots, sitemap, and placeholder noindex metadata, but production will not change until the new build is published | Cloudflare Worker, `/robots.txt`, `/sitemap.xml`, `/emergency`, `/about/social-media` | High | Nonblocking for run 03; blocking live search-metadata sign-off | `ROUTE_INVENTORY.md`, implementation summary | Live robots and sitemap return HTTP 200 with the documented content and both placeholders emit `noindex, follow` |
| Verify one authorized production quote submission | Source and mocked tests cannot prove the Resend sending domain, Cloudflare secret, sender, recipient, owner notification, and customer confirmation all work together | `/contact`, homepage quote form, `POST /api/inquiries`, Resend | High before relying on online lead delivery | Nonblocking for run 03; blocking production integration sign-off | `ENVIRONMENT_VARIABLES.md`, `INTEGRATIONS_INVENTORY.md` | A real authorized submission reaches the configured business recipient and the customer confirmation result is observed |
| Confirm the configured notification recipient remains the intended business inbox | `RESEND_TO_EMAIL` is operational configuration checked into `wrangler.jsonc`; changing ownership requires an explicit business decision | Quote-delivery operations | Medium | Nonblocking | `wrangler.jsonc`, `ENVIRONMENT_VARIABLES.md` | Business owner confirms the inbox or supplies an approved replacement |
