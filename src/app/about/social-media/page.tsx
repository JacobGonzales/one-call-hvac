import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";
import PlaceholderPage from "@/screens/PlaceholderPage";
import "@/screens/placeholder/placeholder.css";
import "@/screens/services/services.css";

export const metadata: Metadata = createPageMetadata({
  title: "Social Media | One Call Heating & Air",
  description: "Follow One Call Heating & Air project and community updates.",
  path: "/about/social-media",
});

export default function Page() {
  return <PlaceholderPage pathname="/about/social-media" />;
}
