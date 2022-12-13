import React from "react";
import './Home.css'
import { ReactComponent as Logo } from "../../Assets/Logo/logo.svg";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="homePage">
          <Logo className="home-logo" />
        </div>
      </div>
    </>
  );
};

export default Home;
