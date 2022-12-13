import React from "react";
import Footer from "../../Components/Footer";
import MenuComp from "../../Components/MenuComp";
import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="ProductsContainer"></div>
      <MenuComp Menu="Coopration" />
      <Footer Below={"PRODUCTS"} BelowLink={"/Products"} />
    </>
  );
};

export default Products;
