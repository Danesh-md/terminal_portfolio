const NavBar = () => {
  const boxes = [
    {
      color: "bg-red-500",
    },
    {
      color: "bg-yellow-500",
    },
    {
      color: "bg-green-500",
    },
  ];
  return (
    <div className="h-11 w-full">
      <div className="flex items-center h-11 justify-between">
        <div className="flex items-center justify-center">
          {boxes.map(({ color }, index) => {
            return (
              <div
                className={`h-3 w-3 ${color} rounded-full mr-2 ${
                  color === "bg-red-500" ? "ml-2" : ""
                }`}
                key={index}
              ></div>
            );
          })}
        </div>
        <div>
          <p className="text-slate-200 font-medium mr-16">
            Daneshwaran/terminal_portfolio
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
