// Central place to edit business details — update these and the whole site updates.
export const SITE = {
  name: "HCC Mechatronics",
  phoneDisplay: "+234 812 517 9993",
  phoneWhatsApp: "2348125179993", // digits only, country code first — used for wa.me links
  address: "Oko Oba, Agege, Lagos",
  instagram: "@hybridconventionals",
  instagramUrl: "https://instagram.com/hybridconventionals",
  facebook: "@hybridconventionals",
  facebookUrl: "https://www.facebook.com/hybridconventionals",
};

// Builds a wa.me link with a pre-filled message
export function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE.phoneWhatsApp}?text=${encoded}`;
}

export const NAV_LINKS = [
  { label: "The Technician", href: "#technician" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "Why HCC", href: "#why-hcc" },
  { label: "Packages", href: "#packages" },
];

export const SERVICES = [
  {
    title: "Hybrid Battery Services",
    description:
      "Full hybrid high-voltage battery lifecycle from cell-level diagnosis through reconditioning and full rebuild to complete pack replacement. We repair, rebuild, and replace. Most Lagos workshops can only replace.",
  },
  {
    title: "EV Diagnostics",
    description:
      "Complex electrical fault tracing using diagnostic tools and technical schematics. ECU testing, wiring harness faults, intermittent electrical faults, body electrical systems. We bring the jobs other workshops gave up on.",
  },
  {
    title: "Hybrid System Diagnostics",
    description:
      "Full hybrid system assessment — inverter health, battery management system, motor/generator faults, hybrid cooling system, HV cable and safety relay inspection. Complete high-voltage system health check.",
  },
  {
    title: "Pre-Purchase Inspection",
    description:
      "Unbiased, data-driven reports on high-voltage health before you commit to buying a used Hybrid or Electric vehicle. Full diagnostic scan, HV battery health assessment, HVAC check, & more.",
  },
  {
    title: "HVAC & Climate Systems",
    description:
      "Complete automotive AC service including electric and semi-automatic compressor installation. Hybrid-specific climate system repair and re-gas, including electric compressor diagnosis and thermal management systems.",
  },
  {
    title: "General Car Maintenance",
    description:
      "Full servicing for hybrid and conventional vehicles - oil and filter changes, brake service (including hybrid regenerative brakes), suspension, transmission, alignment. All vehicles.",
  },
];

export const WHY_HCC = [
  {
    title: "Certified, Not Self-Claimed",
    description: "Formally trained in hybrid systems and high-voltage safety, not self-taught.",
  },
  {
    title: "Battery Rebuild Capability",
    description: "Hybrid battery reconditioning at cell level is rare in Nigeria. HCC can rebuild instead of replacing.",
  },
  {
    title: "Advanced Diagnostics First",
    description: "We diagnose accurately before any part is replaced. No guesswork, no waste.",
  },
  {
    title: "Transparent Documentation",
    description: "Written reports, before-and-after diagnostics, and clear communication throughout.",
  },
];

export const PLANS = [
  {
    name: "HVAC Care Plan",
    price: "₦48,000–₦80,000",
    dark: false,
    features: [
      "2 × AC service visits per year",
      "Refrigerant level check and top-up",
      "Compressor belt and component inspection",
      "Priority fault response booking",
      "Written service record",
    ],
  },
  {
    name: "Hybrid Health Plan",
    price: "₦80,000–₦140,000",
    dark: true,
    features: [
      "2 × HV battery health assessments",
      "2 × Full vehicle service",
      "Priority booking (no waiting)",
      "1 × Free diagnostic scan",
      "HVAC check included",
      "Written service history maintained",
    ],
  },
  {
    name: "Full Protection Plan",
    price: "₦150,000–₦250,000",
    dark: false,
    features: [
      "Everything in Hybrid Health Plan",
      "Dedicated WhatsApp line for fault reporting",
      "Same-day emergency response",
      "HVAC full system check",
      "Annual HV cable safety inspection",
      "Hybrid cooling system service",
    ],
  },
];

export const TESTIMONIALS = [
  {
    title: "Accurate Diagnostics",
    quote:
      "I was told by three workshops I needed a full battery replacement costing over ₦800,000. HCC diagnosed the exact faulty cells and rebuilt the battery for a fraction of the cost. Accurate diagnosis saved me a fortune.",
    initials: "AO",
    name: "Adebayo O.",
    meta: "Toyota Prius · Lagos Island",
  },
  {
    title: "Honest, No Upsell",
    quote:
      "Straightforward diagnosis, clear pricing, and the car came back running better than expected. No pressure to replace parts that didn't need replacing.",
    initials: "CN",
    name: "Chidinma N.",
    meta: "Lexus RX450h · Lekki",
  },
  {
    title: "Saved My Battery Pack",
    quote:
      "Every other shop wanted to sell me a used replacement pack. HCC rebuilt mine cell by cell and gave me a written report. That level of documentation is rare here.",
    initials: "TF",
    name: "Tunde F.",
    meta: "Toyota Camry Hybrid · Ikeja",
  },
];

export const SERVICE_OPTIONS = [
  "Hybrid Battery Services",
  "EV Diagnostics",
  "Hybrid System Diagnostics",
  "Pre-Purchase Inspection",
  "HVAC & Climate Systems",
  "General Car Maintenance",
  "Annual Maintenance Plan",
  "Not sure — need advice",
];
