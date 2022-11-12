import { Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { ReactCountryFlag } from "react-country-flag";

const LocationGridItem = ({ country, name, place }) => (
  <Flex
    gap={4}
    color="white"
    height="100%"
    alignItems="center"
    borderRadius="10px"
    backgroundColor="primary.blue"
    p="10px 10px 10px 15px"
    m={{ base: "10px", md: "5px", lg: 0 }}
  >
    <ReactCountryFlag
      svg
      countryCode={country}
      style={{ width: "2em", height: "2em" }}
    />
    <Text maxWidth="400px">
      {name}, {place}
    </Text>
  </Flex>
);

const LocationGrid = ({ locations }) => (
  <Grid
    gap={{ base: 2, lg: 8 }}
    mb="20px"
    templateColumns={{
      base: "1fr",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",
      xl: "repeat(4, 1fr)",
    }}
  >
    {locations.map((item, idx) => (
      <LocationGridItem
        key={`location-${idx}`}
        country={item.countryCode}
        name={item.name}
        place={item.place}
      />
    ))}
  </Grid>
);

export default LocationGrid;
