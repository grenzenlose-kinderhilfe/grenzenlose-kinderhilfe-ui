import React from "react";

import DataBoundary from "../DataBoundary";
import MediaMeta from "./MediaMeta";

const ArticleGrid = ({ data: articles, isPending, isError, strings }) => (
  <DataBoundary
    isLoading={isPending}
    isError={isError}
    isEmpty={!articles?.length}
    strings={strings}
  >
    <div className="article-grid">
      {articles?.map(({ title, ...meta }, idx) => (
        <article key={`${title}-${idx}`} className="article-card">
          <h2 className="heading-default">{title}</h2>
          <MediaMeta {...meta} linkLabel={strings.sourceLink} />
        </article>
      ))}
    </div>
  </DataBoundary>
);

export default ArticleGrid;
