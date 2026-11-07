import {
  Button,
  ButtonGroup,
  Flex,
  Icon,
  Image,
  Link,
  Menu,
  MenuButton as ChakraMenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaChevronDown,
  FaExternalLinkAlt,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { LANGUAGE_CODES, LANGUAGE_LABELS, LANGUAGES } from "../constants";

export const MenuLogo = ({ height = "48px", onClick }) => (
  <Link as={RouterLink} to="/" onClick={onClick} display="flex">
    <Image
      src="/assets/img/logo.svg"
      height={height}
      width="auto"
      fit="contain"
      alt="Grenzenlose Kinderhilfe"
    />
  </Link>
);

const useNavigationLabels = () => {
  const { t } = useTranslation();

  return {
    home: t("ui.navigation.home", "Kezdőoldal"),
    media: t("ui.navigation.media", "Média"),
    blog: t("ui.navigation.blog", "Események"),
    pages: t("ui.navigation.pages", "Oldalak"),
    aboutUs: t("ui.navigation.aboutUs", "Rólunk"),
    institutions: t("ui.navigation.institutions", "Intézmények"),
    shoebox: t("ui.navigation.shoebox", "Cipősdoboz"),
    support: t("ui.navigation.support", "Támogatás"),
  };
};

/**
 * The route the visitor is on: the internal route with the longest URL that
 * the current path starts with, so /pages/shoebox marks "Shoebox" and not
 * "Pages" as well.
 */
const useActiveUrl = (routes) => {
  const { pathname } = useLocation();

  return routes
    .filter(({ isExternal }) => !isExternal)
    .map(({ url }) => url)
    .filter(
      (url) =>
        pathname === url ||
        (url !== "/" && pathname.startsWith(`${url.replace(/\/$/, "")}/`)),
    )
    .sort((a, b) => b.length - a.length)[0];
};

/** The navigation entries with their final URL and state resolved. */
const useMenuItems = (routes) => {
  const { i18n } = useTranslation();
  const labels = useNavigationLabels();
  const activeUrl = useActiveUrl(routes);

  return routes.map((item) => ({
    ...item,
    label: labels[item.localizationKey],
    href: item.url + (item.localeSuffix?.[i18n.resolvedLanguage] ?? ""),
    isActive: item.url === activeUrl,
  }));
};

const SupportButton = ({ to, onClick, children, ...props }) => (
  <Button
    as={RouterLink}
    to={to}
    onClick={onClick}
    leftIcon={<FaHeart />}
    {...props}
  >
    {children}
  </Button>
);

const linkTarget = ({ href, isExternal }) =>
  isExternal ? { href, isExternal: true } : { as: RouterLink, to: href };

const ExternalMark = () => (
  <Icon as={FaExternalLinkAlt} boxSize="10px" ml="6px" opacity={0.7} />
);

/** Horizontal links for the navigation bar, active page underlined. */
export const MenuLinks = ({ routes }) => {
  const items = useMenuItems(routes);

  return (
    <Flex as="ul" listStyleType="none" align="center" gap={7}>
      {items.map((item) => (
        <Flex as="li" key={item.url}>
          {item.isButton ? (
            <SupportButton
              to={item.href}
              size="md"
              bg="primary.white"
              color="primary.blue"
              _hover={{ bg: "whiteAlpha.900" }}
            >
              {item.label}
            </SupportButton>
          ) : (
            <Link
              {...linkTarget(item)}
              aria-current={item.isActive ? "page" : undefined}
              position="relative"
              display="flex"
              alignItems="center"
              py="6px"
              fontSize="15px"
              fontWeight={item.isActive ? 700 : 500}
              color={item.isActive ? "primary.white" : "whiteAlpha.900"}
              _hover={{ color: "primary.white", textDecoration: "none" }}
              _after={{
                content: '""',
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                height: "2px",
                borderRadius: "full",
                bg: "primary.white",
                transform: item.isActive ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 0.2s ease",
              }}
              sx={{ "&:hover::after": { transform: "scaleX(1)" } }}
            >
              {item.label}
              {item.isExternal && <ExternalMark />}
            </Link>
          )}
        </Flex>
      ))}
    </Flex>
  );
};

/** Full-width rows for the mobile drawer, with the support button last. */
export const DrawerLinks = ({ routes, onClick }) => {
  const items = useMenuItems(routes);
  const links = items.filter(({ isButton }) => !isButton);
  const buttons = items.filter(({ isButton }) => isButton);

  return (
    <Flex flexDirection="column" gap={6}>
      <Flex as="ul" listStyleType="none" flexDirection="column" gap={1}>
        {links.map((item) => (
          <Flex as="li" key={item.url}>
            <Link
              {...linkTarget(item)}
              onClick={onClick}
              aria-current={item.isActive ? "page" : undefined}
              display="flex"
              alignItems="center"
              width="100%"
              px={4}
              py={3}
              fontSize="17px"
              borderRadius="8px"
              borderLeft="3px solid"
              borderColor={item.isActive ? "primary.blue" : "transparent"}
              fontWeight={item.isActive ? 700 : 500}
              color="primary.blue"
              bg={item.isActive ? "primary.lightblue" : "transparent"}
              _hover={{ bg: "primary.lightblue", textDecoration: "none" }}
            >
              {item.label}
              {item.isExternal && <ExternalMark />}
            </Link>
          </Flex>
        ))}
      </Flex>
      {buttons.map((item) => (
        <SupportButton
          key={item.url}
          to={item.href}
          onClick={onClick}
          size="lg"
          width="100%"
          bg="primary.blue"
          color="primary.white"
          _hover={{ bg: "#1B3F82" }}
        >
          {item.label}
        </SupportButton>
      ))}
    </Flex>
  );
};

const useLanguage = () => {
  const { t, i18n } = useTranslation();

  return {
    // resolvedLanguage is always one of LANGUAGES, even when the browser
    // reported a regional variant such as en-US.
    current: i18n.resolvedLanguage,
    change: (language) => i18n.changeLanguage(language),
    label: t("ui.navigation.language", "Nyelv"),
  };
};

/** Dropdown for the navigation bar: compact button, full names in the list. */
export const MenuLanguageSwitcher = () => {
  const { current, change, label } = useLanguage();

  return (
    <Menu placement="bottom-end" autoSelect={false}>
      <ChakraMenuButton
        as={Button}
        size="sm"
        variant="outline"
        color="primary.white"
        borderColor="whiteAlpha.600"
        _hover={{ bg: "whiteAlpha.200" }}
        _active={{ bg: "whiteAlpha.300" }}
        leftIcon={<Icon as={FaGlobe} />}
        rightIcon={<Icon as={FaChevronDown} boxSize="10px" />}
        aria-label={`${label}: ${LANGUAGE_LABELS[current]}`}
      >
        {LANGUAGE_CODES[current]}
      </ChakraMenuButton>
      <MenuList minWidth="160px" color="black">
        <MenuOptionGroup type="radio" value={current} onChange={change}>
          {LANGUAGES.map((language) => (
            <MenuItemOption key={language} value={language} lang={language}>
              {LANGUAGE_LABELS[language]}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

/** Segmented buttons for the mobile drawer, where a tap target beats a list. */
export const DrawerLanguageSwitcher = () => {
  const { current, change, label } = useLanguage();

  return (
    <ButtonGroup
      isAttached
      width="100%"
      size="sm"
      variant="outline"
      role="group"
      aria-label={label}
    >
      {LANGUAGES.map((language) => {
        const isSelected = language === current;

        return (
          <Button
            key={language}
            flex="1"
            lang={language}
            aria-pressed={isSelected}
            onClick={() => change(language)}
            borderColor="primary.blue"
            color={isSelected ? "primary.white" : "primary.blue"}
            bg={isSelected ? "primary.blue" : "transparent"}
            _hover={{ bg: isSelected ? "#1B3F82" : "primary.lightblue" }}
          >
            {LANGUAGE_LABELS[language]}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
