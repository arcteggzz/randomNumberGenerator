import './App.css';
import Number from './Components/Number';

function App() {
  const genNumbers = () => { 
      while (true) {
        const name = Math.floor(Math.random() * 100)
        const red = Math.floor(Math.random() * 257)
        const green = Math.floor(Math.random() * 257)
        const blue = Math.floor(Math.random() * 257)
        return ( 
        <div>
          <Number name={name} bgColour={`rgb(${red},${green},${blue})`} />
        </div>
        )
      }
  }

  return (
    <div className="App">
      {genNumbers()}
    </div>
  );
}

export default App; 
