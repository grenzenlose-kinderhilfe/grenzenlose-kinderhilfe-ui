import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Contact = () => (
  <Grid templateColumns="1fr">
    <GridItem align="center">
      <Flex
        width="100%"
        height="100%"
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
      >
        <Heading pb="32px" as="h1" fontSize="24px">
          Elerhetoseg
        </Heading>
        <Text>
          Kérdéseivel,felajánlásaival kérjük az alábbi időpontban keressen a
          következő telefonszámon: +36205919590
        </Text>
      </Flex>
    </GridItem>
  </Grid>
);

export default Contact;
