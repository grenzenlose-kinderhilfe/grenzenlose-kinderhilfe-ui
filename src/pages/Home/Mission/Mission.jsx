import {
  Accordion,
  Grid,
  GridItem,
  Text
} from '@chakra-ui/react'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

import MissionItem from './MissionItem/MissionItem'
import educationImage from '../../../assets/img/mission/education.jpg'
import experiencesImage from '../../../assets/img/mission/experiences.jpg'
import infrastructureImage from '../../../assets/img/mission/infrastructure.jpg'
import transportationImage from '../../../assets/img/mission/transportation.jpg'

const Mission = () => {
  const [expandedIndex, setExpandedIndex] = React.useState(0)

  const { t } = useTranslation()

  const localization = {
    education: t('pages.home.mission.education', 'Oktatás'),
    infrastructure: t('pages.home.mission.infrastructure', 'Infrastruktúra'),
    travelOrganization: t(
      'pages.home.mission.travelOrganization',
      'Utazásszervezés'
    ),
    experiences: t('pages.home.mission.experiences', 'Élmények')
  }

  const missionItems = [
    {
      title: localization.education,
      image: educationImage,
      content: (
        <Trans i18nKey='pages.home.mission.educationContent'>
          A játszva tanulás a legfontosabb az érdeklődő gyermekek számára. A
          felhőtlen közös játékkal fejlődhetnek az otthon lakói és közben a
          közös élmények is jótékonyan hatnak a kicsikre és az adományozókra
          egyaránt. Ezért fontosnak tartjuk a generációk találkozását az
          egymástól tanulás lehetőségét és a megfelelő eszközök adományozását a
          gyermekeknek. A színes ceruzától a számítógépekig, a kézműves
          foglalkozástól a nyelvtanulásig minden a rászorulók fejlesztését
          szolgálja! Adományozzon Ön is használt vagy új eszközöket, hogy
          egyenlő esélyekkel indulhassanak az életben az árva gyerekek!
        </Trans>
      )
    },
    {
      title: localization.infrastructure,
      image: infrastructureImage,
      content: (
        <Trans i18nKey='pages.home.mission.infrastructureContent'>
          A gyermekotthonok fejlesztésére alig-alig van keret, a fenntartók
          örülnek, ha az előírásoknak megfelelően tudnak működni. A legtöbb
          esetben elavult épületekben, régi berendezési tárgyakkal és
          eszközökkel vannak felszerelve. A korszerűsítés nagy fejtörést okoz az
          intézményvezetőknek. A tisztító festés is az önkéntesek jóvoltából
          valósítható meg az esetek nagyrészében. A tervek között szerepel
          napkollektor telepítése is, amely nagyban támogatná a melegvíz
          ellátást, de a legtöbb helyen a konyhai felszerelések és az egyéb
          berendezések pl. mosó és szárítógépek is cserére szorulnak. Szinte
          minden helyen a gyermekek ágyait, bútorait is cserélni kellene. Ehhez
          kapcsolódóan elindítottunk egy programot,amely 80 otthon komplett
          eszközcseréjét,bővítését célozta meg 2018 végéig.
        </Trans>
      )
    },
    {
      title: localization.travelOrganization,
      image: transportationImage,
      content: (
        <Trans i18nKey='pages.home.mission.transporationContent'>
          „A cél az út maga.” Nincs is izgalmasabb érzés, mint amikor az
          utazáshoz készülődünk. Az árva gyermekek életében egy külföldi utazás,
          vagy egyáltalán az utazás nagyon nagy álom. Ezt az elmúlt évek során a
          gyerekekkel való beszélgetésekkor szomorúan tapasztaltuk. Szinte
          kézenfekvő volt tehát, hogy szervezzünk utazást a részükre. Óriási
          élmény ezt a szabadságérzést adományozni az otthonban élőknek! A közös
          utazás mindenkit feltölt! Teveinkben szerepel egy szállítójármű és egy
          ausztriai üdülőközpont létrehozása is! Adományozzon Ön is az árváknak
          utazási élményt, nyári táborozást vagy téli élményeket!
        </Trans>
      )
    },
    {
      title: localization.experiences,
      image: experiencesImage,
      content: (
        <Trans i18nKey='pages.home.mission.experiencesContent'>
          Alapvető emberi szükséglet, hogy egy közösség tagjaként közös
          élményeket adhassunk és kaphassunk. Az otthonokban élő gyermekek
          ingerszegényebb környezetben élnek, ezért hatalmas öröm számukra, ha
          látogatók érkeznek egy közös program, játék erejéig vagy ők kapnak
          meghívást. A legnagyobb kaland számukra egy közös szabadidős program,
          játék, kirándulás, sütés-főzés, fagyizás, kerékpározás! Adományozzon
          Ön is élményeket a gyerekeknek!
        </Trans>
      )
    }
  ]

  return (
    <Grid templateColumns={{ base: '1fr .', xl: '9fr 4fr' }}>
      <GridItem borderRadius={{ base: 0, lg: '10px' }}>
        <Accordion defaultIndex={[0]}>
          {missionItems.map((item, idx) => (
            <MissionItem
              key={`mission-item-${idx}`}
              title={item.title}
              onClickHandler={() => setExpandedIndex(idx)}
            >
              <Text pr='50px'>{item.content}</Text>
            </MissionItem>
          ))}
        </Accordion>
      </GridItem>
      <GridItem
        ml='25px'
        backgroundImage={`url(${missionItems[expandedIndex].image})`}
        bgSize='cover'
        borderRadius={{ base: 0, lg: '10px' }}
      />
    </Grid>
  )
}

export default Mission
