import { Image } from "@chakra-ui/react";
import React from "react";

const germanLocaleSlides = () => [
  {
    img: require("../../assets/img/slideshow/ukraine2022-pray-for-peace.jpg"),
    alt: "Ukraine 2022 Pray For Peace DE",
  },
  {
    img: require("../../assets/img/slideshow/ukraine2022-koszonjuk.jpg"),
    alt: "Ukraine 2022 Thank You HU",
  },
  {
    img: require("../../assets/img/slideshow/ukraine2022-dankesbrief.jpg"),
    alt: "Ukraine 2022 Dankesbrief",
  },
];

export const getSlides = () => {
  const sources = germanLocaleSlides();

  return sources.map(({ img, alt }, idx) => (
    <Image fit="contain" key={`slide-${idx}`} src={img} alt={alt} />
  ));
};
