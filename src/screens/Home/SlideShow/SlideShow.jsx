import { Flex, Image, Link, Spinner } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { useFeaturedPosts } from "../../../hooks/useContent";

const SlideShow = () => {
  const { i18n } = useTranslation();

  const { data: slides, isPending } = useFeaturedPosts(i18n.language);

  if (isPending) {
    return (
      <Flex justifyContent="center">
        <Spinner color="primary.blue" />
      </Flex>
    );
  }

  // The blog is a separate site; if it cannot be reached the home page simply
  // carries on without the carousel.
  if (!slides?.length) return null;

  return (
    <Swiper
      spaceBetween={50}
      centeredSlides
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
    >
      {slides.map(({ img, alt, link }, idx) => (
        <SwiperSlide key={`slide-${idx}`}>
          <Flex justifyContent="center">
            <Link isExternal href={link}>
              <Image fit="contain" src={img} alt={alt} maxH="750px" />
            </Link>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideShow;
