# Integrations Inventory

## Active External Integrations

| Integration | Direction | Source | Configuration model | Verification status |
|---|---|---|---|---|
| Resend | Server outbound email | `src/app/api/inquiries/route.ts`, `src/lib/resend-inquiries.ts` | Server API key plus required sender and recipient settings | Source and mocked tests exist; user reports Cloudflare secret configured; production delivery not exercised in this run |
| Google Maps | Browser iframe and outbound navigation | `src/screens/home/ServiceAreaSection.tsx`, `src/lib/google-reviews.ts`, `src/components/GoogleReviewsSection.tsx` | Public keyless embed/search URLs | Source verified; no Google API key required |
| Manual Google reviews | Repository data rendered in browser | `src/lib/google-reviews.ts`, `src/components/GoogleReviewsSection.tsx` | Static names, ratings, relative dates, and review copy | Tests cover data and carousel behavior; content freshness remains manual |
| Google Fonts | Browser outbound stylesheet/font requests | Route CSS `@import` statements | Hardcoded public Google Fonts URLs | Source verified; local fallback fonts apply when unavailable |
| Cloudflare Workers via OpenNext | Build/deploy outbound and public hosting inbound | `open-next.config.ts`, `wrangler.jsonc`, `package.json` | Node-compatible Worker, assets binding, self-reference binding, custom domain | Production currently returns Cloudflare-hosted Next.js responses; exact local working-tree deployment parity is not asserted |
| Telephone handlers | Browser/device action | `tel:` anchors and `src/config/site.ts` | Public contact values | Source verified; behavior depends on device/browser |
| Email handlers | Browser/device action | `mailto:` anchors and `src/config/site.ts` | Public business email | Source verified; behavior depends on configured mail client |
| Bright Automations credit | Browser outbound navigation | Footer components | Hardcoded public URL | Source verified; destination not tested |

## Quote-Request Boundary

The homepage and contact-page forms post JSON to `POST /api/inquiries`. The application owns:

- client and server validation/sanitization
- required contact consent
- a honeypot field
- declared request-size rejection
- owner notification email composition
- best-effort customer confirmation
- Resend error translation and phone fallback

Resend owns account access, sending-domain verification, email transport, provider retention, and delivery outcomes. No database or internal inquiry persistence exists; successful delivery depends on email.

## Browser Platform Integrations

- Next.js App Router, `next/link`, and `next/navigation`
- native hash scrolling and scroll positioning through `RouteEffects`
- passive scroll listeners for sticky CTA visibility
- Motion reduced-motion preference handling and UI animation
- embedded Google Maps iframe

## Not Found

- Analytics or tag manager
- Search Console verification tag/file
- CMS or database
- Authentication or user accounts
- Booking/calendar integration
- Payments or checkout
- CRM API synchronization
- Error/performance monitoring
- Object storage or configured media CDN
- Google Places/Business Profile API client
- Verified Google Business Profile ownership record or canonical profile URL

Installed packages alone are not counted as active integrations without source/config/script evidence.

## Operational Risks And Refresh Conditions

- Run one authorized live quote test before relying on Resend for production leads.
- Confirm the checked-in recipient is the intended operational inbox.
- Manual Google review relative dates and totals do not update automatically.
- Google Maps and Fonts depend on third-party availability and browser policy.
- Refresh this inventory when adding analytics, Search Console verification, booking, payments, CRM, a database/CMS, monitoring, API-backed reviews, or new Cloudflare bindings.
