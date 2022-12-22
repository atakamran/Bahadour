import React, { useEffect, useState } from "react";
import CarouselProduct from "./CarouselProduct";

import "./Products.css";

import ProductsItem from "./ProductsItem";

const Products = () => {
  const data = ProductsItem;
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
      <div className="ProductsFilter">
        <span className="ProductsFilterTitle ">MOST RECENT</span>
        <span className="ProductsFilterTitle ">provisions</span>
        <span className="ProductsFilterTitle ">SHOW ALL</span>
      </div>
      <div className="ProductsSection" id="Products">
        <CarouselProduct>
          {data.map((item, index) => {
            return (
              <div className="ProductsList" key={index}>
                {item}
              </div>
            );
          })}
        </CarouselProduct>
      </div>
    </>
  );
};

export default Products;
