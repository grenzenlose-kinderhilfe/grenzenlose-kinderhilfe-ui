import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import Metrics from "./components/Metrics";
import SlideShow from "./components/SlideShow";
import VideoGroup from "./components/VideoGroup";
import { getSlides } from "./slides";

const Home = () => (
  <Grid
    margin={{ base: 0, lg: "25px", xl: "50px" }}
    color="black"
    templateAreas={`"slideshow" "videoGroup" "metrics" "quote" "contact"`}
  >
    <GridItem area="slideshow" overflow="hidden">
      <SlideShow slides={getSlides()} />
    </GridItem>
    <GridItem area="videoGroup" p="50px">
      <VideoGroup />
    </GridItem>
    <GridItem area="metrics">
      <Metrics />
    </GridItem>
    <GridItem area="quote">Quote</GridItem>
    <GridItem area="contact">Contact</GridItem>
  </Grid>
);

export default Home;
