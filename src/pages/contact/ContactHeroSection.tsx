import { Link } from "@/components/Link";
import { HOME_ROUTE } from "@/config/site";

export function ContactHeroSection() {
  return (
    <section
      className="occ-page-hero occ-airflow"
      data-section="one number.always answered."
      aria-label="One Number.Always Answered."
    >
      <div className="occ-container">
        <div className="occ-breadcrumb"><Link href={HOME_ROUTE}>Home</Link><span>/</span>Contact</div>
        <div className="occ-page-eyebrow">Get In Touch</div>
        <h1>One Number.<br /><em>Always Answered.</em></h1>
        <p>
          Call, text, email, or send the form. Owner Jesse picks up — including
          24/7 emergency calls when the furnace dies in January or the AC quits
          in July. Free estimates on installs, $89 diagnostic on repairs (waived
          with the fix).
        </p>
      </div>
    </section>
  );
}
