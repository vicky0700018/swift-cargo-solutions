import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore - plain JSX module
import { ProcessPage } from "@/site/pages.jsx";
// @ts-ignore - plain JS module
import { pageMeta } from "@/site/route-meta.js";

export const Route = createFileRoute("/process")({
  head: () => pageMeta("Our Process", "A clear four-step freight process: requirements, route assessment, documentation and progress updates."),
  component: ProcessPage,
});
