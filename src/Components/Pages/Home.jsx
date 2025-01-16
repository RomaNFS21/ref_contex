import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Section1 from "./Section1";
import Section2 from "./Section2";

function Home() {
  return (
    <div>
      <h1> Page Home </h1>
      <Routes>
        <Route path="section1" element={<Section1 />} />
        <Route path="section2" element={<Section2 />} />
      </Routes>
    </div>
  );
}

export default Home;
