import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaHandsHelping, FaHeart, FaTrafficLight } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

import { ORGANIZATION, ROLLING_KIDS_URL } from "../../../data/organization";

const outlineStyle = {
  color: "white",
  variant: "outline",
  borderColor: "whiteAlpha.800",
  _hover: { bg: "whiteAlpha.200" },
};

/**
 * The first thing a visitor sees: who the foundation is, what it does and the
 * three things they can do about it.
 */
const Hero = () => {
  const { t } = useTranslation();

  const localization = {
    tagline: t("pages.home.hero.tagline", "Gyermekekért. Határok nélkül."),
    lead: t(
      "pages.home.hero.lead",
      "Több mint tíz éve szervezünk adománygyűjtést, közösségi programokat és gyermekeket támogató kezdeményezéseket Magyarország, Ukrajna és a Kárpát-medence között.",
    ),
    support: t("pages.home.hero.support", "Támogatom"),
    volunteer: t("pages.home.hero.volunteer", "Önkéntes leszek"),
  };

  return (
    <Flex
      gap={6}
      p={{ base: "40px 25px", md: "70px 50px" }}
      align="center"
      textAlign="center"
      color="primary.white"
      flexDirection="column"
      borderRadius={{ base: 0, lg: "10px" }}
      backgroundColor="primary.blue"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundImage="linear-gradient(rgba(17, 43, 92, .88), rgba(17, 43, 92, .95)), url(/assets/img/background/background-field.jpg)"
    >
      <Text
        fontSize={{ base: "14px", md: "16px" }}
        letterSpacing="2px"
        textTransform="uppercase"
      >
        Grenzenlose Kinderhilfe · {ORGANIZATION.name}
      </Text>
      <Heading as="h1" fontSize={{ base: "36px", md: "56px" }} maxW="900px">
        {localization.tagline}
      </Heading>
      <Text fontSize={{ base: "16px", md: "20px" }} maxW="800px">
        {localization.lead}
      </Text>
      <Flex
        gap={4}
        mt={2}
        wrap="wrap"
        justify="center"
        width={{ base: "100%", md: "auto" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Button
          size="lg"
          as={RouterLink}
          to="/support"
          bg="primary.white"
          color="primary.blue"
          leftIcon={<FaHeart />}
          _hover={{ bg: "primary.grey" }}
        >
          {localization.support}
        </Button>
        <Button
          size="lg"
          as="a"
          href={`mailto:${ORGANIZATION.email}`}
          leftIcon={<FaHandsHelping />}
          {...outlineStyle}
        >
          {localization.volunteer}
        </Button>
        <Button
          size="lg"
          as="a"
          href={ROLLING_KIDS_URL}
          target="_blank"
          rel="noreferrer"
          leftIcon={<FaTrafficLight />}
          {...outlineStyle}
        >
          Rolling Kids
        </Button>
      </Flex>
    </Flex>
  );
};

export default Hero;
