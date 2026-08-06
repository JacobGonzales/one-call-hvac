import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";
import PlaceholderPage from "@/screens/PlaceholderPage";
import "@/screens/placeholder/placeholder.css";
import "@/screens/services/services.css";

export const metadata: Metadata = createPageMetadata({
  title: "24/7 Emergency HVAC | One Call Heating & Air",
  description:
    "Call One Call Heating & Air for 24/7 emergency heating and cooling help across northern Utah.",
  path: "/emergency",
});

export default function Page() {
  return <PlaceholderPage pathname="/emergency" />;
}
