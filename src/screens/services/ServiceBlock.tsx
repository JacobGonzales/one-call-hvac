import { ServiceData } from "./services-data";
import { Icon } from "./Icon";

export function ServiceVisual({ service }: { service: ServiceData }) {
  return (
    <div className="ocs-service-visual">
      <div
        className={`ocs-visual-card${service.dark ? "" : " is-light"}`}
      >
        <div className="ocs-visual-icon">
          <Icon name={service.icon} />
        </div>
        <div>
          <div className="ocs-visual-headline">{service.visualTitle}</div>
          <div className="ocs-visual-chips">
            {service.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </div>
        {"tag" in service ? (
          <div className="ocs-visual-tag">{service.tag}</div>
        ) : null}
      </div>
    </div>
  );
}

export function ServiceCopy({ service }: { service: ServiceData }) {
  const titleWords = service.title.split(" ");
  const firstWord = titleWords[0];
  const remainingWords = titleWords.slice(1).join(" ");

  return (
    <div className="ocs-service-copy">
      <div className="ocs-service-number">{service.number}</div>
      <h2>
        {remainingWords ? (
          <>
            {firstWord} <em>{remainingWords}</em>
          </>
        ) : (
          <em>{firstWord}</em>
        )}
      </h2>
      <p className="ocs-service-lead">{service.description}</p>
      <ul className="ocs-feature-list">
        {service.features.map((feature) => (
          <li key={feature}>
            <Icon name="check" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="ocs-service-actions">
        <a
          href={service.primaryHref}
          className="ocs-button ocs-button-amber"
        >
          {service.primaryCta}
          <Icon name="arrow" />
        </a>
        <a
          href={service.secondaryHref}
          className={`ocs-button ${
            service.dark ? "ocs-button-ghost" : "ocs-button-outline"
          }`}
        >
          {service.secondaryCta}
        </a>
      </div>
    </div>
  );
}

export function ServiceBlock({
  id,
  label,
  service,
}: {
  id: string;
  label: string;
  service: ServiceData;
}) {
  return (
    <section
      id={id}
      className={`ocs-service-block${service.dark ? " is-dark ocs-airflow" : ""}`}
      data-section={id}
      aria-label={label}
    >
      <div className="ocs-container">
        <div
          className={`ocs-service-row${service.visualFirst ? " is-visual-first" : ""}`}
        >
          <ServiceCopy service={service} />
          <ServiceVisual service={service} />
        </div>
      </div>
    </section>
  );
}
