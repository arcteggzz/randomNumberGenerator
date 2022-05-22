import "../Styles/Controls.css"

const Controls = ({isGenNum, setIsGenNum, randomNums, setRandomNums}) => {
    const startHandler = () => {
        setIsGenNum(true)
        if (isGenNum){
            setInterval (generateNumber, 1000)}
    }

    const stopHandler = () => {
        setIsGenNum(false)
    }

    const generateNumber = () => {
        setRandomNums([...randomNums, Math.floor(Math.random() * (100 - 1 + 1)) + 1])
    }
    
    return (
        <div className="controls">
            <button className="start-btn" onClick={startHandler}>Start</button>
            <button className={ isGenNum ? "start-btn" : "stop-btn"}>{isGenNum ? "Active" : "Killed"}</button>
            <button className="stop-btn" onClick={stopHandler}>Stop</button>
        </div>
    )
}

export default Controls