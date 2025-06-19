import { Holding, Security } from '@/interfaces/securities'
import { LineChart } from '@mui/x-charts'
import { setGlobal } from 'next/dist/trace'
import React, { useEffect, useState } from 'react'

type props = {
    month: number,
    balance:number,
    setBalance:React.Dispatch<React.SetStateAction<number>>,
    security: Security,
    securities: Array<Security>,
    holdings: Array<Holding>,
    setHodings: React.Dispatch<React.SetStateAction<Array<Holding>>>
}

export default function SecurityModal({setBalance,month,security, balance, securities, setHodings}:props) {
  const [unitsSelected, setUnits] = useState(0);
  const [valueSelected, setValueSelected] = useState(0);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const handleBuy = ()=>{
    const totalRequired = security.priceHistory[11]*unitsSelected;
    if (balance > totalRequired){
      setBalance(totalRequired);
      setHodings((prev)=>{
        const sec = prev.find(x=>x.ticker === security.ticker);
        if (sec){
          const newUnits = sec.units + unitsSelected;
          sec.averagePrice =parseFloat((sec.averagePrice*(sec.units/newUnits)) + (security.priceHistory[11]*(unitsSelected/newUnits)).toFixed(2));
          sec.units = newUnits;
        }else{
          prev.push({ticker:security.ticker, units: unitsSelected, averagePrice: security.priceHistory[11]})
        }
        return prev
      })
    }
  }
  const changeUnits = (numUnits:number)=>{
    const units = unitsSelected;
    setUnits(numUnits);
    setValueSelected((units+numUnits)*security.priceHistory[11])
  }

  const handleSell = () =>{
    const ownedSecurity = securities.find(x=>x.ticker === security.ticker);
    if (ownedSecurity){
      // if (ownedSecurity.)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center w-full h-fit gap-5 py-10 border-2 border-zinc-300 rounded-lg shadow-2xl'>
            <div className='flex text-2xl'>Price Movements of {security.name} ({security.ticker})</div>
            {
              showBuyModal && 
              <div className='flex flex-col absolute z-20 h-[30vh] w-1/2 bg-zinc-200 rounded-lg p-2 gap-2'>
                <div className='flex w-full justify-between'>
                  <div className='flex w-full justify-center text-xl'>Confirm details of BUY order</div> 
                  <button className='flex justify-center items-center w-fit h-8 border-2 px-2 rounded-lg'>Close</button>
                </div>
                <div className='flex flex-row gap-2 w-full h-full'>
                  <div className='flex w-full h-full flex-col items-center border-2 p-2 rounded-lg '>
                    <div>Buy Units</div>
                    <div className='flex w-full'>
                      <input className='flex w-full border-2 border-zinc-400 rounded-md' />           
                    </div>
                    <div className='flex flex-col w-full h-full items-center'>
                      <div className='flex w-full justify-center'> 
                        <button>max</button>
                      </div>
                      <div className='flex gap-5'>
                        <button>-1000</button>
                        <button>+1000</button>
                      </div>
                      <div className='flex gap-5'>
                        <button>-100</button>
                        <button>+100</button>
                      </div>
                      <div className='flex gap-5'>
                        <button>-10</button>
                        <button>+10</button>
                      </div>
                    </div>
                  </div>
                  <div className='flex w-full h-full flex-col items-center border-2 p-2 rounded-lg '>
                    <div>Buy Value's worth</div>
                    <div className='flex w-full'>
                      <input className='flex w-full border-2 border-zinc-400 rounded-md' />
                    </div>
                    <div className='flex flex-col w-full h-full items-center'>
                      <div className='flex w-full justify-center'> 
                        <button>max</button>
                      </div>
                      <div className='flex gap-5'>
                        <button>-1000</button>
                        <button>+1000</button>
                      </div>
                      <div className='flex gap-5'>
                        <button>-100</button>
                        <button>+100</button>
                      </div>
                      <div className='flex gap-5'>
                        <button>-10</button>
                        <button>+10</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            }
            <LineChart
              height={600}
              width={1000}
              dataset={security.priceHistory.map((x, i)=>({price:x, month: (month + i-security.priceHistory.length)}))}
              xAxis={[{ scaleType: 'point', dataKey:'month' }]}
              series={[{dataKey:'price'}]}
            />
            <div className='flex flex-row'>
              <div className='flex flex-col'>
                Buy {security.ticker}
                <button onClick={()=>{setShowBuyModal(true)}} className='flex w-fit px-5 h-8 justify-center items-center rounded-lg bg-green-500 hover:bg-green-700 text-white'>Buy</button>

              </div>

            </div>
        </div>
  )
}
