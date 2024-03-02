import { Grid, GridItem } from "@chakra-ui/react";

import withTracker from "../../utils/tracking";
import MainContentGroup from "./MainContentGroup/MainContentGroup";
import Fundraiser from "./Fundraiser/Fundraiser";
import HowTo from "./HowTo/HowTo";

const ShoeBox = () => (
  <Grid gap={{ base: 4, md: 8 }} margin={{ base: 0, lg: "25px" }}>
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
