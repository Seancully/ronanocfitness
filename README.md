# RONANOCfitness

Static one-page marketing site for online transformation coaching. Built against the Claude Design system bundle in `design-source/`.

## Stack
- Plain HTML + React (via UMD) + Babel-standalone — no build step.
- Deployable as-is to GitHub Pages / Netlify / Vercel / any static host.

## Run locally
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages
1. Push this repo to GitHub (e.g. `ronanocfitness/site`).
2. Repo → **Settings → Pages**.
3. *Source*: **Deploy from a branch**. *Branch*: `main` / `(root)`. Save.
4. Wait ~1 min — site will be live at `https://<user>.github.io/<repo>/`.
5. (Optional) Add a custom domain (e.g. `ronanoc.fitness`) in the same Pages panel and set a `CNAME` record at the registrar.

The `.nojekyll` file at the repo root disables Jekyll so filenames starting with `_` and the JSX files are served untouched.

## Post-deploy configuration

These are the only two values you need to paste in once the content is ready — no rebuild necessary, just edit and push.

### 1. Ronan's intro video (hero)
[Hero.jsx:59](Hero.jsx#L59) — set `COACH_VIDEO` to either:
- a YouTube/Vimeo embed URL (e.g. `https://www.youtube.com/embed/XXXXXXX`), or
- a direct `.mp4` path in the repo (e.g. `video/ronan.mp4`).

Blank = shows "Video coming soon" placeholder.

### 2. Instagram live feed
[Instagram.jsx:13](Instagram.jsx#L13) — set `BEHOLD_FEED_ID` to the feed ID from [behold.so](https://behold.so).

Behold's free tier connects to Ronan's Instagram and keeps a JSON feed up to date automatically. The site fetches the latest 6 posts on load and renders them as the grid — **whenever Ronan posts, the grid updates** (next page load). No server, no API tokens, no rebuilds.

Alternatives if Behold isn't preferred: [Elfsight](https://elfsight.com/instagram-feed-instashow/) or Instagram's official [Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api) — both would require swapping the `fetch` call in `Instagram.jsx`.

## Structure
```
index.html            ← entry point (meta tags, SEO, sticky CTA, cookie banner)
Hero.jsx              ← nav + hero (video)
Pricing.jsx           ← plans A/B/C (€20 full, €10 nutrition, €10 training)
Instagram.jsx         ← live Behold.io feed (falls back to placeholder)
Testimonials.jsx, Transformations.jsx, Includes.jsx, FAQ.jsx, Footer.jsx
privacy-policy.html   ← linked from footer + cookie banner
assets/               ← logo SVGs
design-source/        ← original design-system bundle (reference, not served)
```

## What's wired up
- WhatsApp CTAs throughout → `+353 83 360 4182` with pre-filled enquiry
- Each plan's CTA sends a WhatsApp message naming that specific plan
- Tap-to-call in the nav
- Light/dark theme toggle (persisted in `localStorage`)
- GDPR cookie banner → dismisses to `localStorage`
- SEO meta tags + JSON-LD `LocalBusiness` schema
- Smooth-scroll with nav offset

## Still pending (from the client)
- Real transformation photos
- Ronan's intro video file / embed
- Real client testimonials (placeholder copy currently)
- Behold.io feed ID (or alternative IG integration)
- Custom domain choice
