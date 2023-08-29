import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

import withTracker from '../../utils/tracking'
import MediaVideoItem from './components/MediaVideoItem'

const Media = () => {
  const { t } = useTranslation()

  const localization = {
    ukraineChildrenHeading: t(
      'pages.media.ukraineChildrenHeading',
      'Ukrajnában élő gyerekeknek gyűjt a Határtalan Segítség Alapítvány'
    ),
    ukraineChildrenContent: t(
      'pages.media.ukraineChildrenContent',
      'Ukrajnában élő gyerekeknek gyűjt az anyaországi Határtalan Segítség Alapítvány. A szervezet az elmúlt hónapokban többször járt már Kárpátalján, egyebek mellett Rátra, Nagydobronyba, Beregszászba és Mezőváriba is vittek már tartós élelmiszert és egyéb adományt, közel 300 tonna mennyiségben. Most azt tervezik, hogy karácsony idején megajándékozzák a nehéz helyzetben élő gyerekeket. Ennek érdekében gyűjtést indítanak. A Határtalan Segítség Alapítványmunkatársai Európa minden országából várják a felajánlásokat.'
    ),
    barcziGusztavNurseryHeading: t(
      'pages.media.barcziGusztavNurseryHeading',
      'Vadonatúj pedálos gokartot kaptak a debreceni ovisok – videóval'
    ),
    barcziGusztavNurseryContent: t(
      'pages.media.barcziGusztavNurseryContent',
      'Az izmok fejlesztéséhez, a koordinációs képességek javításához, a tér- és sebességérzékelés fejlesztéséhez hozzájáruló eszközöket a Debrecen Nemzetközi Repülőtér vásárolta a szeptember 25-én megrendezett 5. Wizz Air Debrecen Airport Run futóverseny bevételéből. A társaság két debreceni intézménynek ajánlotta fel az eszközöket, így csatlakozott a Rolling Kids Közlekedésbiztonsági Élményprojekthez.'
    ),
    foundationIntroHeading: t(
      'pages.media.foundationIntroHeading',
      'Határtalan Segítség Alapítvány bemutató'
    ),
    hegyaljaTvHeading: t(
      'pages.media.hegyaljaTvHeading',
      'Egy-egy cipősdoboznyi ajándékot kaptak a Tiszacsermelyi óvodások a Határtalan Segitség Alapitványtól'
    )
  }

  return (
    <Grid color='black' m='25px' gap={8}>
      <GridItem>
        <MediaVideoItem
          heading={localization.ukraineChildrenHeading}
          content={localization.ukraineChildrenContent}
          videoEmbedUrl='https://www.youtube.com/embed/ydaF4hEgp7M?controls=0&rel=0'
          source='TV 21 Ungvár'
          sourceUrl='https://tv21ungvar.tv/hirmusorok/hirek/ukrajnaban-elo-gyerekeknek-gyujt-a-hatartalan-segitseg-alapitvany.html'
        />
      </GridItem>
      <GridItem>
        <MediaVideoItem
          videoEmbedUrl='https://videa.hu/player?v=oOw6bP3Z21lWiV0f'
          heading={localization.barcziGusztavNurseryHeading}
          content={localization.barcziGusztavNurseryContent}
          source='Hajdú-Bihar Megyei Hírportál'
          sourceUrl='https://www.haon.hu/helyi-kozelet/2022/11/vadonatuj-pedalos-gokartot-kaptak-a-debreceni-ovisok-videoval/'
        />
      </GridItem>
      <GridItem>
        <MediaVideoItem
          videoEmbedUrl='https://youtube.com/embed/MUzkAi0iGMQ?start=861&end=1044'
          heading={localization.hegyaljaTvHeading}
          source='Hegyalja Televízió'
          sourceUrl='https://www.youtube.com/watch?v=MUzkAi0iGMQ'
        />
      </GridItem>
      <GridItem>
        <MediaVideoItem
          videoEmbedUrl='https://www.youtube.com/embed/09MPqyp8ggE?controls=0&rel=0'
          heading={localization.foundationIntroHeading}
          source='Svájci Magyar Hírmondó'
          sourceUrl='https://www.facebook.com/100063233137938/videos/1328096694364891/'
        />
      </GridItem>
    </Grid>
  )
}

export default withTracker(Media)
