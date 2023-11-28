import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      name: "MovieMax",
      Description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quodomnis, odit libero accusantium sunt qui consectetur. Cum ducimus delectusnostrum, dignissimos officiis corrupti, officia repellendus, rem deserunt iusto totam!",
    },
    {
      name: "Walle",
      Description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quodomnis, odit libero accusantium sunt qui consectetur. Cum ducimus delectusnostrum, dignissimos officiis corrupti, officia repellendus, rem deserunt iusto totam!",
    },
    {
      name: "SocialFix",
      Description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quodomnis, odit libero accusantium sunt qui consectetur. Cum ducimus delectusnostrum, dignissimos officiis corrupti, officia repellendus, rem deserunt iusto totam!",
    },
    {
      name: "SocialFix",
      Description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quodomnis, odit libero accusantium sunt qui consectetur. Cum ducimus delectusnostrum, dignissimos officiis corrupti, officia repellendus, rem deserunt iusto totam!",
    },
  ];
  return (
    <div className="w-full flex flex-col p-5">
      <h4
        id="project"
        className="w-3/4 border-b border-white  text-6xl text-white "
      >
        Projects
      </h4>
      {projects.map((project) => (
        <div className="flex flex-col w-3/4 p-5 h-[300px] bg-[#0000002f] m-3 rounded-sm shadow-inner shadow-[#09090ffd]">
          <h1 className="text-2xl w-full h-1/4 text-slate-200">
            {project.name}
          </h1>
          <article className="w-full h-1/2 text-[#66e099]">
            {project.Description}
          </article>
          <div className="w-full h-1/3 flex flex-row justify-center items-center">
            <button className="text-white hover:text-yellow-400 hover:text-xl text-md m-3">
              {"<Code/>"}
            </button>
            <button className="text-white hover:text-yellow-400 hover:text-xl text-md m-3">
              {"Demo"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
