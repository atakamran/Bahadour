import React from "react";

import "../Assets/css/header.css";

import { ReactComponent as NavLogo } from "../Assets/Logo/NavLogo.svg";

const Navbar = () => {
  // function reveal() {
  //   var reveals = document.querySelectorAll(".reveal");
  //   for (var i = 0; i < reveals.length; i++) {
  //     var windowHeight = window.innerHeight;
  //     var elementTop = reveals[i].getBoundingClientRect().top;
  //     var elementVisible = 160;
  //     if (elementTop < windowHeight - elementVisible) {
  //       reveals[i].classList.add("active");
  //     }
  //   }
  // }
  // window.addEventListener("scroll", reveal);

  return (
    <>
      <div className="header">
        <div className="search-link">
          <a href="">search</a>
        </div>
        <div className="title-link">
          {window.location.hash === "" ? (
            <span className="nav-title reveal fade-bottom">Bahadour</span>
          ) : (
            <div className="NavLogo">
              <a href="#">
                <NavLogo />
              </a>
            </div>
          )}
        </div>
        <div className="ConnectIcon">
          <svg
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.3361 31.307L24.579 33.0642L24.579 27.3578L26.3361 27.623L26.3361 31.307Z"
              fill="white"
            />
            <path
              d="M19.6045 24.5754L24.579 24.5789L24.5755 19.6045L26.3326 17.8473L26.3326 24.5789L33.0643 24.5789L31.3071 26.3361L17.8474 26.3326L19.6045 24.5754Z"
              fill="white"
            />
            <rect
              x="25.4558"
              y="2.12132"
              width="33"
              height="33"
              transform="rotate(45 25.4558 2.12132)"
              stroke="url(#paint0_linear_71_364)"
              stroke-width="3"
            />
            <defs>
              <linearGradient
                id="paint0_linear_71_364"
                x1="61.6457"
                y1="35.935"
                x2="71.5452"
                y2="45.8345"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3B3B3B" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="connect-link">
          <a href="asdasd">connect</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
