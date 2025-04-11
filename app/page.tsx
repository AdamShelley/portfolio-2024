import { Link } from "next-view-transitions";
import BlogLinks from "./(bloglinks)/bloglinks";

export default function Home() {
  return (
    <main className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] mt-10 text-primary translate-x-[-0.5rem] flex flex-col orchestration">
      <div
        className="p-3 group flex flex-col w-full rounded-md  transition duration-200"
        style={{ "--stagger": 1 } as React.CSSProperties}
      >
        <p className="text-[15px] text-left  text-gray-800 dark:text-gray-300 leading-8 ">
          My name is <span className="font-semibold ">Adam</span> and I am a Web
          Developer from the UK. I am currently working for a leading{" "}
          <span className="underline underline-offset-4 decoration-zinc-400">
            Energy Consultancy
          </span>{" "}
          based in the Midlands, developing products and tools to help the
          United Kingdom hit Net Zero Carbon emissions target by 2050.
        </p>

        {/* <p className="text-[15px] text-left  text-gray-800 dark:text-gray-300 leading-8 mt-8 ">
          During my time, I have developed internal dashboards and custom CRM's. 
        </p> */}

        <p className="text-[15px] text-left  text-gray-800 dark:text-gray-300 leading-7 mt-8 ">
          I am open to opportunities and excited to explore new challenges.
        </p>
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
