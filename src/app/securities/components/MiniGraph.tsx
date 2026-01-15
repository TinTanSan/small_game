import Link from 'next/link'
import Image from 'next/image';
import React, { useContext } from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { Security } from '@/interfaces/securities';
import { GameStateContext } from '@/app/contexts/gameStateContext';

export default function MiniGraph({security}:{security:Security}) {
    const gameState = useContext(GameStateContext);
    if(!gameState || !gameState.gameState) throw new Error("Cannot display miniGraph without game state being defined, encountered an undefined version");
    return (
        <div className='flex flex-row w-full h-fit items-center justify-between2 shadow-lg border-2 border-zinc-300 rounded-xl gap-5 text-lg p-2'>
            <div className='flex text-lg w-fit px-2 text-nowrap'>{security.name}</div>
            {/* mini line graph */}
            <div className='flex w-fit h-fit border-2 border-dashed border-blue-200 rounded-lg'>
            <LineChart 
            margin={{
                left:0,
                right:0,
                top:5,
                bottom:0
            }}
                sx={{
                maxHeight:'5rem',
                maxWidth: '15rem'
                }}
                yAxis={[{
                position:'none'
                }]}
                xAxis={[{
                min:gameState.gameState.month-12,
                max:gameState.gameState.month-1,
                data: security.priceHistory.map((_,i)=>{
                    if (!gameState || !gameState.gameState){ throw new Error("cannot display graph when data is undefined, got gamestate undefined")}
                    return (gameState.gameState.month-12+i)
                }),
                position:'none'
                }]}
                series={[{
                data: security.priceHistory,
                area:true,
                showMark:false,
                color:'oklch(0.5608 0.1653 255.71)',
                }]}
            />
            </div>
            {/* current price */}
            <div className='flex w-fit text-nowrap px-2'>
            ${security.priceHistory[security.priceHistory.length-1].toFixed(2)}
            </div>
            <div className='flex w-1/2 h-full items-center'>
                ${(security.priceHistory[security.priceHistory.length-1]-security.priceHistory[security.priceHistory.length-2]).toFixed(2)}
                <Image src={security.priceHistory[security.priceHistory.length-1]-security.priceHistory[security.priceHistory.length-2] > 0 ? "/security_up.svg" : "/security_down.svg"} alt="pm" width={30} height={10}/>

            </div>
            <Link className='bg-blue-500 text-nowrap hover:bg-blue-700 text-white px-2 w-fit rounded-lg h-10 justify-center items-center flex' href={"/securities/"+security.ticker}>More Details</Link>
        </div>
    )
}
