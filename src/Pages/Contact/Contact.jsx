import React from "react";

import "./Contact.css";

import Behance from "./Social Buttons/Behance";
import Instagram from "./Social Buttons/Instagram";
import Twitter from "./Social Buttons/Twitter";

const Contact = () => {
  return (
    <>
      <div className="ContactContainer" id="Contact">
        <div className="SocialMedia">
          <span className="SocialTitle">SOCIAL</span>
          <span className="SocialDesc">
            It has always been my PLEASURE to be associated with people who
            respect and UNDRESTAND OF value THE REAL artS now WE HAVE THIS
            opportunity to know these values better than before
          </span>
        </div>
        <div className="SocialLinks">
          <Instagram />
          <Behance />
          <Twitter />
        </div>
      </div>
    </>
  );
};

export default Contact;
