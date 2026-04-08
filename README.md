# Createx SEO Agency — Landing Page

**[Live Demo](https://seo-landing-jvebvluib-evhenii-melnychenkos-projects.vercel.app/)**

A one-page SEO agency landing built with Gulp 4, SCSS, modular HTML includes, and Webpack bundling for JavaScript. The design matches the original at [live.verstaem.online/createx-seo](https://live.verstaem.online/createx-seo/).

## Tech Stack

- **Gulp 4** — task runner (HTML, SCSS, JS, images, fonts, server, zip)
- **Webpack 5** (via webpack-stream) — JS bundling
- **SCSS** (Dart Sass) — styles split by section
- **BrowserSync** — live reload dev server
- **gulp-file-include** — HTML partial includes
- **Swiper** — slider for Cases Studies and Testimonials sections
- **gulp-imagemin / gulp-webp** — image optimization and WebP conversion

## Page Sections

Sections are assembled in `src/index.html` via `@@include` in this order:

| File | Section |
|------|---------|
| `html/header.html` | Sticky navigation with logo, nav links, CTA button |
| `html/hero.html` | Hero banner with headline, CTA, and video button |
| `html/partners.html` | Award badges + client logo grid |
| `html/about.html` | Agency intro with image and "More about us" button |
| `html/figures.html` | Circular progress stat cards |
| `html/services.html` | Services section with tabs and panel images |
| `html/analysis.html` | Free analysis CTA form |
| `html/faq.html` | Accordion FAQ with decorative SVGs |
| `html/cases.html` | Case studies Swiper slider |
| `html/benefits.html` | Benefits grid cards |
| `html/pricing.html` | Monthly/yearly pricing toggle with three cards |
| `html/testimonials.html` | Client testimonials Swiper slider |
| `html/news.html` | Latest news with two article cards |
| `html/footer.html` | Footer with logo, nav columns, newsletter input, award logos |

A fixed back-to-top button (`.btn-up`) is included directly in `index.html`.

## Project Structure

```text
src/
  index.html              — page entry point (assembles all partials)
  html/                   — HTML section partials
  scss/
    style.scss            — root import
    basik/                — variables, reset, mixins, typography, media-grid
    parts/
      landing/
        index.scss        — all section styles
      header/index.scss
      footer/index.scss
      section/index.scss
  js/
    app.js                — JS entry point
    modules/
      mobileMenu.js         — hamburger toggle, backdrop, ESC / outside-click / resize
      tabs.js               — Services section tab switching
      faq.js                — FAQ accordion
      pricing.js            — monthly / yearly billing toggle
      sliders.js            — Cases Studies and Testimonials Swiper sliders
      isWebp.js             — WebP support detection
      scrollReveal.js       — scroll-reveal animations
  img/                    — images, SVGs, icons, sprite.svg
  fonts/
    Montserrat/           — all weights and styles
  svgicons/               — source SVGs for sprite generation

gulp/
  config/
    path.js               — source/dist path config
    plugins.js            — shared Gulp plugins
    ftp.js                — optional FTP deploy config
  tasks/                  — individual Gulp tasks
    html.js, scss.js, js.js, images.js, fonts.js,
    server.js, reset.js, zip.js, svgSprite.js
  version.json

dist/                     — generated build output (gitignored)
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development mode

```bash
npm run dev
```

Starts BrowserSync dev server with file watchers. Rebuilds automatically on changes.

### 3. Production build

```bash
npm run build
```

Outputs minified HTML, CSS, JS, optimized images, and versioned assets to `dist/`.

### 4. Create ZIP archive

```bash
npm run zip
```

Runs a production build and packages `dist/` into a ZIP file.

### 5. Regenerate SVG sprite

```bash
npm run svgSprive
```

Combines SVGs from `src/svgicons/` into `src/img/sprite.svg`.

## JavaScript Interactions

Each feature lives in its own module under `src/js/modules/` and is imported directly in `app.js`:

| Module | Responsibility |
|--------|----------------|
| `mobileMenu.js` | Hamburger toggle with backdrop and keyboard (`Escape`) / outside-click / resize support |
| `tabs.js` | Services section tab switching (`data-tab-target` / `data-tab-panel`) |
| `faq.js` | Single-open accordion with `aria-expanded` |
| `pricing.js` | Monthly / yearly billing switch with price swap and card re-animation |
| `sliders.js` | Cases Swiper (1/2/3 slides per breakpoint) and Testimonials Swiper (centered, nav + pagination) |

## Scroll Reveal Animations

Controlled by `src/js/modules/scrollReveal.js` via `data-reveal` attributes:

- `data-reveal="from-left"` / `from-right` / `from-bottom` / `zoom`
- `data-reveal-delay="100"` — delay in milliseconds
- Respects `prefers-reduced-motion`

## Notes

- `"type": "module"` is set in `package.json` — use ESM syntax in Gulp config files.
- `sprite.svg` is used for social icons, nav arrows, and the back-to-top button chevron.
- If Browserslist warns about outdated caniuse-lite, run:

```bash
npx browserslist@latest --update-db
```

## License

ISC

