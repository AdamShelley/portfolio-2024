import { Link } from "next-view-transitions";
import React from "react";
import { ModeToggle } from "./mode-switcher";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] flex justify-between mb-10">
      <div className="flex-col w-1/2">
        <Link href="/">
          <h1 className="text-[1.1rem] font-medium">Adam Shelley</h1>
        </Link>
        <h2 className="text-md text-gray-500 dark:text-gray-400 font-medium ">
          Web Developer
        </h2>
      </div>
    </div>
  );
};

export default Header;
