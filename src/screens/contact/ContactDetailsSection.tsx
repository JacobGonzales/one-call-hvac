import { type ReactNode } from "react";
import { PHONE, EMAIL } from "@/config/site";
import { Icon } from "./Icon";

export function ServiceRequestForm() {
  return (
    <div className="occ-form-card">
      <div className="occ-form-head">
        <div className="occ-form-eyebrow">Request Service</div>
        <h2>Tell us about<br /><em>the system.</em></h2>
        <p>
          Takes about a minute. For real emergencies (no heat in winter, no AC
          in extreme heat), call directly — we get back to forms within hours
          but the phone is faster.
        </p>
      </div>
      <form action="https://formspree.io/f/mrbkkkkg" method="POST" id="quoteForm">
        <div className="occ-form-row">
          <FormField label="Name" htmlFor="name">
            <input type="text" name="name" id="name" placeholder="Your full name" required />
          </FormField>
          <FormField label="Phone" htmlFor="phone">
            <input type="tel" name="phone" id="phone" placeholder="(801) 000-0000" required />
          </FormField>
        </div>
        <div className="occ-form-row">
          <FormField label="Email" htmlFor="email" full>
            <input type="email" name="email" id="email" placeholder="you@example.com" required />
          </FormField>
        </div>
        <div className="occ-form-row">
          <FormField label="Service Needed" htmlFor="service">
            <select name="service" id="service" defaultValue="Install — New System">
              <option>Install — New System</option>
              <option>Repair — System Down</option>
              <option>Service — Tune-Up</option>
              <option>Maintenance Plan</option>
              <option>24/7 Emergency</option>
              <option>Not Sure / Just A Quote</option>
            </select>
          </FormField>
          <FormField label="System Type" htmlFor="systemtype">
            <select name="systemtype" id="systemtype" defaultValue="Furnace">
              <option>Furnace</option>
              <option>Central AC</option>
              <option>Heat Pump</option>
              <option>Mini-Split / Ductless</option>
              <option>Multiple Systems</option>
              <option>Not Sure</option>
            </select>
          </FormField>
        </div>
        <div className="occ-form-row">
          <FormField label="City / Area" htmlFor="location" full>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Salt Lake · Layton · Ogden · Brigham City · Logan · etc."
            />
          </FormField>
        </div>
        <div className="occ-form-row">
          <FormField label="Tell Us What's Going On" htmlFor="message" full>
            <textarea
              name="message"
              id="message"
              placeholder="What's the system doing (or not doing)? How old is it? Any noises, error codes, or recent service?"
              required
            />
          </FormField>
        </div>
        <div className="occ-form-footer">
          <p>Most messages answered within 24 hours · Phone is faster for emergencies</p>
          <button type="submit" className="occ-button occ-button-blue">
            Send Request <Icon name="arrow" />
          </button>
        </div>
      </form>
    </div>
  );
}

export function FormField({
  label,
  htmlFor,
  full = false,
  children,
}: {
  label: string;
  htmlFor: string;
  full?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`occ-form-field${full ? " is-full" : ""}`}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  );
}

export function InfoCard({
  icon,
  label,
  value,
  children,
  emergency = false,
}: {
  icon: "mail" | "phone" | "pin";
  label: string;
  value: ReactNode;
  children: ReactNode;
  emergency?: boolean;
}) {
  return (
    <article className={`occ-info-card${emergency ? " is-emergency" : ""}`}>
      <div className="occ-info-head">
        <div className="occ-info-icon"><Icon name={icon} /></div>
        <h3>{label}</h3>
      </div>
      <div className="occ-info-value">{value}</div>
      <p>{children}</p>
    </article>
  );
}

export function BusinessHoursCard() {
  return (
    <article className="occ-hours occ-airflow">
      <h3>Business Hours</h3>
      <div><span>Monday – Friday</span><strong>7:00 AM – 7:00 PM</strong></div>
      <div><span>Saturday</span><strong>8:00 AM – 5:00 PM</strong></div>
      <div><span>Sunday</span><strong>By appointment</strong></div>
      <p><strong>Emergency calls:</strong> 24/7/365 for active no-heat, no-cool, gas leak, or CO alarm situations.</p>
    </article>
  );
}

export function ContactDetailsSection() {
  return (
    <section
      className="occ-contact-section"
      data-section="tell us aboutthe system."
      aria-label="Tell us aboutthe system."
    >
      <div className="occ-container occ-contact-grid">
        <ServiceRequestForm />
        <div className="occ-info-stack">
          <InfoCard
            icon="phone"
            label="24/7 Emergency · Owner Picks Up"
            value={<a href="tel:+18018642045">{PHONE}</a>}
            emergency
          >
            No call center. No &quot;we&apos;ll get back to you tomorrow.&quot;
            Jesse answers — including nights, weekends, and Utah&apos;s
            nastiest January cold snaps.
          </InfoCard>
          <InfoCard
            icon="mail"
            label="Email"
            value={<a href={`mailto:${EMAIL}`}>{EMAIL}</a>}
          >
            Best for install scopes, multi-system bids, commercial/property-management
            requests, or sending pictures of the system or error codes.
          </InfoCard>
          <InfoCard icon="pin" label="Service Area" value="Brigham City, UT">
            Headquarters in Brigham City. Active routes across all seven
            northern Utah counties — Salt Lake, Davis, Morgan, Weber, Box
            Elder, Cache, and Rich.
          </InfoCard>
          <BusinessHoursCard />
        </div>
      </div>
    </section>
  );
}
