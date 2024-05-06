import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-switcher";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-[80vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] flex flex-col mb-20">
      <Link href="/">
        <h1 className="text-md ">Adam Shelley</h1>
      </Link>
      <h2 className="text-md text-gray-400 ">Web Developer</h2>
    </div>
  );
};

export default Header;
