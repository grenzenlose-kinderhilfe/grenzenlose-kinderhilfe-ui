import React from "react";
import { Grid } from "@chakra-ui/react";

import DataBoundary from "../../../components/DataBoundary/DataBoundary";
import { useArticles } from "../../../hooks/useContent";
import Article from "./Article/Article";

const Articles = () => {
  const { data: articles, isPending, isError } = useArticles();

  return (
    <DataBoundary
      isLoading={isPending}
      isError={isError}
      isEmpty={!articles?.length}
    >
      <Grid
        gap={{ base: 2, lg: 8 }}
        mb="20px"
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        {articles?.map((item, idx) => (
          <Article key={`article-${idx}`} {...item} />
        ))}
      </Grid>
    </DataBoundary>
  );
};

export default Articles;
