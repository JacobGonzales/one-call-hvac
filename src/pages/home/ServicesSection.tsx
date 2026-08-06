import { Link } from "@/components/Link";

import { services } from "./home-data";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection() {
  return (
    <section
      className="oc-section oc-paper"
      data-section="four lanes.one crew."
      aria-label="Four Lanes.One Crew."
    >
      <div className="oc-container">
        <SectionHeading
          eyebrow="What We Do"
          lineOne="Four Lanes."
          lineTwo="One Crew."
          description="Whether you need a brand-new system installed, a midnight emergency repair, a seasonal tune-up, or a maintenance plan that keeps you ahead of breakdowns — same crew, same number, same accountable answer every time."
        />
        <div className="oc-service-grid">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className={`oc-service-card${service.featured ? " is-featured" : ""}`}
            >
              <div className="oc-service-number">{service.number}</div>
              <div className="oc-service-icon">
                <Icon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="oc-service-link">
                {service.link}
                <Icon name="arrow" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
