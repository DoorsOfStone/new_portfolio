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
        <div className="flex flex-col w-3/4 h-[300px] bg-[#0000002a] m-3">
          <h1>{project.name}</h1>
          <article>{project.Description}</article>
          <div className="flex flex-row">
            <button>{"<Code/>"}</button>
            <button>{"Demo"}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
