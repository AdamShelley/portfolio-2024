import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";
import { Suspense } from "react";

const BlogLinks = () => {
  let allBlogs = getBlogPosts();

  return (
    <div className="mt-1">
      {allBlogs.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/posts/${post.slug}`}
        >
          <div className="group p-3 group flex flex-col w-full hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-300 dark:hover:from-gray-800 dark:hover:to-gray-90 rounded-md  cursor-pointer transition duration-200">
            <p className="text-base text-primary dark:hover:text-white group-hover:text-slate-100">
              {post.metadata.title}
            </p>
            <p className="text-md text-gray-400 group-hover:text-slate-100 mt-1">
              {post.metadata.summary}
            </p>
            <span className="text-sm font-normal text-slate-400 mt-2">
              {post.metadata.publishedAt}
            </span>
            <Suspense fallback={<p className="h-6" />}></Suspense>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogLinks;
