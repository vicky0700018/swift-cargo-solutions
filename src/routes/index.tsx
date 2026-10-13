import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore - plain JSX module
import { HomePage } from "@/site/pages.jsx";
// @ts-ignore - plain JS module
import { pageMeta } from "@/site/route-meta.js";

export const Route = createFileRoute("/")({
  head: () => pageMeta("Freight Forwarding & Customs Clearance in Mumbai", "Freight forwarding, customs clearance assistance, cargo transportation and import/export support from Fort, Mumbai."),
  component: HomePage,
});
