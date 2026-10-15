# Amrutha — Personal Portfolio

A creative, modern and responsive personal portfolio website for **Amrutha**, built with [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/) and [Tailwind CSS](https://tailwindcss.com/).

## ? Features

- **Creative pink theme** — soft gradients, subtle animations and decorative illustrations
- **Fully responsive** — phones, tablets and desktops
- **Accessible** — semantic HTML, visible focus, keyboard navigation, reduced motion support
- **App Router + RSC-first** — fast, maintainable and easy to extend
- **Honest by default** — no fake stats/credentials; unknown details stay editable
- **Vercel-ready** — zero-config deployment

## ??? Tech Stack

- [Next.js](https://nextjs.org/) (App Router, Turbopack-ready)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Lucide React](https://lucide.dev/)
- [Motion](https://motion.dev/) for React
- [ESLint](https://eslint.org/)

## ?? Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 20.9+ (tested with 24.x)
- [npm](https://www.npmjs.com/) (bundled with Node)

### Install dependencies
`ash
npm install
`

### Start development server
`ash
npm run dev
`
Open [http://localhost:3000](http://localhost:3000).

### Scripts
`ash
npm run dev     # Dev server
npm run build   # Production build
npm start       # Production server
npm run lint    # ESLint
`

## ?? Customise

All editable content lives in [data/portfolio.ts](./data/portfolio.ts). Search for TODO there.

| What to change | File | Notes |
|---|---|---|
| Name, headline, intro, about | data/portfolio.ts | Edit profile. Leave 
ull to hide until ready. |
| Skills & interests | data/portfolio.ts | skillCategories, skillsNote, interests. |
| Projects | data/portfolio.ts | projects. Put images in public/images/. URLs 
ull until ready. |
| Learning journey | data/portfolio.ts | learningJourney. |
| Contact & socials | data/portfolio.ts | profile.email, socials[].href. |
| Colours/fonts | pp/globals.css | CSS vars under @theme. |
| Profile photo | data/portfolio.ts | Set profile.photo.src to /images/your-photo.jpg. |
| SEO | data/portfolio.ts (site) or pp/layout.tsx | site.title, site.description. |
| Favicon/OG | pp/icon.svg, pp/opengraph-image.tsx | Replace as desired. |

## ?? Contact form (optional)

Add .env.local:

`env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your_inbox@example.com
CONTACT_FROM_EMAIL=onboarding@resend.dev  # optional
`

Restart dev server. If not configured, the form shows a clear setup note. On Vercel, set these in **Project Settings ? Environment Variables** and redeploy.

## ?? Structure

`	ext
app/                # App Router (layout, page, api/contact, og image, favicon)
components/         # UI components (server + client)
data/portfolio.ts   # All editable content
public/images/      # Photos/screenshots/diagrams (optional)
`

## ?? Deploy to Vercel

1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Use default Next.js settings
4. Add env vars if enabling contact form
5. Deploy

## Notes

- Decorative waste-bin illustration is purely decorative.
- Animations respect prefers-reduced-motion.
- No fake profiles/credentials/testimonials are published.
- Run 
pm run lint && npm run build before deploying.
