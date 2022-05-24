
const Number = ( {key, bgColour} ) => {
    const NumberStyle = {
        display: "flex",
        flexDirection : "column",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 110,
        margin: 4,
        cursor: "pointer"
    }

    const plateStyle = {
        background: bgColour,
        width: 75,
        height: 75,
        borderRadius: 5,
        marginBottom: 2
    }

    const textStyle = {
        fontWeight: 600,
        color: bgColour,
        fontSize: 10
    }

    return (
        <div className="number" key={key} style={NumberStyle}>
            <div className="plate" style={plateStyle}></div>
            <div className="textName" style={textStyle}>{bgColour}</div>
        </div>
    )
}

export default Number;