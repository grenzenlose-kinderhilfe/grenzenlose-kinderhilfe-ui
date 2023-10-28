import { Grid } from '@chakra-ui/react'
import React from 'react'

import LocationGridItem from './LocationGridItem/LocationGridItem'

const LocationGrid = ({ locations }) => (
  <Grid
    gap={{ base: 2, lg: 8 }}
    mb='20px'
    templateColumns={{
      base: '1fr',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
      xl: 'repeat(4, 1fr)'
    }}
  >
    {locations.map((item, idx) => (
      <LocationGridItem
        key={`location-${idx}`}
        countryCode={item.countryCode}
        name={item.name}
        place={item.place}
      />
    ))}
  </Grid>
)

export default LocationGrid
