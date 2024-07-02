import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full text-sm flex items-center justify-evenly border-t border-gray-300 dark:border-gray-600 ">
      <div className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] flex items-center justify-between my-1">
        <span className="dark:text-gray-400">Adam Shelley</span>
        <Link
          href="https://github.com/AdamShelley"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github link"
        >
          <Github
            size={40}
            className="text-gray-500 dark:text-gray-400 hover:dark:text-gray-300 transition-all ease-in rounded-full p-2"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
