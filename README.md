# Yousef Sliem Portfolio — React

A React + Vite conversion of the portfolio site.

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── App.jsx                  # Root component — layout + modal state
├── index.jsx                # React DOM entry
├── styles.css               # All CSS (ported from HTML + React additions)
├── LangContext.jsx          # EN/AR language context
├── LogoSVG.jsx              # Sliem logo SVG component
└── components/
    ├── Loader.jsx           # Loading screen
    ├── Cursor.jsx           # Custom cursor (desktop)
    ├── SideNav.jsx          # Fixed right-side nav dots
    ├── LanguageToggle.jsx   # EN/AR toggle button
    ├── Hero.jsx             # Hero section
    ├── BestOf.jsx           # Best of Sliem card grid
    ├── SocialWork.jsx       # Social media work grid
    ├── Work3D.jsx           # 3D work strips (Marble, Fragrance, Ferrari)
    ├── Stone.jsx            # Stone & Interior tabbed gallery
    ├── WhyChooseUs.jsx      # Why choose us section
    ├── Identity.jsx         # Visual identity / logo section
    ├── Impact.jsx           # The Impact counters + closing logo
    ├── Contact.jsx          # Contact form + social links
    └── Modal.jsx            # Project case study modal

data/
└── images.js                # All base64 images (22MB) — hero, projects, modals
```

## Tech Stack
- React 18
- Vite 5
- CSS custom properties (design tokens)
- IntersectionObserver (scroll reveals — no GSAP dependency)
- Google Fonts (Bebas Neue, Cormorant Garamond, DM Sans)

## Deployment
The `npm run build` output in `/dist` is a static site.
Deploy to Vercel, Netlify, or any static host:
- Vercel: `vercel --prod`
- Netlify: drag and drop `/dist` folder

## Notes
- `data/images.js` is 22MB due to embedded base64 images
- For production optimization, move images to a CDN and replace base64 with URLs
- GSAP is not used — all animations via CSS transitions + IntersectionObserver
