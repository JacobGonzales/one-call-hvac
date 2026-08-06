import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";
import PlaceholderPage from "@/screens/PlaceholderPage";
import "@/screens/placeholder/placeholder.css";
import "@/screens/services/services.css";

export const metadata: Metadata = createPageMetadata({
  title: "Location | One Call Heating & Air",
  description:
    "One Call Heating & Air is based in Brigham City and serves communities across northern Utah.",
  path: "/location",
});

export default function Page() {
  return <PlaceholderPage pathname="/location" />;
}
