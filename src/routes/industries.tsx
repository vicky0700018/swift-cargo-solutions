import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore - plain JSX module
import { IndustriesPage } from "@/site/pages.jsx";
// @ts-ignore - plain JS module
import { pageMeta } from "@/site/route-meta.js";

export const Route = createFileRoute("/industries")({
  head: () => pageMeta("Industries We Serve", "Logistics support for manufacturers, distributors, importers, exporters, retail and SMEs."),
  component: IndustriesPage,
});
