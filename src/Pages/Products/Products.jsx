import React from "react";
import ProductsComp from "../../Components/Products";
import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="ProductsSection" id="Products">
        <div className="ProductsContainer">
          <div className="ProductsDiv">
            <div className="ProductsFilter">
              <span className="ProductsFilterTitle ">MOST RECENT</span>
              <span className="ProductsFilterTitle ">provisions</span>
              <span className="ProductsFilterTitle ">SHOW ALL</span>
            </div>
            <div className="ProductsList">
              <ProductsComp />
              {/* <ProductsComp />
              <ProductsComp /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
