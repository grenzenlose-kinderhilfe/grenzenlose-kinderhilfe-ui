import { Grid, GridItem, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import React from "react";
import { Trans } from "react-i18next";

import backgroundImage from "../../../assets/img/background/background-field.jpg";

const data = [
  {
    label: <Trans i18nKey="pages.home.metrics.countries">Ország</Trans>,
    value: 8,
  },
  {
    label: <Trans i18nKey="pages.home.metrics.locations">Helyszín</Trans>,
    value: 95,
  },
  {
    label: <Trans i18nKey="pages.home.metrics.children">Gyermek</Trans>,
    value: 5000,
  },
  {
    label: <Trans i18nKey="pages.home.metrics.volunteers">Önkéntes</Trans>,
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

const Metrics = () => (
  <Grid
    templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
    backgroundImage={`url(${backgroundImage})`}
    backgroundPosition="center"
    backgroundSize="cover"
    borderRadius={{ base: 0, lg: "10px" }}
  >
    {data.map((item, idx) => (
      <GridItem key={`metric-${idx}`} align="center">
        <Metric label={item.label} value={item.value} />
      </GridItem>
    ))}
  </Grid>
);

export default Metrics;
