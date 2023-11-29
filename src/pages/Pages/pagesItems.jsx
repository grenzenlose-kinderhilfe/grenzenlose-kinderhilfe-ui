import React from 'react'
import { Trans } from 'react-i18next'

const pageItems = [
  {
    isExternal: true,
    title: <Trans i18nKey='pages.pagesTitle.rollingKids'>Rolling Kids</Trans>,
    url: 'https://rollingkids.eu/',
    backgroundImage: '/assets/img/pages/rolling-kids.jpg'
  },
  {
    title: <Trans i18nKey='pages.pagesTitle.shoeBox'>Cipősdoboz</Trans>,
    url: '/pages/shoebox',
    backgroundImage: '/assets/img/pages/rolling-kids.jpg'
  }
]

export default pageItems
