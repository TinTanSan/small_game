'use client'
import { Security as SecurityType } from '@/interfaces/securities';
import { getMonth, setUpLocalStorage } from '@/utils/commons';
import {importSecurities } from '@/utils/securities/functions';
import React, { useContext, useEffect, useState } from 'react'
import LoadingSpinner from '../components/LoadingSpinner';
import { LineChart } from '@mui/x-charts';
import Link from 'next/link';
import Image from 'next/image';
import MiniGraph from './components/MiniGraph';
import { PageContext } from '../contexts/pageContext';

export default function Security() {
    const {page, setPage} = useContext(PageContext);
    // true for commodity, false for equity
    const [selectedSecurityType, setSelectedSecurityType] = useState(true);
    // const [commodities, setCommodities] = useState<Array<SecurityType>>([]);
    const [securitiesToShow, setSecuritiesToShow] = useState<Array<SecurityType>>([]);
    const [month, setMonth] = useState(-1);
    const [shares, setShares] = useState<Array<SecurityType>>([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
      setPage('Securities Center')  ;
      setLoading(true)
      setUpLocalStorage();
      const securities = importSecurities();
      
      setMonth(getMonth())
      setLoading(false)

    },[])
    useEffect(()=>{
      const securities = importSecurities();
      setSecuritiesToShow(securities.filter(x=>selectedSecurityType?x.securityType==='Commodity' : x.securityType==='Equity'))
    },[selectedSecurityType])
    return (
      loading===false ?
        <div className='flex flex-col w-screen h-screen overflow-hidden items-center p-5 gap-2'>
            <div className='flex flex-col border-2 w-full h-full items-center border-zinc-300 rounded-lg shadow-2xl'>
              <div id='security-type-nav' className='flex w-full h-12 rounded-lg p-1 px-2 gap-2'>
                <button className={`flex flex-col w-fit rounded-md ${selectedSecurityType? "bg-blue-500 text-white" : "bg-base-300"} `} onClick={()=>{setSelectedSecurityType(true)}}>
                  <div className='flex w-50 text-lg justify-center items-center h-10'>Commodities</div>
                </button>
                <button className={`flex flex-col w-fit rounded-md ${!selectedSecurityType? "bg-blue-500 text-white" : "bg-zinc-200"} `} onClick={()=>{setSelectedSecurityType(false)}}>
                  <div className='flex w-50 text-lg justify-center items-center h-10'>Shares</div>
                </button>
              </div>
              {/* minigraphs  */}
              <div className='flex flex-col w-full h-full p-2 overflow-y-auto bg-base-200'>
                <div className='flex flex-col w-full h-fit gap-5'>
                {securitiesToShow.map((security)=><MiniGraph key={security.ticker} security={security} />)}
                </div>
              </div>
          </div>
        </div>
      :
        <div className='flex flex-col w-screen h-screen justify-center items-center relative'>
          <LoadingSpinner />
        </div>
    )
}
