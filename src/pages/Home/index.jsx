import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

import withTracker from '../../utils/tracking'
import Metrics from './components/Metrics'
import Mission from './components/Mission'
import Quote from './components/Quote'
import SlideShow from './components/SlideShow'
import VideoGroup from './components/VideoGroup'

const Home = () => (
  <Grid
    color='black'
    gap={{ base: 0, md: 4 }}
    margin={{ base: 0, lg: '25px', xl: '50px 50px 25px' }}
    templateAreas={'"slideshow" "videoGroup" "metrics" "mission" "quote"'}
  >
    <GridItem area='slideshow' overflow='hidden' mb='20px'>
      <SlideShow />
    </GridItem>
    <GridItem area='videoGroup'>
      <VideoGroup />
    </GridItem>
    <GridItem area='metrics'>
      <Metrics />
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
