import { createFileRoute } from "@tanstack/react-router";
import { FriendsPage } from "@/components/melody-pages";

export const Route = createFileRoute("/friends")({
  head: () => ({ meta: [
    { title: "Friend Activity — Melody Blends" },
    { name: "description", content: "See what friends are listening to and follow their latest music activity." },
    { property: "og:title", content: "Friend Activity — Melody Blends" },
    { property: "og:description", content: "See what friends are listening to and follow their latest music activity." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: FriendsPage,
});
