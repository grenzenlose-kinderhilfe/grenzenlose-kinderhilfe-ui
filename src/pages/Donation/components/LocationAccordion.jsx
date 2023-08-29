import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text
} from '@chakra-ui/react'
import React from 'react'

const LocationAccordion = ({ locations }) => {
  const countries = locations.reduce(
    (a, { country, countryCode }) =>
      Object.assign(a, {
        [countryCode]: country
      }),
    {}
  )

  return (
    <Accordion allowToggle>
      {Object.keys(countries).map((item, idx) => (
        <AccordionItem key={`country-${idx}`}>
          <AccordionButton
            mb={2}
            backgroundColor='primary.blue'
            borderRadius='10px'
            _hover={{ bg: 'teal', borderRadius: '10px' }}
            _expanded={{ bg: 'primary.blue', borderRadius: '10px' }}
          >
            <Flex gap={2} alignItems='center' color='white'>
              <Flex>{countries[item]}</Flex>
            </Flex>
            <AccordionButton />
          </AccordionButton>
          <AccordionPanel>
            <Flex flexDirection='column' gap={3}>
              {locations
                .filter((location) => location.countryCode === item)
                .map((location, idx) => (
                  <Flex
                    p='2px'
                    key={`country-${item}-${idx}`}
                    border='1px solid black'
                    borderRadius='10px'
                    justifyContent='center'
                  >
                    <Text fontWeight='700'>
                      {location.name}, {location.place}
                    </Text>
                  </Flex>
                ))}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default LocationAccordion
