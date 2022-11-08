import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";

const About = () => (
  <Grid
    templateAreas={`"quote image" "greeting greeting" "founders details"`}
    templateColumns="1fr 1fr"
    color="black"
  >
    <GridItem area="quote" align="center">
      <Heading as="h1" m="60px">
        A kérdés egyszerű volt: mire volna szükségetek? A válasz még egyszerűbb:
        törődésre. Innen indult a történetünk.
      </Heading>
    </GridItem>
    <GridItem area="image" m="50px" align="center">
      image placeholder
    </GridItem>
    <GridItem area="greeting" m="50px" align="center">
      <Box>
        <Text>
          Köszöntő: Üdvözlünk Kedves Látogató! Minden ott kezdődött…. 2010-ben
          egy gyermekotthon karácsonyi rendezvényén vettünk részt, ahol
          fogyatékkal élő gyermekek adtak igazán szívhez szóló műsort, nekünk
          „egészségeseknek”. Az akkor megélt érzések hatására elkezdtük keresni
          az utat, hogy mivel tudnánk meghálálni azoknak a gyerekeknek és
          felnőtteknek, akiktől azokat a leírhatatlanul jó érzéseket kaptuk. A
          kérdés egyszerű volt: mire volna szükségetek? A válasz még egyszerűbb:
          törődésre. Innen indult a történetünk. Az elmúlt években nagyon sok
          alkalommal sikerült mosolyt csalni egészséges és fogyatékkal élő
          gyermekek arcára azokkal a programokkal és meglepetésekkel amelyeket
          kitaláltunk és megszerveztünk a számukra! Ismerősök, Barátok és
          számtalan Ismeretlen csatlakozott az évek során a segítő jószándékkal
          ahhoz a csapathoz akikkel együtt lelkesen készültünk és készülünk
          különböző képen szolgálni azokat a Magyarországon és Romániában
          valamint Ukrajnában árvaként, hátrányos helyzetűként, intézményi
          körülmények között felnövekvő gyerekeket, akiknek a mindennapi
          boldogság érzete hiánycikk! Számunkra „Az gyerekek mosolya” nagyon
          fontos! Ez a törődés a szeretet egyik megnyilvánulása! Legyen
          egészséges, vagy olyan emberfeletti erővel rendelkező emberke, aki
          lábak és hiányzó újakkal is képes gyönyörűen zongorázni! Nekik és
          értük hoztuk létre a Határtalan Segítség Alapítványt! Az eddigi
          programokról és ünnepségekről itt tájékozódhatsz, a jövőbeni
          eseményekre pedig már személyes részvételeddel is hatással lehetsz!
          Köszönjük az érdeklődésed, jó nézelődést a honlapon és várjuk az
          aktivitásod, mert most már tudod: Minden gyermek mosolya számít!
        </Text>
      </Box>
    </GridItem>
    <GridItem area="founders" m="50px" align="center">
      image placeholder
    </GridItem>
    <GridItem area="details" m="50px" align="left">
      Kocsik Enikő – Az alapítvány kuratóriumának elnöke +36205919590 Mester
      János – Alapító +41784063331 Határtalan Segítség Alapítvány 4405
      Nyíregyháza Molnár utca 26 Adószám: 19102186115
      hatartalansegitsegalapitvany@gmail.com Alapito okirat:
      https://grenzenlose-kinderhilfe.com/wp-content/uploads/2021/07/Határtalan-segítség-alapítvány.doc
      https://grenzenlose-kinderhilfe.com/wp-content/uploads/2021/07/HATÁRTALAN-SEGÍTSÉG-egyéb-1.doc
      Alapítványunkat az alábbi számlaszámon tudják támogatni: ERSTE BANK
      11600006-00000000-83451166 Határtalan Segítség Alapítvány Köszönjük
      felajánlásaikat! Tartson velünk! Személyesen is átadhatja az adományokat,
      a programok időpontjáról érdeklődjön elérhetőségeinken! Adománygyűjtő
      dobozaink kihelyezésére a www.hatartalansegitsegalapitvany@gmail.com-ra
      küldött emailben tehet javaslatot! Kérjük írja meg, az üzlet címét,
      elérhetőségét!
    </GridItem>
  </Grid>
);

export default About;
