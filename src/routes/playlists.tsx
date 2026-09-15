import { createFileRoute } from "@tanstack/react-router";
import { PlaylistsPage } from "@/components/melody-pages";

export const Route = createFileRoute("/playlists")({
  head: () => ({ meta: [
    { title: "Evergreen Playlists — Melody Blends" },
    { name: "description", content: "Play and reorder nostalgic Indian music playlists in a rich scenic player." },
    { property: "og:title", content: "Evergreen Playlists — Melody Blends" },
    { property: "og:description", content: "Play and reorder nostalgic Indian music playlists in a rich scenic player." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PlaylistsPage,
});
