import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const BankDetails = ({ details }) => (
  <Flex gap={2} flexDirection="column">
    {details.map(([label, value]) => (
      <Flex key={label} gap={1} flexDirection="column">
        <Text fontSize="13px" fontWeight={700}>
          {label}
        </Text>
        <Text
          p="6px 10px"
          fontSize="14px"
          borderRadius="6px"
          backgroundColor="primary.grey"
          wordBreak="break-word"
        >
          {value}
        </Text>
      </Flex>
    ))}
  </Flex>
);

export default BankDetails;
