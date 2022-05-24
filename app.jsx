import React from 'react';
import './App.css';
import {useEffect, useState, useMemo} from 'react';
import Numberx from './number'



function App() {
  const [numbers, setNumbers] = useState([]);

  

  useEffect(()=>{

    
    setTimeout(()=>{setNumbers(currentArray => [...currentArray, {id: numbers.length, hexCode:Math.floor(Math.random()*16777215).toString(16)}])}, 100);
    
  })
  
  
  return (
    <main>
      {numbers.map((id) => (
        <Numberx key={id.id} num={id.id} hexCode={id.hexCode} /> 
      ))}
    </main>
  );
}

export default App;
