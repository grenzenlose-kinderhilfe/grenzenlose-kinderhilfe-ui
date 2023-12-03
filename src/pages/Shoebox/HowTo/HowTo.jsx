import {
  Grid,
  Flex,
  GridItem,
  Heading,
  Text,
  Button,
  Link
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { LOCALE_DE } from '../../../constants'

const HowTo = () => {
  const { i18n, t } = useTranslation()

  const localization = {
    heading: t('pages.Shoebox.HowTo.heading'),
    headingSub: t('pages.Shoebox.HowTo.headingSub'),
    stepMakeBox: t('pages.Shoebox.HowTo.stepMakeBox'),
    stepDonate: t('pages.Shoebox.HowTo.stepDonate'),
    stepHappy: t('pages.Shoebox.HowTo.stepHappy'),
    buttonText: t('pages.Shoebox.HowTo.buttonText')
  }

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
          <Heading as='h1' fontSize='2rem' maxW='600px'>
            {localization.heading}
          </Heading>
          <Text fontStyle='italic'>
            {localization.headingSub}
          </Text>
          <Text fontStyle='italic'>
            {localization.stepMakeBox}
          </Text>
          <Text fontStyle='italic'>
            {localization.stepDonate}
          </Text>
          <Text fontStyle='italic'>
            {localization.stepHappy}
          </Text>
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
            <Button size='lg'>{localization.buttonText}</Button>
          </Text>
        </Link>
      </GridItem>
    </Grid>
  )
}

export default HowTo
