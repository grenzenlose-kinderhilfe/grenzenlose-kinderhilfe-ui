import {
  AspectRatio,
  Grid,
  GridItem,
  useMediaQuery
} from '@chakra-ui/react'
import React from 'react'

const Fundraiser = () => {
  const [isLargerThan321] = useMediaQuery('(min-width: 321px)')

  const iframeVariant = isLargerThan321 ? 'medium' : 'small'
  const iframeMaxHeight = isLargerThan321 ? '240px' : '50px'

  return (
    <Grid
      margin='0 50px 0'
      gap='20px'
      templateColumns={{ base: '1fr', xl: '1fr 1fr' }}
    >
      <GridItem
        alignSelf='center'
      >
        <AspectRatio width='100%' maxWidth='500px' maxHeight={iframeMaxHeight} ratio={1}>
          <iframe
            class='gfm-embed-iframe' frameBorder={0} scrolling='no'
            src={`https://www.gofundme.com/f/help-baby-mario-beat-an-aggressive-cancer/widget/${iframeVariant}#:~:tcm-prompt=Hidden`}
          />
        </AspectRatio>
      </GridItem>
      <GridItem alignSelf='center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </GridItem>
    </Grid>
  )
}

export default Fundraiser
