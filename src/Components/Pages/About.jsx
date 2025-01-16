import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from "./History";
import Team from "./Team";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1> About Page </h1>
      <Routes>
        <Route path="/about/history" element={<History />} />
        <Route path="/about/team" element={<Team />} />
      </Routes>
      <Link to="/"> Home </Link>
      <p></p>
      <Link to="history"> History </Link>
      <p></p>
      <Link to="team"> Team </Link>
    </div>
  );
}

export default About;
