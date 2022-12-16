import React, { useState } from "react";
import "../Assets/css/menuComp.css";

function MenuComp({ Menu }) {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="MenuComp">
        <div
          className={toggleState === 1 ? "CloseMenu OffMenu" : "CloseMenu"}
          onClick={() => toggleTab(0)}
        >
          <svg
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.9707 30.2158H31.4557L27.4207 26.1808L26.3657 27.6108L28.9707 30.2158Z"
              fill="white"
            />
            <path
              d="M28.9708 20.6958L25.4558 24.2158L21.9408 20.6958H19.4558L24.2158 25.4558L19.4558 30.2158H21.9408L31.4558 20.6958H28.9708Z"
              fill="white"
            />
            <rect
              x="25.4558"
              y="2.12132"
              width="33"
              height="33"
              transform="rotate(45 25.4558 2.12132)"
              stroke="white"
              stroke-width="3"
            />
          </svg>
        </div>
        <div
          className={toggleState === 1 ? "menu-frame off-svg" : "menu-frame"}
          onClick={() => toggleTab(1)}
        >
          <div className="top-svg"></div>
          <div className="mid-svg"></div>
          <div className="botton-svg"></div>
          <span className="menu-title">{Menu}</span>
        </div>
      </div>

      <div
        className={toggleState === 1 ? "AboutModal activeModal" : "AboutModal"}
      >
        <div className="MenuForm">
          <div className="MenuList">
            <a href="#">
              <span className="MenuItem">HOME</span>
            </a>
            <a href="#About">
              <span className="MenuItem">ABOUT ME</span>
            </a>
            <a href="#Projects">
              <span className="MenuItem">PROJECTS</span>
            </a>
            <a href="#Unity">
              <span className="MenuItem">UNITY</span>
            </a>
            <a href="#Products">
              <span className="MenuItem">PRODUCTS</span>
            </a>
            <a href="#Contact">
              <span className="MenuItem">CONTACT</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuComp;
