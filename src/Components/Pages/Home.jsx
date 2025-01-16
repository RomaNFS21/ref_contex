import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1> Page Home </h1>
      <Routes>
        <Route path="/home/section1" element={<Section1 />} />
        <Route path="/home/section2" element={<Section2 />} />
      </Routes>
      <Link to="/home/Section1"> Section 1</Link>
      <p></p>
      <Link to="/home/Section2"> Section 2</Link>
      <p></p>
      <Link to="/exercicios"> Exercicios </Link>
      <p></p>
      <Link to="About"> About </Link>
    </div>
  );
}

export default Home;
