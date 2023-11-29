import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

import Metric from './Metric/Metric'

const data = [
  {
    localizationKey: 'countries',
    value: 8
  },
  {
    localizationKey: 'locations',
    value: 95
  },
  {
    localizationKey: 'children',
    value: 15000
  },
  {
    localizationKey: 'volunteers',
    value: 500
  }
]

const Counters = () => {
  const { t } = useTranslation()

  const localization = {
    countries: t('pages.home.metrics.countries', 'Ország'),
    locations: t('pages.home.metrics.locations', 'Helyszín'),
    children: t('pages.home.metrics.children', 'Gyermek'),
    volunteers: t('pages.home.metrics.volunteers', 'Önkéntes')
  }

  return (
    <Grid
      templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
      backgroundImage='url(/assets/img/background/background-field.jpg)'
      backgroundPosition='center'
      backgroundSize='cover'
      borderRadius={{ base: 0, lg: '10px' }}
    >
      {data.map((item, idx) => (
        <GridItem key={`metric-${idx}`} align='center'>
          <Metric
            label={localization[item.localizationKey]}
            value={item.value}
          />
        </GridItem>
      ))}
    </Grid>
  )
}

export default Counters
