import { Flex, Link } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Flex
      width='100%'
      fontSize='0.8rem'
      padding='0.5rem'
      marginTop='auto'
      justifyContent='center'
      bg='primary.blue'
      color='primary.white'
    >
      <Link href='https://github.com/meister245' isExternal>
        Copyright {currentYear} Zsolt Mester
      </Link>
    </Flex>
  )
}

export default Footer
