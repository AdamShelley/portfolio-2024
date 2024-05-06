import Link from "next/link";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="max-w-[40vw] lg:max-w-[50vw] prose dark:prose-invert 
    prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-base
    prose-h2:text-base prose-h3:text-sm prose-h4:text-sm prose-h5:text-xs prose-h6:text-xs dark:prose-headings:text-white"
    >
      <Link href="/projects">Back</Link>
      {children}
    </div>
  );
}
