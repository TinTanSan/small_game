'use client'
import { Security } from '@/interfaces/securities';
import { getBalance, getHoldings, getMonth } from '@/utils/commons';
import { getSecurity } from '@/utils/securities/functions';
import { LineChart } from '@mui/x-charts/LineChart';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Ticker() {
    let {ticker} = useParams();
    const [units, setUnits] = useState("0");
    const [value,setValue]= useState("0.00");
    const [unitAlert, setUnitAlert] = useState(false);
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
            console.log(sec?.recentEvents.slice(1))
            setMonth(getMonth())
            setBalance(getBalance())
        }
    },[])
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if (security === undefined){
            console.error("security not loaded correctly")
            throw new Error("Security not loaded correctly")
        }
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
                
                if (isBuy && input_units*security.priceHistory[11] > balance){
                    // valid number + buy side
                    input_units = Math.floor(balance/security.priceHistory[11]);
                    setUnits(input_units.toString())
                    setValue((input_units*security.priceHistory[11]).toFixed(2))
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
                setValue((input_units*security.priceHistory[11]).toFixed(2))   
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
                if (!isBuy && holding && (holding.units*security.priceHistory[11] < input_value)){
                    input_value = holding.units*security.priceHistory[11]
                }

                setValue(input_value.toString());
                const units_for_value = (input_value/security.priceHistory[11])
                setUnitAlert(!Number.isInteger(units_for_value))
                setUnits(units_for_value.toString())
                
            }
        }


    }


    if (ticker === undefined){
        return (
            <div>
                Ticker not valid, please check url
            </div>
        )
    }else{
        return (
            <div className='flex flex-col w-screen h-screen overflow-hidden justify-center items-center text-xl gap-2 p-2'>
                <title>{security?.ticker}</title>
                <div className='flex w-full h-10 border-2 justify-center border-zinc-300'>{ticker.toString().toUpperCase()}</div>
                {(security !==undefined) &&
                <div className='flex w-full h-full flex-row gap-2'>
                    {/* left side only graph */}
                    <div className='flex flex-col w-full min-w-1/5 h-full border-2 rounded-lg grow shrink'>
                        <LineChart
                            sx={{
                                minWidth: '500px',
                            }}
                            dataset={security.priceHistory.map((x, i)=>({price:x, month: ((month|| 0) + i-security.priceHistory.length)}))}
                            xAxis={[{ scaleType: 'point', dataKey:'month' }]}
                            series={[{dataKey:'price'}]}
                        />
                    </div>
                    {/* right side (news/ orders menu) */}
                    <div className='flex flex-col w-full h-full gap-2 max-w-[40%]'>
                        {/* news menu */}
                        <div className={`flex flex-col border-2 w-full overflow-hidden h-full ${showNewsOrOrder?" visible":" collapse"}`}>
                            <div className='flex w-full gap-2 h-full overflow-y-auto p-1'>
                                <div className='flex flex-col w-full h-full items-center'>
                                    <div className='flex text-lg'>Upcoming events</div>
                                    <div className='flex flex-col w-full h-fit rounded-lg px-2 bg-zinc-300 text-lg'>
                                        <div className='flex justify-center w-full text-lg'>{security.recentEvents[0].title}</div>
                                        <div className='flex flex-wrap text-[15px] p-1'>{security.recentEvents[0].description}</div>
                                    </div>

                                    <div className='flex text-lg'>Historical events</div>
                                    <div className='flex w-full h-90 overflow-y-auto'>
                                        <div className='flex flex-col w-full h-fit gap-2'>
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
                        <div className='flex flex-col border-2 w-full h-full gap-2 p-2'>
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
                                        <input id = "value" onChange={handleChange} value={value} className='border-2 h-8 flex w-full border-l-0 rounded-r-lg'/>
                                    </div>     
                                    {(unitAlert === true) && <div className='flex flex-col w-full text-xs'>Warning, the value you have entered does not equate well to a full unit, we will automatically round it down to the nearest value when you confirm the order</div>}
                                </div>
                                <button className={`flex flex-col h-10 justify-center w-1/4 rounded-lg items-center text-white ${isBuy? "bg-green-500 hover:bg-green-700" :"bg-red-500 hover:bg-red-700"}`}>
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
