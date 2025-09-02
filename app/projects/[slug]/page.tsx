import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/blog";
import { CustomMDX } from "@/app/components/mdx-remote";
import { ArrowLeft } from "lucide-react";
import { Link } from "next-view-transitions";

export default function Projects({ params }: any) {
  const project = getProjectBySlug(params.slug.toLowerCase());
  if (!project) {
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
            headline: project.metadata.title,
            datePublished: project.metadata.publishedAt,
            dateModified: project.metadata.publishedAt,
            description: project.metadata.summary,
          }),
        }}
      />
      <article className="prose prose-quoteless prose-neutral dark:prose-invert w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] mb-20 prose-pre:rounded-xl prose-pre:shadow-4 ">
        <Link
          href="/projects"
          className="group text-sm text-blue-600 dark:text-zinc-100 no-underline transition"
        >
          <div className="flex items-center group-hover:text-blue-500 group-hover:dark:text-blue-300">
            <ArrowLeft size={16} className="mr-2" />
            <p className="font-semibold">Back</p>
          </div>
        </Link>
        <CustomMDX source={project.content} />
      </article>
    </section>
  );
}
