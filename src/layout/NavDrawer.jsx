import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";

import { DrawerLanguageSwitcher, DrawerLinks, MenuLogo } from "./NavMenu";

const NavDrawer = ({ isOpen, onClose, routes }) => (
  <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton color="primary.white" top="18px" size="lg" />
      <DrawerHeader bg="primary.blue" py={4}>
        <MenuLogo height="44px" onClick={onClose} />
      </DrawerHeader>
      <DrawerBody py={6}>
        <DrawerLinks routes={routes} onClick={onClose} />
      </DrawerBody>
      <DrawerFooter borderTop="1px solid" borderColor="gray.100">
        <DrawerLanguageSwitcher />
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default NavDrawer;
