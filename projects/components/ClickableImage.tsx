"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const ClickableImage = ({ src, alt, width, height }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when modal is open
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
    <>
      {/* Thumbnail */}
      <div className="relative inline-block">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg cursor-pointer transition-all duration-300"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Full screen image container */}
          <div className="fixed inset-0 z-50">
            <button
              onClick={() => setIsOpen(false)}
              className="fixed top-6 right-6 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors z-50"
              aria-label="Close image"
            >
              <X size={24} />
            </button>

            <div className="w-full h-full p-4">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                priority
                quality={100}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClickableImage;
