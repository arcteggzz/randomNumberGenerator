import './App.css';
import Number from "./Components/Number"
import {useEffect, useState } from 'react';


function App() {
  const [numbers, setNumbers] = useState([]);

  useEffect(()=>{
    setTimeout(()=>{setNumbers(currentArray => [...currentArray, {
      key: numbers.length,
      bgColour: `rgb(
        ${Math.floor(Math.random() * 257)},
        ${Math.floor(Math.random() * 257)},
        ${Math.floor(Math.random() * 257)})`,
      }])}, 250)
  })

  return (
    <div className="App">
      {numbers.map((number) => (
        <Number key={number.key} bgColour={number.bgColour} /> 
      ))}
    </div>
  );
}

export default App; 
//Math.floor(Math.random() *16777215).toString(16)

