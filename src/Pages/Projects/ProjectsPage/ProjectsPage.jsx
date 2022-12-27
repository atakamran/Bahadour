import React from "react";
import Navbar from "../../../Components/Navbar";

import "./ProductsPage.css";
import GTA from "../../../Assets/Images/gta.png";
import Button from "../../../Components/Button";

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <div className="ClosePage">
        <svg
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="25.4558"
            y="2.12132"
            width="33"
            height="33"
            transform="rotate(45 25.4558 2.12132)"
            stroke="white"
            stroke-width="3"
          />
          <path
            className="ClosePageLine"
            d="M28.9707 30.2157H31.4557L27.4207 26.1807L26.3657 27.6107L28.9707 30.2157Z"
            fill="white"
          />
          <path
            className="ClosePageLine"
            d="M28.9708 20.6958L25.4558 24.2158L21.9408 20.6958H19.4558L24.2158 25.4558L19.4558 30.2158H21.9408L31.4558 20.6958H28.9708Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="Project_Page">
        <div className="Project_Title">
          <span>UX/UI GAME</span>
          <span>GTA VI</span>
          <span>6.9.22</span>
        </div>
        <div className="Project_Div">
          <div className="Project_Img">
            <img src={GTA} alt="GTA" />
          </div>
          <div className="Project_First">
            <div className="Project_Details">
              <span className="Project_Title1">
                UX/UI DESIGN FOR GTA VI [ SIX ] ROCKSTAR STUDIO
              </span>
              <span
                className="Project_Title2"
                style={{ color: "rgba(154, 154, 154, 1)" }}
              >
                PROJECT STATUS | CONCEPT PROJECT TIME LINE | 2 WEEKS
              </span>
            </div>
            <div className="Project_Share">
              <Button ButtonText="SHARE" />
            </div>
          </div>
          <div className="Project_Second">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quisipsumsuspendisseultricesgravida.Risus commodo viverra maecenas
            accumsan lacus vel facilisis.Lorem ipsum dolor sit
            amet,consecteturadipiscing elit, sed do eiusmod tempor incididunt
            utlabore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida.Risuscommodo viverra maecenas accumsan lacus vel facilisis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod temporincididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas
            accumsanlacus velfacilisis. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magnaaliqua.Quis ipsum suspendisse ultrices gravida.Risus
            commodo viverra maecenas accumsan lacus vel facilisis.
          </div>
          <div className="Project_Img2">
            <img src={GTA} alt="GTA" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
