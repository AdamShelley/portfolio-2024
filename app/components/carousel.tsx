"use client";

import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type Props = {
  images: { path: string; caption?: string }[];
  videoArray?: { path: string; caption?: string }[];
};

export function CarouselComponent({ images, videoArray }: Props) {
  // Set a fixed dimension for visual media displayed in the carousel
  const hasContent = images.length > 0 || (videoArray && videoArray.length > 0);
  const mediaWidth = 300; // Adjust as needed
  const mediaHeight = 200; // Adjust as needed

  return (
    <div className="flex justify-center items-center w-full">
      <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg justify-center">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={`image-${index}`}>
              <Card className="border-none bg-transparent ">
                <CardContent className="flex items-center justify-center ">
                  <Image
                    src={image.path}
                    alt={`Carousel Image ${index}`}
                    width={mediaWidth}
                    height={mediaHeight}
                    className=""
                  />
                </CardContent>
                <CardFooter className="flex items-center justify-center">
                  <span className="text-md font-base text-primary">
                    {image?.caption}
                  </span>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
          {videoArray?.map((video, index) => (
            <CarouselItem key={`video-${index}`}>
              <Card className="border-none bg-transparent">
                <CardContent className="flex items-center justify-center p-2">
                  <video width={mediaWidth} autoPlay loop muted>
                    <source src={video.path} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </CardContent>
                <CardFooter className="flex items-center justify-center">
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
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </div>
  );
}
