import {
  AspectRatio,
  Button,
  Image,
  Link,
  Select,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

import Logo from "../../assets/img/logo.png";
import { LANGUAGES } from "../../constants";

export const MenuLogo = () => (
  <AspectRatio minWidth="175px" maxWidth="250px" maxHeight="72px" ratio={4 / 1}>
    <Link as={RouterLink} to="/">
      <Image src={Logo} fit="cover" alt="grenzenlose-kinderhilfe-logo" />
    </Link>
  </AspectRatio>
);

export const MenuToggle = ({ isOpen }) =>
  isOpen ? <CloseIcon /> : <MenuIcon />;

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

export const MenuLinks = ({ routes, onClick }) => {
  const { t } = useTranslation();

  const localization = {
    home: t("ui.navigation.home", "Kezdőoldal"),
    media: t("ui.navigation.media", "Média"),
    pages: t("ui.navigation.pages", "Oldalak"),
    aboutUs: t("ui.navigation.aboutUs", "Rólunk"),
    donation: t("ui.navigation.donation", "Adományozás"),
  };

  return (
    <Stack
      spacing={{ base: 4, lg: 8 }}
      align="center"
      divider={<StackDivider />}
      justify={["space-between", "space-between", "space-between", "flex-end"]}
      direction={["column", "column", "column", "row"]}
      pt={[6, 4, 4, 0]}
    >
      {routes.map((item, idx) =>
        item.isButton ? (
          <MenuButton
            key={`menu-button-${idx}`}
            to={item.url}
            onClick={onClick}
          >
            {localization[item.localizationKey]}
          </MenuButton>
        ) : (
          <MenuItem key={`menu-item-${idx}`} to={item.url} onClick={onClick}>
            {localization[item.localizationKey]}
          </MenuItem>
        )
      )}
    </Stack>
  );
};

export const MenuItem = ({ to = "/", onClick, children }) => (
  <Link as={RouterLink} to={to} onClick={onClick}>
    <Text display="block" fontSize="16px">
      {children}
    </Text>
  </Link>
);

export const MenuButton = ({ to = "/", onClick, children }) => (
  <Button
    size="md"
    rounded="md"
    color="black"
    bg="white"
    _hover={{
      bg: "white",
    }}
  >
    <Link as={RouterLink} to={to} onClick={onClick}>
      {children}
    </Link>
  </Button>
);

export const MenuLanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const onChangeHandler = (e) => i18n.changeLanguage(e.target.value);

  return (
    <Select onChange={onChangeHandler} defaultValue={i18n.language}>
      {LANGUAGES.map((item, idx) => (
        <option key={`language-${idx}`} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
};
