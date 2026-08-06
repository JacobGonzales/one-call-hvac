import { useState } from "react";

import { SectionReveal } from "@/components/SectionReveal";
import { useStickyCta } from "@/hooks/use-sticky-cta";
import { HeaderShell } from "./services/HeaderShell";
import { ServicesHeroSection } from "./services/ServicesHeroSection";
import { ServiceToc } from "./services/ServiceToc";
import {
  InstallSection,
  MaintenanceSection,
  RepairSection,
  ServiceTuneUpSection,
} from "./services/ServiceSections";
import { BundleSection } from "./services/BundleSection";
import { FooterShell } from "./services/FooterShell";
import { MobileStickyCta } from "./services/MobileStickyCta";
import "./services/services.css";

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const stickyVisible = useStickyCta(280);

  return (
    <div className="one-call-services">
      <HeaderShell
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((current) => !current)}
      />
      <main>
        <SectionReveal index={0}><ServicesHeroSection /></SectionReveal>
        <SectionReveal index={1}><ServiceToc /></SectionReveal>
        <SectionReveal index={2}><InstallSection /></SectionReveal>
        <SectionReveal index={3}><RepairSection /></SectionReveal>
        <SectionReveal index={4}><ServiceTuneUpSection /></SectionReveal>
        <SectionReveal index={5}><MaintenanceSection /></SectionReveal>
        <SectionReveal index={6}><BundleSection /></SectionReveal>
      </main>
      <SectionReveal index={7}><FooterShell /></SectionReveal>
      <MobileStickyCta visible={stickyVisible} />
    </div>
  );
}
