import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from "./History";
import Team from "./Team";

function About() {
  return (
    <div>
      <h1> About Page </h1>
      <Routes>
        <Route path="history" element={<History />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default About;
