import { createFileRoute } from "@tanstack/react-router";
import { ProfilePage } from "@/components/melody-pages";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [
    { title: "Your Music Profile — Melody Blends" },
    { name: "description", content: "Review your local listening history, streak, liked songs, and playlists." },
    { property: "og:title", content: "Your Music Profile — Melody Blends" },
    { property: "og:description", content: "Review your local listening history, streak, liked songs, and playlists." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProfilePage,
});
