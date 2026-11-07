import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./SlideShow.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { getFeaturedPosts } from "../lib/wordpress";
import useLiveContent from "./useLiveContent";

/**
 * The width the carousel is shown at, so the browser picks the right version
 * from `srcSet`: beside the hero text from 992px (6 of 11 columns of the
 * 1250px container), full width below.
 */
const SLIDE_SIZES = "(min-width: 1250px) 640px, (min-width: 992px) 52vw, 100vw";

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
      {slides.map(({ img, srcSet, backdrop, alt, link }, idx) => (
        <SwiperSlide key={link ?? idx}>
          <a
            className="slide"
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{
              "--slide-image": `url(${JSON.stringify(backdrop ?? img)})`,
            }}
          >
            <img
              className="slide-image"
              src={img}
              srcSet={srcSet}
              sizes={srcSet ? SLIDE_SIZES : undefined}
              alt={alt ?? ""}
              loading={idx === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideShow;
