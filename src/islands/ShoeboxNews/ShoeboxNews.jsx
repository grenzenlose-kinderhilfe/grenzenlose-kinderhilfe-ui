import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import { getCategoryPosts } from "../../lib/wordpress";
import useLiveContent from "../useLiveContent";
import "./ShoeboxNews.css";

/** "4 November 2026" in the page language. */
const formatDate = (date, locale) =>
  new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));

/**
 * The newest Shoebox Campaign posts from the blog. The blog is a separate
 * site: if it cannot be reached, nothing is shown and the link to the blog
 * category next to this list is all the visitor gets.
 */
const ShoeboxNews = ({ locale, categoryId, initialPosts }) => {
  const { data: posts } = useLiveContent(
    () => getCategoryPosts(categoryId),
    initialPosts,
  );

  if (!posts?.length) return null;

  return (
    <ul className="shoebox-news">
      {posts.map(({ title, excerpt, link, date }) => (
        <li key={link}>
          <article className="shoebox-news-card">
            <time dateTime={date}>{formatDate(date, locale)}</time>
            <h3>
              <a href={link} target="_blank" rel="noreferrer">
                {title}
              </a>
            </h3>
            {excerpt && <p>{excerpt}</p>}
            <FiArrowUpRight className="shoebox-news-icon" aria-hidden="true" />
          </article>
        </li>
      ))}
    </ul>
  );
};

export default ShoeboxNews;
