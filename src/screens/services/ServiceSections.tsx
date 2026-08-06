import { serviceSections } from "./services-data";
import { ServiceBlock } from "./ServiceBlock";

export function InstallSection() {
  return (
    <ServiceBlock
      id="install"
      label="install"
      service={serviceSections.install}
    />
  );
}

export function RepairSection() {
  return (
    <ServiceBlock
      id="repair"
      label="repair"
      service={serviceSections.repair}
    />
  );
}

export function ServiceTuneUpSection() {
  return (
    <ServiceBlock
      id="service"
      label="service"
      service={serviceSections.service}
    />
  );
}

export function MaintenanceSection() {
  return (
    <ServiceBlock
      id="maintenance"
      label="maintenance"
      service={serviceSections.maintenance}
    />
  );
}
