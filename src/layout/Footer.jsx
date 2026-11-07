import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsTelephoneFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

import { WORDPRESS_BLOG_BASE_URL } from "../constants";
import { CONTACTS, ORGANIZATION, ROLLING_KIDS_URL } from "../data/organization";

const FooterColumn = ({ title, children }) => (
  <Flex gap={3} flexDirection="column">
    <Heading
      as="h3"
      fontSize="14px"
      fontWeight={700}
      letterSpacing="1px"
      textTransform="uppercase"
      color="whiteAlpha.800"
    >
      {title}
    </Heading>
    {children}
  </Flex>
);

/** A line of contact detail with its icon, wrapping long values cleanly. */
const FooterDetail = ({ icon, children }) => (
  <Flex gap={2} align="flex-start">
    <Icon as={icon} boxSize="16px" mt="3px" flexShrink={0} />
    <Text as="span" overflowWrap="anywhere">
      {children}
    </Text>
  </Flex>
);

const FooterLink = (props) => (
  <Link
    width="fit-content"
    _hover={{ textDecoration: "underline", color: "whiteAlpha.800" }}
    {...props}
  />
);

const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const localization = {
    organization: t("ui.footer.organization", "Az alapítvány"),
    contact: t("ui.footer.contact", "Kapcsolat"),
    links: t("ui.footer.links", "Gyors linkek"),
    taxNumber: t("pages.aboutUs.taxNumber", "Adószám"),
    tagline: t("pages.home.hero.tagline", "Gyerekekért. Határok nélkül."),
    home: t("ui.navigation.home", "Kezdőoldal"),
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
        gap={{ base: 8, xl: 10 }}
        fontSize="15px"
        p={{ base: "40px 25px", lg: "50px" }}
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          xl: "1.4fr 1fr 1fr 1fr",
        }}
      >
        <GridItem>
          <Flex gap={4} flexDirection="column" align="flex-start">
            <Link as={RouterLink} to="/" aria-label={localization.home}>
              <Image
                src="/assets/img/logo.svg"
                alt="Grenzenlose Kinderhilfe"
                width="220px"
                maxWidth="100%"
              />
            </Link>
            <Text
              fontFamily="heading"
              fontSize="22px"
              fontWeight={600}
              lineHeight="1.2"
            >
              {localization.tagline}
            </Text>
            <Button
              as={RouterLink}
              to="/support"
              size="md"
              leftIcon={<FaHeart />}
              bg="primary.white"
              color="primary.blue"
              _hover={{ bg: "whiteAlpha.900" }}
            >
              {localization.support}
            </Button>
            <Text fontSize="13px" color="whiteAlpha.700">
              © {currentYear} {ORGANIZATION.name}
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <FooterColumn title={localization.organization}>
            <Text fontWeight={700}>{ORGANIZATION.name}</Text>
            <FooterDetail icon={MdLocationPin}>
              {ORGANIZATION.address}
            </FooterDetail>
            <FooterDetail icon={HiOutlineDocumentText}>
              {localization.taxNumber}: {ORGANIZATION.taxNumber}
            </FooterDetail>
          </FooterColumn>
        </GridItem>
        <GridItem>
          <FooterColumn title={localization.contact}>
            <FooterDetail icon={MdEmail}>
              <FooterLink href={`mailto:${ORGANIZATION.email}`}>
                {ORGANIZATION.email}
              </FooterLink>
            </FooterDetail>
            {CONTACTS.map(({ name, phone }) => (
              <FooterDetail key={name} icon={BsTelephoneFill}>
                {name}
                <br />
                <FooterLink href={`tel:+${phone}`}>+{phone}</FooterLink>
              </FooterDetail>
            ))}
          </FooterColumn>
        </GridItem>
        <GridItem>
          <FooterColumn title={localization.links}>
            <FooterLink as={RouterLink} to="/support">
              {localization.support}
            </FooterLink>
            <FooterLink as={RouterLink} to="/pages">
              {localization.pages}
            </FooterLink>
            <FooterLink as={RouterLink} to="/about">
              {localization.aboutUs}
            </FooterLink>
            <FooterLink isExternal href={WORDPRESS_BLOG_BASE_URL}>
              {localization.blog}
            </FooterLink>
            <FooterLink isExternal href={ROLLING_KIDS_URL}>
              Rolling Kids
            </FooterLink>
          </FooterColumn>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Footer;
