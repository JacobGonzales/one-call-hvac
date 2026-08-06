# Integrations Inventory

## Active External Integrations

| Integration | Direction | Source | Configuration model | Runtime dependency | Verification status |
|---|---|---|---|---|---|
| Formspree | Browser form POST outbound | `src/screens/contact/ContactDetailsSection.tsx` | Hardcoded public form action | Network access and external Formspree account | Source verified; submission/delivery not tested |
| Google Fonts | Browser stylesheet/font requests outbound | Route CSS `@import` statements | Hardcoded public URL | External font availability | Source verified; network rendering not tested |
| Telephone handlers | Browser/device action | `tel:` anchors and `src/config/site.ts` | Public literals/constants | Device/browser telephony support | Source verified |
| Email handlers | Browser/device action | `mailto:` anchors and `src/config/site.ts` | Public literals/constants | Configured mail client | Source verified |
| Bright Automations credit link | Browser outbound navigation | Footer components | Hardcoded public URL | External website availability | Source verified; destination not tested |
| Cloudflare Workers via OpenNext | Build/deploy outbound and public hosting inbound | `open-next.config.ts`, `wrangler.jsonc`, `package.json` | Node-compatible worker, asset binding, custom domain route | Connected Cloudflare account or secret deployment token | Local packaging/dry run required; authenticated publish still required |

## Browser Platform Integrations

- Next.js App Router and `next/link` implement routing.
- Scrolling: `scrollTo`, `scrollIntoView`, and `requestAnimationFrame` implement route/hash positioning.
- Passive scroll listener: drives sticky mobile CTA visibility.
- Motion/reduced-motion: Motion reads user motion preferences and animates client UI.

## Not Found

- Analytics/tag manager
- Search Console verification file or tag
- CMS or database
- Authentication or user accounts
- Booking/calendar integration
- Payments or checkout
- CRM API integration beyond Formspree delivery
- Error monitoring
- Application-owned API/server functions
- Object storage or media CDN configuration

Installed MUI, Radix, and several supporting packages are not active integrations without repository source/config/script evidence.

## Operational Boundaries

- Form submissions leave the application directly; no repository code controls delivery, retention, spam protection, success handling, or external account access.
- Fonts and the external credit link rely on third-party availability.
- Public contact values are browser-visible and are not secrets.
- No external integration credentials are stored or read by application code. Wrangler authentication stays outside the browser application.
- `utahonecall.com` currently serves a pre-existing plain-text `Hello world` Worker until the corrected OpenNext deployment is published.

## Refresh Conditions

Refresh when adding analytics, a CMS/database, server functions, authentication, booking, payments, CRM synchronization, monitoring, locally hosted fonts, or deployment-provider bindings.
