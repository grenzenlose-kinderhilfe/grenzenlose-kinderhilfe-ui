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

import { MenuLanguageSwitcher, MenuLinks } from "./NavMenu";

const NavDrawer = ({ isOpen, onClose, routes, languages }) => {
  const btnRef = React.useRef();

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody>
          <MenuLinks isOpen={isOpen} routes={routes} onClick={onClose} />
        </DrawerBody>

        <DrawerFooter>
          <MenuLanguageSwitcher languages={languages} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;
