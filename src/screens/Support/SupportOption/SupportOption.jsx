import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

/**
 * One way of supporting the foundation. Every option says out loud what the
 * donation is spent on — that answer is what turns an interested visitor into
 * a donor.
 */
const SupportOption = ({ icon, title, description, spending, children }) => {
  const { t } = useTranslation();

  const spendingLabel = t("pages.support.spendingLabel", "Mire fordítjuk?");

  return (
    <Flex
      gap={4}
      p="25px"
      height="100%"
      flexDirection="column"
      backgroundColor="primary.white"
      border="1px solid"
      borderColor="primary.blue"
      borderRadius="10px"
    >
      <Flex gap={3} align="center">
        <Flex
          minW="48px"
          height="48px"
          align="center"
          justify="center"
          borderRadius="full"
          backgroundColor="primary.blue"
          color="primary.white"
        >
          <Icon as={icon} boxSize="22px" />
        </Flex>
        <Heading as="h3" fontSize="22px">
          {title}
        </Heading>
      </Flex>
      <Text fontSize="15px">{description}</Text>
      <Flex flex="1" flexDirection="column" justify="center">
        {children}
      </Flex>
      <Flex
        p="12px"
        gap={1}
        flexDirection="column"
        borderRadius="8px"
        backgroundColor="primary.lightblue"
      >
        <Text
          fontSize="12px"
          fontWeight={700}
          letterSpacing="1px"
          textTransform="uppercase"
          color="primary.blue"
        >
          {spendingLabel}
        </Text>
        <Text fontSize="14px">{spending}</Text>
      </Flex>
    </Flex>
  );
};

export default SupportOption;
