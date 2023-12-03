import { Grid, GridItem, Heading, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

import withTracker from '../../utils/tracking'
import LocationAccordion from './LocationAccordion/LocationAccordion'
import LocationGrid from './LocationGrid/LocationGrid'
import locations from './locations'

const Institutions = () => {
  const { t } = useTranslation()

  const [isLargerThan426] = useMediaQuery('(min-width: 426px)')

  const localization = {
    supportedTitle: t(
      'pages.donation.supportedTitle',
      'Támogatott gyermekotthonok / intézmények'
    ),
    countries: {
      HU: t('pages.donation.country.hungary', 'Magyarország'),
      RO: t('pages.donation.country.romania', 'Románia'),
      SK: t('pages.donation.country.slovakia', 'Szlovákia'),
      UA: t('pages.donation.country.ukraine', 'Ukrajna'),
      DE: t('pages.donation.country.germany', 'Németország'),
      AT: t('pages.donation.country.austria', 'Ausztria'),
      XK: t('pages.donation.country.kosovo', 'Koszovó')
    }
  }

  const localizedLocations = locations.map((item) => ({
    ...item,
    country: localization.countries[item.countryCode]
  })).sort((a, b) => a.countryCode < b.countryCode ? -1 : a.countryCode > b.countryCode ? 1 : 0)

  return (
    <Grid
      gap={8}
      color='black'
      align='center'
      margin={{ base: '10px', lg: '25px', xl: '25px 50px 25px' }}
    >
      <GridItem align='center'>
        <Heading as='h1'>{localization.supportedTitle}</Heading>
      </GridItem>
      <GridItem>
        {isLargerThan426
          ? (
            <LocationGrid locations={localizedLocations} />
            )
          : (
            <LocationAccordion locations={localizedLocations} />
            )}
      </GridItem>
    </Grid>
  )
}

export default withTracker(Institutions)
