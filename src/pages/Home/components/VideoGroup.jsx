import {
  AspectRatio,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

const VideoGroup = () => (
  <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={6}>
    <GridItem align="center">
      <Flex
        maxW="600px"
        height="100%"
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
      >
        <Heading pb="32px" as="h1" fontSize="24px">
          Legfontosabb célunk hogy a Kárpát-medence árváinak mindennapjait
          bearanyozzuk!
        </Heading>
        <Text>
          Az első jótékony akciónk baráti kezdeményezésre indult 2011.
          karácsonyán, amikor rászoruló gyerekeket ajándékoztunk meg. Látva a
          felragyogó arcokat úgy gondoltuk, hogy ezt megszeretnénk ismételni és
          nem csak egyszer egy évben. A gyermekotthonok lakói óriási szeretettel
          fogadják az ajándékokat,a közös programokat és az adományozókat.
          Törekszünk arra,hogy az adott intézmények speciális helyzetének
          megfelelően adományozzunk, így a programjaink a megszületésüktől a mai
          napig folyamatosan fejlődnek, változnak. Folyamatos az újratervezés és
          újabb célok meghatározása az adományozó önkéntesek és a gyermekek,
          valamint az intézmények elégedettségének igénye szerint.
        </Text>
      </Flex>
    </GridItem>
    <GridItem align="center">
      <AspectRatio ratio={3 / 2}>
        <iframe
          title="Határtalan Segítség Alapítvány"
          width="1268"
          height="713"
          src="https://www.youtube.com/embed/09MPqyp8ggE?controls=0&rel=0"
          allow="accelerometer; autoplay; clipboard-write; modestbranding; encrypted-media; gyroscope; picture-in-picture"
        />
      </AspectRatio>
    </GridItem>
  </Grid>
);

export default VideoGroup;
