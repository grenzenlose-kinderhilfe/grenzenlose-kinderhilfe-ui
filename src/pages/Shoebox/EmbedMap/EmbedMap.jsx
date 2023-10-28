import { AspectRatio, Box } from '@chakra-ui/react'

const EmbedMap = () => {
  return (
    <AspectRatio maxWidth={{ base: '100%', md: '95%' }} ratio={{ base: 1, md: 3 }}>
      <Box
        as='iframe'
        src='https://www.google.com/maps/d/u/0/embed?mid=1etvEUuIIc54Y88TmwCgbF7aihOpgo9U&ehbc=2E312F&noprof=1'
        alt='locations'
      />
    </AspectRatio>
  )
}

export default EmbedMap
