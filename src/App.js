import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Exercicio1 from "./Components/Exercicio1";
import Exercicio2 from "./Components/Exercicio2";
import Exercicio3 from "./Components/Exercicio3";

function App() {
  return (
    <Router>
      <div>
        <Exercicio1 />
        <Exercicio2 />
        <Exercicio3 />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
