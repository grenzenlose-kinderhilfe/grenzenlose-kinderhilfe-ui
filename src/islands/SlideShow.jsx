import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./SlideShow.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { getFeaturedPosts } from "../lib/wordpress";
import useLiveContent from "./useLiveContent";

/** The blog's featured posts for the page's language, as a carousel. */
const SlideShow = ({ locale, initialSlides }) => {
  const { data: slides, isPending } = useLiveContent(
    () => getFeaturedPosts(locale),
    initialSlides,
  );

  if (isPending) {
    return (
      <div className="status" style={{ padding: 0 }} role="status">
        <div className="spinner spinner-sm" />
      </div>
    );
  }

  // The blog is a separate site; if it cannot be reached the home page simply
  // carries on without the carousel.
  if (!slides?.length) return null;

  return (
    <Swiper
      className="slideshow media-frame"
      spaceBetween={0}
      autoplay={{ delay: 8000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
    >
      {slides.map(({ img, alt, link }, idx) => (
        <SwiperSlide key={link ?? idx}>
          <a
            className="slide"
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{ "--slide-image": `url(${JSON.stringify(img)})` }}
          >
            <img
              className="slide-image"
              src={img}
              alt={alt ?? ""}
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideShow;
