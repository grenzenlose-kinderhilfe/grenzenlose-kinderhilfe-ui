import {
  WORDPRESS_BLOG_BASE_URL,
  WORDPRESS_FEATURED_CATEGORIES,
} from "../constants";

const getMediaImage = async (mediaUrl) => {
  return await fetch(mediaUrl)
    .then((response) => response.json())
    .then((data) => ({
      img: data.source_url,
      alt: data.alt_text,
    }));
};

export const getFeaturedPosts = async (locale) => {
  const categoryId = WORDPRESS_FEATURED_CATEGORIES[locale];

  const slides = await fetch(
    `${WORDPRESS_BLOG_BASE_URL}/wp-json/wp/v2/posts?categories=${categoryId}`,
  )
    .then((response) => response.json())
    .then((data) =>
      data.map((elem) => ({
        title: elem.title.rendered,
        link: elem.link,
        mediaLink: elem._links["wp:featuredmedia"]?.[0].href,
      })),
    );

  const images = await Promise.all(
    slides.map(({ mediaLink }) =>
      mediaLink ? getMediaImage(mediaLink) : null,
    ),
  );

  return slides.map(({ title, link }, idx) => ({
    title,
    link,
    ...images[idx],
  }));
};
