import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

const MissionItem = ({ title, children }) => (
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>{children}</AccordionPanel>
  </AccordionItem>
);

const Mission = () => (
  <Accordion allowToggle defaultIndex={[0]}>
    <MissionItem title="Oktatas">
      A játszva tanulás a legfontosabb az érdeklődő gyermekek számára. A
      felhőtlen közös játékkal fejlődhetnek az otthon lakói és közben a közös
      élmények is jótékonyan hatnak a kicsikre és az adományozókra egyaránt.
      Ezért fontosnak tartjuk a generációk találkozását az egymástól tanulás
      lehetőségét és a megfelelő eszközök adományozását a gyermekeknek. A színes
      ceruzától a számítógépekig, a kézműves foglalkozástól a nyelvtanulásig
      minden a rászorulók fejlesztését szolgálja! Adományozzon Ön is használt
      vagy új eszközöket, hogy egyenlő esélyekkel indulhassanak az életben az
      árva gyerekek!
    </MissionItem>

    <MissionItem title="Infrastuktura">
      A gyermekotthonok fejlesztésére alig-alig van keret, a fenntartók örülnek,
      ha az előírásoknak megfelelően tudnak működni. A legtöbb esetben elavult
      épületekben, régi berendezési tárgyakkal és eszközökkel vannak
      felszerelve. A korszerűsítés nagy fejtörést okoz az intézményvezetőknek. A
      tisztító festés is az önkéntesek jóvoltából valósítható meg az esetek
      nagyrészében. A tervek között szerepel napkollektor telepítése is, amely
      nagyban támogatná a melegvíz ellátást, de a legtöbb helyen a konyhai
      felszerelések és az egyéb berendezések pl. mosó és szárítógépek is cserére
      szorulnak. Szinte minden helyen a gyermekek ágyait, bútorait is cserélni
      kellene. Ehhez kapcsolódóan elindítottunk egy programot,amely 80 otthon
      komplett eszközcseréjét,bővítését célozta meg 2018 végéig.
    </MissionItem>

    <MissionItem title="Utazasszervezes">
      „A cél az út maga.” Nincs is izgalmasabb érzés, mint amikor az utazáshoz
      készülődünk. Az árva gyermekek életében egy külföldi utazás, vagy
      egyáltalán az utazás nagyon nagy álom. Ezt az elmúlt évek során a
      gyerekekkel való beszélgetésekkor szomorúan tapasztaltuk. Szinte
      kézenfekvő volt tehát, hogy szervezzünk utazást a részükre. Óriási élmény
      ezt a szabadságérzést adományozni az otthonban élőknek! A közös utazás
      mindenkit feltölt! Teveinkben szerepel egy szállítójármű és egy ausztriai
      üdülőközpont létrehozása is! Adományozzon Ön is az árváknak utazási
      élményt, nyári táborozást vagy téli élményeket!
    </MissionItem>

    <MissionItem title="Elmenyek">
      Alapvető emberi szükséglet, hogy egy közösség tagjaként közös élményeket
      adhassunk és kaphassunk. Az otthonokban élő gyermekek ingerszegényebb
      környezetben élnek, ezért hatalmas öröm számukra, ha látogatók érkeznek
      egy közös program, játék erejéig vagy ők kapnak meghívást. A legnagyobb
      kaland számukra egy közös szabadidős program, játék, kirándulás,
      sütés-főzés, fagyizás, kerékpározás! Adományozzon Ön is élményeket a
      gyerekeknek!
    </MissionItem>
  </Accordion>
);

export default Mission;
