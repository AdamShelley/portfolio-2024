import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] prose dark:prose-invert 
    prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-base
    prose-h2:text-base prose-h3:text-sm prose-h4:text-sm prose-h5:text-xs prose-h6:text-xs 
    dark:prose-headings:text-white prose-img:rounded-md prose-p:leading-2 prose-li:text-md
    prose-img:flex prose-img:mx-auto prose-img:max-h-[800px] mb-10 "
    >
      <div className="mb-4">
        <Link
          href="/projects"
          className="group text-sm text-blue-600 dark:text-blue-400 no-underline hover:underline"
        >
          <div className="flex items-center group-hover:text-blue-500 group-hover:dark:text-blue-300">
            <ArrowLeft size={16} className="mr-2" />
            <p className="font-semibold">Back to Projects</p>
          </div>
        </Link>
      </div>

      {children}
    </div>
  );
}
