# aaravsec.dev

Personal offensive-security portfolio for Aarav Vishnoi — a working ledger of
web-exploitation **findings**, lab writeups, and security **tooling**.

**Live:** https://aaravsec.dev

## Design

The site treats each writeup as a security *advisory*: every finding has an ID
(`AV-001`…), a colour-coded **severity** (Critical / High / Medium), and a date,
so the work reads like a real report rather than a list of buzzwords.

- **Palette** — deep ink background with an amber-phosphor brand accent. Red is
  reserved exclusively for the *Critical* severity signal.
- **Type** — Space Grotesk (display) · Inter (body) · JetBrains Mono (data, IDs,
  labels). Mono is used where it carries meaning, not for everything.
- **Motion** — one restrained boot-reveal on load; fully disabled under
  `prefers-reduced-motion`.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui (Radix)
- React Router (client-side routing)
- Deployed on Vercel

## Local development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview the build locally
```

> Uses **npm** (`package-lock.json`). Don't reintroduce a second lockfile.

## Project layout

```
src/
  components/    Layout, Navbar, Footer, Logo, ProjectCard (finding card)
  hooks/         usePageMeta — per-route title/description/OG/canonical
  lib/           severity helpers
  pages/         top-level routes + pages/projects/* (individual findings)
public/          favicon.svg, og-image.png, robots.txt, sitemap.xml
```

## SEO note

This is a client-rendered SPA, so per-route `<title>`/meta are set at runtime by
`usePageMeta`. That fixes tab titles and link unfurls during navigation, but
crawlers that don't execute JS only see the static `index.html`. The durable fix
is to **prerender** the routes to static HTML at build time (e.g.
`vite-plugin-prerender` / `vite-react-ssg`) or migrate to a framework with SSG.
A real `og-image.png` and `sitemap.xml` are already in `public/`.
