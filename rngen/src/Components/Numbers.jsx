import Number from "./Number.jsx";
import "../Styles/Numbers.css"

const Numbers = ( {randomNums} ) => {
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