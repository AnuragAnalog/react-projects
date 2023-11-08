import { useState, useEffect } from 'react'
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import '/src/App.css'

import Dice from "/src/components/Dice.jsx"

function App() {
  function generateNewDie() {
    return {
      "id": nanoid(),
      "value": parseInt(Math.random()*6)%6+1,
      "isHeld": false
    }
  }

  function allNewDice() {
    const initDice = []

    for (var i = 0; i < 10; i++) {
      initDice.push(generateNewDie())
    }

    return initDice
  }

  function allHeldDice() {
    const allHeld = dice.every(die => die["isHeld"])
    
    if (allHeld) {
      const firstVal = dice[0]["value"]
      const allSameValue = dice.every(die => die["value"] === firstVal)

      if (allHeld && allSameValue) {
        return true
      }
    }

    return false;
  }

  function resetGame() {
    setDice(allNewDice())
    setWin(false)
    setRolls(0)
  }

  function holdDice(id) {
    setDice(dice.map((die) => {
      return {
      ...die,
      "isHeld": id === die["id"] ? !die["isHeld"] : die["isHeld"]
      }
    }))
  }

  function rollDice() {
    setRolls(prevRolls => prevRolls + 1)
    setDice(dice.map((die) => {
      return die["isHeld"] ? die : generateNewDie()
    }))
  }

  const [dice, setDice] = useState(allNewDice())
  const [diceFace, setDiceFace] = useState("")
  const [win, setWin] = useState(false)
  const [rolls, setRolls] = useState(0)
  const { width, height } = useWindowSize()

  useEffect(() => {
    setDiceFace(dice.map((die) => {
      return <Dice key={die["id"]} isHeld={die["isHeld"]} onClick={() => holdDice(die["id"])} value={die["value"]}/>
    }))

    setWin(allHeldDice())
  }, [dice])

  return (
    <>
      <main className='main-card'>
        <div className="game-card">
          <div className="info">
            <h2 className="game-name"> Tenzies </h2>
            <p className="instructions">
              Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
            <p className="roll-info">
                {win ? <> <Confetti width={width} height={height} />
                  <p className="win"> You won in {rolls} rolls! </p> </> : 
                  <p className="rolls"> Rolls: {rolls} </p> }
            </p>
          </div>

          <div className="dices">
            {diceFace}
          </div>

          <div className="button-area">
              {win ? 
                    <button onClick={resetGame} className="button"> Reset Game </button> : 
                    <button onClick={rollDice} className="button"> Roll Dice </button> }
          </div>
        </div>
      </main>
    </>
  )
}

export default App
