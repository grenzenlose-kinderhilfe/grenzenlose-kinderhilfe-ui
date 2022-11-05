import { VStack } from "@chakra-ui/react";
import React from "react";

import NavBar from "./NavBar";

const Layout = ({ routes, children }) => (
  <VStack>
    <NavBar routes={routes} />
    {children}
  </VStack>
);

export default Layout;
