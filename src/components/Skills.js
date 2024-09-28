import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto ">
        <div className="text-center mb-10">
          <ChipIcon className="w-10 inline-block mb-4 text-blue-950" />
          <h1 className="sm:text-4xl text-3xl font-medium text-blue-950 title-font mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:mb-2 mx-auto sm:px-4 px-8 max-w-5xl">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="py-2 px-4 bg-gray-200 m-4 rounded-lg flex items-center cursor-pointer"
            >
              <img src={skill.image} alt={skill.name} className="w-12" />
              <h4 className="text-md ml-4">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
