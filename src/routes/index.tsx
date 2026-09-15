import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/melody-pages";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Melody Blends — Social Music Discovery" },
    { name: "description", content: "Discover Indian music, scenic playlists, and shared listening blends with friends." },
    { property: "og:title", content: "Melody Blends — Social Music Discovery" },
    { property: "og:description", content: "Discover Indian music, scenic playlists, and shared listening blends with friends." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});
