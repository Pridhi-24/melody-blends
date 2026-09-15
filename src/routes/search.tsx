import { createFileRoute } from "@tanstack/react-router";
import { SearchPage } from "@/components/melody-pages";

export const Route = createFileRoute("/search")({
  head: () => ({ meta: [
    { title: "Search Songs — Melody Blends" },
    { name: "description", content: "Search a locally curated catalog of Indian songs, artists, moods, and eras." },
    { property: "og:title", content: "Search Songs — Melody Blends" },
    { property: "og:description", content: "Search a locally curated catalog of Indian songs, artists, moods, and eras." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: SearchPage,
});
