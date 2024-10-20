import { AspectRatio, Box } from "@chakra-ui/react";

const EmbedMap = ({ src, alt }) => {
  return (
    <AspectRatio
      width="100%"
      maxWidth={{ base: "100%", md: "95%" }}
      ratio={{ base: 1, md: 3 }}
    >
      <Box as="iframe" src={src} alt={alt} />
    </AspectRatio>
  );
};

export default EmbedMap;
