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
    speed: 3000,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="mt-10">
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
      {videoArray?.map((vid: any) => (
        <video
          autoPlay
          muted
          loop
          playsInline
          key={vid}
          className="rounded-md max-h-[600px]"
          style={{ maxHeight: "50%", display: "block" }}
        >
          <source
            src={`../../assets/LangAI/voting.mp4`}
            type="video/mp4"
            style={{
              maxHeight: "50%",
              width: "50%",
              display: "block",
            }}
          />
          Your browser does not support the video tag.
        </video>
      ))}
    </Slider>
  );
};
