import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import SlideShow from "../../components/feature/SlideShow";
import { getSlides } from "./slides";

const Home = () => {
  return (
    <Grid
      margin={{ base: 0, lg: "25px", xl: "50px" }}
      color="black"
      backgroundColor="primary.white"
      templateAreas={`"slideshow"
                      "videoGroup"
                      "metrics"
                      "quote"
                      "contact"`}
    >
      <GridItem area="slideshow" overflow="hidden">
        <SlideShow slides={getSlides()} />
      </GridItem>
      <GridItem area="videoGroup">Video Group</GridItem>
      <GridItem area="metrics">Metrics</GridItem>
      <GridItem area="quote">Quote</GridItem>
      <GridItem area="contact">Contact</GridItem>
    </Grid>
  );
};

export default Home;
