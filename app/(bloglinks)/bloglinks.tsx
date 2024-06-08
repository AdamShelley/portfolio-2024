import Link from "next/link";

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
  return (
    <>
      {blogsPosts.map((post) => (
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
      ))}
    </>
  );
};

export default BlogLinks;
