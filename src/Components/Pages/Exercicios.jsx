import React from "react";
import Exercicio1 from "../Exercicio1";
import Exercicio2 from "../Exercicio2";
import Exercicio3 from "../Exercicio3";
import { Link } from "react-router-dom";

function Exercicios() {
  return (
    <div>
      <h2> Exercicios Da Atividade dia 14</h2>
      <Exercicio1 />
      <Exercicio2 />
      <Exercicio3 />
      <p></p>
      <Link to="/"> Home </Link>
    </div>
  );
}

export default Exercicios;
