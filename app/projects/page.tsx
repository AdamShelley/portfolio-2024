import React from "react";
import ProjectList from "./_components";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw]">
      <h2 className="mb-10 text-primary-muted font-base dark:text-gray-300">
        Projects
      </h2>

      <p className="text-primary-muted dark:text-gray-300 mb-5">
        Aside from my professional work (which is not publicly accessible).
      </p>
      <ProjectList />
    </div>
  );
};
export default Projects;
