import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/blog";
import { CustomMDX } from "@/app/components/mdx-remote";
import { ArrowLeft } from "lucide-react";
import { Link } from "next-view-transitions";

export default function Blog({ params }: any) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
          }),
        }}
      />
      <h1 className="title font-medium text-lg md:text-xl tracking-tighter max-w-[650px] ">
        {post.metadata.title}
      </h1>
      <p className="text-md mt-1 text-slate-400">{post.metadata.publishedAt}</p>
      <article
        className="mt-10 prose prose-quoteless prose-neutral dark:prose-invert w-[85vw] 
      lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] mb-20 prose-pre:rounded-xl prose-pre:shadow-4 "
      >
        <Link
          href="/posts"
          className="group text-sm text-blue-600 dark:text-blue-400 no-underline hover:underline"
        >
          <div className="flex items-center group-hover:text-blue-500 group-hover:dark:text-blue-300">
            <ArrowLeft size={16} className="mr-2" />
            <p className="font-semibold">Back</p>
          </div>
        </Link>
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
