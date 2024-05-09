import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-switcher";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-[80vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] flex justify-between mb-20">
      <div className="flex-col">
        <Link href="/">
          <h1 className="text-base font-medium">Adam Shelley</h1>
        </Link>
        <h2 className="text-base text-gray-400 font-medium ">Web Developer</h2>
      </div>
      <ModeToggle />
    </div>
  );
};

export default Header;
