import { Link } from "@/components/Link";
import { LOCATION_ROUTE } from "@/config/site";
import { majorServiceCities } from "@/screens/location/location-data";
import { SectionHeading } from "./SectionHeading";

export function ServiceAreaSection() {
  return (
    <section
      className="oc-section oc-paper"
      data-section="northern utah service area"
      aria-labelledby="home-service-area-heading"
    >
      <div className="oc-container">
        <SectionHeading
          id="home-service-area-heading"
          eyebrow="Where We Work"
          lineOne="Salt Lake City"
          lineTwo="to the Idaho border."
          description="Headquartered in Brigham City — your Brigham City HVAC crew, with routes from Salt Lake County all the way up the Wasatch Front into Cache Valley. Seven counties — Salt Lake, Davis, Morgan, Weber, Box Elder, Cache, and Rich. Don't see your city? Call anyway — if we can route it, we will."
        />
        <div className="oc-service-map-layout">
          <div className="oc-service-map-frame">
            <iframe
              title="Google map of One Call Heating and Air's northern Utah service area"
              src="https://www.google.com/maps?q=Brigham%20City%2C%20Utah&z=7&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="oc-major-cities">
            <div className="oc-major-cities-heading">
              <span>Major Service-Area Cities</span>
              <strong>10 northern Utah hubs</strong>
            </div>
            <ul>
              {majorServiceCities.map(({ city }) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
            <Link href={LOCATION_ROUTE} className="oc-service-area-link">
              View all cities by county
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
