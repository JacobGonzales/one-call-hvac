import { Image } from "@/components/Image";
import { Link } from "@/components/Link";
import { MotionVisibility } from "@/components/MotionVisibility";
import { PrimaryNavigation } from "@/components/PrimaryNavigation";
import { ASSET_BASE, HOME_ROUTE, CONTACT_ROUTE, PHONE, EMAIL } from "@/config/site";
import { Icon } from "./Icon";

export function HeaderShell({
  menuOpen,
  onMenuToggle,
}: {
  menuOpen: boolean;
  onMenuToggle: () => void;
}) {
  return (
    <>
      <MotionVisibility
        className="oca-drawer"
        data-open={menuOpen}
        visible={menuOpen}
        direction="right"
        aria-hidden={!menuOpen}
      >
        <button type="button" aria-label="Close menu" onClick={onMenuToggle}>
          ×
        </button>
        <PrimaryNavigation mobile onNavigate={onMenuToggle} />
        <a href="tel:+18018642045" className="oca-drawer-phone">{PHONE}</a>
        <Link href={CONTACT_ROUTE} className="oca-button oca-button-amber">Free Estimate</Link>
      </MotionVisibility>

      <div className="oca-announce">
        <div className="oca-container oca-announce-inner">
          <div className="oca-announce-left">
            <a href="tel:+18018642045"><Icon name="phone" /><span>{PHONE}</span></a>
            <a href={`mailto:${EMAIL}`}><Icon name="mail" /><span>{EMAIL}</span></a>
          </div>
          <div className="oca-announce-right"><span />24/7 Emergency HVAC</div>
        </div>
      </div>

      <header className="oca-nav-wrap">
        <div className="oca-container oca-nav">
          <Link href={HOME_ROUTE} className="oca-nav-logo">
            <Image
              src={`${ASSET_BASE}/logo.png`}
              alt="One Call Heating & Air"
              width={1051}
              height={718}
              priority
            />
          </Link>
          <nav className="oca-nav-links" aria-label="Primary navigation">
            <PrimaryNavigation />
          </nav>
          <div className="oca-nav-right">
            <a href="tel:+18018642045" className="oca-nav-phone">
              <Icon name="phone" />{PHONE}
            </a>
            <Link href={CONTACT_ROUTE} className="oca-button oca-button-outline">Free Quote</Link>
            <button
              type="button"
              className="oca-menu"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={onMenuToggle}
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
