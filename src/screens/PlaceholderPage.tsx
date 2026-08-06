"use client";

import { useState } from "react";

import { Link } from "@/components/Link";
import { SectionReveal } from "@/components/SectionReveal";
import {
  CONTACT_ROUTE,
  EMERGENCY_ROUTE,
  LOCATION_ROUTE,
  PHONE_HREF,
  SOCIAL_MEDIA_ROUTE,
} from "@/config/site";
import { FooterShell } from "./services/FooterShell";
import { HeaderShell } from "./services/HeaderShell";

const PLACEHOLDER_PAGES = {
  [LOCATION_ROUTE]: {
    eyebrow: "Visit One Call",
    title: "Location.",
    accent: "Northern Utah.",
    description:
      "Our complete location, service-area, and directions page is coming soon.",
    action: "Contact Us",
    href: CONTACT_ROUTE,
  },
  [EMERGENCY_ROUTE]: {
    eyebrow: "24/7 HVAC Help",
    title: "Emergency.",
    accent: "We Answer.",
    description:
      "Our full emergency-service page is coming soon. If your heating or cooling system is down now, call One Call directly.",
    action: "Call Now",
    href: PHONE_HREF,
  },
  [SOCIAL_MEDIA_ROUTE]: {
    eyebrow: "About One Call",
    title: "Social Media.",
    accent: "Follow Along.",
    description:
      "Our social channels, project updates, and community stories will live here soon.",
    action: "Contact Us",
    href: CONTACT_ROUTE,
  },
} as const;

type PlaceholderPath = keyof typeof PLACEHOLDER_PAGES;

export default function PlaceholderPage({
  pathname,
}: {
  pathname: PlaceholderPath;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const page = PLACEHOLDER_PAGES[pathname];

  return (
    <div className="one-call-services placeholder-page">
      <HeaderShell
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((current) => !current)}
      />
      <main>
        <SectionReveal index={0}>
          <section className="placeholder-hero ocs-airflow">
            <div className="ocs-container placeholder-hero-inner">
              <p className="placeholder-eyebrow">{page.eyebrow}</p>
              <h1>
                {page.title}
                <br />
                <em>{page.accent}</em>
              </h1>
              <p className="placeholder-description">{page.description}</p>
              <div className="placeholder-actions">
                <Link href={page.href} className="ocs-button ocs-button-amber">
                  {page.action}
                </Link>
                <Link href="/" className="ocs-button ocs-button-ghost">
                  Back Home
                </Link>
              </div>
            </div>
          </section>
        </SectionReveal>
      </main>
      <SectionReveal index={1}><FooterShell /></SectionReveal>
    </div>
  );
}
