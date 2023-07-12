import "./App.css";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClean from "./componentes/BotonClean";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

const [input, setInput] = useState('');

const nuevaInput = valor => {
  setInput(input + valor);
};

const calcularResultado = () => {
  if (input){
  setInput(evaluate(input));
  } else {
  alert('Agregue un dato')
  }
};

  return (
    <div className="App">
      <div className="contenedor">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton manejar={nuevaInput}>7</Boton>
          <Boton manejar={nuevaInput}>8</Boton>
          <Boton manejar={nuevaInput}>9</Boton>
          <Boton manejar={nuevaInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejar={nuevaInput}>4</Boton>
          <Boton manejar={nuevaInput}>5</Boton>
          <Boton manejar={nuevaInput}>6</Boton>
          <Boton manejar={nuevaInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejar={nuevaInput}>1</Boton>
          <Boton manejar={nuevaInput}>2</Boton>
          <Boton manejar={nuevaInput}>3</Boton>
          <Boton manejar={nuevaInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejar={calcularResultado}>=</Boton>
          <Boton manejar={nuevaInput}>.</Boton>
          <Boton manejar={nuevaInput}>0</Boton>
          <Boton manejar={nuevaInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClean clean={() => setInput('')}>Clean</BotonClean>
        </div>
      </div>
    </div>
  );
}

export default App;
