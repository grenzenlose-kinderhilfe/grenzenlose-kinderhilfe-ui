import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const pageItems = [
  {
    title: "Ukraine 2022",
  },
  {
    title: "Rolling kids",
  },
  {
    title: "Kresz Park",
  },
  {
    title: "Cipősdoboz",
  },
];

const Pages = () => (
  <Grid
    gap={8}
    m="50px"
    color="black"
    align="center"
    templateColumns={{ base: "repeat(2, 1fr)" }}
    backgroundColor="lightgrey"
  >
    {pageItems.map((item, idx) => (
      <GridItem key={`page-${idx}`}>{item.title}</GridItem>
    ))}
  </Grid>
);

export default Pages;
