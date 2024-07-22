"use client";

import clsx from "clsx";
import { Check, Copy } from "lucide-react";
import React from "react";

interface ICopyToClipboard {
  children: React.ReactNode;
}

export const CopyToClipboard = ({ children }: ICopyToClipboard) => {
  const textInput = React.useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const onEnter = () => {
    setHovered(true);
  };

  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };

  const onCopy = () => {
    setCopied(true);
    if (textInput.current !== null && textInput.current.textContent !== null)
      navigator.clipboard.writeText(textInput.current.textContent);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      ref={textInput}
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
      className="relative bg-transparent "
    >
      {hovered && (
        <button
          aria-label="Copy code"
          type="button"
          style={{ right: "0.5rem", top: "-1rem" }}
          className={clsx(
            "absolute w-8 h-8 p-1 rounded-md border border-[#3B3B3E] bg-gray-700 dark:bg-[#1C1C1E] transition",
            {
              "focus:outline-none focus:border-green-400 border-green-400":
                copied,
              "hover:border-gray-500": !copied,
            }
          )}
          onClick={onCopy}
        >
          <div className="flex items-center justify-center">
            {copied ? (
              <Check size={16} className="text-green-300" />
            ) : (
              <Copy size={16} />
            )}
          </div>
        </button>
      )}
      {children}
    </div>
  );
};
