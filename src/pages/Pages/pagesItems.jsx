import React from 'react'
import { Trans } from 'react-i18next'

import rollingKidsImage from '../../assets/img/pages/rolling-kids.jpg'

const pageItems = [
  {
    isExternal: true,
    title: <Trans i18nKey='pages.pagesTitle.rollingKids'>Rolling Kids</Trans>,
    url: 'https://rollingkids.eu/',
    backgroundImage: rollingKidsImage
  },
  {
    title: <Trans i18nKey='pages.pagesTitle.shoeBox'>Cipősdoboz</Trans>,
    url: '/pages/ciposdoboz',
    backgroundImage: rollingKidsImage
  }
]

export default pageItems
