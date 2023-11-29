import { Grid, GridItem } from '@chakra-ui/react'

import withTracker from '../../utils/tracking'
import EmbedMap from './EmbedMap/EmbedMap'
import ContentGroup from './ContentGroup/ContentGroup'
import Fundraiser from './Fundraiser/Fundraiser'

const ShoeBox = () => (
  <Grid
    gap={{ base: 4, md: 8 }}
    margin={{ base: 0, lg: '25px' }}
    templateAreas={`
        "contentGroup"
        "fundraiser"
        "map"`}
  >
    <GridItem area='contentGroup'>
      <ContentGroup />
    </GridItem>
    <GridItem area='fundraiser' align='center'>
      <Fundraiser />
    </GridItem>
    <GridItem area='map' align='center'>
      <EmbedMap />
    </GridItem>
  </Grid>
)

export default withTracker(ShoeBox)
