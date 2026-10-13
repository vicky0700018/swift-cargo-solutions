import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore - plain JSX module
import { QuotePage } from "@/site/pages.jsx";
// @ts-ignore - plain JS module
import { pageMeta } from "@/site/route-meta.js";

export const Route = createFileRoute("/quote")({
  head: () => pageMeta("Request a Quote", "Request a freight quote for domestic or international cargo movement from Mumbai."),
  component: QuotePage,
});
