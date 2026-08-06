import { Link } from "@/components/Link";
import { HOME_ROUTE } from "@/config/site";

export function OneCrewSection() {
  return (
    <section
      className="oca-page-hero oca-airflow"
      data-section="one crew.one number."
      aria-label="One Crew.One Number."
    >
      <div className="oca-container">
        <div className="oca-breadcrumb"><Link href={HOME_ROUTE}>Home</Link><span>/</span>About</div>
        <div className="oca-eyebrow is-cyan">About One Call</div>
        <h1>One Crew.<br /><em>One Number.</em></h1>
        <p>
          A Brigham City HVAC company built on one promise: when you call, an
          actual person who knows the work answers. No corporate phone tree. No
          bait-and-switch quote. No tech you&apos;ve never met showing up to
          upsell you a system you don&apos;t need.
        </p>
      </div>
    </section>
  );
}
