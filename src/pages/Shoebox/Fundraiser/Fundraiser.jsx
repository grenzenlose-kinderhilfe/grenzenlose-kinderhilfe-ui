import {
  AspectRatio,
  Grid,
  GridItem,
  useMediaQuery,
  Heading,
  Text,
  Flex
} from '@chakra-ui/react'
import React from 'react'
import { LOCALE_DE } from '../../../constants'
import { useTranslation } from 'react-i18next'

const Fundraiser = () => {
  const [isLargerThan321] = useMediaQuery('(min-width: 321px)')

  const { i18n, t } = useTranslation()

  const iframeVariant = isLargerThan321 ? 'medium' : 'small'
  const iframeMaxHeight = isLargerThan321 ? '240px' : '50px'

  const localization = {
    actionTextHeading: t(
      'pages.shoebox.Fundraiser.actionTextHeading',
      'Adományozz most és támogasd a szállítmányozást!'
    ),
    actionTextInstruction: t(
      'pages.shoebox.Fundraiser.actionTextInstruction',
      'Adományoddal te is részese lehetsz ennek az örömteli kezdeményezésnek. Kattints a fenti linkre és csatlakozza nagyobb jó ügyéhez.'
    )
  }

  const shoeboxMarketingEmbedSource = i18n.language === LOCALE_DE
    ? 'https://www.youtube.com/embed/h__srWvtSK4?si=6SPuhV09jUNmORT_'
    : 'https://www.youtube.com/embed/tIL6BPiSY1w?si=JxAeMR7Gop2wV2k-'

  return (
    <Grid
      margin='0 50px 0'
      gap='20px'
      templateColumns={{ base: '1fr', xl: '1fr 1fr' }}
    >
      <GridItem
        alignSelf='center'
      >
        <AspectRatio width='100%' ratio={16 / 9}>
          <iframe
            title='Határtalan Segítség Alapítvány'
            width='1268'
            height='713'
            src={shoeboxMarketingEmbedSource}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          />
        </AspectRatio>
      </GridItem>
      <GridItem alignSelf='center' margin={{ base: '25px', xl: 0 }}>
        <Flex flexDirection='column' alignItems='center' gap={8} maxW='600px'>
          <Heading as='h1' fontsize='2rem'>
            {localization.actionTextHeading}
          </Heading>

          <AspectRatio width='100%' maxWidth='500px' maxHeight={iframeMaxHeight} ratio={1}>
            <iframe
              class='gfm-embed-iframe' frameBorder={0} scrolling='no'
              src={`https://www.gofundme.com/f/christmas-shoe-box-gift-delivery/widget/${iframeVariant}#:~:tcm-prompt=Hidden`}
            />
          </AspectRatio>
          <Text mt='-1rem'>
            {localization.actionTextInstruction}
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default Fundraiser
