import { Grid, GridItem, Link } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import PageImage from './PageImage/PageImage'
import pageItems from './pagesItems'
import withTracker from '../../utils/tracking'

const Pages = () => (
  <Grid
    gap={8}
    color='black'
    m={{
      base: '25px',
      lg: '50px 100px 50px',
      xl: '50px 250px 50px',
      '2xl': '50px 500px 50px'
    }}
    templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
  >
    {pageItems.map(({ title, backgroundImage, url, isExternal }, idx) => (
      <GridItem key={`page-${idx}`}>
        {isExternal
          ? (
            <a href={url} target='_blank' rel='noreferrer'>
              <PageImage title={title} backgroundImage={backgroundImage} />
            </a>
            )
          : (
            <Link as={RouterLink} to={url}>
              <PageImage title={title} backgroundImage={backgroundImage} />
            </Link>
            )}
      </GridItem>
    ))}
  </Grid>
)

export default withTracker(Pages)
