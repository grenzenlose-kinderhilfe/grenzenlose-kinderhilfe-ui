import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

import { IMPACT_METRICS } from "../../../data/impact";
import Metric from "./Metric/Metric";

const Counters = () => {
  const { t } = useTranslation();

  const localization = {
    heading: t("pages.home.metrics.heading", "Amit együtt elértünk"),
    subHeading: t(
      "pages.home.metrics.subHeading",
      "Minden szám mögött önkéntesek, adományozók és partnerek állnak.",
    ),
    aidDelivered: t(
      "pages.home.metrics.aidDelivered",
      "Tonna adomány Ukrajnába",
    ),
    yearsActive: t("pages.home.metrics.yearsActive", "Éve a gyermekekért"),
    children: t("pages.home.metrics.children", "Megajándékozott gyermek"),
    locations: t("pages.home.metrics.locations", "Helyszín és intézmény"),
    countries: t("pages.home.metrics.countries", "Ország"),
    volunteers: t("pages.home.metrics.volunteers", "Önkéntes és támogató"),
  };

  return (
    <Flex flexDirection="column" gap={4}>
      <Flex
        gap={2}
        px="25px"
        align="center"
        textAlign="center"
        flexDirection="column"
      >
        <Heading as="h2" fontSize={{ base: "28px", md: "36px" }}>
          {localization.heading}
        </Heading>
        <Text maxW="700px">{localization.subHeading}</Text>
      </Flex>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
        backgroundImage="url(/assets/img/background/background-field.jpg)"
        backgroundPosition="center"
        backgroundSize="cover"
        borderRadius={{ base: 0, lg: "10px" }}
      >
        {IMPACT_METRICS.map((item, idx) => (
          <GridItem key={`metric-${idx}`} display="flex">
            <Metric
              value={item.value}
              suffix={item.suffix}
              label={localization[item.localizationKey]}
            />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default Counters;
