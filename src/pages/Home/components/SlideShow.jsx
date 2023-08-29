import { Flex, Image, Link, Spinner } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import WordpressAPI from '../../../api/wordpress'

const STATUS_INIT = 'init'
const STATUS_LOADING = 'loading'
const STATUS_DONE = 'done'

const SlideShow = () => {
  const [slides, setSlides] = React.useState([])
  const [status, setStatus] = React.useState(STATUS_INIT)

  const { i18n } = useTranslation()

  React.useEffect(() => {
    const wordpress = new WordpressAPI()

    const fetchFeaturedImages = async () => {
      setStatus(STATUS_LOADING)

      try {
        const slides = await wordpress.getFeaturedPosts(i18n.language)
        setSlides(slides)
      } catch (e) {
        console.error(e)
      } finally {
        setStatus(STATUS_DONE)
      }
    }

    if (status === STATUS_INIT) {
      fetchFeaturedImages()
    }
  }, [slides, setSlides, i18n, status, setStatus])

  const getSlides = () =>
    slides.map(({ img, alt, link }, idx) => (
      <Link isExternal key={`slide-${idx}`} href={link}>
        <Image fit='contain' src={img} alt={alt} maxH='750px' />
      </Link>
    ))

  return status === 'loading'
    ? (
      <Flex justifyContent='center'>
        <Spinner />
      </Flex>
      )
    : (
      <Swiper
        spaceBetween={50}
        centeredSlides
        autoplay={{
          delay: 8000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay, Pagination]}
      >
        {getSlides().map((slide, idx) => (
          <SwiperSlide key={`slide-${idx}`}>
            <Flex justifyContent='center'>{slide}</Flex>
          </SwiperSlide>
        ))}
      </Swiper>
      )
}

export default SlideShow
