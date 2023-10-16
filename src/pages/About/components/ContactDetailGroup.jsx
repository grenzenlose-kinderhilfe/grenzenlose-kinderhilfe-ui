import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

import ContactDetail from './ContactDetail'

const ContactDetailGroup = () => {
  const { t } = useTranslation()

  const localization = {
    foundingDocument: t('pages.aboutUs.foundingDocument', 'Alapitó okirat'),
    founder: t('pages.aboutUs.founder', 'Alapító'),
    foundationChairman: t(
      'pages.aboutUs.foundationChairman',
      'Alapítvány kuratórium elnök'
    ),
    taxNumber: t('pages.aboutUs.taxNumber', 'Adószám')
  }

  const documents = [
    {
      name: localization.foundingDocument,
      links: [
        'https://grenzenlose-kinderhilfe.com/wp-content/uploads/2021/07/Határtalan-segítség-alapítvány.doc',
        'https://grenzenlose-kinderhilfe.com/wp-content/uploads/2021/07/HATÁRTALAN-SEGÍTSÉG-egyéb-1.doc'
      ]
    }
  ]

  const bankDetails = [
    ['Bank', 'Erste Bank Hungary Zrt, H-1138 Budapest, Népfürdő utca 24-26'],
    ['SWIFT-Code', 'GIBA HUHB'],
    ['IBAN/BIC', 'HU 1611600006 00000000 83451166 11600006 00000000 83451166'],
    [
      'TWINT-Option',
      '+41784063331 János Mester, Gründer mester.jnos@gmail.com'
    ]
  ]

  return (
    <Flex
      justifyContent='center'
      flexDirection='column'
      maxWidth='500px'
    >
      <ContactDetail
        title='Kocsik Enikő'
        subtitle={localization.foundationChairman}
        phone='36205919590'
      />
      <ContactDetail
        title='Mester János'
        subtitle={localization.founder}
        phone='41784063331'
      />
      <ContactDetail
        title='Határtalan Segítség Alapítvány'
        address='4405 Nyíregyháza, Molnár utca 26'
        email='hatartalansegitsegalapitvany@gmail.com'
        taxNumber={`${localization.taxNumber}: 19102186115`}
        documents={documents}
      />
      <ContactDetail details={bankDetails} />
    </Flex>
  )
}

export default ContactDetailGroup
