import React from "react";
import MDXWrapper from "./_components/mdx-wrapper.mdx";
type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col align-center items-center p-10">
      <div className="flex flex-col justify-center  ">
        <article className="w-[40vw] max-w-[50vw] mt-4">
          <MDXWrapper />
        </article>
      </div>
    </div>
  );
};

export default page;
