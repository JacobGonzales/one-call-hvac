
export function PeopleSection() {
  return (
    <section
      className="oca-manifesto"
      data-section="we don't just fix systems — we take care of people."
      aria-label="We don't just fix systems — we take care of people."
    >
      <div className="oca-manifesto-container">
        <h2>We don&apos;t just<br /><em>fix systems —</em><span>we take care of people.</span></h2>
        <div className="oca-creed oca-airflow">
          <p>
            At One Call Heating and Air, when you call us, you&apos;re getting{" "}
            <strong>honest recommendations</strong>,{" "}
            <strong>quality workmanship</strong>, and{" "}
            <strong>fast, reliable service without the runaround</strong>. We
            treat your home like it&apos;s our own, and we don&apos;t leave
            until the job is done right.
          </p>
        </div>
        <div className="oca-manifesto-body">
          <div>
            <p>
              One Call was built for the customer who&apos;s been burned by the
              corporate HVAC playbook — the call center, the upsell, the
              &quot;your unit&apos;s done, here&apos;s a $14,000 quote&quot;
              without a real diagnosis. We do the opposite.{" "}
              <strong>Owner Jesse answers the phone</strong>, walks the system
              in person, and tells you what&apos;s actually going on before any
              work starts.
            </p>
            <p>
              Northern Utah has a unique HVAC reality — single-digit nights in
              January, 100° afternoons in July, and inversion smog up and down
              the Wasatch Front that makes indoor air quality matter. That means{" "}
              <strong>dual-season demand</strong>, year-round work, and systems
              that have to perform on both extremes.
            </p>
            <blockquote>
              &quot;We treat your home like it&apos;s our own, and we don&apos;t
              leave until the job is done right.&quot;
            </blockquote>
          </div>
          <div>
            <p>
              We handle{" "}
              <strong>install, repair, service, and Gold-membership maintenance</strong>{" "}
              on furnaces, central AC, cold-climate heat pumps, and ductless
              mini-splits. Trane, Lennox, Carrier, Mitsubishi, Bosch, Goodman,
              Rheem — whatever&apos;s right for your home, sized correctly,
              installed to spec, and registered for warranty before we leave
              the driveway.
            </p>
            <p>
              What sets us apart along the Wasatch Front is simple: we&apos;re{" "}
              <strong>owner-operated and answerable</strong>. The corporate HVAC
              chains route faceless techs through call centers and bill the
              drive both ways. We run from Salt Lake County to the Idaho border
              with the same crew, and the same name on the truck answers the
              phone every time.
            </p>
          </div>
        </div>
      </div>
      <div className="oca-stats">
        {[
          ["24/7", "Emergency Service"],
          ["7", "Counties Covered"],
          ["100%", "Owner-Operated"],
          ["$0", "Diagnostic with Repair"],
        ].map(([number, label]) => (
          <div key={label}><strong>{number}</strong><span>{label}</span></div>
        ))}
      </div>
    </section>
  );
}
