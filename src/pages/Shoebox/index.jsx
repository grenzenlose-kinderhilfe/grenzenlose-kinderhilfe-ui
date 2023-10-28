import { Grid, GridItem } from '@chakra-ui/react'

import withTracker from '../../utils/tracking'
import EmbedMap from './EmbedMap/EmbedMap'
import ContentGroup from './ContentGroup/ContentGroup'
import MapText from './MapText/MapText'

const ShoeBox = () => (
  <Grid
    gap={{ base: 4, md: 8 }}
    margin={{ base: 0, lg: '25px' }}
    templateAreas={'"contentGroup" "mapText" "map" "image"'}
  >
    <GridItem area='contentGroup'>
      <ContentGroup />
    </GridItem>
    <GridItem area='mapText' align='center'>
      <MapText />
    </GridItem>
    <GridItem area='map' align='center' maxWidth='100vw'>
      <EmbedMap />
    </GridItem>
  </Grid>
)

export default withTracker(ShoeBox)
