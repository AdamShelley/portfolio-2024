"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
};

const ClickableImage = ({ src, alt, width, height, fill }: Props) => {
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
          className="rounded-lg cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-40 "
          onClick={() => setIsOpen(false)}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", zIndex: 999 }}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="fixed top-4 right-4 p-2 text-white bg-black/90 rounded-full z-50"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <div className="z-50 flex items-center justify-center p-4 w-full h-full">
            <div className="relative max-w-[80vw] max-h-[80vh] overflow-hidden align-self-center">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority
                sizes="70vw"
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClickableImage;
