# Melody Blends prototype

## Build
- Replace the blank page with a frontend-only React prototype using local mock data and state.
- Recreate the immersive illustrated header treatment from the third reference, branded “Melody Blends,” with a warm Indian street-music atmosphere, sticky navigation, social counters, notifications, and a compact player.
- Create dedicated screens for Home, Search, Playlists, Blend, Friends, Profile, Login/Signup, Onboarding, and the hidden `/admin` catalog view.
- Add four scenic playlist experiences using original generated artwork inspired by Indian road journeys, dhabas, autos, and rooftop mehfils; each includes a working embedded mini-player.
- Implement local interactions: playback, search filtering, recommendations, playlist song reordering, create/join blend with animated compatibility, blend tabs, friend activity, history streak, notifications, onboarding chips, mock auth, and admin song CRUD.

## Visual system
- Use amber, dusty orange, marigold, and deep indigo tokens with dark blue primary text; no pink palette.
- Pair an expressive Devanagari display face with a polished English sans-serif.
- Add marigold/string-light borders, painted truck details, signboard labels, and restrained motion.
- Format numbers with a reusable Devanagari numeral utility wherever Hindi labels appear.

## Technical details
- Keep all data in React state with no backend, authentication provider, or music API.
- Use TanStack routes, Tailwind CSS v4 tokens, Lucide icons, and Framer Motion.
- Add route-specific social metadata and verify desktop/mobile layout, interactions, console output, and the final build signal.
