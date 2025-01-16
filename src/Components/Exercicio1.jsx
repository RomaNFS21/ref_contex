import React from "react";
import { useRef } from "react";

function Exercicio1() {
  const infomationButton = useRef(null);

  const handleClick = () => {
    infomationButton.current.focus();
  };

  return (
    <div>
      <h1> Exercicio 1</h1>
      <input ref={infomationButton} type="text" />
      <button onClick={handleClick}>Salvar Informação</button>
    </div>
  );
}

export default Exercicio1;
