import { useState } from "react";

import { SectionReveal } from "@/components/SectionReveal";
import { useStickyCta } from "@/hooks/use-sticky-cta";
import { HeaderShell } from "./home/HeaderShell";
import { HeroSection } from "./home/HeroSection";
import { ServicesSection } from "./home/ServicesSection";
import { LocalCrewSection } from "./home/LocalCrewSection";
import { PricingSection } from "./home/PricingSection";
import { ProcessSection } from "./home/ProcessSection";
import { ServiceAreaSection } from "./home/ServiceAreaSection";
import { FaqSection } from "./home/FaqSection";
import { CallToActionSection } from "./home/CallToActionSection";
import { FooterShell } from "./home/FooterShell";
import { MobileStickyCta } from "./home/MobileStickyCta";
import "./home/home.css";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const stickyVisible = useStickyCta(380);

  return (
    <div className="one-call-page">
      <HeaderShell
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((current) => !current)}
      />
      <main>
        <SectionReveal index={0}><HeroSection /></SectionReveal>
        <SectionReveal index={1}><ServicesSection /></SectionReveal>
        <SectionReveal index={2}><LocalCrewSection /></SectionReveal>
        <SectionReveal index={3}><PricingSection /></SectionReveal>
        <SectionReveal index={4}><ProcessSection /></SectionReveal>
        <SectionReveal index={5}><ServiceAreaSection /></SectionReveal>
        <SectionReveal index={6}>
          <FaqSection
            openFaq={openFaq}
            onToggle={(index) =>
              setOpenFaq((current) => (current === index ? null : index))
            }
          />
        </SectionReveal>
        <SectionReveal index={7}><CallToActionSection /></SectionReveal>
      </main>
      <SectionReveal index={8}><FooterShell /></SectionReveal>
      <MobileStickyCta visible={stickyVisible} />
    </div>
  );
}
