import { AspectRatio, Box, Flex } from "@chakra-ui/react";

const EmbedMap = ({ src, alt }) => {
  return (
    <Flex justify="center">
      <AspectRatio
        width="100%"
        maxWidth={{ base: "100%", md: "95%" }}
        ratio={{ base: 1, md: 3 }}
      >
        <Box as="iframe" src={src} alt={alt} />
      </AspectRatio>
    </Flex>
  );
};

export default EmbedMap;
