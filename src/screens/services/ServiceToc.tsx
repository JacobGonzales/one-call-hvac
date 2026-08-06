import { serviceLinks } from "./services-data";

export function ServiceToc() {
  return (
    <div className="ocs-toc" aria-label="Services on this page">
      <div className="ocs-container ocs-toc-inner">
        {serviceLinks.map(([label, href]) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
