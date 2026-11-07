import { getArticles, getLocations, getVideos } from "./content";
import {
  WORDPRESS_FEATURED_CATEGORIES,
  WORDPRESS_SHOEBOX_CATEGORIES,
} from "../constants";
import { getCategoryPosts, getFeaturedPosts } from "./wordpress";

/**
 * Content from the spreadsheet and the blog, loaded once while the site is
 * built and baked into the HTML so search engines see it. The page then loads
 * it again in the browser, so edits show up without a new deployment.
 *
 * A source that cannot be reached during the build is not fatal: the page is
 * built without it (`null`) and the browser loads it as before.
 */

const cache = new Map();

const once = (key, load) => {
  if (!cache.has(key)) {
    cache.set(
      key,
      load().catch((error) => {
        console.warn(`[build] ${key} not prerendered: ${error.message}`);
        return null;
      }),
    );
  }

  return cache.get(key);
};

export const buildArticles = () => once("articles", getArticles);

export const buildVideos = () => once("videos", getVideos);

export const buildLocations = () => once("locations", getLocations);

export const buildFeaturedPosts = (locale) =>
  once(`featuredPosts:${WORDPRESS_FEATURED_CATEGORIES[locale]}`, () =>
    getFeaturedPosts(locale),
  );

export const buildShoeboxPosts = (locale) =>
  once(`shoeboxPosts:${WORDPRESS_SHOEBOX_CATEGORIES[locale]}`, () =>
    getCategoryPosts(WORDPRESS_SHOEBOX_CATEGORIES[locale]),
  );
