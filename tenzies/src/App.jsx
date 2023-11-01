import { useState } from 'react'
import '/src/App.css'

import Dice from "/src/components/Dice.jsx"

function App() {

  return (
    <>
      <main className='main-card'>
        <div className="game-card">
          <div className="info">
            {/* This is is the info */}
          </div>

          <div className="dices">
            <Dice value={1} />
            <Dice value={2} />
            <Dice value={1} />
            <Dice value={4} />
            <Dice value={1} />
            <Dice value={1} />
            <Dice value={5} />
            <Dice value={1} />
            <Dice value={8} />
            <Dice value={1} />
          </div>

          <div className="button">
          </div>
        </div>
      </main>
    </>
  )
}

export default App
