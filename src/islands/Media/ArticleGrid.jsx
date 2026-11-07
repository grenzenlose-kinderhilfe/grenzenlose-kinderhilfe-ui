import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import DataBoundary from "../DataBoundary";
import MediaMeta from "./MediaMeta";

/** The articles (already newest first) grouped by the year they appeared. */
const groupByYear = (articles) =>
  articles.reduce((groups, article) => {
    const year = article.date?.slice(0, 4) ?? "";
    const last = groups[groups.length - 1];

    if (last?.year === year) {
      last.items.push(article);
    } else {
      groups.push({ year, items: [article] });
    }

    return groups;
  }, []);

const ArticleCard = ({ title, sourceUrl, strings, ...meta }) => (
  <article className="article-card">
    <MediaMeta {...meta} />
    <h3>
      {sourceUrl ? (
        <a
          className="article-link"
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      ) : (
        title
      )}
    </h3>
    {sourceUrl && (
      <span className="article-cta" aria-hidden="true">
        {strings.readArticle}
        <FiArrowUpRight />
      </span>
    )}
  </article>
);

const ArticleGrid = ({
  data: articles,
  isPending,
  isError,
  strings,
  locale,
  countries,
}) => {
  const groups = React.useMemo(() => groupByYear(articles ?? []), [articles]);

  return (
    <DataBoundary
      isLoading={isPending}
      isError={isError}
      isEmpty={!articles?.length}
      strings={strings}
    >
      <div className="article-years">
        {groups.map(({ year, items }) => (
          <section key={year} className="article-year">
            <h2 className="article-year-title">{year}</h2>
            <div className="article-grid">
              {items.map((article, idx) => (
                <ArticleCard
                  key={`${article.title}-${idx}`}
                  {...article}
                  strings={strings}
                  locale={locale}
                  countries={countries}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </DataBoundary>
  );
};

export default ArticleGrid;
