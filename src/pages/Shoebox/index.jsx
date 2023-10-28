import { Grid, GridItem } from '@chakra-ui/react'

import EmbedMap from './EmbedMap/EmbedMap'

const ShoeBox = () => (
  <Grid
    gap={{ base: 0, md: 4 }}
    margin={{ base: 0, lg: '25px', xl: '50px 5px 25px' }}
    templateAreas={'"mediaGroup" "map" "content" "image"'}
  >
    <GridItem area='mediaGroup' />
    <GridItem area='map' align='center'>
      <EmbedMap />
    </GridItem>
    <GridItem area='content' />
    <GridItem area='image' />
  </Grid>
)

export default ShoeBox
