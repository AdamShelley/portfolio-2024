import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="m-2 fixed bottom-0 right-0 text-sm flex flex-col items-center z-full">
      <Link
        href="https://github.com/AdamShelley"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github link"
      >
        <Github
          size={40}
          className="mb-2 hover:text-gray-900 hover:bg-gray-300 transition-all ease-in rounded-full p-2"
        />
      </Link>
    </div>
  );
};

export default Footer;
