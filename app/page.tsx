import Link from "next/link";

export default function Home() {
  return (
    <main className="w-[80vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw]">
      <Link href="/projects">
        <div className="flex flex-col w-full hover:bg-gray-700 rounded-md p-3 cursor-pointer">
          <h3 className="text-md">Projects</h3>
          <p className="text-sm text-gray-300">
            Check out what I have been working on
          </p>
        </div>
      </Link>
      <Link href="/about">
        <div className="flex flex-col w-full hover:bg-gray-700 rounded-md p-3 cursor-pointer">
          <h3 className="text-md">About Me</h3>
          <p className="text-sm text-gray-300">Who am I?</p>
        </div>
      </Link>
      <Link href="/contact">
        <div className="flex flex-col w-full hover:bg-gray-700 rounded-md p-3 cursor-pointer">
          <h3 className="text-md">Contact</h3>
          <p className="text-sm text-gray-300">Send me a message</p>
        </div>
      </Link>
    </main>
  );
}
