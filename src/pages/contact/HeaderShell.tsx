import { Image } from "@/components/Image";
import { Link } from "@/components/Link";
import { MotionVisibility } from "@/components/MotionVisibility";
import { PrimaryNavigation } from "@/components/PrimaryNavigation";
import { ASSET_BASE, HOME_ROUTE, PHONE, EMAIL } from "@/config/site";
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
        className="occ-drawer"
        data-open={menuOpen}
        visible={menuOpen}
        direction="right"
        aria-hidden={!menuOpen}
      >
        <button type="button" aria-label="Close menu" onClick={onMenuToggle}>×</button>
        <PrimaryNavigation mobile onNavigate={onMenuToggle} />
        <a href="tel:+18018642045" className="occ-drawer-phone">{PHONE}</a>
        <a href="tel:+18018642045" className="occ-button occ-button-amber">Call Now</a>
      </MotionVisibility>

      <div className="occ-announce">
        <div className="occ-container occ-announce-inner">
          <div className="occ-announce-left">
            <a href="tel:+18018642045"><Icon name="phone" /><span>{PHONE}</span></a>
            <a href={`mailto:${EMAIL}`}><Icon name="mail" /><span>{EMAIL}</span></a>
          </div>
          <div className="occ-announce-right"><span />24/7 Emergency HVAC</div>
        </div>
      </div>

      <header className="occ-nav-wrap">
        <div className="occ-container occ-nav">
          <Link href={HOME_ROUTE} className="occ-nav-logo">
            <Image
              src={`${ASSET_BASE}/logo.png`}
              alt="One Call Heating & Air"
              width={1051}
              height={718}
              priority
            />
          </Link>
          <nav className="occ-nav-links" aria-label="Primary navigation">
            <PrimaryNavigation />
          </nav>
          <div className="occ-nav-right">
            <a href="tel:+18018642045" className="occ-nav-phone"><Icon name="phone" />{PHONE}</a>
            <a href="tel:+18018642045" className="occ-button occ-button-amber">Call Now</a>
            <button
              type="button"
              className="occ-menu"
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
