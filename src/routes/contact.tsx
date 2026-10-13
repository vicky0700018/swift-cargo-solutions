import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore - plain JSX module
import { ContactPage } from "@/site/pages.jsx";
// @ts-ignore - plain JS module
import { pageMeta } from "@/site/route-meta.js";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta("Contact Us", "Contact Shree Siddhivinayak Clearing & Forwarding Services at 138 Chandan Chamber, Fort, Mumbai."),
  component: ContactPage,
});
