import { useState, useEffect } from "react"
import Countdown from "react-countdown";

function Home() {
    const [timerOn, setTimerOn] = useState(false)
    const [timer, setTimer] = useState(1500)
    const [pomoType, setPomoType] = useState("pomodoro")

    function handlePomoType(event) {
        const currentPomoType = event.target.innerText
        var bgColor = "rgb(236, 58, 58)"

        if (timerOn) {
            setTimerOn(prevTimerOn => !prevTimerOn)
        }

        if (currentPomoType === "Pomodoro") {
            setPomoType("pomodoro")
            setTimer(1500)
            bgColor = "rgb(236, 58, 58)"
        } else if (currentPomoType === "Short Break") {
            setPomoType("shortbreak")
            setTimer(300)
            bgColor = "rgb(58, 236, 58)"
        } else if (currentPomoType === "Long Break") {
            setPomoType("longbreak")
            setTimer(900)
            bgColor = "rgb(58, 58, 236)"
        }

        document.body.style.backgroundColor = bgColor
    }

    function zeroPad(num, places) {
        var zero = places - num.toString().length + 1;

        return Array(+(zero > 0 && zero)).join("0") + num;
    }

    function calcTimer() {
        var mins = 0, secs = 0
        
        mins = parseInt(timer / 60)
        secs = parseInt(timer % 60)

        return `${zeroPad(mins, 2)}:${zeroPad(secs, 2)}`
    }

    function timerClick() {
        setTimerOn(prevTimerOn => !prevTimerOn)
    }

    useEffect(() => {
        if (timerOn) {
            const timerId = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1)
            }, 1000)
    
            return () => clearInterval(timerId)
        }
    }, [timerOn])

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
                {calcTimer()}
                <button className="start-pause" onClick={timerClick}> {timerOn ? "Pause" : "Start"} </button>
            </div>
        </div>
    </>
}

export default Home;