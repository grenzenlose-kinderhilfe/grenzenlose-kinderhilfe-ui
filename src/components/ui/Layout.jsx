import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ routes, children }) => (
  <Grid>
    <GridItem width="100%">
      <NavBar routes={routes} />
    </GridItem>
    <GridItem
      width="100%"
      position="relative"
      minHeight="100vh"
      paddingBottom="2.5rem"
      backgroundColor="primary.grey"
    >
      {children}
    </GridItem>
    <GridItem
      position="absolute"
      bottom={0}
      width="100%"
      height="2.5rem"
      color="white"
      backgroundColor="primary.blue"
    >
      <Footer />
    </GridItem>
  </Grid>
);

export default Layout;
