import { Flex } from "@chakra-ui/react";
import React from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ routes, children }) => (
  <Flex flexDirection="column" height="100vh" width="100vw" paddingTop="5rem">
    <NavBar routes={routes} />
    {children}
    <Footer />
  </Flex>
);

export default Layout;
