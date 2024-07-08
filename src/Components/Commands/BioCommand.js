import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";

import Profile from "../../Images/profile.jpeg";
import Tag from "../Tag";

const BioCommand = (props) => {
  const links = [
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/in/danesh-md",
      Icon: FaLinkedin,
      text: "@Danesh-md",
    },
    {
      title: "Github",
      href: "https://github.com/Danesh-md",
      Icon: SiGithub,
      text: "@Danesh-md",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/imdaneshhh/",
      Icon: FaInstagramSquare,
      text: "@Imdaneshhh",
    },
  ];
  return (
    <div>
      <Tag showInputBox={props.showInputBox && true} cmpname={"bio"} />
      <div className="flex-col m-3">
        <div className="m-7 flex items-center justify-self-auto">
          <img
            src={Profile}
            alt="profile"
            className="rounded-full size-44 border-2 border-yellow-200 -translate-y-7"
          />
          <div>
            <div className="flex items-center ml-4">
              <h1 className="text-white text-xl tracking-wider font-semibold mr-1">
                Daneshwaran
              </h1>
              <MdOutlineVerified className="text-blue-400 mt-1 size-7" />
            </div>
            <h1 className="text-slate-400 mb-10 ml-4 font-semibold">
              Joined the world 19 years ago.
            </h1>
          </div>
        </div>
        <div>
          <h1
            style={{ fontFamily: "sans-serif" }}
            className="text-slate-200 font-semibold text-base m-7 -translate-y-7 tracking-wider"
          >
            I'm a passionate tech enthusiast currently pursuing a degree in
            Software Engineering at VIT Chennai. I have a keen interest in
            technologies and enjoy building new projects, especially websites.
            My curiosity and drive for innovation fuel my love for creating and
            exploring the latest advancements in the tech world.
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 m-9 -translate-y-6">
        {links.map(({ Icon, text, href, title }, index) => {
          return (
            <div className="flex items-center gap-1 mt-3" key={index}>
              <div className="text-lg flex items-center gap-1 text-yellow-200">
                <Icon className="size-7" />
                <h1 className="text-lg">{title}</h1>
              </div>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex-1 underline text-blue-300 text-lg"
              >
                {text}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BioCommand;
