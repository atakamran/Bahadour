import "./App.css";

import MenuComp from "./Components/MenuComp";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Coopration from "./Pages/Coopration/Coopration";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";

// import { useEffect } from "react";

function App() {
  const hashs = ["#Home", "#About", "#Projects", "#Unity", "#Contact"];
  // useEffect()
  return (
    <div className="App">
      <Navbar />
      <>
        <Home />
        <About />
        <Projects />
        <Coopration />
        <Products />
        <Contact />
      </>
      <MenuComp Menu={"About"} />
      <Footer Below={"About me"} BelowLink={"#Projects"} />
    </div>
  );
}

export default App;
