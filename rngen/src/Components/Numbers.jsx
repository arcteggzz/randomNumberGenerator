import Number from "./Number.jsx";
import "../Styles/Numbers.css"

const Numbers = ( {randomNums, isGenNum, setRandomNums} ) => {
    const generateNumber = () => {
        if (isGenNum){setRandomNums([...randomNums, Math.floor(Math.random() * (100 - 1 + 1)) + 1])}
    }
    setInterval (generateNumber, 1000)

    return (
        <div className="numbers">
            {randomNums.map((num, index) => {
                return (
                    <Number name={num} key={index}/>
                )
            })}
        </div>
    )
}

export default Numbers