import React, { useState } from "react";
import "../Assets/css/menuComp.css";

function MenuComp({ Menu }) {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="MenuComp" onClick={() => toggleTab(1)}>
        <div className="menu-frame">
          <div className="top-svg"></div>
          <div className="mid-svg"></div>
          <div className="botton-svg"></div>
          <span className="menu-title">{Menu}</span>
        </div>
      </div>
      <div
        className={
          toggleState === 1 ? "AboutModal activeModal" : "AboutModal"
        }
      >
        <div className="MenuForm">
          <div className="MenuList">
            <a href="/">
              <span className="MenuItem">HOME</span>
            </a>
            <a href="/About">
              <span className="MenuItem">ABOUT ME</span>
            </a>
            <a href="/Projects">
              <span className="MenuItem">PROJECTS</span>
            </a>
            <a href="/Unity">
              <span className="MenuItem">UNITY</span>
            </a>
            <a href="/Products">
              <span className="MenuItem">PRODUCTS</span>
            </a>
            <a href="/Contact">
              <span className="MenuItem">CONTACT</span>
            </a>
          </div>
        </div>
      </div>
      {/* <svg
        width="52"
        height="51"
        viewBox="0 0 52 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.3338 30.2158H31.8188L27.7838 26.1808L26.7288 27.6108L29.3338 30.2158Z"
          fill="white"
        />
        <path
          d="M29.3338 20.6959L25.8188 24.2159L22.3038 20.6959H19.8188L24.5788 25.4559L19.8188 30.2159H22.3038L31.8188 20.6959H29.3338Z"
          fill="white"
        />
        <rect
          x="25.8188"
          y="2.12132"
          width="33"
          height="33"
          transform="rotate(45 25.8188 2.12132)"
          stroke="white"
          stroke-width="3"
        />
      </svg> */}
    </>
  );
}

export default MenuComp;
