# Melody Blends

i want header like the third pic duplicate it and write Melody Blends instead of this 
Build "MelodyBlend" — a frontend-only, fully interactive prototype for a social music discovery and playlist-blending web app. Use React, Tailwind CSS, Lucide React (for icons), and Framer Motion (for animations).

CRITICAL INSTRUCTION: PROTOTYPE ONLY. Do not implement a real backend, real authentication, or external API calls (no Spotify API). Use robust local mock/dummy data and React state for everything (users, songs, playlists, compatibility scores, CRUD operations). All buttons and flows must feel fully functional using this local state.

1. ART DIRECTION & VISUAL THEME (INDIAN NOSTALGIA)

Vibe: Unmistakably Indian, nostalgic, and warm. Avoid generic dark SaaS layouts and cold neon gradients.

Color Palette: Warm ambers, dusty oranges, deep indigo-blue night skies, and marigold/string-light yellows.

Text Aesthetics: Implement a dark blue and bluish-black color theme for all primary text elements to ensure high contrast and a polished aesthetic (strictly avoid pink palettes).

Typography: Use bold Devanagari-style display fonts alongside English for section/playlist titles (e.g., "सदाबहार गाने / Evergreen Hits", "रिक्शा वाला / Rickshaw Wala").

Number Localization: Implement a dynamic number-formatting utility function. Wherever Hindi/Devanagari text is displayed (like play counts, song durations, or streak counters), ensure the numbers automatically render in Devanagari numerals.

Motifs: Use authentic decorative touches (auto meters, "HORN OK PLEASE" typography, dhaba signboards, marigold garlands, string lights) as subtle UI elements or illustrated backdrops.

2. CORE LAYOUT COMPONENTS

Header (Inspired by Deluxe Salon): A distinctive, beautifully designed sticky header. Include a logo/wordmark, navigation links (Home, Search, Playlists, Blend, Friends, Profile). Instead of a flat bar, give it a warm, illustrated motif (e.g., a subtle marigold garland or string-light border across the bottom edge). Add decorative social/engagement icons (heart, comment, share) styled beautifully with mock counters.

Footer: A visually distinct "night sky" theme using deep indigo-blue with subtle star/lantern motifs to close the page. Keep it clean with standard links (About, Contact, Socials) and a "Made with ♪ in India" detail.

3. PLAYLIST CARDS & HOME DASHBOARD (SCENIC UI)

Cover Art UI: The Home dashboard should feature large, visually rich playlist rows. Each card must act as an illustrated scene (e.g., auto-rickshaw driver in rain, highway dhaba, decorated truck on NH48, rooftop mehfil).

Integrated Mini-Player: Overlay a sleek mini music-player bar directly at the bottom of these scenic playlist cards (showing song title, artist, play/pause button, and progress bar).

4. REQUIRED FEATURES & FLOWS (ALL MOCK STATE)

Auth Screens: Beautiful Login/Signup UI with "desi" themed illustrations.

Onboarding: A chip-selection UI to pick favorite genres, moods, eras, and artists.

Search UI: Search bar for songs/artists with instant mock results and rich list items.

Recommendations: Display song/playlist suggestions with a distinct visual tag explaining why it was recommended (e.g., "Match: 90s Bollywood", "Because you listened to Mehfil").

Playlist Pages: View details, and include drag-and-drop or simple up/down arrow functionality to reorder songs using local state.

Music Blend Flow: A screen to "Create/Join Blend" with a mock invite code. Include an engaging Framer Motion animation calculating a compatibility percentage (Jaccard-style). Display the resulting blended playlist divided into three tabs: "Both Like", "From You", and "From Them".

Activity & Social:

A Listening History section with a mock "streak" counter.

A Friends List sidebar/page with a mock activity feed (e.g., "Rahul is listening to Cutting Chai").

A Notifications dropdown/panel.

Admin View: A simple, hidden dashboard route (/admin) with a basic CRUD table to add/edit/delete mock catalog songs (persisted only in React state).

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5acb5a5b-2f2c-474a-a0d6-325d0caab3ad).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
