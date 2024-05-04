import React from "react";
import Card from "./card";

type Props = {};

const projects = [
  {
    project: {
      name: "BuildX",
      skills: ["JavaScript, HTML, CSS"],
      description:
        "A platform for builders to create and share web development projects.",
      // imageName: "buildx.jpg",
    },
    // customPage: "AboutUs.html",
  },
  {
    project: {
      name: "CodeSmith",
      skills: ["Python, Django"],
      description:
        "An interactive coding bootcamp experience delivered online.",
      // No imageName provided
    },
    // customPage: "CodeCampDetails.html",
  },
  {
    project: {
      name: "EcoTracker",
      skills: ["React, Node.js"],
      description:
        "An app for tracking personal carbon footprint and eco-friendly activities.",
    },
    // customPage: "EnvironmentImpact.html",
  },
  {
    project: {
      name: "FinanceFlow",
      skills: ["Java, Spring Boot"],
      description:
        "A comprehensive tool for personal finance management and budget tracking.",
      // imageName: "financeflow.png",
    },
    // customPage: "FinancialToolsOverview.html",
  },
  {
    project: {
      name: "HealthMon",
      skills: ["Swift, Core Data"],
      description:
        "A health monitoring app for iOS that tracks physical activity and diet.",
      // imageName: "healthmon.svg",
    },
    // customPage: "ProductFAQ.html",
  },
];

const ProjectList = (props: Props) => {
  return (
    <section className="grid grid-cols-2 justify-evenly gap-5 mt-2 lg:mt-0">
      {projects.map((project, index) => (
        <Card
          project={project.project}
          // customPage={project?.customPage}
          key={project.project.name}
        />
      ))}
    </section>
  );
};

export default ProjectList;
