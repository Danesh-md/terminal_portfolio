import React from "react";

const DateComp = () => {
  const time = () => {
    const d = new Date();
    const date = d.getDate();
    const month = d.toLocaleString("default", { month: "long" });
    const year = d.getFullYear();
    const day = d.toLocaleString("default", { weekday: "long" });
    return { date, month, year, day };
  };

  const timeObj = time();

  return (
    <div>
      <div>
        <h1 className="text-white text-lg m-3 font-serrif tracking-wider mb-5 mt-5">
          Today is, {timeObj.day} {timeObj.month} {timeObj.date} {timeObj.year}
        </h1>
      </div>
    </div>
  );
};

export default DateComp;
