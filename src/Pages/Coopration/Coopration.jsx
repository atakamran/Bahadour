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