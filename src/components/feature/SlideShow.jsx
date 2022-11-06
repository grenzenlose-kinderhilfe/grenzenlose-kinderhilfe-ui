/* eslint-disable import/no-unresolved */
import { AspectRatio, Flex } from "@chakra-ui/react";
import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const SlideShow = ({ slides }) => (
  <Swiper
    spaceBetween={50}
    centeredSlides={true}
    autoplay={{
      delay: 8000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    modules={[Autoplay, Pagination]}
  >
    {slides.map((slide, idx) => (
      <SwiperSlide key={`slide-${idx}`}>
        <Flex justifyContent="center">
          <AspectRatio
            minW={{ base: "320px", md: "768px", lg: "1024px", xl: "1440px" }}
            ratio={16 / 9}
          >
            {slide}
          </AspectRatio>
        </Flex>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default SlideShow;
