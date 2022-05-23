import "../Styles/Number.css"

const Number = ( {name, bgColour} ) => {
    const NumberStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 600,
        background: bgColour,
        color: "white",
        width: 75,
        height: 75,
        borderRadius: 5,
        margin: 4
    }
    return (
        <div  style={NumberStyle} >
            {name}
        </div>
    )
}

export default Number