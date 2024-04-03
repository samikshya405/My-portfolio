import React, { useState } from "react";
import Landingpage from "./Pages/Landingpage";
import About from "./Pages/About";
import Header from "./Component/Header";
import Project from "./Pages/Project";
import Skill from "./Pages/Skill";
import Contact from "./Pages/Contact";

import AcademicBackground from "./Pages/AcademicBackground";

const App = () => {
  const [brightNess, setBrightNess] = useState(true);
  return (
    <div
      className="webpage"
      style={{
        background: brightNess ? "white" : "var(--primary-color)",
        color: brightNess ? "black " : "white ",
      }}
    >
      <div className="container d-flex gap-3 justify-content-end align-items-center  ">
        <i className="bi bi-brightness-high-fill"></i>
        {brightNess ? (
          <i
            className="bi bi-toggle2-off fs-2 toggle "
            onClick={() => {
              setBrightNess(false);
            }}
          ></i>
        ) : (
          <i
            className="bi bi-toggle2-on fs-2 toggle"
            onClick={() => setBrightNess(true)}
          ></i>
        )}
        <i className="bi bi-moon"></i>
      </div>
      
        <Header brightNess={brightNess} />
      

      <Landingpage brightNess={brightNess} />
 
      <Skill brightNess={brightNess} />
      <Project brightNess={brightNess}  />
      <AcademicBackground brightNess={brightNess}  />
      <About brightNess={brightNess}  />
      <Contact brightNess={brightNess}  />
      
    </div>
  );
};

export default App;
