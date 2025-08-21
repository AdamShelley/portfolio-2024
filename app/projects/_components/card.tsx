import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface Project {
  project: {
    name: string;
    filename: string;
    skills: string[];
    description: string;
  };
  customPage?: string;
  stagger: number;
}

const Card = ({ project, customPage, stagger }: Project) => {
  const { name, skills, description, filename } = project;

  const capitalizeFirstLetter = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <>
      <article className="flex flex-col ">
        <Link href={customPage || `/projects/${filename}`} passHref>
          <h3 className="hover:text-zinc-400 transition-all">
            {capitalizeFirstLetter(name)}
          </h3>
          <p className="mt-1 text-zinc-500/90 dark:text-zinc-400 text-md">
            {description}
          </p>
          <div className="flex flex-wrap items-center justify-start w-full pt-1 z-10 -ml-1">
            {skills &&
              skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="skill"
                  className="mr-2 mt-2 min-w-[50px] text-[10px] font-normal rounded-sm"
                >
                  {skill}
                </Badge>
              ))}
          </div>
        </Link>
      </article>
    </>
  );
};

export default Card;
