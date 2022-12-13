import React from "react";
import Footer from "../../Components/Footer";
import MenuComp from "../../Components/MenuComp";

const Contact = () => {
  return (
    <>
      <div>
        <MenuComp Menu="Coopration" />
        <Footer Below={"PRODUCTS"} BelowLink={"/Products"} />
      </div>
    </>
  );
};

export default Contact;
