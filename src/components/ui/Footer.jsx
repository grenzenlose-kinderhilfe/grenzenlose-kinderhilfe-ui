import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Flex
      width='100%'
      padding='0.5rem'
      marginTop='auto'
      justifyContent='center'
      bg='primary.blue'
      color='primary.white'
    >
      <Text>Copyright {currentYear} Zsolt Mester</Text>
    </Flex>
  )
}

export default Footer
