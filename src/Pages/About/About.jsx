import React from "react";
import "./About.css";
import Button from "../../Components/Button";

const About = () => {
  return (
    <>
      <div className="AboutContainer" id="About">
        <div className="AboutImg">
          <div className="AboutForm">
            <div className="AboutText">
              <span className="AboutTitle">WHO AM I ?</span>
              <p className="AboutDescription">
                CREATIVE DIRECTOR, SENIOR UI/UX DESIGNER, AND 4D ARTIST I
                started my activity in 2015 and I am proud to say I use my
                skills in these areas when producing great projects.
              </p>
              <div className="AboutButton">
                <Button ButtonText={"Coopration"} ButtonLink={"#Unity"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
