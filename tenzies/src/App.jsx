import { useState, useEffect } from 'react'
import '/src/App.css'

import Dice from "/src/components/Dice.jsx"

function App() {
  const initDice = []

  for (var i = 0; i < 10; i++) {
    initDice.push(parseInt(Math.random()*9)%9+1)
  }

  const [dice, setDice] = useState(initDice)
  const [diceFace, setDiceFace] = useState("")

  useEffect(() => {
    setDiceFace(dice.map((die) => {
      return <Dice value={die}/>
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

          <div className="button">
          </div>
        </div>
      </main>
    </>
  )
}

export default App
