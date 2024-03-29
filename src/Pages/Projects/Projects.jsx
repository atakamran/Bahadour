import React, { useEffect, useState } from "react";
import ProjectItems from "./ProjectsItems";
import CarouselProject from "./CarouselProject";

import "./Projects.css";

const Projects = (props) => {
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
      <div className="ProjectsContainer" id="Projects">
        <div className="ProjectCloud"></div>
        <CarouselProject>
          {data.map((item, index) => {
            return (
              <div className="ProjectsItems" key={index}>
                <a href="/Product">{item}</a>
              </div>
            );
          })}
        </CarouselProject>
      </div>
    </>
  );
};

export default Projects;
