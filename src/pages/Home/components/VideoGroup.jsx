import {
  AspectRatio,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Trans } from "react-i18next";

const VideoGroup = () => (
  <Grid
    templateColumns={{ base: "1fr", xl: "1fr 1fr" }}
    borderRadius={{ base: 0, lg: "10px" }}
    color="white"
    backgroundColor="primary.blue"
  >
    <GridItem align="center" p="25px">
      <Flex
        gap={6}
        align="center"
        height="100%"
        flexDirection="column"
        justifyContent="center"
      >
        <Trans i18nKey="page.home.missionStatement">
          <Heading as="h1" fontSize="32px" maxW="600px">
            Legfontosabb célunk hogy a Kárpát-medence árváinak mindennapjait
            bearanyozzuk!
          </Heading>
          <Text maxW="800px">
            Az első jótékony akciónk baráti kezdeményezésre indult 2011.
            karácsonyán, amikor rászoruló gyerekeket ajándékoztunk meg. Látva a
            felragyogó arcokat úgy gondoltuk, hogy ezt megszeretnénk ismételni
            és nem csak egyszer egy évben.
          </Text>
          <Text maxW="800px">
            A gyermekotthonok lakói óriási szeretettel fogadják az ajándékokat,a
            közös programokat és az adományozókat. Törekszünk arra,hogy az adott
            intézmények speciális helyzetének megfelelően adományozzunk, így a
            programjaink a megszületésüktől a mai napig folyamatosan fejlődnek,
            változnak.
          </Text>
          <Text maxW="800px">
            Folyamatos az újratervezés és újabb célok meghatározása az
            adományozó önkéntesek és a gyermekek, valamint az intézmények
            elégedettségének igénye szerint.
          </Text>
        </Trans>
      </Flex>
    </GridItem>
    <GridItem
      align="center"
      display="flex"
      justifyContent="center"
      p={{ base: 0, md: "0 0 25px", xl: "25px" }}
    >
      <AspectRatio width="100%" ratio={16 / 9}>
        <iframe
          title="Határtalan Segítség Alapítvány"
          width="1268"
          height="713"
          src="https://www.youtube.com/embed/09MPqyp8ggE?controls=0&rel=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </AspectRatio>
    </GridItem>
  </Grid>
);

export default VideoGroup;
