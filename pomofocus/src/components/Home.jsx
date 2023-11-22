import { useState, useEffect } from "react"
import Countdown from "react-countdown";

function Home() {
    const [timerOn, setTimerOn] = useState(false)
    const [timer, setTimer] = useState("25:00")
    const [pomoType, setPomoType] = useState("pomodoro")

    const renderer = ({ minutes, seconds }) => {
        return <span> {minutes}:{seconds} </span>
    }

    function handlePomoType(event) {
        const currentPomoType = event.target.innerText

        if (currentPomoType === "Pomodoro") {
            setPomoType("pomodoro")
            setTimer("25:00")
        } else if (currentPomoType === "Short Break") {
            setPomoType("shortbreak")
            setTimer("5:00")
        } else if (currentPomoType === "Long Break") {
            setPomoType("longbreak")
            setTimer("15:00")
        }
    }

    function timerClick() {
        setTimerOn(prevTimerOn => !prevTimerOn)
    }

    return <>
        <div className="main-div">
            <div className="heading-div">
                <h1 className="heading"> PomoFocus </h1>
                <div className="underline">
                </div>
            </div>

            <div className="timer-div">
                <div className="pomo-types">
                        <span className="pomo-type" onClick={handlePomoType}> Pomodoro </span>
                        <span className="pomo-type" onClick={handlePomoType}> Short Break </span>
                        <span className="pomo-type" onClick={handlePomoType}> Long Break </span>
                </div>
                {timer}
                {/* {timerOn ? 
                        <Countdown date={Date.now() + 15000} renderer={renderer} /> : 
                        <Countdown date={Date.now() + 15000} renderer={renderer} />} */}
                <button className="start-pause" onClick={timerClick}> {timerOn ? "Pause" : "Start"} </button>
            </div>
        </div>
    </>
}

export default Home;