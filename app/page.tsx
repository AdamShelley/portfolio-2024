import Link from "next/link";
import BlogLinks from "./(bloglinks)/bloglinks";

export default function Home() {
  return (
    <main className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] mt-10 text-primary translate-x-[-0.5rem] flex flex-col orchestration">
      <div className="p-3 group flex flex-col w-full rounded-md  transition duration-200">
        <h1 className="text-lg underline underline-offset-4 decoration-1 decoration-slate-600 mb-3">
          About
        </h1>
        <p className="text-lg text-left  text-gray-800 dark:text-gray-300 leading-7 ">
          My name is <span className="italic">Adam</span>, and I am a developer
          from the UK. I am currently working as a
          <span className="italic">Web Developer</span> for a leading Energy
          Consultancy based in Warwickshire.
        </p>

        <p className="text-lg text-left  text-gray-800 dark:text-gray-300 leading-7 mt-8 ">
          I am open to opportunities and excited to explore new challenges.
        </p>
      </div>

      <Link
        href="/projects"
        style={{ "--stagger": 1 } as React.CSSProperties}
        className="mt-10"
      >
        <div className="p-3 group flex flex-col w-full hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-100 dark:hover:from-gray-800 dark:hover:to-gray-90 rounded-md  cursor-pointer transition duration-200">
          <h3 className="text-lg underline underline-offset-4 decoration-1 decoration-slate-600 transition group-hover:decoration-slate-400 dark:text-slate-200  dark:hover:text-white ">
            Projects
          </h3>
          <p className="text-lg text-gray-800 dark:text-gray-400  mt-1">
            Check out what I have been working on
          </p>
        </div>
      </Link>
      {/* <Link href="/about" style={{ "--stagger": 2 } as React.CSSProperties}>
        <div className="p-3 group flex flex-col w-full hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-300 dark:hover:from-gray-800 dark:hover:to-gray-90 rounded-md  cursor-pointer transition duration-200">
          <h3 className="text-lg  underline underline-offset-4 decoration-1 decoration-slate-600 transition group-hover:decoration-slate-400 dark:text-slate-200  dark:hover:text-white group-hover:text-slate-100">
            About
          </h3>
          <p className="text-lg text-gray-800 dark:text-gray-400 group-hover:text-slate-100 mt-1">
            Who am I?
          </p>
        </div>
      </Link> */}
      <Link href="/contact" style={{ "--stagger": 3 } as React.CSSProperties}>
        <div className="p-3 group flex flex-col w-full hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-100 dark:hover:from-gray-800 dark:hover:to-gray-90 rounded-md  cursor-pointer transition duration-200">
          <h3 className="text-lg  underline underline-offset-4 decoration-1 decoration-slate-600 transition group-hover:decoration-slate-400 dark:text-slate-200  dark:hover:text-white ">
            Contact
          </h3>
          <p className="text-lg text-gray-800 dark:text-gray-400 g mt-1">
            Send me a message
          </p>
        </div>
      </Link>

      <div className="mt-10" style={{ "--stagger": 4 } as React.CSSProperties}>
        <BlogLinks />
      </div>

      <div className="p-3 mt-10">
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
