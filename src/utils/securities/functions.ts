import {Security, Event, Holding} from "@/interfaces/securities";
import {commodities, companies, events} from "@/utils/securities/constants";
export function setUpSecurities(){
    if (typeof window !== 'undefined'){
        const secStr = localStorage.getItem("securities");
        if (secStr !== null){
            const securityPrices:Array<{ticker:string, priceHistory: number[], recentEvents:Event[]}> = JSON.parse(secStr);
            const securities = companies;
            securities.concat(commodities)
            securities.forEach((x)=>{
                // it will always find the security, refer to else statement
                const storedSecurity = securityPrices.find((s)=>s.ticker===x.ticker);
                x.priceHistory = storedSecurity?.priceHistory || [];
                x.recentEvents = storedSecurity?.recentEvents || [];
            })
            return securities;
        }else{
            const securities = companies;
            securities.concat(commodities)
            assignEvent(securities);
            localStorage.setItem("securities", JSON.stringify(securities.map((security:Security)=>({ticker:security.ticker, priceHistory:security.priceHistory, events: security.recentEvents}))));
            console.log("successfully set up securities")
            return securities;
        }
    }else{
        console.warn("Call to setUpSecurities failed due to window being undefined")
    }
}

export function exportSecurities(securities:Array<Security>){
    if (typeof window !== "undefined"){
        localStorage.setItem("securities", JSON.stringify(securities));
    }else{
        console.warn("Call to exportSecurities failed due to window being undefined")
    }
}

export function assignEvent(securities:Array<Security>){
    // assign a new event to each security, to be run at the start of each month but only after updateSecurityPrices has been called
    securities.forEach((security:Security)=>{
        const ticker = security.ticker;
        const availableEvents = events[ticker];
        const randIdx = Math.floor(Math.random()*availableEvents.length);
        const randomEvent = availableEvents[randIdx];
        // we scrape together whether the event is positive or negative based on whether the impact is > 0 or not
        security.recentEvents.unshift({...randomEvent, type:randomEvent.impact > 0? "positive" : "negative"});
        // ensure we only store 12 events, i.e. events for a whole year
        if (security.recentEvents.length > 12){
            security.recentEvents.pop()
        }
    })

}

export function updateSecurityPrices(securities:Array<Security>){
    securities.forEach((sty:Security)=>{
        const last = sty.priceHistory.length - 1;
        if (sty.recentEvents.length === 0){
            assignEvent(securities);
        }
        const newPrice = parseFloat((sty.priceHistory[last] + sty.priceHistory[last]*(Math.min(Math.random(),0.25)*sty.recentEvents[0].impact)).toFixed(2));
        sty.priceHistory.push(newPrice);
        if (sty.priceHistory.length>12){
            sty.priceHistory.shift()
        }
    })
}

export function updateSecurityState(securities:Array<Security>):Array<Security>{
    const newSecurities = securities.map(x=>({...x}));
    // update prices for current month
    updateSecurityPrices(newSecurities);
    // assignevents for up coming months
    assignEvent(newSecurities);
    exportSecurities(newSecurities);
    return newSecurities;
}

