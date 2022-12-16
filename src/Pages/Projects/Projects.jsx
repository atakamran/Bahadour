import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./Projects.css";

import ProjectItems from "./ProjectsItems";

const Projects = () => {
  const data = ProjectItems;
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <motion.div className="ProjectsContainer" id="Projects">
        <div className="ProjectCloud"></div>
        <motion.div className="ProjectsItems">
          {data.map((item, index) => {
            return (
              <motion.div
                style={{ transform: `translate(-${currentIndex * 100}%)`, transition: "all 1s ease-in-out" }}
                key={index}
              >
                {item}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Projects;
