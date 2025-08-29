import React from "react";
import ProjectList from "./_components";

const Projects = () => {
  return (
    <div className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw]">
      <h2 className="mb-10 text-primary-muted font-base dark:text-gray-300">
        Projects
      </h2>

      <p className="text-primary-muted dark:text-gray-300 mb-8 text-[15px]">
        Aside from my professional work (which is not publicly accessible). Here
        are some things I made for fun.
      </p>
      <ProjectList />
    </div>
  );
};
export default Projects;
