import React, { useContext, useState } from 'react'
import { GameStateContext } from '../contexts/gameStateContext'
import { updateGameState } from '@/utils/commons';

export default function Navbar() {
  const gameContext = useContext(GameStateContext);
  const [update,setUpdate] = useState(false);
  const handleNextMonth = ()=>{
    console.log("cli  ")
    if (gameContext!== undefined && gameContext.gameState !== undefined){
      console.log("beginning update")
      gameContext.setGameState(updateGameState(gameContext.gameState, 100))
      console.log('update comeplete')
      setUpdate(!update)
    }
    
  }
  return (
    <nav className='flex w-full h-14 items-center px-5 justify-between'>
        <div className="text-2xl">${gameContext?.gameState?.balance.toFixed(2)}</div>
        <div>Month: {gameContext?.gameState?.month}</div>
        <button onClick={()=>{handleNextMonth()}} className='flex bg-secondary text-secondary-content hover:bg-secondary-darken items-center justify-center w-32 h-8 rounded-lg '>Next Month</button>
    </nav>
  )
}
