import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore - plain JSX module
import { AdminDashboardPage } from "@/site/pages.jsx";
// @ts-ignore - plain JS module
import { pageMeta } from "@/site/route-meta.js";

export const Route = createFileRoute("/admin")({
  head: () => pageMeta("Admin Dashboard", "Manage website content, services, gallery and enquiries."),
  component: AdminDashboardPage,
});
