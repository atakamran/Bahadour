import React from "react";

import "../Assets/css/header.css";
import MenuComp from "./MenuComp";

// import { ReactComponent as Logo } from "../Assets/Logo/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="search-link">
          <a href="asdasd">search</a>
        </div>
        <div className="title-link">
          <span className="nav-title">Bahadour</span>
        </div>
        <div className="connect-link">
          <a href="asdasd">connect</a>
        </div>
      </div>
      <MenuComp />
    </>
  );
};

export default Navbar;
