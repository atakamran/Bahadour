import React from "react";
import "./Home.css";
import { ReactComponent as Logo } from "../../Assets/Logo/logo.svg";

import VID from "../../Assets/ANIMATION.mp4";

const Home = () => {
  return (
    <>
      <div className="videoDiv">
        <video
          id="content_video"
          className="videoFile"
          autoplay="true"
          src={VID}
          loop
        />
      </div>
      <div className="homeContainer">
        <div className="homePage">
          <Logo className="home-logo " />
        </div>
      </div>
    </>
  );
};

export default Home;
