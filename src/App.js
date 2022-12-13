import "./App.css";

import MenuComp from "./Components/MenuComp";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ProjectsPage from "./Pages/Projects/ProjectsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <>
        <Home />
        <About />
        <ProjectsPage />
      </>
      <MenuComp Menu={"About"} />
      <Footer Below={"PROJECTs"} BelowLink={"/Projects"} />
    </div>
  );
}

export default App;
