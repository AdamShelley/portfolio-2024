import Link from "next/link";

export default function Home() {
  return (
    <main className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] mt-20 ">
      <Link href="/projects">
        <div className="py-3 flex flex-col w-full hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-90 rounded-md  cursor-pointer transition duration-200">
          <h3 className="text-base hover:text-white">Projects</h3>
          <p className="text-md text-gray-800 hover:text-white dark:text-gray-300">
            Check out what I have been working on
          </p>
        </div>
      </Link>
      <Link href="/about">
        <div className="py-3 flex flex-col w-full hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-90 rounded-md  cursor-pointer transition duration-200">
          <h3 className="text-base">About Me</h3>
          <p className="text-md text-gray-800 dark:text-gray-300">Who am I?</p>
        </div>
      </Link>
      <Link href="/contact">
        <div className="py-3 flex flex-col w-full hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-90 rounded-md  cursor-pointer transition duration-200">
          <h3 className="text-base">Contact</h3>
          <p className="text-md text-gray-800 dark:text-gray-300">
            Send me a message
          </p>
        </div>
      </Link>
    </main>
  );
}
