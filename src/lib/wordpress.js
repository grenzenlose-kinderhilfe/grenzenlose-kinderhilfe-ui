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

const getMediaImage = async (mediaUrl) => {
  const data = await getJson(mediaUrl);

  return { img: data.source_url, alt: data.alt_text };
};

export const getFeaturedPosts = async (locale) => {
  const categoryId = WORDPRESS_FEATURED_CATEGORIES[locale];

  const posts = await getJson(
    `${WORDPRESS_BLOG_BASE_URL}/wp-json/wp/v2/posts?categories=${categoryId}`,
  );

  const slides = posts.map((elem) => ({
    title: elem.title.rendered,
    link: elem.link,
    mediaLink: elem._links["wp:featuredmedia"]?.[0].href,
  }));

  const images = await Promise.all(
    slides.map(({ mediaLink }) =>
      mediaLink ? getMediaImage(mediaLink) : null,
    ),
  );

  // A post without a featured image has nothing to show in the carousel.
  return slides
    .map(({ title, link }, idx) => ({ title, link, ...images[idx] }))
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
