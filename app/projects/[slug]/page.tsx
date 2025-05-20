import { notFound } from "next/navigation";
import { getProjects } from "@/lib/blog";
import { CustomMDX } from "@/app/components/mdx-remote";
import { ArrowLeft } from "lucide-react";
import { Link } from "next-view-transitions";

export default function Projects({ params }: any) {
  let projects = getProjects().find(
    (post) => post.slug.toLowerCase() === params.slug.toLowerCase()
  );

  if (!projects) {
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
            "@type": "Project",
            headline: projects.metadata.title,
            datePublished: projects.metadata.publishedAt,
            dateModified: projects.metadata.publishedAt,
            description: projects.metadata.summary,
          }),
        }}
      />
      {/* <h1 className="title font-medium text-lg md:text-xl tracking-tighter max-w-[650px] ">
        {projects.metadata.title}
      </h1>
      <p className="text-md mt-1 text-slate-400">
        {projects.metadata.publishedAt}
      </p> */}
      <article
        className="prose prose-quoteless prose-neutral dark:prose-invert w-[85vw] 
      lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] mb-20 prose-pre:rounded-xl prose-pre:shadow-4 "
      >
        <Link
          href="/projects"
          className="group text-sm text-blue-600 dark:text-zinc-100 no-underline transition"
        >
          <div className="flex items-center group-hover:text-blue-500 group-hover:dark:text-blue-300">
            <ArrowLeft size={16} className="mr-2" />
            <p className="font-semibold">Back</p>
          </div>
        </Link>
        <CustomMDX source={projects.content} />
      </article>
    </section>
  );
}
