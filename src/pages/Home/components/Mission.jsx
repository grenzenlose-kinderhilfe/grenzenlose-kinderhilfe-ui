import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

import educationImage from "../../../assets/img/mission/education.jpg";
import experiencesImage from "../../../assets/img/mission/experiences.jpg";
import infrastructureImage from "../../../assets/img/mission/infrastructure.jpg";
import transportationImage from "../../../assets/img/mission/transportation.jpg";

const MissionItem = ({ title, idx, setIndex, children }) => (
  <AccordionItem>
    {({ isExpanded }) => {
      isExpanded && setIndex(idx);

      return (
        <>
          <AccordionButton
            _expanded={{ bg: "primary.lightblue", borderRadius: "10px" }}
          >
            <Box flex="1" textAlign="left">
              <Heading fontSize="24px">{title}</Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>{children}</AccordionPanel>
        </>
      );
    }}
  </AccordionItem>
);

const Mission = () => {
  const [expandedIndex, setExpandedIndex] = React.useState(0);

  const missionImages = [
    educationImage,
    transportationImage,
    infrastructureImage,
    experiencesImage,
  ];

  return (
    <Grid templateColumns={{ base: "1fr", xl: "5fr 2fr" }}>
      <GridItem border="1px solid black" borderRadius={{ base: 0, lg: "10px" }}>
        <Accordion defaultIndex={[expandedIndex]}>
          <MissionItem title="Oktatás" idx={0} setIndex={setExpandedIndex}>
            <Text pr="50px">
              A játszva tanulás a legfontosabb az érdeklődő gyermekek számára. A
              felhőtlen közös játékkal fejlődhetnek az otthon lakói és közben a
              közös élmények is jótékonyan hatnak a kicsikre és az adományozókra
              egyaránt. Ezért fontosnak tartjuk a generációk találkozását az
              egymástól tanulás lehetőségét és a megfelelő eszközök
              adományozását a gyermekeknek. A színes ceruzától a számítógépekig,
              a kézműves foglalkozástól a nyelvtanulásig minden a rászorulók
              fejlesztését szolgálja! Adományozzon Ön is használt vagy új
              eszközöket, hogy egyenlő esélyekkel indulhassanak az életben az
              árva gyerekek!
            </Text>
          </MissionItem>

          <MissionItem
            title="Infrastruktúra"
            idx={1}
            setIndex={setExpandedIndex}
          >
            <Text pr="50px">
              A gyermekotthonok fejlesztésére alig-alig van keret, a fenntartók
              örülnek, ha az előírásoknak megfelelően tudnak működni. A legtöbb
              esetben elavult épületekben, régi berendezési tárgyakkal és
              eszközökkel vannak felszerelve. A korszerűsítés nagy fejtörést
              okoz az intézményvezetőknek. A tisztító festés is az önkéntesek
              jóvoltából valósítható meg az esetek nagyrészében. A tervek között
              szerepel napkollektor telepítése is, amely nagyban támogatná a
              melegvíz ellátást, de a legtöbb helyen a konyhai felszerelések és
              az egyéb berendezések pl. mosó és szárítógépek is cserére
              szorulnak. Szinte minden helyen a gyermekek ágyait, bútorait is
              cserélni kellene. Ehhez kapcsolódóan elindítottunk egy
              programot,amely 80 otthon komplett eszközcseréjét,bővítését
              célozta meg 2018 végéig.
            </Text>
          </MissionItem>

          <MissionItem
            title="Utazásszervezés"
            idx={2}
            setIndex={setExpandedIndex}
          >
            <Text pr="50px">
              „A cél az út maga.” Nincs is izgalmasabb érzés, mint amikor az
              utazáshoz készülődünk. Az árva gyermekek életében egy külföldi
              utazás, vagy egyáltalán az utazás nagyon nagy álom. Ezt az elmúlt
              évek során a gyerekekkel való beszélgetésekkor szomorúan
              tapasztaltuk. Szinte kézenfekvő volt tehát, hogy szervezzünk
              utazást a részükre. Óriási élmény ezt a szabadságérzést
              adományozni az otthonban élőknek! A közös utazás mindenkit
              feltölt! Teveinkben szerepel egy szállítójármű és egy ausztriai
              üdülőközpont létrehozása is! Adományozzon Ön is az árváknak
              utazási élményt, nyári táborozást vagy téli élményeket!
            </Text>
          </MissionItem>

          <MissionItem title="Élmények" idx={3} setIndex={setExpandedIndex}>
            <Text pr="50px">
              Alapvető emberi szükséglet, hogy egy közösség tagjaként közös
              élményeket adhassunk és kaphassunk. Az otthonokban élő gyermekek
              ingerszegényebb környezetben élnek, ezért hatalmas öröm számukra,
              ha látogatók érkeznek egy közös program, játék erejéig vagy ők
              kapnak meghívást. A legnagyobb kaland számukra egy közös
              szabadidős program, játék, kirándulás, sütés-főzés, fagyizás,
              kerékpározás! Adományozzon Ön is élményeket a gyerekeknek!
            </Text>
          </MissionItem>
        </Accordion>
      </GridItem>
      <GridItem
        ml="25px"
        backgroundImage={`url(${missionImages[expandedIndex]})`}
        bgSize="cover"
        borderRadius={{ base: 0, lg: "10px" }}
      />
    </Grid>
  );
};

export default Mission;
