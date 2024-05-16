"use client";

import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import Image from "next/image";

type Props = {
  images: { path: string; caption?: string }[];
  videoArray?: { path: string; caption?: string }[];
};

export function CarouselComponent({ images, videoArray }: Props) {
  const hasContent = images.length > 0 || (videoArray && videoArray.length > 0);
  const mediaWidth = 250;
  const mediaHeight = 200;

  return (
    <div className="flex justify-center items-center w-full ">
      <Carousel className="w-full md:max-w-md lg:max-w-lg justify-center ">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={`image-${index}`}>
              <Card className="border-none bg-transparent shadow-none">
                <CardContent className="flex items-center justify-center p-0 ">
                  <Image
                    src={image.path}
                    alt={`Carousel Image ${index}`}
                    width={mediaWidth}
                    height={mediaHeight}
                    className="mb-0 shadow-md"
                  />
                </CardContent>
                <CardFooter className="flex items-center justify-center pt-5 mx-7">
                  <span className="text-md font-base text-primary">
                    {image?.caption}
                  </span>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
          {videoArray?.map((video, index) => (
            <CarouselItem key={`video-${index}`}>
              <Card className="border-none bg-transparent shadow-none">
                <CardContent className="flex items-center justify-center p-0">
                  <video
                    width={mediaWidth}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="shadow-md mb-0"
                  >
                    <source src={video.path} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </CardContent>
                <CardFooter className="flex items-center justify-center pt-5 mx-7">
                  <span className="text-md font-base text-primary">
                    {video?.caption}
                  </span>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {hasContent && (
          <>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
            <CarouselDots className="-mt-5" />
          </>
        )}
      </Carousel>
    </div>
  );
}
