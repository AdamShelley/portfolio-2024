"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

type Props = {
  images: string[];
  videoArray?: string[];
};

export const CarouselComponent = ({ images, videoArray }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="mt-10 mx-5">
      {images.map((img: any) => (
        <div key={img} className="flex justify-center items-center h-[40rem]">
          <img
            src={img}
            alt="Carousel Image"
            className="h-full w-auto mx-auto"
          />
        </div>
      ))}
      {videoArray?.map((vid: any) => (
        <div key={vid} className="flex justify-center items-center h-[40rem]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-auto mx-auto"
          >
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </Slider>
  );
};
