"use client";

import { useState } from "react";

import { SectionReveal } from "@/components/SectionReveal";
import { useStickyCta } from "@/hooks/use-sticky-cta";
import { HeaderShell } from "./contact/HeaderShell";
import { ContactHeroSection } from "./contact/ContactHeroSection";
import { ContactDetailsSection } from "./contact/ContactDetailsSection";
import { ServiceAreaSection } from "./contact/ServiceAreaSection";
import { FooterShell } from "./contact/FooterShell";
import { MobileStickyCta } from "./contact/MobileStickyCta";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const stickyVisible = useStickyCta(220);

  return (
    <div className="one-call-contact">
      <HeaderShell
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
      />
      <main>
        <SectionReveal index={0}><ContactHeroSection /></SectionReveal>
        <SectionReveal index={1}><ContactDetailsSection /></SectionReveal>
        <SectionReveal index={2}><ServiceAreaSection /></SectionReveal>
      </main>
      <SectionReveal index={3}><FooterShell /></SectionReveal>
      <MobileStickyCta visible={stickyVisible} />
    </div>
  );
}
