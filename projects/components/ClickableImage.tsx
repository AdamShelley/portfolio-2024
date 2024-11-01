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
    <div className="relative inline-block">
      {/* Thumbnail */}
      <div className="relative">
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
          className="fixed top-0 left-0 w-full h-full z-[100] "
          onClick={() => setIsOpen(false)}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="fixed top-4 right-4 p-2 text-white bg-black/50 rounded-full z-[60] hover:bg-black/70"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <div className=" w-full h-full z-50 flex items-center justify-center p-4">
            <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] overflow-hidden align-self-center">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority
                sizes="90vw"
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
