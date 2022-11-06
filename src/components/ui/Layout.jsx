import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import NavBar from "./NavBar";

const Layout = ({ routes, children }) => (
  <Grid backgroundColor="primary.grey" templateAreas={`"header" "main"`}>
    <GridItem area="header">
      <NavBar routes={routes} />
    </GridItem>
    <GridItem area="main">{children}</GridItem>
  </Grid>
);

export default Layout;
