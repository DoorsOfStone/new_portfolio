import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as Hi2Icons from "react-icons/hi2";
import { Link } from "react-scroll";

export const Menu = () => {
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
        <div className="w-full h-1/3  mt-10 flex flex-col">
          <Link
            className="hover:text-yellow-400 text-xl"
            to="about"
            spy={true}
            smooth={true}
          >
            About
          </Link>

          <Link
            className="hover:text-yellow-400 text-xl"
            to="skills"
            spy={true}
            smooth={true}
          >
            Skills
          </Link>

          <Link
            className="hover:text-yellow-400 text-xl"
            to="project"
            spy={true}
            smooth={true}
          >
            Experience
          </Link>
          <Link
            className="hover:text-yellow-400 text-xl"
            to="project"
            spy={true}
            smooth={true}
          >
            Projects
          </Link>
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
              className="flex flex-row text-white text-2xl mr-4 hover:text-4xl ease-in-out hover:text-yellow-400"
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
