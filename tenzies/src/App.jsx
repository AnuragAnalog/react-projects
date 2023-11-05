import { useState, useEffect } from 'react'
import { nanoid } from "nanoid"
import '/src/App.css'

import Dice from "/src/components/Dice.jsx"

function App() {
  function allNewDice() {
    const initDice = []

    for (var i = 0; i < 10; i++) {
      initDice.push({
        "id": nanoid(),
        "value": parseInt(Math.random()*6)%6+1,
        "isHeld": true
      })
    }

    return initDice
  }

  function holdDice(id) {
    console.log(id)
  }

  function rollDice() {
    setDice(allNewDice())
  }

  const [dice, setDice] = useState(allNewDice())
  const [diceFace, setDiceFace] = useState("")

  useEffect(() => {
    setDiceFace(dice.map((die) => {
      return <Dice key={die["id"]} isHeld={die["isHeld"]} onClick={() => holdDice(die["id"])} value={die["value"]}/>
    }))
  }, [dice])

  return (
    <>
      <main className='main-card'>
        <div className="game-card">
          <div className="info">
            {/* This is is the info */}
          </div>

          <div className="dices">
            {diceFace}
          </div>

          <div className="button-area">
              <button onClick={rollDice} className="button"> Roll Dice </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
