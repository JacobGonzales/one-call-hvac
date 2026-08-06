import { serviceAreas } from "./home-data";
import { SectionHeading } from "./SectionHeading";

export function ServiceAreaSection() {
  return (
    <section
      className="oc-section oc-paper"
      data-section="salt lake cityto the idaho border."
      aria-label="Salt Lake Cityto the Idaho border."
    >
      <div className="oc-container">
        <SectionHeading
          centered
          eyebrow="Where We Work"
          lineOne="Salt Lake City"
          lineTwo="to the Idaho border."
          description="Headquartered in Brigham City, but routes run from Salt Lake County all the way up the Wasatch Front into Cache Valley. Seven counties — Salt Lake, Davis, Morgan, Weber, Box Elder, Cache, and Rich. Don't see your city? Call anyway — if we can route it, we will."
        />
        <div className="oc-area-list">
          {serviceAreas.map((area, index) => (
            <span key={area} className={index === 0 ? "is-primary" : ""}>
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
