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
	<RollButton />
    </main>
  );
}

function RollButton() {
  const [contador, setContador] = useState(5);

  useEffect(() => {
    if (contador > 0) {
      const timer = setTimeout(() => setContador(contador - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [contador]);

  return (
    <button>{contador > 0 ? contador : "Roll!!!"}</button>
  );
}

export default App;
