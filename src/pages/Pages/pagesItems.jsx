import React from 'react'
import { Trans } from 'react-i18next'

import rollingKidsImage from '../../assets/img/pages/rolling-kids.jpg'

const pageItems = [
  {
    title: <Trans i18nKey='pages.pagesTitle.ukraine2022'>Ukraine 2022</Trans>,
    url: '/pages/ukraine-2022',
    backgroundImage: rollingKidsImage
  },
  {
    isExternal: true,
    title: 'Rolling Kids',
    url: 'https://rollingkids.eu/',
    backgroundImage: rollingKidsImage
  },
  {
    title: <Trans i18nKey='pages.pagesTitle.highwayCodePark'>Kresz Park</Trans>,
    url: '/pages/kresz-park',
    backgroundImage: rollingKidsImage
  },
  {
    title: <Trans i18nKey='pages.pagesTitle.shoeBox'>Cipősdoboz</Trans>,
    url: '/pages/ciposdoboz',
    backgroundImage: rollingKidsImage
  }
]

export default pageItems
