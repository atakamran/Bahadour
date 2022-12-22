import React, { useEffect, useRef, useState } from "react";

import "./CooprationComp.css";

import Button from "../../../Components/Button";

const CooprationComp = () => {
  
  const ref = useRef(null);

  return (
    <div className="CooprationCompContainer">
      <div className="CooprationCompTitle">COOPERTAION METHOD</div>
      <div className="CooprationCompDesc">
        My main focus is on quality and performance. I use specific software for
        different parts of the same project to ensure the best results are
        reached. My collaboration with companies is tailored to their needs.
      </div>
      <div className="CooprationDot">
        <svg
          width="56"
          height="9"
          viewBox="0 0 56 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="4.24268"
            width="6"
            height="6"
            transform="rotate(-45 0 4.24268)"
            fill="white"
          />
          <rect
            x="23.4852"
            y="4.24268"
            width="6"
            height="6"
            transform="rotate(-45 23.4852 4.24268)"
            fill="#3B3B3B"
          />
          <rect
            x="46.9706"
            y="4.24268"
            width="6"
            height="6"
            transform="rotate(-45 46.9706 4.24268)"
            fill="#3B3B3B"
          />
        </svg>
      </div>
      <div className="CooprationForm">
        <form className="CoopForm" autoComplete="off">
          <div className="CoopEmail">
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              ref={ref}
              autoComplete="off"
            />
            <svg
              width="369"
              height="69"
              viewBox="0 0 369 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={
                document.activeElement === ref.current ? "InputStroke" : null
              }
            >
              <path
                d="M367.5 53.3787V1.5H37.7989L2.5032 67.5H353.379L367.5 53.3787Z"
                stroke="url(#paint0_linear_268_138)"
                stroke-width="3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_268_138"
                  x1="-14"
                  y1="94.5"
                  x2="-1.08719e-06"
                  y2="69"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#1B1B1B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="CoopSUBJECT">
            <input
              type="text"
              name="subject"
              placeholder="SUBJECT"
              ref={ref}
              autoComplete="off"
            />
            <svg
              width="369"
              height="69"
              viewBox="0 0 369 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.5H331.201L366.497 67.5H15.6213L1.5 53.3787V1.5Z"
                stroke="url(#paint0_linear_268_165)"
                stroke-width="3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_268_165"
                  x1="383"
                  y1="94.5"
                  x2="369"
                  y2="69"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#1B1B1B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="CoopBRAND">
            <input
              type="text"
              name="brand"
              placeholder="BRAND"
              ref={ref}
              autoComplete="off"
            />
            <svg
              width="369"
              height="69"
              viewBox="0 0 369 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M367.5 15.6213V67.5H37.7989L2.5032 1.5H353.379L367.5 15.6213Z"
                stroke="url(#paint0_linear_268_50)"
                stroke-width="3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_268_50"
                  x1="-14"
                  y1="-25.5"
                  x2="-1.08719e-06"
                  y2="5.96889e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#1B1B1B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="CoopMESSAGE">
            <input
              type="text"
              name="message"
              placeholder="MESSAGE"
              ref={ref}
              autoComplete="off"
            />
            <svg
              width="369"
              height="69"
              viewBox="0 0 369 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 15.6213V67.5H331.201L366.497 1.5H15.6213L1.5 15.6213Z"
                stroke="url(#paint0_linear_268_152)"
                stroke-width="3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_268_152"
                  x1="383"
                  y1="-25.5"
                  x2="369"
                  y2="5.96889e-07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#1B1B1B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </form>
      </div>
      <div className="CoopButton">
        <Button ButtonText="Submit" />
      </div>
    </div>
  );
};

export default CooprationComp;
