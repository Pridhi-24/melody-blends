import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/melody-pages";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [
    { title: "Catalog Control — Melody Blends" },
    { name: "description", content: "Manage the local prototype song catalog with simple add, edit, and delete tools." },
    { property: "og:title", content: "Catalog Control — Melody Blends" },
    { property: "og:description", content: "Manage the local prototype song catalog with simple add, edit, and delete tools." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AdminPage,
});
