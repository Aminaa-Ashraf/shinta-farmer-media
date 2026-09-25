# Shinta

Coded clone of the Shinta social media agency site. Rebuilt in Next.js because the original Framer template is not working.

**Front-end only. No backend, no database, no API.**

---

## What it does

- Recreates the Shinta agency look in code — not Framer, not a CMS
- Home: hero phone stack, swipe control, stacked services, pricing, FAQ
- Case studies, blog, about, and contact pages from static files
- Hide-on-scroll nav, blur reveals, and Lenis smooth scroll
- Contact and newsletter forms stay in the browser — nothing is saved or emailed

## Why this exists

The official Shinta demo is a [Framer template](https://shinta.framer.media/). That setup is not usable here, so this repo is a from-scratch coded recreation. All copy, projects, people, and posts live in `src/data`. There is no server, auth, or persistence.

## Stack

| Layer | Choice |
|-------|--------|
| App | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS 4 |
| Motion | Framer Motion, Lenis |
| Data | Static TypeScript modules — **no backend** |
| Hosting | Vercel-ready |

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No `.env` and no database.

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Agency home — hero, services, process, pricing |
| `/projects` | Case study grid |
| `/projects/[slug]` | Case study detail |
| `/blog` | Journal index |
| `/blog/[slug]` | Article |
| `/about-us` | Team and story |
| `/contact` | Client-side contact form (does not send) |
| `/privacy-policy` | Privacy copy |
| `/terms` | Terms copy |

## What this is not

- Not the Framer template and not connected to Framer
- Not a live agency backend
- Forms do not persist, email, or hit an API
- Images are remote URLs (Unsplash / Framer CDN), not uploaded assets

## Scripts

```bash
npm run dev      # local
npm run build    # production build
npm run start    # serve the build
npm run lint     # eslint
```

## License

[MIT](LICENSE) · [@Aminaa-Ashraf](https://github.com/Aminaa-Ashraf)
