# grenzenlose-kinderhilfe-ui

Website of the Grenzenlose Kinderhilfe / Határtalan Segítség foundation, built
with [Astro](https://astro.build) as a static, search-engine friendly site.

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # static site in dist/
pnpm preview   # serve the build locally
```

Requires Node 22.23 or newer (see `.nvmrc`).

## How the site is put together

- Every page is rendered to HTML at build time, once per language. Hungarian is
  served without a prefix (`/support/`), German and English under `/de/` and
  `/en/` (`/de/support/`). Pages carry canonical and `hreflang` links, and a
  sitemap is written to `dist/sitemap-index.xml`.
- On the unprefixed pages a small script sends first-time visitors to their
  browser's language (German when it is none of the three) and returning
  visitors to the language they picked in the switcher. Crawlers are not
  redirected.
- Pages and their URLs are listed in [src/routes.js](src/routes.js); the page
  bodies are in [src/views/](src/views/).
- Text is translated at build time from [src/i18n/locales/](src/i18n/locales/). Strings
  with markup use the react-i18next `<Trans>` format (`<0>…</0>`).
- Static parts are plain Astro components. React is only used for the parts
  that run in the browser ([src/islands/](src/islands/)): the donation widget,
  the media tabs, the institution list and the blog slideshow.

## Content

The articles, videos and supported institutions are maintained in a public
Google Spreadsheet — see [docs/content-spreadsheet.md](docs/content-spreadsheet.md)
for the setup and the column rules. The home page slideshow shows the featured
posts of the WordPress blog. Both are prerendered at build time and refreshed
in the browser, so edits appear without a new deployment.

The figures in the "what we achieved together" block, the partner list, the
running campaigns and the foundation's contact and bank details live in
[src/data/](src/data/) — one file each, so they can be corrected without
touching a component. The wording of the campaign and support cards is in
`src/i18n/locales/*.json`.

Card donations go through Stripe Payment Links, configured per currency (EUR,
HUF, CHF, USD), frequency (monthly or one-time) and amount in
[src/data/paymentLinks.js](src/data/paymentLinks.js). The donation
widget stays hidden until at least one link is filled in.

## Legal pages and cookie consent

The privacy policy (`/legal/privacy/`) and cookie policy (`/legal/cookies/`)
are linked from the footer only. Their text is Markdown, one file per page and
language, in [src/content/legal/](src/content/legal/); change the `updated`
date at the top of a file whenever its content changes.

Google Analytics is only loaded after the visitor accepts statistics cookies
in the cookie banner ([src/components/CookieBanner.astro](src/components/CookieBanner.astro)).
The choice is kept in local storage for a year; raise `CONSENT_VERSION` in
[src/constants.js](src/constants.js) to ask everyone again, for example after
adding a new tracking service, and update the cookie policy to match. The
fonts are self-hosted, so no page contacts Google before consent.

## Build settings

A few values are read from environment variables at build time, with a `.env`
file as the local fallback (a variable set in the environment wins). Copy
[.env.example](.env.example) to `.env` to set them locally; the GitHub Actions
build takes them from the repository variables of the same name (Settings →
Secrets and variables → Actions → Variables).

The build stops with an error naming the variable when a required one is
missing.

| Variable                            | Required | Purpose                                                                                                                  |
| ----------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| `PUBLIC_GOOGLE_SHEET_ID`            | yes      | Content spreadsheet id                                                                                                   |
| `PUBLIC_STRIPE_CUSTOMER_PORTAL_URL` | no       | Stripe customer portal login link, where monthly donors update or cancel; "manage your donation" links hidden when unset |
| `PUBLIC_GA_MEASUREMENT_ID`          | no       | Google Analytics measurement ID; no tracking when unset                                                                  |

## Deployment

`dist/` works on any static host: each page is a `<path>/index.html`. Point the
host's 404 page at `404.html`. Rebuild periodically (e.g. yearly) so the
"years active" figure, the footer year and the indexed content stay current.
