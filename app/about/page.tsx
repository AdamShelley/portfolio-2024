import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-md font-semibold text-left text-slate-900">
          About
        </h1>
        <p className="text-md mt-5 text-gray-900 text-left">
          Hi! My name is <strong>Adam</strong>, and I am a developer from the UK
          🇬🇧.
        </p>
        <p className="mt-2 text-md text-gray-700 text-left">
          I'm currently working as a <strong>Web Developer</strong> for a
          leading Energy Consultancy based in Warwickshire.
        </p>
        <p className="mt-2 text-md text-gray-700 text-left">
          I am <strong>open to opportunities</strong> and excited to explore new
          challenges.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
