'use client'
import { Security } from '@/interfaces/securities';
import { getBalance, getMonth } from '@/utils/commons';
import { getSecurity } from '@/utils/securities/functions';
import { LineChart } from '@mui/x-charts/LineChart';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Ticker() {
    let {ticker} = useParams();
    console.log('ticker: ', ticker)
    const [units, setUnits] = useState(0);
    const [isBuy, setIsBuy] = useState(true);
    const [security, setSecurity] = useState<Security | undefined>(undefined);
    // true if we want to show news events, false if we want to show orders menu (for both buy and sell)
    const [showNewsOrOrder, setShowNews] = useState(true);
    const [month, setMonth] = useState(0);
    const [balance, setBalance] = useState(0);
    useEffect(()=>{
        if (ticker){
            const sec = getSecurity(ticker.toString());
            setSecurity(sec);
            setMonth(getMonth())
            setBalance(getBalance())
        }
    },[])
    
    if (ticker === undefined){
        return (
            <div>
                Unable to parse URL parameter for ticker
            </div>
        )
    }else{
        return (
            <div className='flex flex-col w-screen h-screen overflow-hidden justify-center items-center text-xl gap-2 p-2'>
                <div className='flex w-full h-10 border-2 justify-center border-zinc-300'>{ticker.toString().toUpperCase()}</div>
                {(security !==undefined) &&
                <div className='flex w-full h-full flex-row gap-2'>
                    {/* left side only graph */}
                    <div className='flex flex-col w-fit h-full border-2 rounded-lg'>
                        <LineChart
                            width={800}
                            height={600}
                            dataset={security.priceHistory.map((x, i)=>({price:x, month: ((month|| 0) + i-security.priceHistory.length)}))}
                            xAxis={[{ scaleType: 'point', dataKey:'month' }]}
                            series={[{dataKey:'price'}]}
                        />
                    </div>
                    {/* right side (news/ orders menu) */}
                    <div className='flex flex-col w-full h-full gap-2'>
                        {/* news menu */}
                        <div className={`flex flex-col border-2 w-full overflow-hidden h-full ${showNewsOrOrder?" visible":" collapse"}`}>
                            <div className='flex w-full gap-2 h-full overflow-y-auto p-1'>
                                <div className='flex flex-col w-full h-fit gap-2 items-center'>
                                    <div>Upcoming events</div>
                                    <div className='flex flex-col w-full h-50 bg-zinc-300 gap-2 p-1'>
                                        <div className='flex justify-center w-full'>{security.recentEvents[0].title}</div>
                                        <div className='flex flex-wrap text-lg'>{security.recentEvents[0].description}</div>
                                    </div>

                                    <div>This month's events</div>
                                    <div className='flex flex-col w-full h-50 bg-zinc-300 gap-2 p-1'>
                                        <div className='flex justify-center w-full'>{security.recentEvents[1].title}</div>
                                        <div className='flex flex-wrap text-lg'>{security.recentEvents[1].description}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* orders menu */}
                        <div className='flex flex-col border-2 w-full h-full gap-2 p-2'>
                            <div className='flex w-full h-fit justify-center'>Place an order for {security.ticker}</div>
                            <div className='flex flex-col w-full h-full items-center'>
                                {/* buttons at the top to decide whether it's a buy order or a sell order*/}
                                <div className='flex w-[80%] justify-center items-center h-10'>
                                    <div onClick={()=>{setIsBuy(true)}} className={`flex w-full h-8 cursor-pointer border-2 border-green-500 justify-end px-5 rounded-l-lg ${isBuy?"bg-green-500 text-white ":" text-green-500 bg-white"}`}>Buy</div>
                                    <div onClick={()=>{setIsBuy(false)}} className={`flex w-full h-8 cursor-pointer border-2 border-red-500  px-5 rounded-r-lg ${!isBuy?"bg-red-500 text-white ":" text-red-500 bg-white"}`}>Sell</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

            </div>
        )
    }


    
}
