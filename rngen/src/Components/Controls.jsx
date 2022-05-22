import "../Styles/Controls.css"

const Controls = ({setIsGenNum, isGenNum}) => {
    const startHandler = () => {
        setIsGenNum(true)
    }

    const stopHandler = () => {
        setIsGenNum(false)
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