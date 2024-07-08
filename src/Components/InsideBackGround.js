import NavBar from "./NavBar";
import Screen from "./Screen";
const InsideBackGround = () => {
  return (
    <div>
      <div className="bg-color1 h-11 w-50 mt-40 rounded-t-md mb-0">
        <NavBar />
      </div>
      <div className="bg-black border-2 border-color1 h-39 w-50 rounded-b-md mt-0 bg-opacity-75 overflow-y-auto no-scrollbar">
        <div className="">
          <Screen />
        </div>
      </div>
    </div>
  );
};

export default InsideBackGround;
