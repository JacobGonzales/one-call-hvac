import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";
import AboutPage from "@/screens/AboutPage";
import "@/screens/about/about.css";

export const metadata: Metadata = createPageMetadata({
  title: "About | One Call Heating & Air",
  description:
    "Meet the owner-operated One Call Heating & Air team serving communities across northern Utah.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
