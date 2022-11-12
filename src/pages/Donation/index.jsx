import { Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";

import LocationGrid from "./components/LocationGrid";
import locations from "./locations";

const Donation = () => (
  <Grid
    gap={8}
    color="black"
    align="center"
    margin={{ base: "10px", lg: "25px", xl: "25px 50px 25px" }}
  >
    <GridItem align="center">
      <Heading as="h1">Támogatott gyermekotthonok / intézmények</Heading>
    </GridItem>
    <GridItem>
      <LocationGrid locations={locations} />
    </GridItem>
  </Grid>
);

export default Donation;
