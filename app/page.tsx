import Link from "next/link";
import BlogLinks from "./(bloglinks)/bloglinks";

export default function Home() {
  return (
    <main className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] mt-20 text-primary translate-x-[-0.5rem] flex flex-col orchestration">
      <Link href="/projects" style={{ "--stagger": 1 } as React.CSSProperties}>
        <div className="p-3 group flex flex-col w-full hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-300 dark:hover:from-gray-800 dark:hover:to-gray-90 rounded-md  cursor-pointer transition duration-200">
          <h3 className="text-base text-primary dark:hover:text-white group-hover:text-slate-100">
            Projects
          </h3>
          <p className="text-md text-gray-800 dark:text-gray-400 group-hover:text-slate-100 mt-1">
            Check out what I have been working on
          </p>
        </div>
      </Link>
      <Link href="/about" style={{ "--stagger": 2 } as React.CSSProperties}>
        <div className="p-3 group flex flex-col w-full hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-300 dark:hover:from-gray-800 dark:hover:to-gray-90 rounded-md  cursor-pointer transition duration-200">
          <h3 className="text-base text-primary dark:hover:text-white group-hover:text-slate-100">
            About
          </h3>
          <p className="text-md text-gray-800 dark:text-gray-400 group-hover:text-slate-100 mt-1">
            Who am I?
          </p>
        </div>
      </Link>
      <Link href="/contact" style={{ "--stagger": 3 } as React.CSSProperties}>
        <div className="p-3 group flex flex-col w-full hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-300 dark:hover:from-gray-800 dark:hover:to-gray-90 rounded-md  cursor-pointer transition duration-200">
          <h3 className="text-base text-primary dark:hover:text-white group-hover:text-slate-100">
            Contact
          </h3>
          <p className="text-md text-gray-800 dark:text-gray-400 group-hover:text-slate-100 mt-1">
            Send me a message
          </p>
        </div>
      </Link>

      <div className="mt-10" style={{ "--stagger": 4 } as React.CSSProperties}>
        <h2 className="p-3 font-normal text-md dark:text-slate-300 ">Posts</h2>
        <BlogLinks />
      </div>

      <div className="p-3 mt-20">
        <p className="text-md ">
          You can see more of my work on{" "}
          <Link
            href="https://github.com/AdamShelley"
            className="text-slate-500 font-medium dark:text-slate-300 "
            rel="noopener noreferrer"
            target="_blank"
          >
            Github.
          </Link>
        </p>
      </div>
    </main>
  );
}
