# barreeyentos.io

Personal site for Ashley Negrette — `// make things // do things`.

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
├── layouts/Layout.astro       # Page shell (header + main + footer)
├── components/Header.astro    # Brand bar + nav + optional page title
├── styles/global.css          # Site-wide styles
└── pages/
    ├── index.astro            # Home — "// make things // do things"
    ├── about.astro            # About page
    └── apps/day-calculator/
        ├── index.astro        # Day Calculator description
        └── privacy.astro      # Day Calculator privacy policy
```
