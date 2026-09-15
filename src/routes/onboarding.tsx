import { createFileRoute } from "@tanstack/react-router";
import { OnboardingPage } from "@/components/melody-pages";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [
    { title: "Choose Your Music — Melody Blends" },
    { name: "description", content: "Pick favorite genres, moods, eras, and artists for your music profile." },
    { property: "og:title", content: "Choose Your Music — Melody Blends" },
    { property: "og:description", content: "Pick favorite genres, moods, eras, and artists for your music profile." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: OnboardingPage,
});
