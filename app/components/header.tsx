import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex flex-col w-[50vw] mb-20">
      <Link href="/">
        <h1 className="text-md">Adam Shelley</h1>
      </Link>
      <h2 className="text-md text-gray-400">Web Developer</h2>
    </div>
  );
};

export default Header;
