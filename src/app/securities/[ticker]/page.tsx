'use client'
import Banner from '@/app/components/Banner';
import { BannerDetails } from '@/app/components/Banner';
import { Holding, Security } from '@/interfaces/securities';
import { getBalance, getHoldings, getMonth, setLocalstorageBalance, setLocalstorageHoldings, setLocalstorageMonth, setUpLocalStorage} from '@/utils/commons';
import { getSecurity, importSecurities, updateSecurityState } from '@/utils/securities/functions';
import { LineChart } from '@mui/x-charts/LineChart';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Ticker() {
    let {ticker} = useParams();
    const [units, setUnits] = useState("0");
    const [value,setValue]= useState("0.00");
    const [loading, setLoading] = useState(true);
    const [unitAlert, setUnitAlert] = useState(false);
    const [isBuy, setIsBuy] = useState(true);
    const [security, setSecurity] = useState<Security | undefined>(undefined);
    // true if we want to show news events, false if we want to show orders menu (for both buy and sell)
    const [month, setMonth] = useState(0);
    const [balance, setBalance] = useState(0);
    const [holding, setHolding] = useState<Holding | undefined>(undefined);
    const [bannerDetails, setBannerDetails] = useState<BannerDetails>({text:"", isGood:false})
    const [showBanner, setShowBanner] = useState(false);
    useEffect(()=>{
        setLoading(true)
        setUpLocalStorage();
        if (ticker){
            const sec = getSecurity(ticker.toString());
            if (sec === undefined){
                setLoading(false);
                return;
            }
            setMonth(getMonth());
            setBalance(getBalance());
        }
    },[])

    useEffect(()=>{
        setLoading(true)
        if (ticker){
            const sec = getSecurity(ticker.toString());
            setLoading(false);
            if (sec === undefined){
                return;
            }
            setSecurity(sec);
            setHolding(getHoldings().find(x=>x.ticker===security?.ticker));
        }
    },[month])

    const handleNextMonth = ()=>{
        updateSecurityState(importSecurities());
        setMonth(prev=>{
          const n = prev +1;
          setLocalstorageMonth(n);
          setBalance(getBalance());
          return n
        })
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if (security === undefined){
            console.error("security not loaded correctly")
            throw new Error("Security not loaded correctly")
        }
        const lastIndex = security.priceHistory.length-1;
        let  matches = e.target.value.match(/[0-9]+.{0,1}([0-9]{1,2})?/);
        if (!matches){
            e.target.value = ""
        }else{
            e.target.value = matches[0]
        }
        const holding = getHoldings().find(x=>x.ticker === security.ticker);
        if (e.target.id ==="units"){
            let input_units = parseInt(e.target.value);
            if (Number.isNaN(input_units)){
                // not a valid number
                setUnits("");
            }else{
                // is valid bumber
                if (isBuy && input_units*security.priceHistory[lastIndex] >= balance){
                    // valid number + buy side
                    input_units = Math.floor(balance/security.priceHistory[lastIndex]);
                    setUnits(input_units.toString())
                    setValue((input_units*security.priceHistory[lastIndex]).toFixed(2))
                }
                // less than 0 or we are selling but don't own the stock
                if (input_units < 0 || (!isBuy  && !holding)){
                    input_units = 0;
                }
                // valid number + sell side
                if (!isBuy && holding &&(input_units > holding.units)){
                    // we own the share
                    input_units = holding.units;
                }
                setUnitAlert(false)
                setUnits(input_units.toString());
                setValue((input_units*security.priceHistory[lastIndex]).toFixed(2));
            }
        }else{
            
            if(e.target.value.endsWith('.') || e.target.value === ""){
                // its not yet worth it to do any calculations as the numbers are not valid
                setValue(e.target.value)
                setUnitAlert(true)
            }else{
                let input_value = parseFloat(e.target.value);
                if (isBuy && input_value > balance){
                    input_value = balance;
                }
                if (input_value < 0 || (!isBuy && !holding)){
                     input_value = 0;
                }
                if (!isBuy && holding && (holding.units*security.priceHistory[lastIndex] < input_value)){
                    input_value = holding.units*security.priceHistory[lastIndex]
                }

                setValue(input_value.toString());
                const units_for_value = (input_value/security.priceHistory[lastIndex])
                setUnitAlert(!Number.isInteger(units_for_value))
                setUnits(units_for_value.toString())
                
            }
        }


    }

    const handleConfirm = ()=>{
        if (security === undefined){
            console.error("security not loaded correctly")
            throw new Error("Security not loaded correctly")
        }
        const u = parseInt(units);
        const v = parseFloat(value);
        if (u === 0|| v === 0){
            // early return if either u or v is 0, we know that both must be greater than 0
            // because they are interconnected inputs
            return;
        }
        const holdings = getHoldings();
        const holding = holdings.findIndex(x=>x.ticker===security.ticker);
        if (Number.isInteger(u) && !Number.isNaN(v)){
            if (isBuy){
                if (holding !==-1){
                    // we own this stock
                    const new_total_units = holdings[holding].units + u;
                    holdings[holding].averagePrice = parseFloat((((holdings[holding].averagePrice*holdings[holding].units) + (v)) / (holdings[holding].units + u)).toFixed(2))
                    holdings[holding].units = new_total_units;
                }else{
                    // we don't own this stock
                    holdings.push({averagePrice:security.priceHistory[security.priceHistory.length-1], units:u,ticker:security.ticker})
                }
                setBalance(prev=>{
                    const new_balance = prev - v;
                    setLocalstorageBalance(new_balance)
                    setLocalstorageHoldings(holdings);
                    setHolding(getHoldings().find(x=>x.ticker===security?.ticker))
                    setBannerDetails({text:"bought "+u+" units of "+security.ticker, isGood:true})
                    setShowBanner(true)  
                    return new_balance;
                })
            }else{
                if (holding !== -1){
                    const new_units = holdings[holding].units - u;
                    if (new_units ==0){
                        holdings.splice(holding,1)
                    }else{
                        holdings[holding].units = new_units;
                    }
                    setBalance(prev=>{
                        const new_balance = prev + v;
                        setLocalstorageBalance(new_balance);
                        setLocalstorageHoldings(holdings);
                        setHolding(getHoldings().find(x=>x.ticker===security?.ticker))
                        setBannerDetails({text:"sold "+u+" units of "+security.ticker, isGood:true})
                        setShowBanner(true)  
                        return new_balance
                    })
                }else if (holding === -1 && u > 0){
                    // sell, units were greater than 0 and holding for current security was not found
                    setBannerDetails({text:"Sell not allowed, you do not own this share", isGood:false})
                    setShowBanner(true)
                }
                // sell but units were 0 do nothing
            }
        }
        setUnits('0');
        setValue('0.00');
    }

    if (security === undefined && !loading){
        return (
            <div className='flex flex-col w-screen h-screen justify-center items-center text-2xl'>
                Ticker not valid, please check url or go back home using the button below
                <Link className='flex bg-blue-500 hover:bg-blue-700 text-white px-5 rounded-lg' href={"/"}>Home</Link>
            </div>
        )
    }else{
        return (
            <div className='flex flex-col w-screen h-screen overflow-hidden justify-center items-center text-xl gap-2 p-2'>
                { showBanner && <Banner bannerDetails={bannerDetails} setShow={setShowBanner}/>}
                <title>{security?.ticker}</title>
                <div className='flex w-full h-10 border-2 rounded-lg justify-between px-5 items-center'>
                    <div className='flex gap-2 text-lg items-center'>
                        <div>Month:{month}</div>
                        <button onClick={()=>{handleNextMonth()}} className='flex h-8 text-lg items-center justify-center bg-blue-500 text-white px-3 rounded-lg'>Next Month</button>
                    </div>
                    <div className='flex'>
                        {security?.ticker.toUpperCase()}
                    </div>

                    <div className='flex '>
                        <div>Balance: ${balance.toFixed(2)}</div>
                    </div>
                </div>
                {(security !==undefined) &&
                <div className='flex w-full h-full flex-row gap-2'>
                    {/* left side */}
                    <div className='flex flex-col w-full min-w-1/5 h-full border-2 rounded-lg grow shrink'>
                        <div className='flex w-full h-fit px-2 text-sm justify-center'>You Own {(holding?.units)?.toString() || "0"} units of BSM {holding && `(\$${(holding.units*security.priceHistory[security.priceHistory.length-1]).toFixed(2)})`}</div>
                        <LineChart
                            sx={{
                                minWidth: '10%',
                                minHeight: "50%",
                                maxHeight:'95%' //this will need 
                            }}
                            dataset={security.priceHistory.map((x, i)=>({price:x, month: ((month|| 0) + i-security.priceHistory.length)}))}
                            xAxis={[{ scaleType: 'point', dataKey:'month' }]}
                            yAxis={[{
                                min:(Math.min(...security.priceHistory, (holding?.averagePrice || security.priceHistory[0]))*0.99),
                                max:(Math.max(...security.priceHistory,(holding?.averagePrice || security.priceHistory[0]))*1.01)
                            }]}
                            series={holding?[
                                { curve:'natural', dataKey:'price',label:'price of '+security.ticker.toUpperCase()},
                                {curve:'linear',data:Array(security.priceHistory.length).fill([(holding.averagePrice)])
                                    ,label:'average price of your holdings'
                                }
                            ]:
                            [
                                { dataKey:'price',label:'price of '+security.ticker.toUpperCase()}
                            ]}
                        />
                    </div>
                    {/* right side (news/ orders menu) */}
                    <div className='flex flex-col w-full h-full gap-2 max-w-[40%]'>
                        {/* news menu */}
                        <div className={`flex flex-col w-full overflow-hidden h-full`}>
                            <div className='flex flex-col w-full items-center h-full overflow-y-hidden p-1 gap-5'>
                                    <div className='flex flex-col w-fit h-fit rounded-xl border-2 justify-center items-center'>
                                        <div className='flex text-lg'>Upcoming events</div>
                                        <div className='flex flex-col w-full h-fit rounded-lg px-2 bg-zinc-300 text-lg'>
                                            <div className='flex justify-center w-full text-lg'>{security.recentEvents[0].title}</div>
                                            <div className='flex flex-wrap text-[15px] p-1'>{security.recentEvents[0].description}</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col w-full h-50 border-2 rounded-lg justify-center items-center '>
                                    <div className='flex text-lg'>Historical events</div>
                                    <div className='flex w-full h-full overflow-y-auto'>
                                        <div className='flex flex-col w-full h-fit gap-2 px-2'>
                                            {security.recentEvents.slice(1).map((x,i)=>
                                                <div key={i} className='flex flex-col w-full h-fit rounded-lg px-2 bg-zinc-300 text-lg'>
                                                    <div className='flex justify-center w-full text-lg'>{x.title}</div>
                                                    <div className='flex flex-wrap text-[15px] p-1'>{x.description}</div>
                                                </div>
                                            
                                            )}
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                        {/* orders menu */}
                        <div className='flex flex-col border-2 rounded-lg w-full h-full gap-2 p-2'>
                            <div className='flex w-full h-fit justify-center'>Place an order for {security.ticker}</div>
                            <div className='flex flex-col w-full h-full items-center justify-between'>
                                {/* buttons at the top to decide whether it's a buy order or a sell order*/}
                                <div className='flex w-[60%] justify-center items-center h-10'>
                                    <div onClick={()=>{setIsBuy(true); setValue('0.00'); setUnits('0')}} className={`flex w-full h-8 cursor-pointer border-2 border-green-500 justify-end px-5 rounded-l-lg ${isBuy?"bg-green-500 text-white ":" text-green-500 bg-white"}`}>Buy</div>
                                    <div onClick={()=>{setIsBuy(false); setValue('0.00'); setUnits('0')}} className={`flex w-full h-8 cursor-pointer border-2 border-red-500  px-5 rounded-r-lg ${!isBuy?"bg-red-500 text-white ":" text-red-500 bg-white"}`}>Sell</div>
                                </div>
                                <div className='flex flex-col gap-1 w-full h-20 items-center'>
                                    <div className='flex w-[60%] h-10 px-2 gap-2'>
                                        <div className='flex w-full'>units</div>
                                        <div className='flex w-full'>$ value</div>
                                    </div>  
                                    <div className='flex w-[60%] h-10'>
                                        <input onChange={handleChange} value={!Number.isNaN(units)?units.toString() : ""} id='units' className='flex px-2 w-full border-2 h-8 rounded-l-lg' />
                                        <input id = "value" onChange={handleChange} value={value} className='border-2 h-8 flex w-full border-l-0 rounded-r-lg px-2'/>
                                    </div>     
                                    {(unitAlert === true) && <div className='flex flex-col w-full text-xs'>Warning, the value you have entered does not equate well to a full unit, we will automatically round it down to the nearest value when you confirm the order</div>}
                                </div>
                                <button onClick={()=>{handleConfirm()}} className={`flex flex-col h-10 justify-center w-1/4 rounded-lg items-center text-white ${isBuy? "bg-green-500 hover:bg-green-700" :"bg-red-500 hover:bg-red-700"}`}>
                                    {isBuy? "Buy":"Sell"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>}

            </div>
        )
    }


    
}
