import { Link } from "@/components/Link";
import { HOME_ROUTE } from "@/config/site";

export function ServicesHeroSection() {
  return (
    <section
      className="ocs-page-hero ocs-airflow"
      data-section="four lanes.one crew."
      aria-label="Four Lanes.One Crew."
    >
      <div className="ocs-container ocs-page-hero-inner">
        <div className="ocs-breadcrumb">
          <Link href={HOME_ROUTE}>Home</Link>
          <span>/</span>
          Services
        </div>
        <div className="ocs-page-eyebrow">Services</div>
        <h1>
          Four Lanes.
          <br />
          <em>One Crew.</em>
        </h1>
        <p>
          Install, repair, service, maintenance — every HVAC job a Brigham City
          home or business needs, handled by the same crew. Same number, same
          accountable answer, every time.
        </p>
      </div>
    </section>
  );
}
