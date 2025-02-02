"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  fill?: boolean;
};

const ClickableImage = ({ src, alt, width, height, fill, caption }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="inline-block">
      {/* Thumbnail */}
      <div className="relative z-30">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg cursor-pointer mb-2"
          onClick={() => setIsOpen(true)}
        />
        <p className="text-sm font-semibold w-[100%] text-center">{caption}</p>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-40 overlay-bg"
          onClick={() => setIsOpen(false)}
        >
          <div className="z-50 flex items-center justify-center p-5 w-full h-full">
            <div className="relative max-w-[95vw] max-h-[80vh] md:max-w-[90vw] md:max-h-[70vh] align-self-center p-1 md:p-3 mt-5 not-prose">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -right-6 -top-6 z-[100] bg-black/70 hover:bg-black/90 rounded-full p-1"
                aria-label="Close"
              >
                <X size={24} color="white" />
              </button>
              <Image
                src={src}
                alt={alt}
                width={width || 100}
                height={height || 100}
                priority
                className="object-contain rounded-lg !mt-0"
                quality={100}
              />
              <p className="text-md font-semibold w-[100%] text-center mt-2">
                {caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClickableImage;
