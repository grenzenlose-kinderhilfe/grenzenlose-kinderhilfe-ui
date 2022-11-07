import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import Contact from "./components/Contact";
import Metrics from "./components/Metrics";
import Mission from "./components/Mission";
import Quote from "./components/Quote";
import SlideShow from "./components/SlideShow";
import VideoGroup from "./components/VideoGroup";
import { getSlides } from "./slides";

const Home = () => (
  <Grid
    margin={{ base: 0, lg: "25px", xl: "50px" }}
    color="black"
    templateAreas={`"slideshow" "videoGroup" "metrics" "mission" "quote" "contact"`}
  >
    <GridItem area="slideshow" overflow="hidden">
      <SlideShow slides={getSlides()} />
    </GridItem>
    <GridItem area="videoGroup" m="25px" backgroundColor="lightgrey">
      <VideoGroup />
    </GridItem>
    <GridItem area="metrics" m="25px" backgroundColor="lightgrey">
      <Metrics />
    </GridItem>
    <GridItem area="mission" m="25px" backgroundColor="lightgrey">
      <Mission />
    </GridItem>
    <GridItem area="quote" m="25px" backgroundColor="lightgrey">
      <Quote />
    </GridItem>
    <GridItem area="contact" m="25px" backgroundColor="lightgrey">
      <Contact />
    </GridItem>
  </Grid>
);

export default Home;
