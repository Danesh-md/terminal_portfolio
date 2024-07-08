import backgroundImg from "../Images/wallpapper.jpeg";
import InsideBackGround from "./InsideBackGround";

const BackGround = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="absolute top-0 w-full h-screen -z-10 object-cover">
        <img
          className="h-full w-full object-cover object-center"
          src={backgroundImg}
          alt="background"
        />
      </div>
      <InsideBackGround />
    </div>
  );
};

export default BackGround;
