import {
  WORDPRESS_BLOG_BASE_URL,
  WORDPRESS_FEATURED_CATEGORIES,
} from "../constants";

const getJson = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Could not load ${url}: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
};

/** Narrower versions than this are only used for the blurred backdrop. */
const MIN_SLIDE_WIDTH = 600;

/**
 * The versions WordPress generated of an upload that keep its proportions
 * (theme sizes and the thumbnail can be hard-cropped), plus the original,
 * narrowest first and one per width.
 */
const scaledVersions = ({ source_url: url, media_details: details = {} }) => {
  const ratio = details.width / details.height;
  const versions = [
    ...Object.values(details.sizes ?? {}),
    { source_url: url, width: details.width, height: details.height },
  ].filter(
    ({ source_url: src, width, height }) =>
      src && width && height && Math.abs(width / height - ratio) < 0.02,
  );

  return [...new Map(versions.map((v) => [v.width, v])).values()].sort(
    (a, b) => a.width - b.width,
  );
};

/**
 * A featured image as the carousel shows it: resized versions in a `srcSet`
 * instead of the full upload (often a multi-megabyte PNG), and a small
 * version for the blurred backdrop, which a CSS background cannot lazy-load.
 */
const toSlideImage = (media) => {
  if (!media?.source_url) return null;

  const versions = scaledVersions(media);
  const slideVersions = versions.filter(
    ({ width }) => width >= MIN_SLIDE_WIDTH,
  );
  const usable = slideVersions.length ? slideVersions : versions;

  if (!usable.length) return { img: media.source_url, alt: media.alt_text };

  return {
    img: (usable.find(({ width }) => width >= 1024) ?? usable.at(-1))
      .source_url,
    srcSet: usable.map((v) => `${v.source_url} ${v.width}w`).join(", "),
    backdrop: versions[0].source_url,
    alt: media.alt_text,
  };
};

/**
 * The blog's featured posts for the language, with their featured images
 * embedded, so the whole carousel takes a single request.
 */
export const getFeaturedPosts = async (locale) => {
  const categoryId = WORDPRESS_FEATURED_CATEGORIES[locale];

  const posts = await getJson(
    `${WORDPRESS_BLOG_BASE_URL}/wp-json/wp/v2/posts?categories=${categoryId}&_embed=wp:featuredmedia&_fields=title,link,_links,_embedded`,
  );

  // A post without a featured image has nothing to show in the carousel.
  return posts
    .map((post) => ({
      title: post.title.rendered,
      link: post.link,
      ...toSlideImage(post._embedded?.["wp:featuredmedia"]?.[0]),
    }))
    .filter(({ img }) => img);
};

const NAMED_ENTITIES = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "…",
  ndash: "–",
  mdash: "—",
};

/**
 * WordPress returns titles and excerpts as HTML. They are shown as plain text,
 * so nothing from the blog is ever injected into the page as markup.
 */
const toPlainText = (html = "") =>
  html
    .replace(/<[^>]*>/g, " ")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCodePoint(parseInt(hex, 16)),
    )
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&([a-z]+);/gi, (entity, name) => NAMED_ENTITIES[name] ?? entity)
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\s*\[…\]$/, "…");

/** The newest posts of a blog category, as plain text. */
export const getCategoryPosts = async (categoryId, count = 3) => {
  const posts = await getJson(
    `${WORDPRESS_BLOG_BASE_URL}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${count}&_fields=date,link,title,excerpt`,
  );

  return posts.map((post) => ({
    title: toPlainText(post.title.rendered),
    excerpt: toPlainText(post.excerpt.rendered),
    link: post.link,
    date: post.date.slice(0, 10),
  }));
};
