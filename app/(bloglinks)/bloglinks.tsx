import { getBlogPosts } from "@/lib/blog";
import { Link } from "next-view-transitions";
import { Suspense } from "react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

const Separator = ({ label }: { label: string }) => (
  <div className="flex items-center my-2 mb-5">
    <div className="w-[100%] h-px bg-gray-200 dark:bg-gray-700" />
    <span className="pl-4 text-sm font-medium text-gray-400 bg-white/10 dark:bg-gray-900/10">
      {label}
    </span>
    {/* <div className="w-full h-px bg-gray-200 dark:bg-gray-700" /> */}
  </div>
);

const BlogLinks = () => {
  let allBlogs = getBlogPosts();

  const isDev = process.env.NODE_ENV === "development";

  const visibleBlogs = allBlogs
    .filter((post) => {
      const isPublished = post.metadata.published === "true";
      return isPublished || isDev;
    })
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt ?? 0).getTime() -
        new Date(a.metadata.publishedAt ?? 0).getTime(),
    );

  let lastYear: number | null = null;

  return (
    <div className="orchestration">
      {isDev && (
        <p className="font-normal text-red-200">
          Dev mode: Showing unpublished posts
        </p>
      )}

      {visibleBlogs.map((post) => {
        const year = new Date(post.metadata.publishedAt ?? 0).getFullYear();
        const showSeparator = year !== lastYear;
        lastYear = year;

        return (
          <div key={post.slug}>
            {showSeparator && <Separator label={String(year)} />}
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/posts/${post.slug}`}
            >
              <div className="group flex justify-between align-center w-full rounded-sm cursor-pointer transition duration-200 mt-2 gap-2">
                <div className="flex flex-col flex-1 min-w-0">
                  <p className="transition dark:text-slate-200 dark:hover:text-white break-words">
                    {post.metadata.title}
                  </p>
                  <p className="text-md text-zinc-500/90 dark:text-zinc-400 mt-1 leading-6 break-words">
                    {post.metadata.summary}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Badge
                    variant="skill"
                    className="text-[10px] font-normal rounded-sm h-[2rem] w-[5.5rem] flex items-center justify-center shrink-0"
                  >
                    {post.metadata.publishedAt
                      ? format(
                          new Date(post.metadata.publishedAt),
                          "yyyy.MM.dd",
                        )
                      : "No date"}
                  </Badge>
                </div>
                <Suspense fallback={<p className="h-6" />} />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogLinks;
