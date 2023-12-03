import React from 'react'
import { Trans } from 'react-i18next'

const pageItems = [
  {
    isExternal: true,
    title: <Trans i18nKey='pages.pagesTitle.rollingKids'>Rolling Kids</Trans>,
    url: 'https://rollingkids.eu/',
    backgroundImage: '/assets/img/pages/thumbnail/rolling-kids.jpeg'
  },
  {
    title: <Trans i18nKey='pages.pagesTitle.shoeBox'>Cipősdoboz</Trans>,
    url: '/pages/shoebox',
    backgroundImage: '/assets/img/pages/thumbnail/shoebox.jpeg'
  },
  {
    title: <Trans i18nKey='pages.pagesTitle.institutions'>Intézmények</Trans>,
    url: '/pages/institutions',
    backgroundImage: '/assets/img/pages/thumbnail/institutions.jpeg'
  }
]

export default pageItems
