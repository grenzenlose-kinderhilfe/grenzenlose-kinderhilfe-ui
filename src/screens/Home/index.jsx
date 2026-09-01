import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import DonationJourney from "../../components/DonationJourney/DonationJourney";
import withTracker from "../../utils/tracking";
import Campaigns from "./Campaigns/Campaigns";
import Counters from "./Counters/Counters";
import Hero from "./Hero/Hero";
import Mission from "./Mission/Mission";
import Partners from "./Partners/Partners";
import Quote from "./Quote/Quote";
import SlideShow from "./SlideShow/SlideShow";
import VideoGroup from "./VideoGroup/VideoGroup";

const Home = () => (
  <Grid
    color="black"
    gap={{ base: 8, md: 12 }}
    margin={{ base: 0, lg: "25px", xl: "50px 50px 25px" }}
    templateAreas={
      '"hero" "slideshow" "counters" "campaigns" "videoGroup" "journey" "mission" "partners" "quote"'
    }
  >
    <GridItem area="hero">
      <Hero />
    </GridItem>
    <GridItem area="slideshow" overflow="hidden">
      <SlideShow />
    </GridItem>
    <GridItem area="counters">
      <Counters />
    </GridItem>
    <GridItem area="campaigns">
      <Campaigns />
    </GridItem>
    <GridItem area="videoGroup">
      <VideoGroup />
    </GridItem>
    <GridItem area="journey" p={{ base: "25px", lg: 0 }}>
      <DonationJourney />
    </GridItem>
    <GridItem area="mission">
      <Mission />
    </GridItem>
    <GridItem area="partners">
      <Partners />
    </GridItem>
    <GridItem area="quote">
      <Quote />
    </GridItem>
  </Grid>
);

export default withTracker(Home);
