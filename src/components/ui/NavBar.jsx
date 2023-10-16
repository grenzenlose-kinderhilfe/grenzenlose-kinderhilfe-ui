import { Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'

import NavDrawer from './NavDrawer'
import {
  MenuLanguageSwitcher,
  MenuLinks,
  MenuLogo,
  MenuToggle
} from './NavMenu'

const NavBar = ({ routes }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <Flex
      as='nav'
      top={0}
      width='100%'
      align='center'
      position='fixed'
      justify='space-between'
      padding='1rem'
      bg='primary.blue'
      color='primary.white'
      zIndex='100'
    >
      <Flex minWidth='15%' maxWidth='20%'>
        <MenuLogo />
      </Flex>
      <Flex display={{ base: 'flex', lg: 'none' }} onClick={onOpen}>
        <MenuToggle isOpen={isOpen} />
      </Flex>
      <Flex display={{ base: 'none', lg: 'flex' }}>
        <MenuLinks isOpen={isOpen} routes={routes} />
      </Flex>
      <Flex display={{ base: 'none', lg: 'flex' }}>
        <MenuLanguageSwitcher />
      </Flex>
      <NavDrawer isOpen={isOpen} onClose={onClose} routes={routes} />
    </Flex>
  )
}

export default NavBar
