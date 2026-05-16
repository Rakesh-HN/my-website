# Portfolio Website

A modern personal portfolio built with **Next.js 15** and optimized for **Vercel** deployment and **Google Search** indexing.

## Customize

Edit `src/data/portfolio.ts` with your name, bio, projects, links, and email. After deploying to Vercel, set `site.siteUrl` to your live URL (e.g. `https://your-name.vercel.app`).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### Option A — Vercel website (recommended)

1. Push this project to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project**, import your repository.
4. Vercel auto-detects Next.js. Click **Deploy**.
5. Your site will be live at `https://your-project.vercel.app`.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Follow the prompts. Run `vercel --prod` for production.

## Get on Google Search

1. After deploy, update `siteUrl` in `src/data/portfolio.ts` and redeploy.
2. Open [Google Search Console](https://search.google.com/search-console).
3. Add your Vercel URL as a property and verify ownership (HTML tag or DNS).
4. Submit your sitemap: `https://your-site.vercel.app/sitemap.xml`.
5. Request indexing for your homepage.

SEO is already configured: metadata, `robots.txt`, `sitemap.xml`, Open Graph, and JSON-LD structured data.

## Tech stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- CSS Modules
