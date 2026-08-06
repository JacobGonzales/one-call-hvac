import { values } from "./about-data";
import { Icon } from "./Icon";

export function ValuesSection() {
  return (
    <section
      className="oca-section"
      data-section="honest work.cold winters."
      aria-label="Honest Work.Cold Winters."
    >
      <div className="oca-container">
        <div className="oca-section-head">
          <div className="oca-eyebrow">What We Stand For</div>
          <h2>Honest Work.<br /><em>Cold Winters.</em></h2>
          <p>
            The things that separate a one-call fix from a three-visit ordeal.
            None of this is flashy — it&apos;s the stuff most HVAC shops skip.
          </p>
        </div>
        <div className="oca-values">
          {values.map((value) => (
            <article key={value.title}>
              <div className="oca-value-icon"><Icon name={value.icon} /></div>
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
