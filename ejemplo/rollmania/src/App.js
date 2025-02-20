import logo from './logo.svg';
import './App.css';
import Dice from './Dice.js';
import React, { useState } from "react";

function App() {
  return (
	<main className="App">
	  <Dice />
	  <Dice />
	  <Dice />
    </main>
  );
}

function Contador() {
  const [numero, setNumero] = useState(5);

  return (
    <section>
      <button>Botón 1</button>
      <button>Botón 2</button>
      <p>{numero}</p>
    </section>
  );
}

export default App;
