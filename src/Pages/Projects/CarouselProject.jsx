import React, { useEffect, useState } from "react";
import "../../Assets/css/Carousel.css";

const CarouselProject = (props) => {
  const { children } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);
  // ...
  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const [touchPosition, setTouchPosition] = useState(null);
  // ...
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className="carousel-container">
      <div className="NavArrows">
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={prev}
          className="LeftArrow"
        >
          <path
            d="M5.49535 9L9.41174 0L0.588214 9L9.41174 18L5.49535 9Z"
            fill="white"
          />
        </svg>
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={next}
          className="RightArrow"
        >
          <path
            d="M4.50464 9L0.588257 18L9.41179 9L0.588257 0L4.50464 9Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="carousel-wrapper">
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselProject;
