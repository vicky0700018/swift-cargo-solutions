import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore - plain JSX module
import { ServicesPage } from "@/site/pages.jsx";
// @ts-ignore - plain JS module
import { pageMeta } from "@/site/route-meta.js";

export const Route = createFileRoute("/services/")({
  head: () => pageMeta("Services", "Freight forwarding, customs, documentation, road, sea and air freight, cargo handling and supply chain coordination."),
  component: ServicesPage,
});
