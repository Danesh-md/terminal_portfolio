// Tag.js
import React, { useState, useEffect, useCallback } from "react";
import { GiClover, GiOpenFolder } from "react-icons/gi";
import InputBox from "./InputBox";
import TimeComp from "./TimeComp";

const Tag = ({ showInputBox, cmpname, onSend }) => {
  const [data, setData] = useState(cmpname || "");

  useEffect(() => {
    if (cmpname) {
      setData(cmpname);
      if (onSend) {
        onSend(cmpname);
      }
    }
  }, [cmpname, onSend]);

  const getData = useCallback(
    (data) => {
      setData(data);
      if (onSend) {
        onSend(data);
      }
    },
    [onSend]
  );

  return (
    <div className="flex-col">
      <div className="flex">
        <div className="bg-blue-500 h-1 w-5 mr-0 ml-3 mt-3"></div>
        <div className="flex items-center justify-between p-2 ml-0 bg-green-700 h-7 w-36 bg-opacity-100">
          <GiClover className="text-white size-5" />
          <p
            className="text-white font-medium m-0"
            style={{ marginBottom: "3px" }}
          >
            Daneshwaran
          </p>
        </div>
        <div
          className="bg-green-700 h-7 w-5 bg-opacity-100 z-20"
          style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        ></div>
        <div className="flex items-center justify-center bg-blue-400 h-7 w-36 -translate-x-5">
          <GiOpenFolder className="size-5 ml-5 mr-1" />
          <h1 className="text-black text-center font-medium text-lg">
            /portfolio
          </h1>
        </div>
        <div
          className="bg-blue-400 h-7 w-5 bg-opacity-100 z-20 -translate-x-5"
          style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        ></div>
      </div>
      <div className="bg-blue-500 h-12 w-1 ml-3 -translate-y-4"></div>
      <div className="flex">
        <div>
          <div className="bg-blue-500 h-1 w-5 ml-3 -translate-y-5"></div>
          <div
            className="bg-blue-500 size-3 bottom-5 ml-6"
            style={{
              clipPath: "polygon(100% 50%,50% 0%, 50% 100%)",
              transform: "translateY(-28px)",
            }}
          ></div>
        </div>
        <div className="flex items-center justify-between w-full">
          {showInputBox && <InputBox onData={getData} />}
          {!showInputBox && <div></div>}
          <TimeComp send={data} />
        </div>
      </div>
    </div>
  );
};

export default Tag;
