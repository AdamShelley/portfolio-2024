import { Link } from "next-view-transitions";

const Navbar = () => {
  return (
    <div>
      <Link
        href="/projects"
        style={{ "--stagger": 2 } as React.CSSProperties}
        className="mt-10"
      >
        <div className="p-3 group flex flex-col w-full hover-bg rounded-sm cursor-pointer transition duration-200">
          <h3 className="underline underline-offset-4 decoration-1 dark:decoration-slate-200 transition  dark:text-slate-200  dark:hover:text-white">
            Projects
          </h3>
          <p className="text-md text-gray-800 dark:text-gray-400  mt-1">
            Check out what I have been working on
          </p>
        </div>
      </Link>
      <Link href="/contact" style={{ "--stagger": 3 } as React.CSSProperties}>
        <div className="p-3 group flex flex-col w-full hover-bg rounded-sm cursor-pointer transition duration-200 mt-2 hover-bg">
          <h3 className="text-lg  underline underline-offset-4 decoration-1 dark:decoration-slate-200 transition  dark:text-slate-200  dark:hover:text-white ">
            Contact
          </h3>
          <p className="text-md text-gray-800 dark:text-gray-400 g mt-1">
            Send me a message
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
