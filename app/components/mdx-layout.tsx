import Link from "next/link";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-[80vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] prose dark:prose-invert 
    prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-base
    prose-h2:text-base prose-h3:text-sm prose-h4:text-sm prose-h5:text-xs prose-h6:text-xs 
    dark:prose-headings:text-white prose-img:rounded-md prose-img:w-[250px] 
    prose-img:flex prose-img:mx-auto "
    >
      {/* <Link href="/projects">Back</Link> */}
      {children}
    </div>
  );
}
