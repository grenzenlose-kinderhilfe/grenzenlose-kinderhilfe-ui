import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

import MediaVideoItem from "./components/MediaVideoItem";

const Media = () => {
  const { t } = useTranslation();

  const localization = {
    ukraineChildrenHeading: t(
      "pages.media.ukraineChildrenHeading",
      "Ukrajnában élő gyerekeknek gyűjt a Határtalan Segítség Alapítvány"
    ),
    ukraineChildrenContent: t(
      "pages.media.ukraineChildrenContent",
      "Ukrajnában élő gyerekeknek gyűjt az anyaországi Határtalan Segítség Alapítvány. A szervezet az elmúlt hónapokban többször járt már Kárpátalján, egyebek mellett Rátra, Nagydobronyba, Beregszászba és Mezőváriba is vittek már tartós élelmiszert és egyéb adományt, közel 300 tonna mennyiségben. Most azt tervezik, hogy karácsony idején megajándékozzák a nehéz helyzetben élő gyerekeket. Ennek érdekében gyűjtést indítanak. A Határtalan Segítség Alapítványmunkatársai Európa minden országából várják a felajánlásokat."
    ),
    foundationIntroHeading: t(
      "pages.media.foundationIntroHeding",
      "Határtalan Segítség Alapítvány bemutató"
    ),
  };

  return (
    <Grid color="black" m="25px" gap={8}>
      <GridItem>
        <MediaVideoItem
          heading={localization.ukraineChildrenHeading}
          content={localization.ukraineChildrenContent}
          videoEmbedUrl="https://www.youtube.com/embed/ydaF4hEgp7M?controls=0&rel=0"
          source="TV 21 Ungvár"
          sourceUrl="https://tv21ungvar.tv/hirmusorok/hirek/ukrajnaban-elo-gyerekeknek-gyujt-a-hatartalan-segitseg-alapitvany.html"
        />
      </GridItem>
      <GridItem>
        <MediaVideoItem
          videoEmbedUrl="https://www.youtube.com/embed/09MPqyp8ggE?controls=0&rel=0"
          heading={localization.foundationIntroHeading}
          source="Svájci Magyar Hírmondó"
          sourceUrl="https://www.facebook.com/100063233137938/videos/1328096694364891/"
        />
      </GridItem>
    </Grid>
  );
};

export default Media;
