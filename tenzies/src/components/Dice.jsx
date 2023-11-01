import { useState } from "react"

function Dice(props) {
    return (
        <div className="dice">
            <h2 className="die-value">
                {props.value}
            </h2> 
        </div>
    )
}

export default Dice;