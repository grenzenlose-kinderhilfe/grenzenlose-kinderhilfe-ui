import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Image,
  Link,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Logo from "../../assets/img/logo.png";

const NavBar = ({ routes }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <MenuLogo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} routes={routes} />
    </NavBarContainer>
  );
};

const NavBarContainer = ({ children }) => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    width="100%"
    padding={6}
    bg="primary.blue"
    color="primary.white"
  >
    {children}
  </Flex>
);

const MenuLogo = () => (
  <Box minWidth="15%" maxWidth="20%">
    <AspectRatio
      minWidth="175px"
      maxWidth="250px"
      maxHeight="72px"
      ratio={4 / 1}
    >
      <Image src={Logo} fit="cover" alt="grenzenlose-kinderhilfe-logo" />
    </AspectRatio>
  </Box>
);

const MenuToggle = ({ toggle, isOpen }) => (
  <Box display={{ base: "block", lg: "none" }} onClick={toggle}>
    {isOpen ? <CloseIcon /> : <MenuIcon />}
  </Box>
);

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

const MenuLinks = ({ isOpen, routes }) => (
  <Box
    display={{ base: isOpen ? "block" : "none", lg: "block" }}
    flexBasis={{ base: "100%", lg: "auto" }}
    position={{ base: "relative", lg: "absolute" }}
    left={{ base: 0, lg: "35%", xl: "40%" }}
  >
    <Stack
      spacing={8}
      align="center"
      divider={<StackDivider />}
      justify={["space-between", "space-between", "space-between", "flex-end"]}
      direction={["column", "column", "column", "row"]}
      pt={[6, 4, 4, 0]}
    >
      {routes
        .filter((item) => !item.hideNav)
        .map((item, idx) => (
          <MenuItem key={`menu-item-${idx}`} to={item.url}>
            {item.title.toUpperCase()}
          </MenuItem>
        ))}
      <MenuButton to="/donate">Donate</MenuButton>
    </Stack>
  </Box>
);

const MenuItem = ({ to = "/", children }) => (
  <Link as={RouterLink} to={to}>
    <Text display="block" fontSize="16px">
      {children}
    </Text>
  </Link>
);

const MenuButton = ({ to = "/", children }) => (
  <Button
    size="sm"
    rounded="md"
    color="black"
    bg="white"
    _hover={{
      bg: "white",
    }}
  >
    <Link as={RouterLink} to={to}>
      {children}
    </Link>
  </Button>
);

export default NavBar;
