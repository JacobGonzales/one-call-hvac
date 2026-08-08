# Free Quote Form Export

This folder is an isolated copy of the free quote form styling used on the
Mountain West homepage. The current application does not import anything from
this folder.

## Files

- `FreeQuoteForm.tsx` — styled React client component
- `free-quote-form-helpers.ts` — local values, validation, sanitization, and
  request-payload helpers

Copy both files into the other Next.js repository. The component uses the same
Tailwind, MUI, MUI Icons, and Motion styling as the current homepage form.

## Resend Contract

The form submits JSON to `POST /api/inquiries`. Keep that route in the new
repository or change the fetch URL inside `FreeQuoteForm.tsx`. A successful
endpoint should return:

```json
{
  "data": {
    "customerConfirmationSent": true
  }
}
```

Keep the Resend API key in the server route only. Do not expose it through a
`NEXT_PUBLIC_` environment variable.

## Use

```tsx
import { FreeQuoteForm } from "@/exports/free-quote-form/FreeQuoteForm";

export function QuoteSection() {
  return <FreeQuoteForm />;
}
```

Pass `serviceOptions` to replace the example service list:

```tsx
<FreeQuoteForm
  serviceOptions={[
    { label: "Website Design", subServices: ["Landing Page", "Business Site"] },
    { label: "SEO" },
    { label: "Other" },
  ]}
/>
```
