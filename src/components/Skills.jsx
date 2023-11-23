import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";

function Skills() {
  const skills = [
    {
      name: "Tailwind Css",
      icon: <SiIcons.SiTailwindcss />,
    },
    {
      name: "Bootstrap",
      icon: <FaIcons.FaBootstrap />,
    },
  ];
  return (
    <div id="skills" className="w-3/4 flex flex-col p-5 ">
      <h1 className="w-3/4 text-white text-6xl  border-b">Skills</h1>
      <div className="w-full flex flex-row flex-wrap m-3 p-5  rounded-sm shadow-xl shadow-black ">
        <div className="flex flex-col justify-center items-center m-5">
          <span className="text-6xl text-cyan-500">
            <FaIcons.FaReact />
          </span>
          <span className="text-white">React JS</span>
        </div>
        <div className="flex flex-col m-5 justify-center items-center">
          <span className="text-6xl text-green-400">
            <TbIcons.TbBrandNextjs />
          </span>
          <span className="text-white">Next JS</span>
        </div>
        <div className="flex flex-col m-5 justify-center items-center">
          <span className="text-6xl text-red-600">
            <FaIcons.FaAngular />
          </span>
          <span className="text-white">Angular</span>
        </div>
        <div className="flex flex-col m-5 justify-center items-center">
          <span className="text-6xl text-yellow-300">
            <SiIcons.SiJavascript />
          </span>
          <span className="text-white">Javascript</span>
        </div>
        <div className="flex flex-col m-5 justify-center items-center">
          <span className="text-6xl text-blue-300">
            <SiIcons.SiTypescript />
          </span>
          <span className="text-white">Typescript</span>
        </div>
        <div className="flex flex-col m-5 justify-center items-center">
          <span className="text-6xl text-green-400">
            <FaIcons.FaNodeJs />
          </span>
          <span className="text-white">Node JS</span>
        </div>
        <div className="flex flex-col m-5 justify-center items-center">
          <span className="text-6xl text-green-600">
            <SiIcons.SiMongodb />
          </span>
          <span className="text-white">MongoDB</span>
        </div>
        <div className="flex flex-col m-5 justify-center items-center">
          <span className="text-6xl text-cyan-500">
            <SiIcons.SiTailwindcss />
          </span>
          <span className="text-white">Tailwind CSS</span>
        </div>
        <div className="flex flex-col m-5 justify-center items-center">
          <span className="text-6xl text-purple-400">
            <FaIcons.FaBootstrap />
          </span>
          <span className="text-white">Bootstrap</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
