import { useState, useEffect } from "react";
const ProgressBar = ({ Icon, barWidth, percentage, title }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className="w-11/12 mx-auto mt-5 mb-5">
      <div className={`${barWidth} flex justify-between mb-3 b`}>
        <div className="flex gap-1 items-center">
          <Icon className="text-3xl text-white" />
          <h1 className="text-white">{title}</h1>
        </div>
        <h1 className="text-white">{percentage}</h1>
      </div>
      <div className="w-full bg-gray-800 rounded-md h-2.5">
        <div
          className={`${
            animate ? barWidth : "w-0"
          } transition-all duration-700 h-2.5 bg-blue-500 rounded-md`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
