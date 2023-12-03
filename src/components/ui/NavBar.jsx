import { Flex, useDisclosure, useMediaQuery } from '@chakra-ui/react'
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
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')

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
      <Flex display={isLargerThan1200 ? 'none' : 'flex'} onClick={onOpen}>
        <MenuToggle isOpen={isOpen} />
      </Flex>
      <Flex display={isLargerThan1200 ? 'flex' : 'none'}>
        <MenuLinks isOpen={isOpen} routes={routes} />
      </Flex>
      <Flex display={isLargerThan1200 ? 'flex' : 'none'}>
        <MenuLanguageSwitcher />
      </Flex>
      <NavDrawer isOpen={isOpen} onClose={onClose} routes={routes} />
    </Flex>
  )
}

export default NavBar
