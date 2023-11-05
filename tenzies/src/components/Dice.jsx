import { useState } from "react"

function Dice(props) {
    const styles = {
        backgroundColor: props.isHeld === true ? "green": "white"
    }

    return (
        <div id={props.id} style={styles} onClick={props.onClick} className="dice">
            <h2 className="die-value">
                {props.value}
            </h2>
        </div>
    )
}

export default Dice;