'use client'
import SecurityModal from "@/app/components/securityModal";
import { Deposit } from '@/interfaces/deposit';
import { Holding, Security } from '@/interfaces/securities'
import { getBalance, getDeposits, getHoldings, getMonth, setLocalstorageMonth, setUpLocalStorage } from "@/utils/commons";
import { importDeposits } from '@/utils/deposit/functions';
import { importSecurities, setUpSecurities, updateSecurityState } from '@/utils/securities/functions';
import { LineChart } from '@mui/x-charts';
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [securities, setSecurities] = useState<Array<Security>>([]);
  
  // user states
  const [balance, setBalance] = useState<number>(1200.0);
  const [deposits, setDeposits] = useState<Array<Deposit>>([]);
  const [holdings, setHoldings] = useState<Array<Holding>>([]);
  const [month, setMonth] = useState(1);
  
  useEffect(()=>{
      setUpLocalStorage()
      setBalance(getBalance())
      setMonth(getMonth())
      setHoldings(getHoldings())
      setDeposits(getDeposits())

  }, [])


  const handleNextMonth = ()=>{
    updateSecurityState(securities);
    setMonth(prev=>{
      const n = prev +1;
      setLocalstorageMonth(n)
      return n
    })
    
  }

  return (
      <div className='flex flex-col w-screen h-screen p-1'>
        <nav className='flex h-15  w-full justify-center'>
          Your Balance: ${balance.toFixed(2)}
        </nav>
        <main className='flex flex-col items-center gap-10 w-full h-full p-5'>
          
          {securities.length > 0 && 
            <div className='flex flex-col items-center w-full h-full gap-5 py-10'>
              {/* <SecurityModal month={month} balance={balance} setBalance={setBalance} security={securities[0]} securities={securities} holdings={holdings} setHoldings={setHoldings}/> */}
          </div>
          }

          <button className='bg-blue-500 text-white w-fit px-5 h-10' onClick={()=>{handleNextMonth()}}>Next Month</button>
        </main>
        
      </div>
  )
}
