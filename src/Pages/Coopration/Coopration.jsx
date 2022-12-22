import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";

import "./Coopration.css";

import UnityItems from "./UnityItems";

const Coopration = (props) => {
  const data = UnityItems;

  return (
    <>
      <div className="CooprationContainer">
        <Carousel>
          {data.map((item, index) => {
            return (
              <div className="CooprationDiv" key={index}>
                {item}
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Coopration;

// {currentIndex > 0 && (
//           <div className="LeftArrow" onClick={prev}>
//             <svg
//               width="10"
//               height="18"
//               viewBox="0 0 10 18"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M5.49535 9L9.41174 0L0.588214 9L9.41174 18L5.49535 9Z"
//                 fill="white"
//               />
//             </svg>
//           </div>
//         )}
//         <div
//           className="carousel-content"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {children}
//         </div>
//         <CooprationComp />
//         <CompanyComp />
//         currentIndex > 0 && (
//           <div className="RightArrow" onClick={next}>
//             <svg
//               width="10"
//               height="18"
//               viewBox="0 0 10 18"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M4.50464 9L0.588257 18L9.41179 9L0.588257 0L4.50464 9Z"
//                 fill="white"
//               />
//             </svg>
