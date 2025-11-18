import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-sm flex items-center justify-evenly border-t border-gray-300 dark:border-transparent ">
      <div className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] my-1">
        {/* <span className="dark:text-gray-400">Adam Shelley</span> */}
        <Link
          href="https://github.com/AdamShelley"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github link"
          className="flex items-center justify-end"
        >
          <span className="dark:text-gray-400">GitHub</span>
          <Github
            size={35}
            className="text-gray-500 dark:text-gray-400 hover:dark:text-gray-300 transition-all ease-in rounded-full p-2 pr-0"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
