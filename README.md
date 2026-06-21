# SafeCleaning — Website

Production website for **SafeCleaning** (οικογενειακή εταιρεία καθαρισμού,
Παλλήνη Αττικής). Static **Astro** site, deployed on **Netlify**.

Live domain (do not repoint DNS without approval): https://safecleaning.gr

## Stack
- [Astro](https://astro.build) 5 (static output) + `@astrojs/sitemap`
- Netlify hosting + **Netlify Forms** for the quote form
- No CMS, no backend, no database — fast and zero-maintenance.

## Develop
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
npm run preview    # serve the production build locally
```
Node 20+.

## Structure
```
src/
├── data/site.js          # SINGLE SOURCE OF TRUTH (company NAP, services, copy)
├── layouts/Base.astro    # SEO head (title/desc/canonical/OG/JSON-LD) + Header/Footer
├── components/           # Header, Footer, Icon, TrustStrip, CtaBand, ServiceCard, QuoteForm
├── pages/
│   ├── index.astro
│   ├── ypiresies/index.astro
│   ├── ypiresies/[slug].astro     # one SEO page per service (getStaticPaths)
│   ├── poioi-eimaste.astro
│   ├── epikoinonia.astro          # Netlify form
│   └── efxaristoume.astro         # thank-you (noindex)
└── styles/global.css
public/images/            # all images (localized; no external hotlinks)
```

## Editing content
Edit `src/data/site.js` — services, contacts, and copy propagate to every page.
Add a service by appending one object (with a `slug`); its SEO page is generated
automatically.

## Pre-launch checklist
- [ ] Replace placeholder photos in `public/images/` with real SafeCleaning
      photos (keep the same filenames → zero code change). The current
      `svc-*.jpg` / `hero.jpg` are temporary stock; `logo.png` and `why-team.png`
      are the client's real assets.
- [ ] In Netlify: Forms → set the recipient email for the `prosfora` form.
- [ ] Consider upgrading to Astro 6 to clear npm-audit advisories (dev/SSR-only
      vectors, not exploitable in this static build, but cleaner for launch).
- [ ] Confirm both phone numbers are active; add Google Business / map embed if
      desired.

---
Σχεδιασμός & ανάπτυξη: **Istos Studio**
