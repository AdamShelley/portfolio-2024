import { getBlogPosts } from "@/lib/blog";
import { Link } from "next-view-transitions";
import { Suspense } from "react";
import { format } from "date-fns";

const BlogLinks = () => {
  let allBlogs = getBlogPosts();

  const isDev = process.env.NODE_ENV === "development";

  return (
    <div className="mt-1">
      <h2 className="p-3 font-normal dark:text-slate-400 ">Posts</h2>
      {isDev && (
        <p className="p-3 font-normal text-red-400">
          DEVELOPMENT MODE (Showing unpublished posts)
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
            <div className="p-3 group flex flex-col w-full hover-bg rounded-sm cursor-pointer transition duration-200">
              <p className="underline underline-offset-4 decoration-1 dark:decoration-slate-200 transition  dark:text-slate-200  dark:hover:text-white">
                {post.metadata.title}
              </p>
              <p className="text-md text-gray-500 dark:text-gray-400  mt-1 leading-6">
                {post.metadata.summary}
              </p>
              <span className="text-sm font-normal text-slate-500 dark:text-slate-300 mt-1">
                {format(new Date(post.metadata.publishedAt), "MM/yy")}
              </span>
              <Suspense fallback={<p className="h-6" />}></Suspense>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogLinks;
