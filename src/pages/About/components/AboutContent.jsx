import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const AboutContent = () => (
  <>
    <Heading as="h1" m="25px">
      A kérdés egyszerű volt: mire volna szükségetek? <br />A válasz még
      egyszerűbb: törődésre.
      <br />
      Innen indult a történetünk.
    </Heading>
    <Flex flexDirection="column" gap={4}>
      <Text>
        2010-ben egy gyermekotthon karácsonyi rendezvényén vettünk részt, ahol
        fogyatékkal élő gyermekek adtak igazán szívhez szóló műsort, nekünk
        „egészségeseknek”. Az akkor megélt érzések hatására elkezdtük keresni az
        utat, hogy mivel tudnánk meghálálni azoknak a gyerekeknek és
        felnőtteknek, akiktől azokat a leírhatatlanul jó érzéseket kaptuk. A
        kérdés egyszerű volt: mire volna szükségetek? A válasz még egyszerűbb:
        törődésre.
      </Text>
      <Text>
        Innen indult a történetünk. Az elmúlt években nagyon sok alkalommal
        sikerült mosolyt csalni egészséges és fogyatékkal élő gyermekek arcára
        azokkal a programokkal és meglepetésekkel amelyeket kitaláltunk és
        megszerveztünk a számukra!
      </Text>
      <Text>
        Ismerősök, Barátok és számtalan Ismeretlen csatlakozott az évek során
        segítő jószándékkal ahhoz a csapathoz akikkel együtt lelkesen készültünk
        és készülünk különböző képen szolgálni azokat a Magyarországon és
        Romániában valamint Ukrajnában árvaként, hátrányos helyzetűként,
        intézményi körülmények között felnövekvő gyerekeket, akiknek a
        mindennapi boldogság érzete hiánycikk!
      </Text>
      <Text>
        Számunkra „Az gyerekek mosolya” nagyon fontos! Ez a törődés a szeretet
        egyik megnyilvánulása! Legyen egészséges, vagy olyan emberfeletti erővel
        rendelkező emberke, aki lábak és hiányzó újakkal is képes gyönyörűen
        zongorázni! Nekik és értük hoztuk létre a Határtalan Segítség
        Alapítványt! Az eddigi programokról és ünnepségekről itt tájékozódhatsz,
        a jövőbeni eseményekre pedig már személyes részvételeddel is hatással
        lehetsz!
      </Text>
      <Text>
        Köszönjük az érdeklődésed, jó nézelődést a honlapon és várjuk az
        aktivitásod, mert most már tudod: Minden gyermek mosolya számít!
      </Text>
    </Flex>
  </>
);

export default AboutContent;
