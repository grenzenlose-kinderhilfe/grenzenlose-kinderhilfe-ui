import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ routes, children }) => (
  <Grid templateAreas={`"header" "main" "footer"`}>
    <GridItem area="header">
      <NavBar routes={routes} />
    </GridItem>
    <GridItem
      area="main"
      position="relative"
      minHeight="100vh"
      paddingBottom="2.5rem"
      backgroundColor="primary.grey"
    >
      {children}
    </GridItem>
    <GridItem
      area="footer"
      position="absolute"
      bottom={0}
      width="100%"
      height="2.5rem"
      backgroundColor="primary.blue"
    >
      <Footer />
    </GridItem>
  </Grid>
);

export default Layout;
