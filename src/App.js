import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Section1 from "./Components/Pages/Section1";
import Section2 from "./Components/Pages/Section2";
import History from "./Components/Pages/History";
import Team from "./Components/Pages/Team";
import Exercicios from "./Components/Pages/Exercicios";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/Section1" element={<Section1 />} />
          <Route path="/home/Section2" element={<Section2 />} />

          <Route path="/about" element={<About />} />
          <Route path="/about/History" element={<History />} />
          <Route path="/about/Team" element={<Team />} />

          <Route path="/Exercicios" element={<Exercicios />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
