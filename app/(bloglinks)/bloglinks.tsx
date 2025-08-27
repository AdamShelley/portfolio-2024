import { getBlogPosts } from "@/lib/blog";
import { Link } from "next-view-transitions";
import { Suspense } from "react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

const BlogLinks = () => {
  let allBlogs = getBlogPosts();

  const isDev = process.env.NODE_ENV === "development";

  return (
    <div className="orchestration">
      {/* <h2 className=" font-normal dark:text-slate-400 mb-5">Posts</h2> */}
      {isDev && (
        <p className=" font-normal text-red-200">
          Dev mode: Showing unpushlished posts
        </p>
      )}

      {allBlogs.map((post) => {
        const isPublished = post.metadata.published === "true";
        if (!isPublished && !isDev) return null;

        return (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/posts/${post.slug}`}
          >
            <div className="group flex justify-between align-center w-full rounded-sm cursor-pointer transition duration-200 mt-2 gap-2">
              <div className="flex flex-col">
                <p className="transition dark:text-slate-200  dark:hover:text-white">
                  {post.metadata.title}
                </p>
                <p className="text-md text-zinc-500/90 dark:text-zinc-400  mt-1 leading-6">
                  {post.metadata.summary}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Badge
                  variant="skill"
                  className="text-[10px] font-normal rounded-sm h-[2rem]"
                >
                  {format(new Date(post.metadata.publishedAt), "yyyy.MM.dd")}
                </Badge>
              </div>
              {/* <span className="text-sm font-normal text-slate-500 dark:text-slate-300 self-center"></span> */}
              <Suspense fallback={<p className="h-6" />}></Suspense>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogLinks;
