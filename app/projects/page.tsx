import React from "react";
import ProjectList from "./_components";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className=" w-[50vw]">
      <h2 className="mb-10 ml-3">Projects</h2>
      <ProjectList />
    </div>
  );
};
export default Projects;
