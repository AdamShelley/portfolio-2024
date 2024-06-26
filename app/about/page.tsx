import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] min-h-screen mt-20 flex items-start justify-center">
      <div className=" p-6 rounded-lg ">
        <h1 className="text-left font-medium">About</h1>
        <p className="text-md mt-5 text-left">
          Hi ! My name is <strong>Adam</strong>, and I am a developer from the
          UK 🇬🇧.
        </p>
        <p className="mt-5 text-md text-left">
          I&apos;m currently working as a <strong>Web Developer</strong> for a
          leading Energy Consultancy based in Warwickshire.
        </p>
        <p className="mt-5 text-md text-left">
          I am <strong>open to opportunities</strong> and excited to explore new
          challenges.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
