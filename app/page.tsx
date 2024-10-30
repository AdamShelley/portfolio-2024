import Link from "next/link";
import BlogLinks from "./(bloglinks)/bloglinks";

export default function Home() {
  return (
    <main className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] mt-10 text-primary translate-x-[-0.5rem] flex flex-col orchestration">
      <div
        className="p-3 group flex flex-col w-full rounded-md  transition duration-200"
        style={{ "--stagger": 1 } as React.CSSProperties}
      >
        <h1 className="text-lg dark:text-gray-400 mb-5">About</h1>
        <p className="text-lg text-left  text-gray-800 dark:text-gray-300 leading-7 ">
          My name is{" "}
          <span className="italic font-medium underline decoration-2 decoration-slate-400 underline-offset-[5px]">
            Adam
          </span>{" "}
          and I am a developer from the UK. I am currently working as a{" "}
          <span className="italic font-medium underline decoration-2 decoration-slate-400 underline-offset-[5px]">
            Web Developer
          </span>{" "}
          for a leading Energy Consultancy based in Warwickshire.
        </p>

        <p className="text-lg text-left  text-gray-800 dark:text-gray-300 leading-7 mt-8 ">
          I am open to opportunities and excited to explore new challenges.
        </p>
      </div>

      <Link
        href="/projects"
        style={{ "--stagger": 2 } as React.CSSProperties}
        className="mt-10"
      >
        <div className="p-3 group flex flex-col w-full hover-bg rounded-sm cursor-pointer transition duration-200">
          <h3 className="text-lg underline underline-offset-4 decoration-1 dark:decoration-slate-200 transition  dark:text-slate-200  dark:hover:text-white">
            Projects
          </h3>
          <p className="text-md text-gray-800 dark:text-gray-400  mt-1">
            Check out what I have been working on
          </p>
        </div>
      </Link>
      <Link href="/contact" style={{ "--stagger": 3 } as React.CSSProperties}>
        <div className="p-3 group flex flex-col w-full hover-bg rounded-sm cursor-pointer transition duration-200 mt-2">
          <h3 className="text-lg  underline underline-offset-4 decoration-1 dark:decoration-slate-200 transition  dark:text-slate-200  dark:hover:text-white ">
            Contact
          </h3>
          <p className="text-md text-gray-800 dark:text-gray-400 g mt-1">
            Send me a message
          </p>
        </div>
      </Link>

      <div className="mt-20" style={{ "--stagger": 4 } as React.CSSProperties}>
        <BlogLinks />
      </div>

      <div
        className="p-3 mt-10"
        style={{ "--stagger": 6 } as React.CSSProperties}
      >
        <p className="text-md dark:text-gray-300">
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
