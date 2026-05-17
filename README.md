# barreeyentos.io

Personal site for Alejandro Barrientos — `// make things // do things`.

Built with [Astro](https://astro.build) and deployed to GitHub Pages on the custom domain [barreeyentos.io](https://barreeyentos.io).

## Local development

```sh
npm install
npm run dev
```

Then open http://localhost:4321.

## Build

```sh
npm run build
```

Output goes to `dist/`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The `public/CNAME` file pins the custom domain.

## Structure

```
src/
├── layouts/Layout.astro       # Page shell (nav + main + footer + view transitions)
├── components/
│   ├── Nav.astro              # Sticky translucent nav with active-route indicator
│   ├── Footer.astro           # Minimal monospace footer
│   └── AppCard.astro          # Card used in the apps grid
├── styles/global.css          # Design tokens (dark + light) and site-wide styles
└── pages/
    ├── index.astro            # Home — "// make things // do things" hero + selected work
    ├── about.astro            # About page
    └── apps/
        ├── index.astro        # Apps listing
        └── day-calculator/
            ├── index.astro    # Day Calculator description
            └── privacy.astro  # Day Calculator privacy policy
```
