import React, { useState } from "react";

import "./Coopration.css";

import CompanyComp from "./CompanyComp/CompanyComp";
import PaymentComp from "./PaymentComp/PaymentComp";
import CooprationComp from "./CooprationComp/CooprationComp";

const Coopration = () => {
  return (
    <>
      <div className="CooprationContainer" id="Unity">
        <div className="LeftArrow">
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.49535 9L9.41174 0L0.588214 9L9.41174 18L5.49535 9Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="CooprationDiv">
          {/* <div className={NextCoopActive ? "hideCooprationComp" : "CoopCompDiv"}> */}
            {/* <CooprationComp /> */}
          {/* </div> */}
          {/* <div className={NextCompanyActive ? "hideCompanyComp" : "CompanyCompDiv"}> */}
            {/* <CompanyComp /> */}
          {/* </div> */}
          {/* <div className={PrevCompanyActive ? "hidePaymentComp" : "PaymentCompDiv"}> */}
            <PaymentComp />
          {/* </div> */}
        </div>
        <div className="RightArrow">
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.50464 9L0.588257 18L9.41179 9L0.588257 0L4.50464 9Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Coopration;
