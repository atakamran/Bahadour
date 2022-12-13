import React from "react";

import "../Assets/css/header.css";

import { ReactComponent as Logo } from "../Assets/Logo/NavLogo.svg";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="search-link">
          <a href="asdasd">search</a>
        </div>
        <div className="title-link">
          {window.location.pathname === "/" ? (
            <span className="nav-title">Bahadour</span>
          ) : (
            <div className="NavLogo">
              <Logo />
            </div>
          )}
        </div>
        <div className="connect-link">
          <a href="asdasd">connect</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
