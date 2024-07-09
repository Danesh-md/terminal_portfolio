import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiJavaLine } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";

import ProgressBar from "../ProgressBar";
import Tag from "../Tag";

const Skill = (props) => {
  const skills = [
    {
      title: "Next",
      percentage: "85%",
      Icon: RiNextjsFill,
      barWidth: "w-17/20",
    },
    {
      title: "React",
      percentage: "90%",
      Icon: FaReact,
      barWidth: "w-9/10",
    },
    {
      title: "Javascript",
      percentage: "90%",
      Icon: IoLogoJavascript,
      barWidth: "w-9/10",
    },
    {
      title: "Java",
      percentage: "90%",
      Icon: RiJavaLine,
      barWidth: "w-9/10",
    },
    {
      title: "Mongo DB",
      percentage: "90%",
      Icon: SiMongodb,
      barWidth: "w-9/10",
    },
    {
      title: "Node JS",
      percentage: "85%",
      Icon: FaNode,
      barWidth: "w-17/20",
    },
    {
      title: "Tailwind",
      percentage: "80%",
      Icon: RiTailwindCssFill,
      barWidth: "w-4/5",
    },
  ];

  return (
    <div>
      <Tag showInputBox={props.showInputBox && true} cmpname={"skill"} />
      <div className="-translate-y-5">
        {skills.map(({ Icon, barWidth, percentage, title }, index) => (
          <ProgressBar
            Icon={Icon}
            barWidth={barWidth}
            percentage={percentage}
            key={index}
            title={title}
          />
        ))}
      </div>
    </div>
  );
};

export default Skill;
