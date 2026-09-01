import { Flex, Grid, GridItem, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

import { WORDPRESS_BLOG_BASE_URL } from "../constants";
import { CONTACTS, ORGANIZATION, ROLLING_KIDS_URL } from "../data/organization";

const FooterColumn = ({ title, children }) => (
  <Flex gap={2} flexDirection="column">
    <Heading as="h3" fontSize="18px">
      {title}
    </Heading>
    {children}
  </Flex>
);

const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const localization = {
    organization: t("ui.footer.organization", "Az alapítvány"),
    contact: t("ui.footer.contact", "Kapcsolat"),
    links: t("ui.footer.links", "Gyors linkek"),
    taxNumber: t("pages.aboutUs.taxNumber", "Adószám"),
    support: t("ui.navigation.support", "Támogatás"),
    pages: t("ui.navigation.pages", "Oldalak"),
    aboutUs: t("ui.navigation.aboutUs", "Rólunk"),
    blog: t("ui.navigation.blog", "Események"),
  };

  return (
    <Flex
      as="footer"
      width="100%"
      marginTop="auto"
      flexDirection="column"
      bg="primary.blue"
      color="primary.white"
    >
      <Grid
        gap={8}
        fontSize="15px"
        p={{ base: "30px 25px", lg: "40px 50px" }}
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      >
        <GridItem>
          <FooterColumn title={localization.organization}>
            <Text>{ORGANIZATION.name}</Text>
            <Text>{ORGANIZATION.address}</Text>
            <Text>
              {localization.taxNumber}: {ORGANIZATION.taxNumber}
            </Text>
          </FooterColumn>
        </GridItem>
        <GridItem>
          <FooterColumn title={localization.contact}>
            <Link href={`mailto:${ORGANIZATION.email}`}>
              {ORGANIZATION.email}
            </Link>
            {CONTACTS.map(({ name, phone }) => (
              <Link key={name} href={`tel:+${phone}`}>
                {name} — +{phone}
              </Link>
            ))}
          </FooterColumn>
        </GridItem>
        <GridItem>
          <FooterColumn title={localization.links}>
            <Link as={RouterLink} to="/support">
              {localization.support}
            </Link>
            <Link as={RouterLink} to="/pages">
              {localization.pages}
            </Link>
            <Link as={RouterLink} to="/about">
              {localization.aboutUs}
            </Link>
            <Link isExternal href={WORDPRESS_BLOG_BASE_URL}>
              {localization.blog}
            </Link>
            <Link isExternal href={ROLLING_KIDS_URL}>
              Rolling Kids
            </Link>
          </FooterColumn>
        </GridItem>
      </Grid>
      <Flex
        width="100%"
        fontSize="0.8rem"
        padding="0.5rem"
        justifyContent="center"
        borderTop="1px solid"
        borderColor="whiteAlpha.300"
      >
        <Link href="https://github.com/meister245" isExternal>
          Copyright {currentYear} Zsolt Mester
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
