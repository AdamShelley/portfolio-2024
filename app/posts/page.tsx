import BlogLinks from "../(bloglinks)/bloglinks";

const Posts = () => {
  return (
    <div className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw]">
      <h2 className="mb-10 text-primary-muted font-base dark:text-gray-300">
        Posts
      </h2>
      <BlogLinks />
    </div>
  );
};

export default Posts;
