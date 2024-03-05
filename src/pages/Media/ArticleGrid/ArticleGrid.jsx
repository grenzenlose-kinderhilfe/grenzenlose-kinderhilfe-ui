import React from "react";
import { Grid } from "@chakra-ui/react";

import items from "./articles.json";
import Article from "./Article/Article";

const Articles = () => {
  const sortedMediaItems = React.useMemo(
    () => items.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
    [],
  );

  return (
    <Grid
      gap={{ base: 2, lg: 8 }}
      mb="20px"
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
    >
      {sortedMediaItems.map((item, idx) => (
        <Article key={idx} {...item} />
      ))}
    </Grid>
  );
};

export default Articles;
