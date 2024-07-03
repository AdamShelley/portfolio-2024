import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";
import { Suspense } from "react";

const BlogLinks = () => {
  let allBlogs = getBlogPosts();

  return (
    <div className="mt-1">
      <h2 className="p-3 font-normal text- dark:text-slate-300 ">Posts</h2>
      {allBlogs.map(
        (post) =>
          post.metadata.published === "true" && (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/posts/${post.slug}`}
            >
              <div className="group p-3 group flex flex-col w-full hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-100 dark:hover:from-gray-800 dark:hover:to-gray-90 rounded-md  cursor-pointer transition duration-200">
                <p className="text-lg dark:text-gray-200 dark:hover:text-white underline underline-offset-4 decoration-1 decoration-slate-500 group-hover:decoration-slate-400 ">
                  {post.metadata.title}
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400  mt-1 leading-6">
                  {post.metadata.summary}
                </p>
                <span className="text-sm font-normal text-slate-500 dark:text-slate-300   mt-2">
                  {post.metadata.publishedAt}
                </span>
                <Suspense fallback={<p className="h-6" />}></Suspense>
              </div>
            </Link>
          )
      )}
    </div>
  );
};

export default BlogLinks;
