import type { Metadata } from "next";
import { Suspense, cache } from "react";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { getBlogPosts } from "@/lib/blog";
import { CustomMDX } from "@/app/components/mdx-remote";
import Image from "next/image";

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
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {/* {formatDate(post.metadata.publishedAt)} */}
          </p>
        </Suspense>
        <Suspense fallback={<p className="h-5" />}></Suspense>
      </div>
      <article className="mt-20 prose prose-quoteless prose-neutral dark:prose-invert w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw]">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
