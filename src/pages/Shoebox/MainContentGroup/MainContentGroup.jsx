import {
  AspectRatio,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text
} from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

const MainContentGroup = () => {
  const { t } = useTranslation()

  const localization = {
    titleHeading: t('pages.ShoeBox.MainContentGroup.titleHeading', 'Cipősdoboz Akció a Gyermekekért'),
    titleHeadingSub: t('pages.ShoeBox.MainContentGroup.titleHeadingSub', 'Adományozz és Teremtsünk Együtt Karácsonyi Csodát!'),
    shoeboxMagic: t(
      'pages.ShoeBox.MainContentGroup.shoeboxMagic',
      'Gondoltad volna, hogy egy egyszerű cipősdoboz képes varázsolni? Ráadásul gyermekmosolyokat! Karitatív akciónk során célunk, hogy minél több rászoruló gyermek számára hozzunk létre boldog pillanatokat az év végi ünnepek alatt.'
    ),
    joinUs: t('pages.ShoeBox.MainContentGroup.joinUs', 'Csatlakozz Hozzánk!'),
    community: t(
      'pages.ShoeBox.MainContentGroup.community',
      'Az akció része lenni, azért jó, mert nem csak az adományozásról szól, hanem az összetartozásról is. Csatlakozz a Grenzenlose Kinderhilfe közösségéhez, ahol együtt tehetünk azért, hogy minél több gyermek életét tegyük boldoggá.'
    ),
    attention: t(
      'pages.ShoeBox.MainContentGroup.attention',
      'Mindannyian tudjuk, hogy egy kis figyelem, szeretet és gondoskodás mennyire feldobhatja egy gyermek napját. Az évente megrendezésre Cipősdoboz Akció célja pontosan ez: örömet és reményt vinni a rászoruló gyerekek számára. Ez már a 7. év, és ez alatt az idő alatt közel 13.000 gyermeket sikerült megajándékozni.'
    )
  }

  return (
    <Grid
      margin={2}
      padding={2}
      templateColumns={{ base: '1fr', xl: '2fr 3fr' }}
      borderRadius='10px'
      backgroundColor='primary.blue'
      color='white'
    >
      <GridItem align='center' p='25px'>
        <Flex
          gap={6}
          align='center'
          minHeight={{ base: '250px', xl: '450px' }}
          height='100%'
          flexDirection='column'
          justifyContent='center'
        >
          <Heading as='h1' fontSize='2rem' maxW='600px'>
            {localization.titleHeading}
          </Heading>
          <Text fontStyle='italic'>
            {localization.titleHeadingSub}
          </Text>
          <Text maxW='800px' fontStyle='italic'>
            {localization.shoeboxMagic}
          </Text>
          <Heading as='h3' fontSize='1.75rem'>
            {localization.joinUs}
          </Heading>
          <Text fontStyle='italic'>
            {localization.community}
          </Text>
          <Text fontStyle='italic'>
            {localization.attention}
          </Text>
        </Flex>
      </GridItem>
      <GridItem
        align='center'
        display='flex'
        justifyContent='center'
        p={{ base: '0 10px 10px', md: '0 25px 25px', xl: '25px' }}
      >
        <AspectRatio width='100%' ratio={{ base: 7 / 4 }}>
          <Image src='/assets/img/pages/shoebox/shoebox.png' fit='cover' alt='shoebox-logo' />
        </AspectRatio>
      </GridItem>
    </Grid>
  )
}

export default MainContentGroup
