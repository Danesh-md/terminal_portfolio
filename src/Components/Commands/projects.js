import React, { useRef } from "react";
import Tag from "../Tag";
import videoOne from "../../Videos/flight.mp4";
import videoTwo from "../../Videos/devForms.mkv";

const ProjectCommand = (props) => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleMouseEnter = (videoRef) => {
    videoRef.current.play();
  };

  const handleMouseLeave = (videoRef) => {
    videoRef.current.pause();
  };

  const handleVideoClick = (videoRef) => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
    videoRef.current.controls = true; // Enable controls in fullscreen
  };

  const handleFullscreenChange = () => {
    if (
      !document.fullscreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      videoRef1.current.controls = false; // Disable controls when exiting fullscreen
      videoRef2.current.controls = false; // Disable controls when exiting fullscreen
    }
  };

  React.useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  return (
    <div>
      <Tag showInputBox={props.showInputBox && true} cmpname={"projects"} />
      <div className="flex">
        <div>
          <video
            ref={videoRef1}
            className="ml-10 mb-10 rounded-md transition-all duration-300 hover:w-80"
            width="300"
            onMouseEnter={() => handleMouseEnter(videoRef1)}
            onMouseLeave={() => handleMouseLeave(videoRef1)}
            onClick={() => handleVideoClick(videoRef1)}
            controls={false} // Disable default controls
          >
            <source src={videoOne} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-[50px]">
          <h1 className="ml-[200px] text-white font-bold capitalize font-Poppins tracking-wider text-lg">
            Flight Booking
          </h1>
          <h2 className="text-white ml-[150px] capitalize">
            Click the video to open Full screen
          </h2>
        </div>
      </div>
      <div className="flex">
        <div>
          <video
            ref={videoRef2}
            className="ml-10 mb-10 rounded-md transition-all duration-300 hover:w-80"
            width="300"
            onMouseEnter={() => handleMouseEnter(videoRef2)}
            onMouseLeave={() => handleMouseLeave(videoRef2)}
            onClick={() => handleVideoClick(videoRef2)}
            controls={false} // Disable default controls
          >
            <source src={videoTwo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-[50px]">
          <h1 className="ml-[220px] text-white font-bold capitalize font-Poppins tracking-wider text-lg">
            DevForms
          </h1>
          <h2 className="text-white ml-[150px] capitalize">
            Click the video to open Full screen
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectCommand;
