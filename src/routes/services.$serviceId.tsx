import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore - plain JSX module
import { ServiceDetailPage } from "@/site/pages.jsx";
// @ts-ignore - plain JS module
import { pageMeta } from "@/site/route-meta.js";

export const Route = createFileRoute("/services/$serviceId")({
  head: () => pageMeta("Service Details", "Scope, process and related services for this freight logistics service from Fort, Mumbai."),
  component: ServiceDetailPage,
});
