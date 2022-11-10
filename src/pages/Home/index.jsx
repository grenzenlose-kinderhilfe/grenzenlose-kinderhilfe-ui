import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import Contact from "./components/Contact";
import Metrics from "./components/Metrics";
import Mission from "./components/Mission";
import Quote from "./components/Quote";
import SlideShow from "./components/SlideShow";
import VideoGroup from "./components/VideoGroup";
import { getSlides } from "./slides";

const Home = () => {
  const slides = getSlides();

  return (
    <Grid
      gap={4}
      margin={{ base: 0, lg: "25px", xl: "50px" }}
      color="black"
      templateAreas={`"slideshow" "videoGroup" "metrics" "mission" "quote" "contact"`}
    >
      <GridItem area="slideshow" overflow="hidden">
        <SlideShow slides={slides} />
      </GridItem>
      <GridItem area="videoGroup">
        <VideoGroup />
      </GridItem>
      <GridItem area="metrics">
        <Metrics />
      </GridItem>
      <GridItem area="mission">
        <Mission />
      </GridItem>
      <GridItem area="quote" backgroundColor="lightgrey">
        <Quote />
      </GridItem>
      <GridItem area="contact" backgroundColor="lightgrey">
        <Contact />
      </GridItem>
    </Grid>
  );
};

export default Home;
