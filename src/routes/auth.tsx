import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "@/components/melody-pages";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [
    { title: "Sign In — Melody Blends" },
    { name: "description", content: "Enter the Melody Blends prototype and start your shared soundtrack." },
    { property: "og:title", content: "Sign In — Melody Blends" },
    { property: "og:description", content: "Enter the Melody Blends prototype and start your shared soundtrack." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AuthPage,
});
