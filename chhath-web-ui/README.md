# Chhath & Tihar

An interactive, story-driven introduction to Chhath and Tihar, connecting their shared themes of light, gratitude, and belonging. Illustrated festival guides, animated sunrise-to-dusk transitions, and a sound-enabled diya-lighting ritual bring the traditions to life.

## Features

- Scroll through a visual story from Chhath's river and sun to Tihar's lamps and doorways.
- Explore festival traditions and the days of Chhath and Tihar.
- Light five interactive diyas, with optional sound.
- Responsive navigation and reduced-motion support.

## Tech stack

- React and Vite
- GSAP for scroll-based and scene animations
- Tailwind CSS
- Web Audio API for optional diya sounds

## Getting started

From this directory, install dependencies and start the development server:

```sh
npm install
npm run dev
```

## Scripts

```sh
npm run dev      # Start the local development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Lint the project
```

## Deploying to Vercel

Import the GitHub repository into Vercel and configure:

- **Root Directory:** `chhath-web-ui`
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

The current app does not require environment variables.
