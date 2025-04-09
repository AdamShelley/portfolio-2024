import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface Project {
  project: {
    name: string;
    skills: string[];
    description: string;
    imageName?: string;
  };
  customPage?: string;
  stagger: number;
}

const Card = ({ project, customPage, stagger }: Project) => {
  const { name, skills, description, imageName } = project;

  const capitalizeFirstLetter = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <>
      {/* <article className="hidden dark:flex flex-col px-0 py-3 lg:px-0 lg:py-0 items-center justify-start w-full transition-all ease-in-out duration-300 rounded-sm relative overflow-hidden  m-0.5 lg:w-full  dark:shadow-none">
        <div className="relative w-full h-[250px] rounded-md overflow-hidden bg-transparent border border-slate-200 shadow-md dark:border-none">
          <Link href={customPage || `/projects/${name}`} passHref>
            <div className="w-full h-full relative block cursor-pointer group ">
              <Image
                src={`/assets/${imageName}`}
                alt={`${name} picture`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="transition-opacity duration-300 ease-in-out dark:opacity-50 bg-transparent group-hover:opacity-90 dark:group-hover:opacity-30"
              />
              <div
                className="absolute top-0 left-0 w-full h-full pointer-events-none 
            bg-gradient-to-t from-black/90 via-black/70 to-transparent dark:bg-custom-gradient group-hover:from-black/70 group-hover:via-black/50 
            dark:group-hover:bg-custom-gradient-hover 
            transition-all duration-300 ease-in-out z-10 opacity-85 group-hover:opacity-80"
              ></div>

              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-start flex-1 w-full p-3 ">
                <div className="p-3 text-white z-20 absolute bottom-0 mb-2 ">
                  <h3 className="text-xl mt-1 font-semibold text-white">
                    {capitalizeFirstLetter(name)}
                  </h3>
                  <p className="mt-3 flex-1 text-sm tracking-normal text-gray-100 leading-5">
                    {description}
                  </p>
                  <div className="flex flex-wrap items-center justify-start w-full pt-1 z-10 -ml-1">
                    {skills &&
                      skills.map((skill, index) => (
                        <Badge
                          key={index}
                          className="mr-2 mt-2 min-w-[50px] text-[10px] font-normal bg-white/20 text-white dark:bg-teal-600/10 dark:text-teal-300/90 dark:border-teal-700 rounded-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </article> */}
      <article className="flex flex-col ">
        <Link href={customPage || `/projects/${name}`} passHref>
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
                  className="mr-2 mt-2 min-w-[50px] text-[10px] font-normal bg-zinc-600 text-zinc-100 dark:bg-teal-600/10 dark:text-teal-300/90 dark:border-teal-700 rounded-xs"
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
