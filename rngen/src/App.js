import './App.css';
import Number from './Components/Number';

function App() {
  const genNumbers = () => {
    const name = Math.floor(Math.random() * 100)
    const red = Math.floor(Math.random() * 257)
    const green = Math.floor(Math.random() * 257)
    const blue = Math.floor(Math.random() * 257)
    return (
      <div className="">
        <Number name={name} bgColour={`rgb(${red}, ${green}, ${blue})`}/>
      </div>
    )
  }
  
  const functionCall = () => {
    while (true){
      setInterval(genNumbers, 2000)
    }
  }

  return (
    <div className="App">
    </div>
  );
}

export default App; 
