import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore - plain JSX module
import { AdminLoginPage } from "@/site/pages.jsx";
// @ts-ignore - plain JS module
import { pageMeta } from "@/site/route-meta.js";

export const Route = createFileRoute("/admin-login")({
  head: () => pageMeta("Admin Login", "Demo administration sign-in for the website."),
  component: AdminLoginPage,
});
