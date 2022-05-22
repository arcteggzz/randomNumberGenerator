import './App.css';
import Controls from './Components/Controls';
import Numbers from './Components/Numbers';
import { useState } from "react";

function App() {
  const [isGenNum, setIsGenNum] = useState(false)
  const [randomNums, setRandomNums] = useState([])

  return (
    <div className="App">
      <Numbers randomNums={randomNums} isGenNum={isGenNum} setRandomNums={setRandomNums} />
      <Controls setIsGenNum={setIsGenNum} isGenNum={isGenNum} setRandomNums={setRandomNums} randomNums={randomNums}/>
    </div>
  );
}

export default App; 
