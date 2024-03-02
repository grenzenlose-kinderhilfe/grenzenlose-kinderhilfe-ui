import {
  WORDPRESS_BLOG_BASE_URL,
  WORDPRESS_FEATURED_CATEGORIES,
} from "../constants";

class WordpressAPI {
  constructor() {
    this.apiUrl = WORDPRESS_BLOG_BASE_URL + "/wp-json/wp/v2";
    this.featuredCategories = WORDPRESS_FEATURED_CATEGORIES;
  }

  async getMediaImage(mediaUrl) {
    return await fetch(mediaUrl)
      .then((response) => response.json())
      .then((data) => ({
        img: data.source_url,
        alt: data.alt_text,
      }));
  }

  async getFeaturedPosts(locale) {
    const categoryId = this.featuredCategories[locale];

    const slides = await fetch(`${this.apiUrl}/posts?categories=${categoryId}`)
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
        mediaLink ? this.getMediaImage(mediaLink) : null,
      ),
    );

    return slides.map(({ title, link }, idx) => ({
      title,
      link,
      ...images[idx],
    }));
  }
}

export const wordpress = new WordpressAPI();
