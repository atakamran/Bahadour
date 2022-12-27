import "./App.css";

import { Route, Routes } from "react-router-dom";

import MenuComp from "./Components/MenuComp";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Coopration from "./Pages/Coopration/Coopration";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";
import { useEffect, useState } from "react";
import ProjectsPage from "./Pages/Projects/ProjectsPage/ProjectsPage";

// import { useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // const hashs = ["#Home", "#About", "#Projects", "#Unity", "#Contact"];
  // useEffect()
  return (
    <>
      {loading ? (
        <div className="loader-container">
          <svg
            className="spinner"
            width="21"
            height="103"
            viewBox="0 0 21 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10.6172L10.5 0L21 10.6172V47.6832L13.4772 51.5L21 55.3168V92.3828L10.5 103L0 92.3828V55.3168L7.52278 51.5L0 47.6832V10.6172ZM2.65823 56.9564V91.2539L10.5 99.1832L18.3418 91.2539V56.9564L10.5 52.9783L2.65823 56.9564ZM2.65823 46.0436L10.5 49.9948L18.3418 46.0436V11.7461L10.5 3.8168L2.65823 11.7461V46.0436Z"
              fill="url(#paint0_linear_266_205)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_266_205"
                x1="10.5"
                y1="106.5"
                x2="10.5"
                y2="120"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#696969" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          <Route path="/Product" element={<ProjectsPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;

//
//
//
