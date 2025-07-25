'use client'
import { Security as SecurityType } from '@/interfaces/securities';
import { getMonth, setUpLocalStorage } from '@/utils/commons';
import {importSecurities } from '@/utils/securities/functions';
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../components/LoadingSpinner';
import { LineChart } from '@mui/x-charts';
import Link from 'next/link';

export default function Security() {
    const [commodities, setCommodities] = useState<Array<SecurityType>>([]);
    const [month, setMonth] = useState(-1);
    const [shares, setShares] = useState<Array<SecurityType>>([]);

    const [loading, setLoading] = useState(true);
    useEffect(()=>{
      setLoading(true)
      setUpLocalStorage()  
      console.log("he")
      const securities = importSecurities();
      console.log(securities.filter(x=>x.securityType==="Commodity"))
      setShares(securities.filter(x=>x.securityType === "Equity"));
      setCommodities(securities.filter(x=>x.securityType==="Commodity"))
      setMonth(getMonth())
      setLoading(false)

    },[])

    return (
      loading===false ?
        <div className='flex flex-col w-screen h-screen overflow-hidden items-center p-5 gap-2'>
          <div className='flex h-10 w-full justify-center text-xl'>Securities Center</div>
          
          {/* commodities */}
          <div className='flex flex-col border-2 w-full h-full items-center border-zinc-300 rounded-lg shadow-2xl'>
              <div className='flex flex-col items-center'>
                <div className='flex w-50 text-lg justify-center items-center h-10'>Commodities</div>
                <div className='h-0.5 w-30 bg-black' />
              </div>
              <div className='flex flex-col w-full h-full gap-5 p-2'>
                <div className='flex flex-row w-full h-fit items-center justify-between2 shadow-lg border-2 border-zinc-300 rounded-xl gap-5 text-lg p-2'>
                  <div className='flex text-lg w-fit px-2 text-nowrap'>{commodities[0].name}</div>
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
                        min:month-12,
                        max:month-1,
                        data: commodities[0].priceHistory.map((_,i)=>(month-12+i)),
                        position:'none'
                      }]}
                      series={[{
                        data: commodities[0].priceHistory,
                        area:true,
                        showMark:false,
                        color:'oklch(0.5608 0.1653 255.71)',
                      }]}
                    />
                  </div>
                  {/* current price */}
                  <div className='flex w-fit text-nowrap px-2'>
                    ${commodities[0].priceHistory[11].toFixed(2)}
                  </div>
                  {/* <div className='flex w-1/2 h-full'></div> */}
                  <Link className='bg-blue-500 text-nowrap hover:bg-blue-700 text-white px-2 w-fit rounded-lg h-10 justify-center items-center flex' href={"/securities/"+commodities[0].ticker}>More Details</Link>
                </div>
              </div>
          </div>
          {/* equities */}

          {/*  */}
        </div>
      :
        <div className='flex flex-col w-screen h-screen justify-center items-center relative'>
          <LoadingSpinner />
        </div>
    )
}
