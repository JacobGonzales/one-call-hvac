# Local SEO Human TODO

No human action blocks completion of handoff 10 or the next canonical handoff.

## 1. Verify The Google Business Profile

- Action: confirm ownership and record the exact public business name, primary category, phone, website URL, business type, hours, and selected service areas.
- Reason: the repository has Google Maps search links but no verified profile URL or profile export.
- Affected scope: Google Maps/Search local appearance and future entity reconciliation.
- Priority: high after deployment.
- Status: nonblocking for repository completion.
- Evidence: `10_LOCAL_SEO_REPORT.md`.
- Completion condition: a dated owner-approved profile fact record and canonical profile URL are available.

## 2. Confirm Service-Area Versus Hybrid Status

- Action: confirm whether customers are received at a permanently signed, staffed Brigham City location or whether One Call only travels to customers.
- Reason: Google tells service-area businesses without a customer-facing storefront to hide the address; hybrid businesses may show a valid staffed address.
- Affected scope: Business Profile, public contact copy, and future LocalBusiness structured data.
- Priority: high.
- Status: nonblocking now; blocking before adding a public address or LocalBusiness markup.
- Evidence: Google Business Profile guidance linked in the report.
- Completion condition: owner approves either `service-area business` or `hybrid business` with evidence.

## 3. Provide Complete Address Facts Only If Publicly Eligible

- Action: if the business is a verified hybrid/storefront operation, provide the full street address, locality, region, postal code, country, public-facing hours, and storefront evidence.
- Reason: Google-supported LocalBusiness structured data requires a physical address; a partial or residential address must not be invented or exposed.
- Affected scope: future `LocalBusiness` or `HVACBusiness` schema and visible contact information.
- Priority: medium.
- Status: conditional and nonblocking.
- Evidence: current JSON-LD intentionally omits `PostalAddress` and `LocalBusiness`.
- Completion condition: approved facts support complete, page-visible markup or the owner confirms that these fields should remain absent.

## 4. Confirm Coverage And Public Claims

- Action: verify the seven counties, 41 communities, business hours, 24/7 emergency language, license/insurance wording, and whether commercial service is offered throughout the listed area.
- Reason: this pass reused repository-visible facts but did not independently validate business records or schedule capacity.
- Affected scope: location, contact, footers, schema, services, and About content.
- Priority: high.
- Status: nonblocking for code completion.
- Evidence: `10_LOCAL_SEO_REPORT.md` and prior owner TODO files.
- Completion condition: each fact has approved wording, an evidence owner, and a review date, or is removed.

## 5. Deploy And Validate Production

- Action: deploy the reviewed repository state when ready, then inspect homepage and `/location` source and test `/location` to `/contact` on `https://utahonecall.com`.
- Reason: this run validated local output only.
- Affected scope: production JSON-LD, footer label, and conversion navigation.
- Priority: medium.
- Status: nonblocking.
- Evidence: `10_LOCAL_SEO_IMPLEMENTATION_SUMMARY.md`.
- Completion condition: production source contains the expected area relationships and the public journey works without console errors.

