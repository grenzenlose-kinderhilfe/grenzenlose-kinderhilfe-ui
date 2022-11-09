import { Grid, GridItem, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import React from "react";

import backgroundImage from "../../../assets/img/background/children-field.jpg";

const data = [
  {
    label: "Ország",
    value: 8,
  },
  {
    label: "Helyszín",
    value: 95,
  },
  {
    label: "Gyermek",
    value: 5000,
  },
  {
    label: "Önkéntes",
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
