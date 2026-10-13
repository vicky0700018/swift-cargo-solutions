import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore - plain JSX module
import { GalleryPage } from "@/site/pages.jsx";
// @ts-ignore - plain JS module
import { pageMeta } from "@/site/route-meta.js";

export const Route = createFileRoute("/gallery")({
  head: () => pageMeta("Logistics Gallery", "Photographs of ports, container terminals, freight trucks, warehouses and air cargo operations."),
  component: GalleryPage,
});
