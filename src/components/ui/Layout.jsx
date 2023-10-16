import { Flex } from '@chakra-ui/react'
import React from 'react'

import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ({ routes, children }) => (
  <Flex flexDirection='column'>
    <NavBar routes={routes} />
    <Flex paddingTop='5rem'>
      {children}
    </Flex>
    <Footer />
  </Flex>
)

export default Layout
