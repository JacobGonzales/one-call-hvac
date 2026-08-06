import { Image } from "@/components/Image";
import { Link } from "@/components/Link";
import { type ReactNode } from "react";
import { ASSET_BASE, HOME_ROUTE, SERVICES_ROUTE, ABOUT_ROUTE, CONTACT_ROUTE, PHONE, EMAIL } from "@/config/site";
import { IconName, Icon } from "./Icon";

export function FooterShell() {
  return (
    <footer className="occ-footer occ-airflow">
      <div className="occ-container">
        <div className="occ-footer-grid">
          <div className="occ-footer-about">
            <Link href={HOME_ROUTE}>
              <Image src={`${ASSET_BASE}/logo.png`} alt="One Call Heating & Air" width={1051} height={718} />
            </Link>
            <p>
              Owner-operated HVAC, headquartered in Brigham City. Heating,
              cooling, and 24/7 service across all seven northern Utah counties
              — from Salt Lake City to the Idaho border.
            </p>
          </div>
          <FooterLinks heading="Services" links={[
            ["Install", `${SERVICES_ROUTE}#install`],
            ["Repair", `${SERVICES_ROUTE}#repair`],
            ["Service & Tune-Ups", `${SERVICES_ROUTE}#service`],
            ["Gold Membership", `${SERVICES_ROUTE}#maintenance`],
          ]} />
          <FooterLinks heading="Company" links={[
            ["About Us", ABOUT_ROUTE],
            ["All Services", SERVICES_ROUTE],
            ["Free Estimate", CONTACT_ROUTE],
          ]} />
          <div>
            <div className="occ-footer-heading">Contact</div>
            <FooterContact icon="phone" label="Phone · 24/7"><a href="tel:+18018642045">{PHONE}</a></FooterContact>
            <FooterContact icon="mail" label="Email"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></FooterContact>
            <FooterContact icon="pin" label="Shop">
              Brigham City, UT<br />Salt Lake · Davis · Morgan · Weber<br />Box Elder · Cache · Rich Counties
            </FooterContact>
          </div>
        </div>
        <div className="occ-footer-seo">
          <p><strong>Services:</strong> AC Repair · Furnace Repair · HVAC Installation · Heat Pumps</p>
          <p><strong>Service areas:</strong> Brigham City · Ogden · Logan · Layton · Bountiful · Salt Lake City</p>
        </div>
        <div className="occ-footer-bottom">© 2026 One Call Heating & Air · Owner: Jesse · Licensed & Insured</div>
      </div>
      <div className="occ-credit">
        Website built & managed by{" "}
        <a href="https://www.brightautomations.org/" target="_blank" rel="noopener noreferrer">Bright Automations</a>
      </div>
    </footer>
  );
}

export function FooterLinks({
  heading,
  links,
}: {
  heading: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <div className="occ-footer-heading">{heading}</div>
      <ul className="occ-footer-links">
        {links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}
      </ul>
    </div>
  );
}

export function FooterContact({
  icon,
  label,
  children,
}: {
  icon: IconName;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="occ-footer-contact">
      <Icon name={icon} />
      <div><span>{label}</span><div>{children}</div></div>
    </div>
  );
}
