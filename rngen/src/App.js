import './App.css';
import Number from "./Components/Number"
import {useEffect, useState } from 'react';


function App() {

  const [numbers, setNumbers] = useState([]);
  useEffect(()=>{
    setTimeout(()=>{setNumbers(currentArray => [...currentArray, {id: numbers.length, hexCode:Math.floor(Math.random()*16777215).toString(16)}])}, 100);
  })

  return (
    <div className="App">
      {numbers.map((id) => (
        <Number key={id.id} num={id.id} hexCode={id.hexCode} /> 
      ))}
    </div>
  );
}

export default App; 
