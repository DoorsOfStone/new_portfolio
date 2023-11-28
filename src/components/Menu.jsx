import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as Hi2Icons from "react-icons/hi2";
import { Link } from "react-scroll";

export const Menu = () => {
  const project = document.getElementById("project");
  const experience = document.getElementById("work");
  const skills = document.getElementById("skills");
  const about = document.getElementById("about");

  const experienceHandle = () => {
    experience.scrollIntoView({ behavior: "smooth" });
  };
  const skillsHandle = () => {
    skills.scrollIntoView({ behavior: "smooth" });
  };
  const aboutHandle = () => {
    about.scrollIntoView({ behavior: "smooth" });
  };
  const projectHandle = () => {
    project.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    {
      icon: <Fa6Icons.FaXTwitter />,
      username: "@LandonMichael__",
      path: "https://twitter.com/LandonMichael__",
    },
    {
      icon: <FaIcons.FaGithub />,
      username: "@DoorsOfStone",
      path: "https://github.com/DoorsOfStone",
    },
    {
      icon: <FaIcons.FaLinkedin />,
      username: "Landon Van Cleave",
      path: "https://www.linkedin.com/in/landon-van-cleave-2baa63247/",
    },
  ];
  return (
    <div className="main  text-black ">
      <h1 className="m-5">Landon Michael</h1>
      <article className="m-5 w-full h-1/3 p-2 text-lg flex flex-col">
        Hello,I'm Landon Michael, a passionate and innovative web developer
        dedicated to crafting exceptional digital experiences. With a keen eye
        for design and a knack for problem-solving, I thrive on turning ideas
        into interactive and user-friendly websites.
        <div className="w-full h-2/3  mt-10 flex flex-col items-start">
          <button
            onClick={aboutHandle}
            className="hover:text-yellow-400 hover:text-xl hover:border-b-2 text-lg "
          >
            About
          </button>

          <button
            onClick={skillsHandle}
            className="hover:text-yellow-400 hover:text-xl hover:border-b-2 text-lg "
          >
            Skills
          </button>

          <button
            onClick={experienceHandle}
            className="hover:text-yellow-400 hover:text-xl hover:border-b-2 text-lg "
          >
            Experience
          </button>
          <button
            onClick={projectHandle}
            className="hover:text-yellow-400 hover:text-xl hover:border-b-2 text-lg "
          >
            Projects
          </button>
        </div>
      </article>
      <div className="m-5 w-full h-1/5 flex flex-col justify-end ">
        <div className=" flex flex-row text-white mb-2">
          <h3 className=" text-left text-xl">Socails</h3>
          <Hi2Icons.HiOutlineArrowDownRight className="text-2xl" />
        </div>
        <div className="w-full  flex flex-row">
          {socials.map((social) => (
            <a
              className="flex flex-row text-white text-xl mr-4 hover:text-2xl hover:border-b-2 ease-in-out hover:text-yellow-400"
              href={social.path}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
