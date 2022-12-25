import React, { useEffect, useState } from "react";

import "../Assets/css/footer.css";
import "../Assets/css/BarAnimation.css";

import Song from "../Assets/Afraid.flac";
import { Navigate } from "react-router-dom";

function Footer({ Below, BelowLink, FooterArrow }) {
  const [toggleState, setToggleState] = useState(0);
  const [pauseToggle, setpauseToggle] = useState(false);

  const music = new Audio(Song);
  console.log(music);
  let isPlaying = false;

  const player = () => {
    pauseToggle ? setpauseToggle(false) : setpauseToggle(true);
    if (isPlaying) {
      music.pause();
      isPlaying = false;
    } else {
      music.play();
      isPlaying = true;
    }
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const ArrowUp = (
    <svg
      width="13"
      height="7"
      viewBox="0 0 13 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.52857 3.78605L12.5286 6.39697L6.52857 0.51462L0.528565 6.39697L6.52857 3.78605Z"
        fill="white"
      />
    </svg>
  );

  const ArrowDown = (
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
  );

  const CopyWrite = <span>© 2022</span>;

  return (
    <>
      <div className="footer">
        <div className="Social-Footer-Svg">
          <a href="#Contact">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="37.2426"
                y="25.7574"
                width="6"
                height="6"
                transform="rotate(45 37.2426 25.7574)"
                fill="#696969"
              />
              <rect
                x="22.7574"
                y="25.7574"
                width="6"
                height="6"
                transform="rotate(45 22.7574 25.7574)"
                fill="#696969"
              />
              <rect
                x="34.2426"
                y="37.2426"
                width="6"
                height="6"
                transform="rotate(135 34.2426 37.2426)"
                fill="#696969"
              />
              <rect
                x="34.2426"
                y="22.7574"
                width="6"
                height="6"
                transform="rotate(135 34.2426 22.7574)"
                fill="#696969"
              />
            </svg>
          </a>
        </div>
        <div className="social-link">
          <a href="#contact">social</a>
        </div>
        <a href={BelowLink}>
          <div className="link-below">
            <a href={BelowLink}>{Below}</a>
            <div className="footerArrow">{ArrowDown}</div>
          </div>
        </a>
        <div
          className="music-div"
          onClick={toggleState === 0 ? () => toggleTab(1) : () => toggleTab(0)}
        >
          {/* <audio id="tah_audio" autoPlay="true" loop="loop" src={Song}></audio> */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              id={toggleState === 1 ? "OffMusic" : "loading-bar-left"}
              x="19.5"
              y="28.5"
              width="3"
              height="3"
              fill="#D9D9D9"
            />
            <rect
              id={toggleState === 1 ? "OffMusic" : "loading-bar-middle"}
              x="28.5"
              y="28.5"
              width="3"
              height="3"
              fill="#D9D9D9"
            />
            <rect
              id={toggleState === 1 ? "OffMusic" : "loading-bar-right"}
              x="37.5"
              y="28.5"
              width="3"
              height="3"
              fill="#D9D9D9"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Footer;
