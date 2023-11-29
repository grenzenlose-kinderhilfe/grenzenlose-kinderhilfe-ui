import { AspectRatio, Image } from '@chakra-ui/react'

const Banner = () =>
  <AspectRatio ratio={{ base: 1, md: 5 }}>
    <Image src='/assets/img/background/background-field.jpg' borderRadius={{ base: 0, md: '10px' }} alt='shoebox' objectFit='cover' />
  </AspectRatio>

export default Banner
