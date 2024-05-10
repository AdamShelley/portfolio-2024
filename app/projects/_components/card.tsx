import Link from "next/link";
import Image from "next/image";
import React from "react";

interface Project {
  project: {
    name: string;
    skills: string[];
    description: string;
    imageName?: string;
  };
  customPage?: string;
}

const Card = ({ project, customPage }: Project) => {
  const { name, skills, description, imageName } = project;

  const cardBackgroundGradient =
    "linear-gradient(0deg, rgb(34, 35, 38) 9%, rgba(33, 34, 37, 0.89) 42%, rgba(34, 35, 38, 0) 156%)";
  const cardBackgroundGradientHover =
    "background: linear-gradient(0deg,rgb(34, 35, 38) 9%,rgba(33, 34, 37, 0.89) 42%,rgba(34, 35, 38, 0) 156%)";

  return (
    <article className="flex flex-col items-center justify-start w-full transition-all ease-in-out duration-300 rounded-xl p-2 relative overflow-hidden shadow-lg m-0.5 lg:w-95/100 lg:flex-col dark:shadow-none">
      <div className="relative w-full h-96 rounded-3xl overflow-hidden ">
        <Link href={customPage || `/projects/${name}`} passHref>
          <div className="w-full h-full relative block cursor-pointer group ">
            <Image
              src={`/assets/${imageName}`}
              alt={`${name} picture`}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 ease-in-out "
            />
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-custom-gradient group-hover:bg-custom-gradient-hover transition-all duration-300 ease-in-out z-10 opacity-100 group-hover:opacity-80 hover:scale-50"></div>

            <div className="absolute inset-x-0 bottom-0 flex flex-col justify-start flex-1 w-full p-3 ">
              <div className="p-3 text-white z-20 absolute bottom-0 mb-2 ">
                <h3 className="text-xl mt-1">{name}</h3>
                <p className="mt-3 flex-1 text-sm tracking-normal text-gray-400">
                  {description}
                </p>
                <div className="flex flex-wrap items-center justify-start w-full pt-1  z-10">
                  {skills &&
                    skills.map((skill, index) => (
                      <p
                        key={index}
                        className="text-xs text-gray-300 mt-2 [&:not(:first-child)]:pl-2"
                      >
                        {skill}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Card;
