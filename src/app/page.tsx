'use client'
import { Deposit } from '@/interfaces/deposit';
import { Security } from '@/interfaces/securities'
import { importDeposits } from '@/utils/deposit/functions';
import { setUpSecurities, updateSecurityState } from '@/utils/securities/functions';
import { LineChart } from '@mui/x-charts';
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [securities, setSecurities] = useState<Array<Security>>([]);
  const [deposits, setDeposits] = useState<Array<Deposit>>([]);
  const [month, setMonth] = useState(13);
  useEffect(()=>{
    const newSecurities = setUpSecurities();
    if (newSecurities !== undefined){
      setSecurities(newSecurities);
      console.log(newSecurities)
    }

    const deps = importDeposits();
    setDeposits(deps);

    
    
  }, [])
  useEffect(()=>{
    const intID = setInterval(()=>{
      if (securities.length > 0)
      {
        updateSecurityState(securities);
        setMonth(prev=>prev+1)
      }
    },500);
    
    return ()=>{clearInterval(intID)};

  },[])


  const handleNextMonth = ()=>{
    updateSecurityState(securities);
    setMonth(prev=>prev+1)
    console.log(securities[0].priceHistory)
  }

  return (
    <div className='flex flex-col w-screen h-screen p-1'>
      <nav className='h-15 flex w-full justify-center'>Finance game</nav>
      <main className='flex flex-col items-center gap-10 w-full h-full p-5'>
        {securities.length > 0 && <LineChart
          dataset={securities[0].priceHistory.map((x, i)=>({price:x, month: (month + i-securities[0].priceHistory.length)}))}
          xAxis={[{ scaleType: 'point', dataKey:'month' }]}
          series={[{dataKey:'price'}]}
        />}

        <button className='bg-blue-500 text-white w-fit px-5' onClick={()=>{handleNextMonth()}}>Next Month</button>
      </main>
      
    </div>
  )
}
