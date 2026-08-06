import { Link } from "@/components/Link";
import { MotionVisibility } from "@/components/MotionVisibility";
import { PrimaryNavigation } from "@/components/PrimaryNavigation";
import { CONTACT_ROUTE, PHONE_NUMBER } from "@/config/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function HeaderShell({
  menuOpen,
  onMenuToggle,
}: {
  menuOpen: boolean;
  onMenuToggle: () => void;
}) {
  return (
    <>
      <header className="oc-header" data-section="nav:section-16" aria-label="nav">
        <Link href="/" className="oc-header-logo" aria-label="One Call Heating & Air home">
          <Logo />
        </Link>
        <nav className="oc-desktop-nav" aria-label="Primary navigation">
          <PrimaryNavigation />
        </nav>
        <div className="oc-header-actions">
          <a href="tel:+18018642045" className="oc-header-phone">
            <Icon name="phone" />
            {PHONE_NUMBER}
          </a>
          <a href={CONTACT_ROUTE} className="oc-button oc-button-amber">
            Free Estimate
          </a>
          <button
            type="button"
            className="oc-menu-button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={onMenuToggle}
          >
            <Icon name="menu" />
          </button>
        </div>
      </header>
      <MotionVisibility
        className={`oc-drawer${menuOpen ? " is-open" : ""}`}
        visible={menuOpen}
        direction="right"
        aria-hidden={!menuOpen}
      >
        <button type="button" aria-label="Close menu" onClick={onMenuToggle}>
          ×
        </button>
        <PrimaryNavigation mobile onNavigate={onMenuToggle} />
        <a href="tel:+18018642045">{PHONE_NUMBER}</a>
      </MotionVisibility>
    </>
  );
}
