import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";
import HomePage from "@/screens/HomePage";
import "@/screens/home/home.css";

export const metadata: Metadata = createPageMetadata({
  title: "One Call Heating & Air | Northern Utah HVAC",
  description:
    "Owner-operated HVAC installation, repair, seasonal service, and maintenance across northern Utah.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
