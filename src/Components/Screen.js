// Screen.js
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import DateComp from "./DateComp";
import Tag from "./Tag";
import Welcome from "./Commands/Welcome";
import LsCommand from "./Commands/LsCommand";
import BioCommand from "./Commands/BioCommand";
import Skill from "./Commands/Skill";
import ContactCommand from "./Commands/ContactCommand";
import AboutCommand from "./Commands/AboutCommand";
import Notfound from "./Commands/Notfound";
import ProjectCommand from "./Commands/projects";

const Screen = () => {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);
  const bottomref = useRef(null);

  const getData = (data) => {
    console.log("screen:" + data);
    setInput(data);
  };

  const comp = useMemo(
    () => [
      { Component: LsCommand, text: "ls" },
      { Component: Skill, text: "skill" },
      { Component: BioCommand, text: "bio" },
      { Component: AboutCommand, text: "about" },
      { Component: ContactCommand, text: "contact" },
      { Component: ProjectCommand, text: "projects" },
    ],
    []
  );

  const addComponent = useCallback(
    (input) => {
      const matchingComponent = comp.find((data) => data.text === input);
      if (matchingComponent) {
        setArr((prevArr) => [...prevArr, matchingComponent.Component]);
      } else {
        setArr((prevArr) => [...prevArr, Notfound]);
      }
    },
    [comp]
  );

  useEffect(() => {
    if (input) {
      addComponent(input);
      setInput("");
    }
  }, [input, addComponent]);

  useEffect(() => {
    bottomref.current?.scrollIntoView();
  }, [arr]);

  return (
    <div>
      <DateComp />
      <Welcome />
      <LsCommand showInputBox={false} />
      {arr.map((Component, index) => (
        <div>
          <Component key={index} />
        </div>
      ))}
      <div ref={bottomref}></div>
      <Tag showInputBox={true} onSend={getData} />
    </div>
  );
};

export default Screen;
