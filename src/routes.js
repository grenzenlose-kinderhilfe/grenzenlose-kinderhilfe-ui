import { LOCALE_DE, LOCALE_EN, WORDPRESS_BLOG_BASE_URL } from "./constants";

/**
 * Every page of the site, in navigation order. Each internal page is built
 * once per language: /support, /de/support, /en/support.
 *
 * - `display: false` keeps a page out of the navigation.
 * - `isButton` renders the entry as the highlighted call to action.
 * - `noIndex` keeps a page out of search results and the sitemap.
 * - external entries only appear in the navigation.
 */
const routes = [
  { id: "home", path: "/", localizationKey: "home" },
  { id: "media", path: "/media", localizationKey: "media" },
  {
    id: "blog",
    url: WORDPRESS_BLOG_BASE_URL,
    isExternal: true,
    // The blog has no English version; English visitors get the German one.
    localeSuffix: { [LOCALE_DE]: "/de", [LOCALE_EN]: "/de" },
    localizationKey: "blog",
  },
  { id: "pages", path: "/pages", localizationKey: "pages" },
  { id: "shoebox", path: "/pages/shoebox", localizationKey: "shoebox" },
  { id: "about", path: "/about", localizationKey: "aboutUs" },
  {
    id: "support",
    path: "/support",
    localizationKey: "support",
    isButton: true,
  },
  {
    id: "thankYou",
    path: "/thank-you",
    localizationKey: "thankYou",
    display: false,
    noIndex: true,
  },
  // Linked from the footer only. The text is in src/content/legal/.
  {
    id: "privacy",
    path: "/legal/privacy",
    localizationKey: "privacy",
    display: false,
  },
  {
    id: "cookies",
    path: "/legal/cookies",
    localizationKey: "cookies",
    display: false,
  },
];

export const pageRoutes = routes.filter(({ isExternal }) => !isExternal);

/** Paths ("/thank-you") that search engines should not index. */
export const noIndexPaths = pageRoutes
  .filter(({ noIndex }) => noIndex)
  .map(({ path }) => path);

export const navigationRoutes = routes.filter(({ display }) => display ?? true);

export default routes;
