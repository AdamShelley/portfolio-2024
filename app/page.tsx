import Link from "next/link";

export default function Home() {
  return (
    <main className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] mt-20 text-primary translate-x-[-0.5rem] flex flex-col min-h-screen">
      <Link href="/projects">
        <div className="p-3 group flex flex-col w-full hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-90 rounded-md  cursor-pointer transition duration-200">
          <h3 className="text-base text-primary dark:hover:text-white group-hover:text-slate-100">
            Projects
          </h3>
          <p className="text-md text-gray-800 dark:text-gray-300 group-hover:text-slate-100 mt-1">
            Check out what I have been working on
          </p>
        </div>
      </Link>
      <Link href="/about">
        <div className="p-3 group flex flex-col w-full hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-90 rounded-md  cursor-pointer transition duration-200">
          <h3 className="text-base text-primary dark:hover:text-white group-hover:text-slate-100">
            About
          </h3>
          <p className="text-md text-gray-800 dark:text-gray-300 group-hover:text-slate-100 mt-1">
            Who am I?
          </p>
        </div>
      </Link>
      <Link href="/contact">
        <div className="p-3 group flex flex-col w-full hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-90 rounded-md  cursor-pointer transition duration-200">
          <h3 className="text-base text-primary dark:hover:text-white group-hover:text-slate-100">
            Contact
          </h3>
          <p className="text-md text-gray-800 dark:text-gray-300 group-hover:text-slate-100 mt-1">
            Send me a message
          </p>
        </div>
      </Link>

      <div className="p-3 mt-auto">
        <p className="text-md ">
          You can see more of my work on{" "}
          <Link href="" className="text-slate-300 ">
            Github.
          </Link>
        </p>
      </div>
    </main>
  );
}
