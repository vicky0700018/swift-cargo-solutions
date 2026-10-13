// Mock data defaults. Loaded into localStorage only when a key does not yet exist.

export const FALLBACK_IMAGE = "/images/fallback.jpg";

export const defaultSettings = {
  businessName: "Shree Siddhivinayak Clearing & Forwarding Services",
  phone: "3254315445",
  email: "shreesiddhivinayak@clearing.com",
  address: "138 Chandan Chamber, Modi Estate, Fort, Mumbai – 400001, Maharashtra, India",
  location: "Fort, Mumbai",
  primaryCta: "Request a Quote",
  footerDescription:
    "Freight forwarding, cargo logistics, customs clearance assistance and import/export support for businesses, coordinated from Fort, Mumbai.",
};

export const defaultHome = {
  heroHeading: "Reliable Freight Forwarding. Seamless Cargo Movement.",
  heroDescription:
    "Your trusted partner for freight coordination, cargo movement, customs clearance assistance, and dependable logistics support from Mumbai.",
  heroImage: "/images/hero/freight-port-hero.jpg",
  aboutHeading: "Moving Cargo With Confidence",
  aboutText:
    "Shree Siddhivinayak Clearing & Forwarding Services supports importers, exporters, manufacturers and traders with freight coordination, cargo handling, transportation and clearing & forwarding assistance. From our office in Fort, Mumbai, we focus on clear documentation, practical routing and steady communication so your cargo moves with fewer surprises.",
  aboutImage: "/images/about/cargo-handling-team.jpg",
  whyChoose: [
    { title: "Coordinated Freight Support", text: "One point of contact to coordinate carriers, handling and movement for your shipment." },
    { title: "Documentation Assistance", text: "Help preparing and checking the paperwork that clearing and forwarding requires." },
    { title: "Flexible Cargo Solutions", text: "Road, sea and air options planned around your cargo type, timeline and budget." },
    { title: "Customer-Focused Communication", text: "Regular, plain-language updates so you know where your shipment stands." },
  ],
  ctaHeading: "Planning Your Next Shipment?",
  ctaText: "Tell us about your cargo requirements so your enquiry can be reviewed.",
  ctaImage: "/images/hero/cargo-ship.jpg",
};

const S = (o) => ({ published: true, ...o });

export const defaultServices = [
  S({
    id: "freight-forwarding",
    title: "Freight Forwarding",
    category: "Forwarding",
    image: "/images/services/freight-forwarding.jpg",
    short: "End-to-end coordination of cargo movement between origin and destination across carriers and modes.",
    overview:
      "Freight forwarding brings the pieces of a shipment together: carrier booking, pickup, handling, documentation and delivery coordination. We act as your coordinator so you deal with one team instead of many.",
    scope: ["Carrier and space booking coordination", "Pickup and delivery planning", "Consolidation of shipment paperwork", "Shipment status communication"],
    process: ["Understand cargo, route and timeline", "Recommend a suitable routing option", "Coordinate bookings and pickup", "Track movement and update you"],
  }),
  S({
    id: "customs-clearance",
    title: "Customs Clearance Assistance",
    category: "Clearance",
    image: "/images/services/customs-clearance.jpg",
    short: "Support with the documentation and coordination needed to move cargo through customs procedures.",
    overview:
      "Customs procedures depend on accurate, complete paperwork. We help you prepare documents, coordinate with the relevant parties and respond to queries during the clearance process.",
    scope: ["Document checklist preparation", "Review of invoices and packing lists", "Coordination during examination", "Query follow-up and communication"],
    process: ["Collect commercial documents", "Check details for consistency", "Coordinate filing and examination", "Confirm release and onward movement"],
  }),
  S({
    id: "import-export-documentation",
    title: "Import & Export Documentation Support",
    category: "Documentation",
    image: "/images/services/import-export.jpg",
    short: "Help organising invoices, packing lists, shipping bills and other trade paperwork.",
    overview:
      "Trade paperwork is often where delays begin. We help organise and cross-check the documents your import or export needs so each party receives the right information at the right time.",
    scope: ["Commercial invoice and packing list review", "Shipping document coordination", "Document sequence planning", "Record keeping guidance"],
    process: ["Identify required documents", "Review drafts with you", "Share finalised set with stakeholders", "Maintain a shipment document file"],
  }),
  S({
    id: "road-freight",
    title: "Road Freight Transportation",
    category: "Transport",
    image: "/images/services/road-freight.jpg",
    short: "Truck and container transport coordination for domestic movement and port connectivity.",
    overview:
      "Road transport links factories, warehouses and ports. We coordinate suitable vehicles for full loads, part loads and container movement, with pickup and delivery planned around your schedule.",
    scope: ["Full and part truckload coordination", "Container transport to and from ports", "Vehicle selection by cargo type", "Delivery scheduling"],
    process: ["Confirm load size and pickup point", "Arrange a suitable vehicle", "Coordinate loading and dispatch", "Share delivery confirmation"],
  }),
  S({
    id: "sea-freight",
    title: "Sea Freight Coordination",
    category: "Transport",
    image: "/images/services/sea-freight.jpg",
    short: "FCL and LCL ocean cargo coordination for imports and exports through port terminals.",
    overview:
      "Sea freight suits larger volumes and heavier cargo. We coordinate full container and shared container options, port-side handling and the paperwork that accompanies ocean shipments.",
    scope: ["FCL and LCL option planning", "Container booking coordination", "Port handling coordination", "Vessel schedule communication"],
    process: ["Assess volume and container needs", "Compare available sailing options", "Coordinate stuffing and port delivery", "Update you through to arrival"],
  }),
  S({
    id: "air-cargo",
    title: "Air Cargo Coordination",
    category: "Transport",
    image: "/images/services/air-cargo.jpg",
    short: "Coordination for time-sensitive and high-value cargo moving by air.",
    overview:
      "When timelines are tight, air cargo is often the right choice. We help with booking coordination, packaging guidance, airport handover and the documentation air shipments require.",
    scope: ["Air cargo booking coordination", "Packaging and labelling guidance", "Airport handover coordination", "Air shipment documentation support"],
    process: ["Confirm dimensions, weight and deadline", "Coordinate a suitable booking", "Arrange handover at the airport", "Communicate departure and arrival"],
  }),
  S({
    id: "cargo-handling",
    title: "Cargo Handling & Logistics",
    category: "Handling",
    image: "/images/services/cargo-handling.jpg",
    short: "Loading, unloading, stuffing and de-stuffing coordination for containers and general cargo.",
    overview:
      "Careful handling protects your goods. We coordinate loading, unloading and container stuffing with attention to securing, stacking and the equipment your cargo needs.",
    scope: ["Container stuffing and de-stuffing", "Loading and unloading coordination", "Handling equipment arrangement", "Cargo securing guidance"],
    process: ["Review cargo type and packaging", "Plan equipment and manpower", "Supervise handling coordination", "Confirm completion with photos or notes"],
  }),
  S({
    id: "supply-chain",
    title: "Supply Chain Coordination",
    category: "Coordination",
    image: "/images/services/supply-chain.jpg",
    short: "Coordinating the links between suppliers, warehouses, transport and delivery.",
    overview:
      "Regular shipments benefit from a planned flow. We help coordinate the handoffs between suppliers, storage, transport and delivery so recurring cargo moves predictably.",
    scope: ["Recurring shipment planning", "Warehouse and transport coordination", "Vendor communication support", "Shipment schedule reviews"],
    process: ["Map your current cargo flow", "Identify coordination gaps", "Set up a shipment routine", "Review and refine regularly"],
  }),
];

export const defaultIndustries = [
  { id: "manufacturing", title: "Manufacturing", image: "/images/industries/manufacturing.jpg", published: true,
    text: "Inbound raw material and outbound finished goods often need scheduled pickups, careful crating and port connectivity.",
    services: ["road-freight", "sea-freight", "cargo-handling"] },
  { id: "distribution", title: "Wholesale and Distribution", image: "/images/industries/distribution.jpg", published: true,
    text: "High-frequency movement between warehouses and buyers calls for dependable truck coordination and delivery planning.",
    services: ["road-freight", "supply-chain"] },
  { id: "import-export", title: "Import and Export Businesses", image: "/images/industries/import-export.jpg", published: true,
    text: "Cross-border shipments depend on accurate documents, customs coordination and the right sea or air option.",
    services: ["customs-clearance", "import-export-documentation", "freight-forwarding"] },
  { id: "industrial-equipment", title: "Industrial Equipment", image: "/images/industries/industrial-equipment.jpg", published: true,
    text: "Heavy and oversized machinery needs suitable vehicles, lifting equipment and secure lashing during transit.",
    services: ["cargo-handling", "road-freight", "sea-freight"] },
  { id: "retail-cargo", title: "Retail and Commercial Goods", image: "/images/industries/retail-cargo.jpg", published: true,
    text: "Seasonal and consumer goods benefit from consolidated loads, timely dispatch and careful carton handling.",
    services: ["supply-chain", "sea-freight", "road-freight"] },
  { id: "sme", title: "Small and Medium Enterprises", image: "/images/industries/sme.jpg", published: true,
    text: "Smaller shippers often need guidance on documentation and shared-container options to keep costs practical.",
    services: ["import-export-documentation", "air-cargo", "freight-forwarding"] },
];

export const GALLERY_CATEGORIES = ["Ports", "Sea Freight", "Air Cargo", "Road Transport", "Warehousing", "Cargo Handling"];

export const defaultGallery = [
  { id: "g1", title: "Port operations at dusk", category: "Ports", image: "/images/hero/freight-port-hero.jpg", description: "Gantry cranes working a container vessel.", published: true },
  { id: "g2", title: "Container terminal", category: "Ports", image: "/images/gallery/container-terminal.jpg", description: "Aerial view of container stacks and trucks.", published: true },
  { id: "g3", title: "Port cranes", category: "Ports", image: "/images/gallery/port-cranes.jpg", description: "Ship-to-shore cranes at sunrise.", published: true },
  { id: "g4", title: "Container vessel at sea", category: "Sea Freight", image: "/images/hero/cargo-ship.jpg", description: "Fully loaded container ship underway.", published: true },
  { id: "g5", title: "Vessel at berth", category: "Sea Freight", image: "/images/services/sea-freight.jpg", description: "Container ship moored at the quay.", published: true },
  { id: "g6", title: "Air cargo loading", category: "Air Cargo", image: "/images/services/air-cargo.jpg", description: "Pallets loaded through a freighter nose door.", published: true },
  { id: "g7", title: "Container trucks", category: "Road Transport", image: "/images/services/road-freight.jpg", description: "Container trailers on the highway.", published: true },
  { id: "g8", title: "Distribution dock", category: "Warehousing", image: "/images/industries/distribution.jpg", description: "Trucks loading at warehouse docks.", published: true },
  { id: "g9", title: "Warehouse operations", category: "Warehousing", image: "/images/services/supply-chain.jpg", description: "Racked storage and conveyor sorting.", published: true },
  { id: "g10", title: "Container lifting", category: "Cargo Handling", image: "/images/services/cargo-handling.jpg", description: "Reach stacker moving a container.", published: true },
  { id: "g11", title: "Cargo loading", category: "Cargo Handling", image: "/images/about/cargo-handling-team.jpg", description: "Forklift stuffing palletised cargo.", published: true },
  { id: "g12", title: "Container sealing", category: "Cargo Handling", image: "/images/industries/import-export.jpg", description: "Bolt seal applied before dispatch.", published: true },
];

export const defaultFooter = {
  quickLinks: [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Industries", to: "/industries" },
    { label: "Our Process", to: "/process" },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact Us", to: "/contact" },
  ],
  serviceLinks: [
    { label: "Freight Forwarding", to: "/services/freight-forwarding" },
    { label: "Customs Clearance Assistance", to: "/services/customs-clearance" },
    { label: "Sea Freight Coordination", to: "/services/sea-freight" },
    { label: "Air Cargo Coordination", to: "/services/air-cargo" },
    { label: "Road Freight Transportation", to: "/services/road-freight" },
  ],
  copyright: "© 2026 Shree Siddhivinayak Clearing & Forwarding Services. All rights reserved.",
};

export const QUOTE_STATUSES = ["New", "Contacted", "In Progress", "Completed", "Cancelled"];
export const CONTACT_STATUSES = ["New", "Read", "Replied", "Closed"];

export const defaultQuotes = [
  { id: "q-sample-1", ref: "SSCF-DEMO-0001", fullName: "Sample Customer", company: "Demo Traders", email: "demo@example.com", phone: "+91 98200 00000",
    service: "Sea Freight", shipmentType: "International", origin: "Nhava Sheva", destination: "Jebel Ali", cargo: "Packaged textiles (sample data)",
    weight: "4,000 kg", date: "2026-11-05", notes: "Sample enquiry for demonstration.", status: "New", createdAt: "2026-10-10T09:30:00.000Z" },
];

export const defaultContacts = [
  { id: "c-sample-1", name: "Sample Visitor", email: "visitor@example.com", phone: "+91 98670 00000", subject: "Documentation question",
    message: "Sample message for demonstration of the admin panel.", status: "New", createdAt: "2026-10-11T11:00:00.000Z" },
];

export const SERVICE_OPTIONS = [
  "Freight Forwarding", "Customs Clearance Assistance", "Import & Export Documentation", "Road Freight", "Sea Freight",
  "Air Cargo", "Cargo Handling", "Supply Chain Coordination", "Other",
];

export const PROCESS_STEPS = [
  { title: "Share Your Requirements", text: "Tell us about your cargo, origin, destination, timeline and any special handling needs.",
    detail: "Use the quote form or call us. Useful details include cargo description, approximate weight and dimensions, packaging, and your preferred dates." },
  { title: "Cargo and Route Assessment", text: "We review the cargo and suggest practical routing and transport options.",
    detail: "We look at mode (road, sea or air), container needs, handling equipment and documentation, and discuss the options with you." },
  { title: "Documentation and Coordination", text: "Paperwork is organised and bookings, pickups and handling are coordinated.",
    detail: "We help prepare and check documents, coordinate carriers and handling, and assist with customs procedures where required." },
  { title: "Shipment Progress Communication", text: "You receive clear updates as the shipment moves toward delivery.",
    detail: "We keep you informed at key milestones and respond to queries until the shipment is completed." },
];
