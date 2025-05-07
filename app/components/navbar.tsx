"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-switcher";

const NavLink = (props: React.ComponentProps<typeof Link>) => {
  const pathname = usePathname();
  const { href } = props;
  const isActive = pathname === href || pathname?.startsWith(href + "/");

  return (
    <li className="">
      <Link
        {...props}
        className={`pr-3 transition dark:text-slate-200 dark:hover:text-white ${
          isActive ? "text-zinc-500 dark:text-zinc-300/80" : ""
        }`}
      >
        {props.children}
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <div className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] flex items-center justify-start mb-10">
      <ul className="flex w-full items-center justify-between">
        <div className="flex items-center justify-center text-md">
          <NavLink href="/">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/posts">Posts</NavLink>
        </div>
        <ModeToggle />
      </ul>
    </div>
  );
};

export default Navbar;
