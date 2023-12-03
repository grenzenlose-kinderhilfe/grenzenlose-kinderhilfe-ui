import {
  Grid,
  Flex,
  GridItem,
  Heading,
  Text,
  Button,
  Link
} from '@chakra-ui/react'
import { Trans, useTranslation } from 'react-i18next'
import { LOCALE_DE } from '../../../constants'

const HowTo = () => {
  const { i18n } = useTranslation()

  const blogCategoryUrl = i18n.language === LOCALE_DE
    ? 'https://blog.grenzenlose-kinderhilfe.com/de/category/schuhkarton/'
    : 'https://blog.grenzenlose-kinderhilfe.com/category/ciposdoboz/'

  return (
    <Grid
      margin={2}
      padding={2}
      templateColumns={{ base: '1fr', xl: '1fr 1fr' }}
      borderRadius='10px'
      backgroundColor='primary.blue'
      color='white'
    >
      <GridItem align='center' p='25px'>
        <Flex
          gap={6}
          align='center'
          minHeight={{ base: '300px' }}
          height='100%'
          flexDirection='column'
          justifyContent='center'
        >
          <Trans i18nKey='pages.shoebox.howToContent'>
            <Heading as='h1' fontSize='2rem' maxW='600px'>
              Hogyan működik a Cipősdoboz Akció?
            </Heading>
            <Text fontStyle='italic'>
              Adományozz és Teremtsünk Együtt Karácsonyi Csodát!
            </Text>
            <Text fontStyle='italic'>
              Doboz Készítése: Mindenki részt vehet! Töltsd meg egy cipősdobozt olyan hasznos és örömet okozó
              tárgyakkal, mint játékok, írószerek, ruhák vagy édességek.
            </Text>
            <Text fontStyle='italic'>
              Adományozás: Az elkészített dobozokat adományozhatod, hogy eljussanak azokhoz, akiknek a
              legnagyobb szükségük van rá.
            </Text>
            <Text fontStyle='italic'>
              Együtt Örülni: Nézze meg a gyermekek boldog arcát, amikor kibontják az ajándékokat! Egy egyszerű
              cipősdoboz hatalmas örömet okozhat.
            </Text>
          </Trans>
        </Flex>
      </GridItem>
      <GridItem
        display='flex'
        alignSelf='center'
        justifyContent='center'
        p={{ base: '0 10px 10px', md: '0 25px 25px', xl: '25px' }}
      >
        <Link isExternal href={blogCategoryUrl}>
          <Text display='block' fontSize='16px'>
            <Button size='lg'>Kattints ide a legújabb cipősdoboz akció hírekert</Button>
          </Text>
        </Link>
      </GridItem>
    </Grid>
  )
}

export default HowTo
