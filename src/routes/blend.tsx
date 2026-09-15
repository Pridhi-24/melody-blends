import { createFileRoute } from "@tanstack/react-router";
import { BlendPage } from "@/components/melody-pages";

export const Route = createFileRoute("/blend")({
  head: () => ({ meta: [
    { title: "Create a Music Blend — Melody Blends" },
    { name: "description", content: "Compare music tastes and explore a shared mock playlist with friends." },
    { property: "og:title", content: "Create a Music Blend — Melody Blends" },
    { property: "og:description", content: "Compare music tastes and explore a shared mock playlist with friends." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: BlendPage,
});
