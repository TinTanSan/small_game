'use client'
import { Security } from '@/interfaces/securities';
import { getSecurity } from '@/utils/securities/functions';
import { LineChart } from '@mui/x-charts/LineChart';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Ticker() {
    let {ticker} = useParams();
    console.log('ticker: ', ticker)
    
    const [security, setSecurity] = useState<Security | undefined>(undefined);
    const [month, setMonth] = useState(13);
    // true if we want to show news events, false if we want to show orders menu (for both buy and sell)
    const [showNewsOrOrder, setShowNews] = useState(true);
    useEffect(()=>{
        if (ticker){
            const sec = getSecurity(ticker.toString());
            console.log(sec)
            setSecurity(sec);
        }
    },[])
    
    if (ticker === undefined){
        return (
            <div>
                Unable to parse query parameter for ticker
            </div>
        )
    }else{
        return (
            <div className='flex flex-col w-screen h-screen justify-center items-center text-xl gap-2 p-2'>
                <div className='flex w-full h-10 border-2 justify-center border-zinc-300'>{ticker.toString().toUpperCase()}</div>
                {(security !==undefined) &&
                <div className='flex w-full h-full flex-row gap-2'>
                    <div className='flex flex-col w-fit h-full border-2 rounded-lg'>
                        <LineChart
                            width={800}
                            height={600}
                            dataset={security.priceHistory.map((x, i)=>({price:x, month: (month + i-security.priceHistory.length)}))}
                            xAxis={[{ scaleType: 'point', dataKey:'month' }]}
                            series={[{dataKey:'price'}]}
                        />
                    </div>
                    
                    <div className='flex flex-col w-full h-full gap-2'>
                        {/* news menu */}    
                        <div className={`flex flex-col w-full gap-2 ${showNewsOrOrder?"h-full":"h-fit"} items-center`}>
                            <div onClick={()=>{setShowNews(prev=>!prev)}} className='border-2 rounded-md cursor-pointer w-full h-8 justify-center items-center flex'>{!showNewsOrOrder?"Expand News":"Collapse News"}</div>
                            <div className={`flex flex-col rounded-lg p-2 transition-all duration-1000 border-2 ${showNewsOrOrder?"visible w-full h-full":"collapse h-0 w-full"} `}>
                                <div className='flex w-full h-40 border-2 rounded-lg border-zinc-400 shadow-lg'>
                                    <div className='flex w-full'>{security.recentEvents[0].title}</div>
                                </div>
                            </div>
                        </div>
                        {/* orders menu */}
                        <div className={`flex flex-col-reverse w-full gap-2 ${!showNewsOrOrder?"h-full":"h-fit"} items-center`}>
                            <div onClick={()=>{setShowNews(prev=>!prev)}} className='border-2 rounded-md  cursor-pointer w-full h-8 justify-center items-center flex'>{showNewsOrOrder?"Expand Orders Menu":"Collapse Orders Menu"}</div>
                            
                            <div className={`flex flex-col rounded-lg transition-all duration-1000 ${!showNewsOrOrder?"visible w-full h-full":"collapse h-0 w-full"} border-2`}>
                            
                            
                            </div>
                        </div>
                    </div>
                </div>}

            </div>
        )
    }


    
}
