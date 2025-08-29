import React from "react";

const AboutPage = () => {
  return (
    <div className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] min-h-screen mt-20 flex items-start justify-center">
      <div className="rounded-lg w-1/2">
        <h1 className="text-left font-medium">About</h1>
        <p className="text-lg mt-5 text-left text-normal">
          Hi ! My name is <strong>Adam</strong>, and I am a developer from the
          UK 🇬🇧.
        </p>
        <p className="mt-10 text-lg text-left text-normal">
          I&apos;m currently working as a <strong>Web Developer</strong> for a
          leading Energy Consultancy based in Warwickshire.
        </p>
        <p className="mt-10 text-lg text-left text-normal">
          I am <strong>open to opportunities</strong> and excited to explore new
          challenges.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
