import { Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

import { PARTNERS } from "../../../data/partners";

const PartnerPlate = ({ name, logo, url }) => (
  <Flex
    p="20px"
    height="100%"
    minHeight="110px"
    align="center"
    justify="center"
    textAlign="center"
    backgroundColor="primary.grey"
    border="1px solid"
    borderColor="primary.lightblue"
    borderRadius="10px"
    transition="border-color .2s ease"
    _hover={{ borderColor: "primary.blue" }}
    {...(url && { as: "a", href: url, target: "_blank", rel: "noreferrer" })}
  >
    {logo ? (
      <Image src={logo} alt={name} maxHeight="70px" fit="contain" />
    ) : (
      <Heading as="h3" fontSize="20px" color="primary.blue">
        {name}
      </Heading>
    )}
  </Flex>
);

/**
 * The organisations behind the work. Credibility is easier to show than to
 * claim, so the partners get their own block on the home page.
 */
const Partners = () => {
  const { t } = useTranslation();

  const localization = {
    heading: t("pages.home.partners.heading", "Együtt többre megyünk"),
    subHeading: t(
      "pages.home.partners.subHeading",
      "Büszkék vagyunk rá, hogy munkánkat civil szervezetek, intézmények, vállalatok, önkéntesek és szakmai partnerek támogatják.",
    ),
  };

  return (
    <Flex gap={6} flexDirection="column" p={{ base: "25px", lg: 0 }}>
      <Flex gap={2} align="center" textAlign="center" flexDirection="column">
        <Heading as="h2" fontSize={{ base: "28px", md: "36px" }}>
          {localization.heading}
        </Heading>
        <Text maxW="800px">{localization.subHeading}</Text>
      </Flex>
      <Grid
        gap={4}
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        {PARTNERS.map((partner, idx) => (
          <GridItem key={`partner-${idx}`}>
            <PartnerPlate {...partner} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default Partners;
