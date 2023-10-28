import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

import withTracker from '../../utils/tracking'
import Counters from './Counters/Counters'
import Mission from './Mission/Mission'
import Quote from './Quote/Quote'
import SlideShow from './SlideShow/SlideShow'
import VideoGroup from './VideoGroup/VideoGroup'

const Home = () => (
  <Grid
    color='black'
    gap={{ base: 0, md: 4 }}
    margin={{ base: 0, lg: '25px', xl: '50px 50px 25px' }}
    templateAreas={'"slideshow" "videoGroup" "counters" "mission" "quote"'}
  >
    <GridItem area='slideshow' overflow='hidden' mb='20px'>
      <SlideShow />
    </GridItem>
    <GridItem area='videoGroup'>
      <VideoGroup />
    </GridItem>
    <GridItem area='counters'>
      <Counters />
    </GridItem>
    <GridItem area='mission'>
      <Mission />
    </GridItem>
    <GridItem area='quote'>
      <Quote />
    </GridItem>
  </Grid>
)

export default withTracker(Home)
