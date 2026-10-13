import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore - plain JSX module
import { AboutPage } from "@/site/pages.jsx";
// @ts-ignore - plain JS module
import { pageMeta } from "@/site/route-meta.js";

export const Route = createFileRoute("/about")({
  head: () => pageMeta("About Us", "Learn about Shree Siddhivinayak Clearing & Forwarding Services, a freight coordination business in Fort, Mumbai."),
  component: AboutPage,
});
