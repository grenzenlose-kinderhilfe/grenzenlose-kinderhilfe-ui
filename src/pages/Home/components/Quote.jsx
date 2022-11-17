import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Trans } from "react-i18next";

import backgroundImage from "../../../assets/img/background/background-cross.jpg";

const Quote = () => (
  <Flex
    borderRadius={{ base: 0, lg: "10px" }}
    backgroundImage={`url(${backgroundImage})`}
    backgroundSize="cover"
    backgroundColor="lightgrey"
    flexDirection="column"
    justify="center"
    align="center"
    p="50px"
    gap={4}
  >
    <Flex justifyContent="center" maxWidth={{ base: "100%", lg: "750px" }}>
      <Trans i18nKey="pages.home.quote.quoteText">
        <Text fontSize="24px">
          {"“"}Aki nem hisz abban, hogy mennyi jó ember van, az kezdjen el
          valami jót tenni, és meglátja, milyen sokan oda állnak mellé{"”"}
        </Text>
      </Trans>
    </Flex>
    <Flex minWidth={{ base: "30%", "2xl": "40%" }} ml={{ base: 0, md: "auto" }}>
      <Heading fontSize="28px">- Böjte Csaba</Heading>
    </Flex>
  </Flex>
);

export default Quote;
