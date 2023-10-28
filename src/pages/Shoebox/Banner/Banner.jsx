import { AspectRatio, Image } from '@chakra-ui/react'

import backgroundImage from '../../../assets/img/background/background-field.jpg'

const Banner = () =>
  <AspectRatio ratio={{ base: 1, md: 5 }}>
    <Image src={backgroundImage} borderRadius={{ base: 0, md: '10px' }} alt='shoebox' objectFit='cover' />
  </AspectRatio>

export default Banner
