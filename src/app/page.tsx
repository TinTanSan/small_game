'use client'
import { Deposit } from '@/interfaces/deposit';
import { Holding, Security } from '@/interfaces/securities'
import { getBalance, getDeposits, getHoldings, getMonth, setLocalstorageBalance, setLocalstorageMonth, setUpLocalStorage } from "@/utils/commons";

import { getSecurity, importSecurities, setUpSecurities, updateSecurityState } from '@/utils/securities/functions';
import React, { useContext, useEffect, useState } from 'react'
import { GameStateContext } from './contexts/gameStateContext';

export default function Home() {
  const gameContext = useContext(GameStateContext);

  

  return (
      (gameContext !== undefined && gameContext.gameState !== undefined) &&
        <div className='flex flex-col w-screen h-screen p-1'>
        <main className='flex flex-col items-center gap-10 w-full h-full p-5'>
          <div className='flex bg-primary hover:bg-primary-darken text-primary-content px-2'>hello</div>
        </main>
        
      </div>
  )
}
