import Link from 'next/link'
import Image from 'next/image';
import React, { useContext } from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import { Security } from '@/interfaces/securities';
import { GameStateContext } from '@/app/contexts/gameStateContext';

export default function MiniGraph({security}:{security:Security}) {
    const gameState = useContext(GameStateContext);
    if(!gameState || !gameState.gameState) throw new Error("Cannot display miniGraph without game state being defined, encountered an undefined version");
    const previousClose = security.priceHistory.at(-2) ?? 0;
    const currentClose = security.priceHistory.at(-1) ?? 0;
    const changeSinceLastMonth = (currentClose-previousClose);
    const percentageChange = (changeSinceLastMonth/currentClose)*100;
    const graphColor = changeSinceLastMonth > 0? "oklch(52.7% 0.8 154.069)" : changeSinceLastMonth=== 0 ? "oklch(48.8% 0.243 264.376)":"oklch(50.5% 0.5 27.518)" ;
    const areaColor = changeSinceLastMonth > 0? "url(#green-gradient)" : changeSinceLastMonth=== 0 ? "url(#blue-gradient)":"url(#red-gradient)" ;
    return (
        <div className='flex flex-row w-full h-fit items-center justify-between2 shadow-lg/20 border-2 border-zinc-300 rounded-xl bg-base-100 gap-5 text-lg p-2'>
            <div className='flex text-lg w-1/4 px-2 text-nowrap'>{security.name}</div>
            {/* mini line graph */}
            <div className='flex w-fit h-fit border-2    border-dashed border-blue-200 rounded-lg'>
            <LineChart 
            margin={{
                left:0,
                right:0,
                top:5,
                bottom:0
            }}
                sx={{
                maxHeight:'4rem',
                maxWidth: '15rem',
                fillOpacity:'0.2',
                '& .MuiAreaElement-root': {
                    fill:areaColor
                }
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
                color:graphColor,
                }]}
            >
                <defs>
                    <linearGradient id="green-gradient" x1="0%" y1="25%" x2="0%" y2="100%">
                        <stop offset="0" stopColor="oklch(57.7% 0.5 140.069)" />
                        <stop offset="1" stopColor="#FFFFFF00" />
                    </linearGradient>
                    <linearGradient id="red-gradient" x1="0%" y1="25%" x2="0%" y2="100%">
                        <stop offset="0" stopColor="oklch(45.5% 0.213 27.518)" />
                        <stop offset="1" stopColor="#FFFFFF00" />
                    </linearGradient>
                    <linearGradient id="blue-gradient" x1="0%" y1="25%" x2="0%" y2="100%">
                        <stop offset="0" stopColor="oklch(48.8% 0.243 264.376)" />
                        <stop offset="1" stopColor="#FFFFFF00" />
                    </linearGradient>
                </defs>
            </LineChart>
            </div>
            {/* current price */}
            <div className='flex w-fit text-nowrap px-2'>
            ${security.priceHistory[security.priceHistory.length-1].toFixed(2)}
            </div>
            <div className={`flex w-1/2 h-full items-center ${changeSinceLastMonth >0?"text-green-700":"text-red-700"}`}>
                ${changeSinceLastMonth.toFixed(2)}
                <Image src={changeSinceLastMonth > 0 ? "/security_up.svg" : "/security_down.svg"} alt="pm" width={30} height={10}/>
                ({percentageChange.toFixed(2)}%)
            </div>
            <Link className='bg-blue-500 text-nowrap hover:bg-blue-700 text-white px-2 w-fit rounded-lg h-10 justify-center items-center flex' href={"/securities/"+security.ticker}>More Details</Link>
        </div>
    )
}
