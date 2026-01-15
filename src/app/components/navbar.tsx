import React, { useContext, useEffect, useState } from 'react'
import { GameStateContext } from '../contexts/gameStateContext'
import { updateGameState } from '@/utils/commons';
import { PageContext } from '../contexts/pageContext';

export default function Navbar() {
  const gameContext = useContext(GameStateContext);
  const pageContext = useContext(PageContext);
  const [update,setUpdate] = useState(false);
  const handleNextMonth = ()=>{
    if (gameContext!== undefined && gameContext.gameState !== undefined){
      gameContext.setGameState(updateGameState(gameContext.gameState, 100))
      setUpdate(!update)
    }
  }
  useEffect(()=>{
    setUpdate(true);
    
  },[gameContext?.gameState?.month, gameContext?.gameState?.balance])
  return (
    <nav className='flex w-full h-14 items-center px-1 justify-between shadow-lg border-slate-400 border-2 rounded-lg'>
        <div className="text-xl flex w-1/2">${gameContext?.gameState?.balance.toFixed(2)}</div>
        <div className='flex w-1/2 text-lg'>Month: {gameContext?.gameState?.month}</div>
        <div className='flex w-full text-2xl'>{pageContext?.page || "Home"}</div>
        <button onClick={()=>{handleNextMonth()}} className='flex bg-secondary text-secondary-content hover:bg-secondary-darken transition-colors duration-700 items-center justify-center w-fit flex-nowrap text-nowrap px-2 h-4/5 rounded-lg '>Next Month</button>
    </nav>
  )
}
