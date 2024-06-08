import React from "react";

type Props = {
  searchParams: {
    postId: string;
  };
};

const BlogPost = ({ searchParams: { postId } }: Props) => {
  return <div>BlogPost TODO: Remote Markdown here?</div>;
};

export default BlogPost;
