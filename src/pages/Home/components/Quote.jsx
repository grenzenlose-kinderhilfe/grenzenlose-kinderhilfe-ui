import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Quote = () => (
  <Flex flexDirection="column" align="center" justify="center" gap={4}>
    <Flex maxWidth="33%">
      <Text>
        {'"'}Aki nem hisz abban, hogy mennyi jó ember van, az kezdjen el valami
        jót tenni, és meglátja, milyen sokan oda állnak mellé{'"'}
      </Text>
    </Flex>
    <Flex justifyContent="flex-end" alignItems="flex-end">
      <Text fontWeight={700}>Böjte Csaba</Text>
    </Flex>
  </Flex>
);

export default Quote;
