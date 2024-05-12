"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

type Props = {
  images: string[];
};

export const CarouselComponent = ({ images }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  console.log(images);

  return (
    <Slider {...settings}>
      {images.map((img: any) => (
        <div key={img}>
          <img
            src={img}
            alt="Carousel Image"
            style={{ width: "50%", height: "auto", display: "block" }}
          />
          {/* <Image src={"/assets/LangAI/LangAI2.png"} alt="carousel-image" fill /> */}
        </div>
      ))}
    </Slider>
  );
};
