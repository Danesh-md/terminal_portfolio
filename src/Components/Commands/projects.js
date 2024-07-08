import React, { useRef } from "react";
import Tag from "../Tag";
import videoOne from "../../Videos/new1 - MERGE.mp4";

const ProjectCommand = (props) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  const handleVideoClick = () => {
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
      videoRef.current.controls = false; // Disable controls when exiting fullscreen
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
      <video
        ref={videoRef}
        className="ml-10 mb-10 rounded-md transition-all duration-300 hover:w-80"
        width="300"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleVideoClick}
        controls={false} // Disable default controls
      >
        <source src={videoOne} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ProjectCommand;
