
export function SectionHeading({
  eyebrow,
  lineOne,
  lineTwo,
  description,
  centered = false,
}: {
  eyebrow: string;
  lineOne: string;
  lineTwo?: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={`oc-section-heading${centered ? " oc-centered" : ""}`}>
      <div className="oc-eyebrow">{eyebrow}</div>
      <h2>
        {lineOne}
        {lineTwo ? (
          <>
            <br />
            <em>{lineTwo}</em>
          </>
        ) : null}
      </h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
