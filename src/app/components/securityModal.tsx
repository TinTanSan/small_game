import { Holding, Security } from '@/interfaces/securities'
import { LineChart } from '@mui/x-charts'
import { setGlobal } from 'next/dist/trace'
import React, { SetStateAction, useEffect, useState } from 'react'
import Banner, { BannerDetails } from './Banner'

type props = {
    month: number,
    balance:number,
    setBalance:React.Dispatch<React.SetStateAction<number>>,
    security: Security,
    securities: Array<Security>,
    holdings: Array<Holding>,
    setHoldings: React.Dispatch<React.SetStateAction<Array<Holding>>>
}

export default function SecurityModal({setBalance,month,security, balance, holdings, securities, setHoldings}:props) {
  const [buyUnitsSelected, setUnits] = useState(0);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showSellModal, setShowSellModal] = useState(false);
  const [sellUnitsSelected, setSellUnits] = useState(0);
  const [bannerDetails, setBannerDetails] = useState<BannerDetails>({text:"", isGood:false});
  const [showBanner, setShowBanner] = useState(false);
  
  const handleBuy = ()=>{
    if(Number.isNaN(buyUnitsSelected)){
      setBannerDetails({text:"invalid number of units to buy", isGood:false});
      setShowBanner(true);
      return;
    }
    const totalRequired = security.priceHistory[11]*buyUnitsSelected;
    if (balance < totalRequired){
      setBannerDetails({text:"You do not have enough funds to complete this action", isGood:false});
      setShowBanner(true);
      return;
    }
    setBalance(prev=>prev-totalRequired);
    const holdingFound = holdings.findIndex(sec=>sec.ticker === security.ticker)
    if (holdingFound === -1){
      setHoldings(prev=>[...prev, {ticker:security.ticker, units: buyUnitsSelected, averagePrice: security.priceHistory[11]}]);
    }else{
        const holding = holdings[holdingFound];
        holding.averagePrice = parseFloat((((holding.averagePrice*holding.units) + (security.priceHistory[11] * buyUnitsSelected)) / (holding.units + buyUnitsSelected)).toFixed(2))
        holding.units += buyUnitsSelected;
        setHoldings([...holdings.filter((_,i)=>i!==holdingFound), holding])
    }
  }

  const handleSell = () =>{
    if(Number.isNaN(sellUnitsSelected)){
      setBannerDetails({text:"invalid number of units to sell", isGood:false});
      setShowBanner(true);
      return;
    }
    const ownedSecurity = holdings.find(x=>x.ticker === security.ticker);
    if (!ownedSecurity){
      setBannerDetails({text:"You don't own any shares of this company", isGood:false});
      setShowBanner(true);
      return;
    }
    if (sellUnitsSelected > ownedSecurity.units){
        setBannerDetails({text:"You don't own "+sellUnitsSelected+" shares of this company", isGood:false});
        setShowBanner(true);
        return;  
    }
      // here we want to branch into 2 things, if we have brought the units down to 0 then we want to remove it from our holdings, otherwise, 
      // just edit the units.
    
    let moneyToAdd = security.priceHistory[11]*sellUnitsSelected;
    let leftOverUnits = ownedSecurity.units - sellUnitsSelected;
    if (leftOverUnits ===0){
      setHoldings(prev=>prev.filter(x=>x.ticker!==security.ticker));
    }else{
      ownedSecurity.units = leftOverUnits;
      setHoldings([...holdings.filter((x)=>x.ticker!==ownedSecurity.ticker), ownedSecurity]);
      
    }
    setBalance(prev=>(prev+moneyToAdd));
    setSellUnits(0);

  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>, typeOfOrder:"sell" | "buy"="sell")=>{
    if(e.target.value !== ""){
      var parsedValue = parseInt(e.target.value);
      const holding = holdings.find(x=>x.ticker === security.ticker);
      if (parsedValue < 0){
        e.target.value = "1";
      }else if (typeOfOrder === "buy" && balance< security.priceHistory[11]*parsedValue){
        e.target.value = (balance / security.priceHistory[11]).toFixed(0);
      }else if (typeOfOrder === "sell" && holding && holding.units < sellUnitsSelected){
        e.target.value = holding? holding.units.toString() : (0).toString()
      }
    }
    if (typeOfOrder === 'buy'){
      setUnits(parseInt(e.target.value));
    }else{
      setSellUnits(parseInt(e.target.value));
    }
    

  }
  const maxBuyUnits = ()=>{
    setUnits(Math.floor(balance / security.priceHistory[11]));
  }
  const maxSellUnits = ()=>{
    console.log(holdings.find(x=>x.ticker === security.ticker)?.units || 0)
    setSellUnits(holdings.find(x=>x.ticker === security.ticker)?.units || 0)
  }


  
  const buttonStyle = "flex border-2 rounded-lg w-32 justify-center items-center h-8";
  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-5 py-10 border-2 border-zinc-300 rounded-lg shadow-2xl'>
            {showBanner && <Banner bannerDetails={bannerDetails}  setShow={setShowBanner}/>}
            <div className='flex text-2xl'>Price Movements of {security.name} ({security.ticker})</div>
            {
              showBuyModal && 
              <div className='flex flex-col absolute z-20 h-[40vh] w-1/2 items-center bg-zinc-200 rounded-lg p-2 gap-2'>
                  <div className='flex text-xl'>Confirm details of BUY order</div> 
                <div className='flex flex-col gap-5 w-full items-center h-full'>
                  <div className='flex mb-5'>
                    The number of units you can buy is: {Math.floor(balance / security.priceHistory[11])}
                  </div>
                  <div className='flex flex-row h-fit gap-2 items-center'>
                    <div>
                      Number of units you want to buy:
                    </div>
                    <input type='number' onChange={(e)=>{handleChange(e, "buy")}} value={buyUnitsSelected} className='flex px-1 border-2 border-zinc-400 h-8 w-32 rounded-lg'/>
                    <button onClick={()=>{maxBuyUnits()}} className='flex h-8 items-center px-2 rounded-lg hover:bg-zinc-500 text-white bg-zinc-400'>max</button>
                  </div>
                  <div className='text-xl'>
                    value of order: <b>${!Number.isNaN(buyUnitsSelected)?
                    (buyUnitsSelected*security.priceHistory[11]).toFixed(2) : "0.00"}</b>
                  </div>
                  
                </div>
                <div className='flex w-full justify-center h-20 items-center gap-10'>
                  <button onClick={()=>{setShowBuyModal(false)}} className='flex bg-red-500 hover:bg-red-700 text-white px-5 h-8 rounded-xl justify-center items-center'>Close</button>
                  <button onClick={()=>{handleBuy()}} className='flex bg-green-500 hover:bg-green-700 text-white px-5 h-8 rounded-xl justify-center items-center'>Confirm Buy</button>
                </div>

              </div>
            }
            {
              showSellModal && <div className='flex flex-col absolute z-20 w-1/2 bg-zinc-200 rounded-lg h-[40vh] p-2'>
                
                <div className='flex flex-col w-full items-center h-full gap-4 '>
                  <div className='flex w-full text-2xl justify-center'>Sell your shares</div>
                  <div className='text-lg'>
                    You own: {holdings.find(x=>x.ticker===security.ticker)?.units || 0} units of {security.ticker}
                  </div>
                  <div className='flex flex-row h-fit gap-4 items-center'>
                    <div>
                      Number of units you want to sell:
                    </div>
                    <input type='number' onChange={(e)=>{handleChange(e)}} value={sellUnitsSelected.toString()} className='flex px-1 border-2 border-zinc-400 h-8 w-32 rounded-lg'/>
                    <button onClick={()=>{maxSellUnits()}} className='flex h-8 items-center px-2 rounded-lg hover:bg-zinc-500 text-white bg-zinc-400'>max</button>
                  </div>
                  <div className='flex w-full h-20 text-xl justify-center items-center'>
                    Value of order:<b> ${(!Number.isNaN(buyUnitsSelected))?(sellUnitsSelected*security.priceHistory[11]).toFixed(2) : "0.00"}</b>
                  </div>

                </div>
                <div className='flex w-full justify-center gap-5 h-14'>
                  <div className='bg-red-500 text-white cursor-pointer w-fit px-5 rounded-lg h-8 justify-center items-center flex' onClick={()=>{setShowSellModal(false)}}>
                    Close
                  </div>
                  <div onClick={handleSell} className='bg-green-500 flex text-white cursor-pointer w-fit px-5 rounded-lg h-8 justify-center items-center'>
                    Confirm sell
                  </div>
                </div>
              </div>
            }


            <LineChart
            width={800}
            height={350}
              dataset={security.priceHistory.map((x, i)=>({price:x, month: (month + i-security.priceHistory.length)}))}
              xAxis={[{ scaleType: 'point', dataKey:'month' }]}
              series={[{dataKey:'price'}]}
            />
            <div className='flex flex-row w-full justify-center gap-10'>
                <button onClick={()=>{setShowSellModal(false);setShowBuyModal(true)}} className='flex w-fit px-5 h-8 justify-center items-center rounded-lg bg-green-500 hover:bg-green-700 text-white'>Buy</button>
                <button onClick={()=>{setShowBuyModal(false);setShowSellModal(true);}} className='flex w-fit px-5 h-8 justify-center items-center rounded-lg bg-red-500 hover:bg-red-700 text-white'>Sell</button>

            </div>
        </div>
  )
}
