import { Grid, GridItem, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

import aboutUsImage from '../../assets/img/about-us.jpg'
import withTracker from '../../utils/tracking'
import AboutContent from './AboutContent/AboutContent'
import ContactDetailGroup from './ContactDetailGroup/ContactDetailGroup'

const About = () => {
  const [isLargerThan1025] = useMediaQuery('(min-width: 1025px)')

  const desktopLayout = () =>
    <Grid
      color='black'
      templateColumns='3fr 2fr 2fr'
      margin='25px 50px 25px'
    >
      <GridItem align='center' m='0px 25px 0px'>
        <AboutContent />
      </GridItem>
      <GridItem
        m='25px'
        backgroundImage={`url(${aboutUsImage})`}
        bgSize='contain'
        bgRepeat='no-repeat'
        bgPosition='center'
        borderRadius='10px'
      />
      <GridItem alignSelf='center'>
        <ContactDetailGroup />
      </GridItem>
    </Grid>

  const mobileLayout = () =>
    <Grid
      color='black'
      templateColumns='1fr'
      mb={{ base: '25px', md: 0 }}
      templateRows={{ base: '4fr 1fr auto', md: '5fr 4fr auto', lg: '2fr 3fr auto' }}
      gap='25px'
    >
      <GridItem align='center' m='0px 25px 0px'>
        <AboutContent />
      </GridItem>
      <GridItem
        backgroundImage={`url(${aboutUsImage})`}
        bgSize='cover'
        bgRepeat='no-repeat'
        bgPosition='center'
      />
      <GridItem align='center'>
        <ContactDetailGroup />
      </GridItem>
    </Grid>

  return (
    isLargerThan1025
      ? desktopLayout()
      : mobileLayout()
  )
}

export default withTracker(About)
