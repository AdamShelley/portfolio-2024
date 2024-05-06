import React from "react";
import ProjectList from "./_components";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="w-[80vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw]">
      <h2 className="mb-10 ml-3">Projects</h2>
      <ProjectList />
    </div>
  );
};
export default Projects;
