import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";
import ContactPage from "@/screens/ContactPage";
import "@/screens/contact/contact.css";

export const metadata: Metadata = createPageMetadata({
  title: "Contact | One Call Heating & Air",
  description:
    "Contact One Call Heating & Air for service, repairs, maintenance, or an HVAC installation estimate.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
