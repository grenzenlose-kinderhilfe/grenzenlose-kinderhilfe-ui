import { Grid, GridItem, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import React from "react";

const data = [
  {
    label: "Orszag",
    value: 8,
  },
  {
    label: "Helyszin",
    value: 95,
  },
  {
    label: "Gyermek",
    value: 5000,
  },
  {
    label: "Onkentes",
    value: 500,
  },
];

const Metric = ({ label, value }) => (
  <Stat>
    <StatLabel>{label}</StatLabel>
    <StatNumber>{value}</StatNumber>
  </Stat>
);

const Metrics = () => (
  <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}>
    {data.map((item, idx) => (
      <GridItem key={`metric-${idx}`} align="center">
        <Metric label={item.label} value={item.value} />
      </GridItem>
    ))}
  </Grid>
);

export default Metrics;
