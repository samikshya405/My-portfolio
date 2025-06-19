import React, { useState } from "react";
import Header from "./Component/Header";
import Home from "./Pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/blog/Blog";

const App = () => {
  const [brightNess, setBrightNess] = useState(true);
  const toggleBrightness = () => {
    setBrightNess((prevBrightness) => !prevBrightness);
  };
  return (
    <div
      className="webpage"
      style={{
        background: brightNess ? "white" : "var(--primary-color)",
        color: brightNess ? "black " : "white ",
      }}
    >
      <Header brightNess={brightNess} setBrightNess={toggleBrightness} />
      <Routes>
        <Route path="/" element={<Home brightNess={brightNess} />} />
        <Route path="/blog" element={<Blog/>}/>

       
      </Routes>
      
    </div>
  );
};

export default App;
