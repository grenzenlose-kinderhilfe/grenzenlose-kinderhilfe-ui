import {
  Flex,
  Grid,
  IconButton,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { HiMenu } from "react-icons/hi";

import NavDrawer from "./NavDrawer";
import { MenuLanguageSwitcher, MenuLinks, MenuLogo } from "./NavMenu";

// The bar is fixed, so the layout reserves exactly this much space above the
// page content.
export const NAV_HEIGHT = "5rem";

/** True once the page has scrolled, to lift the bar off the content. */
const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return isScrolled;
};

const NavBar = ({ routes }) => {
  const { t } = useTranslation();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isDesktop] = useMediaQuery("(min-width: 1200px)");
  const isScrolled = useIsScrolled();

  return (
    <Flex
      as="nav"
      top={0}
      width="100%"
      height={NAV_HEIGHT}
      align="center"
      position="fixed"
      justify="space-between"
      gap={8}
      px={{ base: "20px", lg: "40px" }}
      bg="primary.blue"
      color="primary.white"
      // Above the page, below the drawer and other overlays.
      zIndex="sticky"
      boxShadow={isScrolled ? "0 2px 12px rgba(0, 0, 0, 0.25)" : "none"}
      transition="box-shadow 0.2s ease"
    >
      {isDesktop ? (
        // Equal outer columns keep the links centred on the page itself,
        // whatever the width of the logo and the language picker.
        <Grid
          width="100%"
          alignItems="center"
          gap={8}
          templateColumns="1fr auto 1fr"
        >
          <Flex justifySelf="start">
            <MenuLogo height="52px" />
          </Flex>
          <MenuLinks routes={routes} />
          <Flex justifySelf="end">
            <MenuLanguageSwitcher />
          </Flex>
        </Grid>
      ) : (
        <MenuLogo height="44px" />
      )}
      {!isDesktop && (
        <IconButton
          icon={<HiMenu size="28px" />}
          variant="ghost"
          color="primary.white"
          _hover={{ bg: "whiteAlpha.200" }}
          _active={{ bg: "whiteAlpha.300" }}
          aria-label={t("ui.navigation.menu", "Menü")}
          aria-expanded={isOpen}
          onClick={onOpen}
        />
      )}
      <NavDrawer isOpen={isOpen} onClose={onClose} routes={routes} />
    </Flex>
  );
};

export default NavBar;
