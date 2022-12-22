import React from "react";
import "../Assets/css/Button.css";

const Button = ({ ButtonText, ButtonLink }) => {
  return (
    <a href={ButtonLink}>
      <div className="ButtonContainer">
        <span className="ButtonText">{ButtonText}</span>
        <svg
          width="210"
          height="69"
          viewBox="0 0 210 69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="ButtonPath"
            d="M2.11736 34.5L34.9942 1.5H175.006L207.883 34.5L175.006 67.5H34.9942L2.11736 34.5Z"
            stroke="white"
            stroke-width="3"
          />
        </svg>
      </div>
    </a>
  );
};

export default Button;
