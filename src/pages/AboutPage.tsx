import { useState } from "react";

import { SectionReveal } from "@/components/SectionReveal";
import { useStickyCta } from "@/hooks/use-sticky-cta";
import { HeaderShell } from "./about/HeaderShell";
import { OneCrewSection } from "./about/OneCrewSection";
import { PeopleSection } from "./about/PeopleSection";
import { MeetJesseSection } from "./about/MeetJesseSection";
import { ValuesSection } from "./about/ValuesSection";
import { ServiceAreaSection } from "./about/ServiceAreaSection";
import { WorkWithOneCallSection } from "./about/WorkWithOneCallSection";
import { FooterShell } from "./about/FooterShell";
import { MobileStickyCta } from "./about/MobileStickyCta";
import "./about/about.css";

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const stickyVisible = useStickyCta(280);

  return (
    <div className="one-call-about">
      <HeaderShell
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
      />
      <main>
        <SectionReveal index={0}><OneCrewSection /></SectionReveal>
        <SectionReveal index={1}><PeopleSection /></SectionReveal>
        <SectionReveal index={2}><MeetJesseSection /></SectionReveal>
        <SectionReveal index={3}><ValuesSection /></SectionReveal>
        <SectionReveal index={4}><ServiceAreaSection /></SectionReveal>
        <SectionReveal index={5}><WorkWithOneCallSection /></SectionReveal>
      </main>
      <SectionReveal index={6}><FooterShell /></SectionReveal>
      <MobileStickyCta visible={stickyVisible} />
    </div>
  );
}
