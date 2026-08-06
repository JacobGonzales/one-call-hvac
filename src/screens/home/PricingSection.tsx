import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function PricingCard({
  featured = false,
  tag,
  amount,
  per,
  title,
  description,
  items,
  button,
  finePrint,
}: {
  featured?: boolean;
  tag: string;
  amount: string;
  per: string;
  title: string;
  description: string;
  items: readonly string[];
  button: string;
  finePrint: string;
}) {
  return (
    <article className={`oc-pricing-card${featured ? " is-featured" : ""}`}>
      {featured ? <span className="oc-best-value">Best Value</span> : null}
      <div className="oc-pricing-tag">
        <Icon name={featured ? "check-circle" : "wrench"} />
        {tag}
      </div>
      <div className="oc-price">
        <span>{amount}</span>
        <small>{per}</small>
      </div>
      <h3>{title}</h3>
      <p className="oc-pricing-lead">{description}</p>
      <ul>
        {items.map((item, index) => (
          <li key={item}>
            <Icon name="check" />
            {index === 0 || (!featured && index === items.length - 1) ? (
              <strong>{item}</strong>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
      <a
        href={featured ? "/contact" : "tel:+18018642045"}
        className={`oc-button ${featured ? "oc-button-amber" : "oc-button-outline"}`}
      >
        {button}
        <Icon name="arrow" />
      </a>
      <p className="oc-fine-print">{finePrint}</p>
    </article>
  );
}

export function PricingSection() {
  return (
    <section
      className="oc-section oc-paper"
      data-section="no hidden fees.pricing you'll see."
      aria-label="No Hidden Fees.Pricing You'll See."
    >
      <div className="oc-container">
        <SectionHeading
          centered
          eyebrow="Up-Front Pricing"
          lineOne="No Hidden Fees."
          lineTwo="Pricing You'll See."
          description="Two simple price points everyone asks about — diagnostic visits and our annual Gold membership. Everything else is quoted in writing before any work starts."
        />
        <div className="oc-pricing-grid">
          <PricingCard
            tag="Diagnostic Visit"
            amount="$89"
            per="flat"
            title="One-Visit Diagnostic"
            description="Real diagnosis — onsite, in person, with the tools to test the system. We tell you what's actually wrong before any quote."
            items={[
              "Onsite testing & diagnosis",
              "Written report of findings",
              "No upsell pressure",
              "Waived if you book the repair with us",
            ]}
            button="Schedule Diagnostic"
            finePrint="Free estimates on new install jobs — no diagnostic fee on full system replacement quotes."
          />
          <PricingCard
            featured
            tag="Gold Membership"
            amount="$99"
            per="/year"
            title="Annual Gold Membership"
            description="Two free seasonal tune-ups (spring AC, fall furnace) plus priority scheduling, member pricing, and zero diagnostic fees the entire year."
            items={[
              "2 free tune-ups every year",
              "Priority emergency response",
              "$0 diagnostic fees (member rate)",
              "15% off parts & labor",
              "Transferable on home sale",
            ]}
            button="Join Gold · $99/yr"
            finePrint="Pays for itself the first time it catches a $40 capacitor before it dies on a 14° January night."
          />
        </div>
      </div>
    </section>
  );
}
