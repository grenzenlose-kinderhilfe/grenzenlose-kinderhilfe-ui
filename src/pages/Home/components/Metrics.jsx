import { Grid, GridItem, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

import backgroundImage from "../../../assets/img/background/background-field.jpg";

const data = [
  {
    localizationKey: "countries",
    value: 8,
  },
  {
    localizationKey: "locations",
    value: 95,
  },
  {
    localizationKey: "children",
    value: 5000,
  },
  {
    localizationKey: "volunteers",
    value: 500,
  },
];

const Metric = ({ label, value }) => (
  <Stat
    padding="5px"
    margin="25px"
    border="2px solid #112B5C"
    borderRadius="25px"
    backgroundColor="rgba(255, 255, 255, .6)"
  >
    <StatNumber>{value}</StatNumber>
    <StatLabel fontSize="18px">{label}</StatLabel>
  </Stat>
);

const Metrics = () => {
  const { t } = useTranslation();

  const localization = {
    countries: t("pages.home.metrics.countries", "Ország"),
    locations: t("pages.home.metrics.locations", "Helyszín"),
    children: t("pages.home.metrics.children", "Gyermek"),
    volunteers: t("pages.home.metrics.volunteers", "Önkéntes"),
  };

  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
      backgroundImage={`url(${backgroundImage})`}
      backgroundPosition="center"
      backgroundSize="cover"
      borderRadius={{ base: 0, lg: "10px" }}
    >
      {data.map((item, idx) => (
        <GridItem key={`metric-${idx}`} align="center">
          <Metric
            label={localization[item.localizationKey]}
            value={item.value}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Metrics;
