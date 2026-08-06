import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";
import ServicesPage from "@/screens/ServicesPage";
import "@/screens/services/services.css";

export const metadata: Metadata = createPageMetadata({
  title: "HVAC Services | One Call Heating & Air",
  description:
    "Explore One Call heating and cooling installation, repair, tune-up, and maintenance services across northern Utah.",
  path: "/services",
});

export default function Page() {
  return <ServicesPage />;
}
