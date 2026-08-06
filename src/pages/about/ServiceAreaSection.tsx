import { serviceAreas } from "./about-data";
import { Icon } from "./Icon";

export function ServiceAreaSection() {
  return (
    <section
      className="oca-section oca-soft"
      data-section="salt lake cityto the idaho border."
      aria-label="Salt Lake Cityto the Idaho border."
    >
      <div className="oca-container">
        <div className="oca-section-head">
          <div className="oca-eyebrow">Where We Work</div>
          <h2>Salt Lake City<br /><em>to the Idaho border.</em></h2>
          <p>
            Headquartered in Brigham City. Routes the full Wasatch Front — Salt
            Lake, Davis, Morgan, Weber, Box Elder, Cache, and Rich Counties. If
            your home is anywhere along that corridor, we cover it.
          </p>
        </div>
        <div className="oca-areas">
          {serviceAreas.map(([city, county]) => (
            <article key={city}>
              <Icon name="pin" />
              <div><strong>{city}</strong><span>{county}</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
