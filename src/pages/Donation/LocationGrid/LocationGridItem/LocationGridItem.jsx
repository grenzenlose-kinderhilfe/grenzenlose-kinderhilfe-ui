import { Flex, Text } from '@chakra-ui/react'
import { ReactCountryFlag } from 'react-country-flag'

const LocationGridItem = ({ countryCode, name, place }) => (
  <Flex
    gap={4}
    color='white'
    height='100%'
    alignItems='center'
    borderRadius='10px'
    backgroundColor='primary.blue'
    p='10px 10px 10px 15px'
    m={{ base: '10px', md: '5px', lg: 0 }}
  >
    <ReactCountryFlag
      svg
      countryCode={countryCode}
      style={{ width: '2em', height: '2em' }}
    />
    <Text maxWidth='400px'>
      {name}, {place}
    </Text>
  </Flex>
)

export default LocationGridItem
