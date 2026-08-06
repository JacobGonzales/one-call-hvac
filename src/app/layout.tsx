import type { Metadata } from "next";
import type { ReactNode } from "react";

import { RouteEffects } from "@/components/RouteEffects";
import { SITE_URL } from "@/config/site";
import "@/styles/interactions.css";
import "@/styles/navigation.css";

export const runtime = "nodejs";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "One Call Heating & Air | Northern Utah HVAC",
    template: "%s | One Call Heating & Air",
  },
  description: "Owner-operated heating and air service across northern Utah.",
  icons: {
    icon: "/onecall-heating-and-air/logo.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RouteEffects />
        {children}
      </body>
    </html>
  );
}
