import {
  AspectRatio,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text
} from '@chakra-ui/react'
import React from 'react'

const MediaVideoItem = ({
  heading,
  content,
  source,
  sourceUrl,
  videoEmbedUrl
}) => (
  <Grid
    templateColumns={{ base: '1fr', xl: '1fr 1fr' }}
    borderRadius='10px'
    backgroundColor='primary.blue'
    color='white'
  >
    <GridItem align='center' p='25px'>
      <Flex
        gap={6}
        align='center'
        height='100%'
        flexDirection='column'
        justifyContent='center'
      >
        <Heading as='h1' fontSize='32px' maxW='600px'>
          {heading}
        </Heading>
        {content && (
          <Text maxW='800px' fontStyle='italic'>
            "
            {content}
            "
          </Text>
        )}
        <Flex>
          <Link isExternal href={sourceUrl}>
            <Text>- {source}</Text>
          </Link>
        </Flex>
      </Flex>
    </GridItem>
    <GridItem
      align='center'
      display='flex'
      justifyContent='center'
      p={{ base: '0 10px 10px', md: '0 25px 25px', xl: '25px' }}
    >
      <AspectRatio width='100%' ratio={16 / 9}>
        <iframe
          title='Határtalan Segítség Alapítvány'
          width='1268'
          height='713'
          src={videoEmbedUrl}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        />
      </AspectRatio>
    </GridItem>
  </Grid>
)

export default MediaVideoItem
