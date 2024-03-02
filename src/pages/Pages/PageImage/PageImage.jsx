import { Flex, Text } from "@chakra-ui/react";

const PageImage = ({ title, backgroundImage }) => (
  <Flex flexDirection="column" gap={3} alignItems="center">
    <Flex
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
      borderRadius="10px"
      backgroundColor="lightgrey"
      opacity="90%"
      height={{ base: "250px", md: "320px" }}
      width="100%"
      minWidth="250px"
      maxWidth="320px"
      _hover={{ opacity: "50%" }}
    />
    <Text
      fontWeight={700}
      fontSize="24px"
      _hover={{ textDecoration: "underline" }}
    >
      {title}
    </Text>
  </Flex>
);

export default PageImage;
