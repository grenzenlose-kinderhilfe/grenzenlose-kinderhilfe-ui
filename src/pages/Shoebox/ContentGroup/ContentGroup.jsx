import {
  AspectRatio,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text
} from '@chakra-ui/react'
import React from 'react'

const ContentGroup = () => (
  <Grid
    margin={2}
    padding={2}
    templateColumns={{ base: '1fr', xl: '2fr 3fr' }}
    borderRadius='10px'
    backgroundColor='primary.blue'
    color='white'
  >
    <GridItem align='center' p='25px'>
      <Flex
        gap={6}
        align='center'
        minHeight={{ base: '250px', xl: '450px' }}
        height='100%'
        flexDirection='column'
        justifyContent='center'
      >
        <Heading as='h1' fontSize='32px' maxW='600px'>
          Legyen minden karacsony boldog
        </Heading>
        <Text maxW='800px' fontStyle='italic'>
          "
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          "
        </Text>
      </Flex>
    </GridItem>
    <GridItem
      align='center'
      display='flex'
      justifyContent='center'
      p={{ base: '0 10px 10px', md: '0 25px 25px', xl: '25px' }}
    >
      <AspectRatio width='100%' ratio={{ base: 7 / 4 }}>
        <Image src='/assets/img/pages/shoebox.png' fit='cover' alt='shoebox-logo' />
      </AspectRatio>
    </GridItem>
  </Grid>
)

export default ContentGroup
