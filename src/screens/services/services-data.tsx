import { PHONE_NUMBER } from "@/config/site";

export const serviceLinks = [
  ["Install", "#install"],
  ["Repair", "#repair"],
  ["Service", "#service"],
  ["Maintenance", "#maintenance"],
] as const;

export const serviceSections = {
  install: {
    number: "Service 01",
    title: "Install.",
    description:
      "New furnace, AC, heat pump, or mini-split — sized properly to your home, ducted right, and commissioned to spec. We pull permits, register warranties, and walk you through the system before we leave. Federal 25C tax credits up to $2,000 on qualifying heat pump installs.",
    features: [
      "Furnace replacement (96% AFUE)",
      "Central AC swap-outs",
      "Cold-climate heat pumps",
      "Ductless mini-splits",
      "New construction systems",
      "Smart thermostat install",
      "Manual J load calc",
      "25C credit eligible",
    ],
    icon: "home",
    visualTitle: (
      <>
        New Furnace.
        <br />
        <em>New AC.</em>
        <br />
        <em>New Heat Pump.</em>
      </>
    ),
    chips: ["Trane", "Lennox", "Mitsubishi", "Bosch IDS"],
    primaryCta: "Get Install Quote",
    primaryHref: "/contact",
    secondaryCta: PHONE_NUMBER,
    secondaryHref: "tel:+18018642045",
    dark: true,
    visualFirst: true,
  },
  repair: {
    number: "Service 02 · 24/7",
    title: "Repair.",
    description:
      "When the furnace dies on a 12° January night or the AC quits in July, you need a real tech — fast. We carry the common parts on the truck (igniters, capacitors, blower motors, gas valves, contactors) so most no-heat / no-cool calls get fixed on the first visit.",
    features: [
      "24/7 emergency response",
      "Furnace no-heat calls",
      "AC compressor / capacitor",
      "Heat pump diagnostics",
      "Refrigerant leaks & recharge",
      "Thermostat & control board",
      "Ductwork & airflow",
      "$89 diagnostic · $0 for Gold members",
    ],
    icon: "wrench",
    visualTitle: (
      <>
        Diagnose
        <br />
        <em>First.</em>
        <br />
        Fix Same Day.
      </>
    ),
    chips: ["24/7", "Truck-Stocked Parts", "$89 Diagnostic"],
    tag: "Emergency",
    primaryCta: "Call Now · 24/7",
    primaryHref: "tel:+18018642045",
    secondaryCta: "Schedule Online",
    secondaryHref: "/contact",
    dark: false,
    visualFirst: false,
  },
  service: {
    number: "Service 03",
    title: "Service.",
    description:
      "Spring AC tune-up. Fall furnace check. Coil cleans, filter changes, refrigerant checks, electrical and gas pressure tests, safety inspection. Catches the small stuff before it becomes a 2 a.m. phone call — and keeps your system running at full efficiency.",
    features: [
      "Spring AC tune-up",
      "Fall furnace inspection",
      "Coil & condenser cleaning",
      "Filter replacement",
      "Refrigerant level check",
      "Electrical & gas safety",
      "CO & combustion check",
      "Written health report",
    ],
    icon: "clock",
    visualTitle: (
      <>
        Spring & Fall
        <br />
        <em>Tune-Ups.</em>
      </>
    ),
    chips: ["21-Point Inspection", "Same-Week Booking"],
    primaryCta: "Book a Tune-Up",
    primaryHref: "/contact",
    secondaryCta: PHONE_NUMBER,
    secondaryHref: "tel:+18018642045",
    dark: true,
    visualFirst: true,
  },
  maintenance: {
    number: "Service 04 · Gold Membership",
    title: "Gold Membership.",
    description:
      "$99 a year. Includes 2 free seasonal tune-ups (spring AC + fall furnace), priority emergency response, $0 diagnostic fees, and 15% off any parts and labor for the entire year. The cheapest insurance you can buy against a 14° night with no heat.",
    features: [
      "2 free tune-ups every year",
      "Priority emergency response",
      "$0 diagnostic fees",
      "15% off parts & labor",
      "Filter delivery option",
      "21-point seasonal inspection",
      "Multi-system discounts",
      "Transferable on home sale",
    ],
    icon: "star",
    visualTitle: (
      <>
        $99/year.
        <br />
        Two Free
        <br />
        <em>Tune-Ups.</em>
      </>
    ),
    chips: ["$0 Diagnostic", "15% Off Repairs", "Priority Booking"],
    tag: "Best Value",
    primaryCta: "Join Gold · $99/yr",
    primaryHref: "/contact",
    secondaryCta: PHONE_NUMBER,
    secondaryHref: "tel:+18018642045",
    dark: false,
    visualFirst: false,
  },
} as const;

export type ServiceData = (typeof serviceSections)[keyof typeof serviceSections];
