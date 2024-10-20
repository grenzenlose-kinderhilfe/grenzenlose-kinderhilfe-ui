import { Grid, GridItem } from "@chakra-ui/react";

import withTracker from "../../utils/tracking";
import MainContentGroup from "./MainContentGroup/MainContentGroup";
import Fundraiser from "./Fundraiser/Fundraiser";
import HowTo from "./HowTo/HowTo";
import EmbedMap from "./EmbedMap/EmbedMap";

const ShoeBox = () => (
  <Grid gap={{ base: 4, md: 8 }} margin={{ base: 0, lg: "25px" }}>
    <GridItem>
      <EmbedMap
        src="https://www.google.com/maps/d/u/0/embed?mid=1etvEUuIIc54Y88TmwCgbF7aihOpgo9U&ehbc=2E312F&noprof=1"
        alt="locations"
      />
    </GridItem>
    <GridItem>
      <MainContentGroup />
    </GridItem>
    <GridItem align="center">
      <Fundraiser />
    </GridItem>
    <GridItem>
      <HowTo />
    </GridItem>
  </Grid>
);

export default withTracker(ShoeBox);
