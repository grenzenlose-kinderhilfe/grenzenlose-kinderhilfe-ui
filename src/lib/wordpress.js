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
