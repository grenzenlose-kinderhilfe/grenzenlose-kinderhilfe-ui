import { Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const linkProps = (url, isExternal) =>
  isExternal
    ? { as: "a", href: url, target: "_blank", rel: "noreferrer" }
    : { as: RouterLink, to: url };

const CampaignCard = ({ icon, title, details, action, url, isExternal }) => (
  <Flex
    gap={4}
    p="25px"
    height="100%"
    flexDirection="column"
    backgroundColor="primary.white"
    border="1px solid"
    borderColor="primary.blue"
    borderRadius="10px"
    transition="box-shadow .2s ease, transform .2s ease"
    _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
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
    <Flex gap={3} flex="1" flexDirection="column">
      {details.map(({ label, value }) => (
        <Flex key={label} flexDirection="column">
          <Text
            fontSize="12px"
            fontWeight={700}
            letterSpacing="1px"
            textTransform="uppercase"
            color="primary.blue"
          >
            {label}
          </Text>
          <Text fontSize="15px">{value}</Text>
        </Flex>
      ))}
    </Flex>
    <Button
      width="100%"
      bg="primary.blue"
      color="primary.white"
      _hover={{ bg: "#1B3F82" }}
      {...linkProps(url, isExternal)}
    >
      {action}
    </Button>
  </Flex>
);

export default CampaignCard;
