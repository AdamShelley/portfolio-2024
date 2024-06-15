import { getBlogPosts } from "@/lib/blog";
import Link from "next/link";
import { Suspense } from "react";

const blogsPosts = [
  {
    title: "First Post",
    description: "This is the first post",
    slug: "first-post",
  },
  {
    title: "Second Post",
    description: "This is the second post",
    slug: "second-post",
  },
];

const BlogLinks = () => {
  let allBlogs = getBlogPosts();
  console.log(allBlogs);

  return (
    <>
      {/* {blogsPosts.map((post) => (
        <Link href={`/posts/${post.slug}`} key={post.slug}>
          <div className="p-3 group flex flex-col w-full hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-90 rounded-md  cursor-pointer transition duration-200">
            <h3 className="text-base text-primary dark:hover:text-white group-hover:text-slate-100">
              {post.title}
            </h3>
            <p className="text-md text-gray-800 dark:text-gray-300 group-hover:text-slate-100 mt-1">
              {post.description}
            </p>
          </div>
        </Link>
      ))} */}
      {allBlogs.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/posts/${post.slug}`}
        >
          <div className="w-full flex flex-col">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
            <Suspense fallback={<p className="h-6" />}></Suspense>
          </div>
        </Link>
      ))}
    </>
  );
};

export default BlogLinks;
