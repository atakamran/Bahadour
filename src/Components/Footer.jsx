import React from "react";

import "../Assets/css/footer.css";

import { ReactComponent as Logo } from "../Assets/Logo/logo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="social-link">
          <a href="#contact">social</a>
        </div>
        <div className="link-below">
          <a href="#about-me">About me</a>
          <svg
            width="19"
            height="10"
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 4.40467L0.5 0.488281L9.5 9.31181L18.5 0.488281L9.5 4.40467Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="music-div">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="19.5" y="18" width="3" height="24" fill="#D9D9D9" />
            <rect x="28.5" y="25.5" width="3" height="9" fill="#D9D9D9" />
            <rect x="37.5" y="22.5" width="3" height="15" fill="#D9D9D9" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Footer;
