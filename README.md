# Atlas AI — Research Terminal

A private, static-first AI industrial intelligence dashboard built with Next.js and Tailwind CSS. It is designed for deployment to Cloudflare Pages.

## Included in v1

- Dark Bloomberg-inspired dashboard
- AI Journal placeholder and research framework
- Curated AI infrastructure watchlist
- Dedicated Broadcom research page
- Power infrastructure map and research timeline
- Static export configuration for Cloudflare Pages

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Cloudflare Pages deployment

1. Push this repository to GitHub.
2. In Cloudflare Pages, import the repository.
3. Configure:
   - **Production branch:** `main`
   - **Framework preset:** `Next.js (Static HTML Export)` (or `None` if absent)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node.js version:** `20` (set as `NODE_VERSION` if Cloudflare asks)
4. Deploy. Every later push to `main` will redeploy the site.

## Important scope

This release intentionally contains no live market data, price targets, or automated news claims. Add integrations only with sources you trust and in accordance with their terms of use. The status labels are research prompts, not investment advice.
