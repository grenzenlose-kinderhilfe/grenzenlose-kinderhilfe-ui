import { Flex } from "@chakra-ui/react";
import React from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ routes, children }) => (
  <Flex flexDirection="column" minHeight="100vh" width="100%" paddingTop="5rem">
    <NavBar routes={routes} />
    {children}
    <Footer />
  </Flex>
);

export default Layout;
