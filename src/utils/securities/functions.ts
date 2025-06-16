import {Security, Event, Holding} from "@/interfaces/securities";
import {commodities, companies, events} from "@/utils/securities/constants";
export function setUpSecurities(){
    if (typeof window !== 'undefined'){
        const secStr = localStorage.getItem("securities");
        if (secStr !== null){
            const securityPrices:Array<{ticker:string, price:number}> = JSON.parse(secStr);
            const securities = companies;
            securities.concat(commodities)
            securities.forEach((x)=>{
                // it will always find the security, refer to else statement
                x.currentValue = securityPrices.find(s=>s.ticker===x.ticker)?.price || 0;
            })
            // return securities;
        }else{
            const securities = companies;
            securities.concat(commodities)
            
            localStorage.setItem("securities", JSON.stringify(securities.map((security:Security)=>({ticker:security.ticker, price:security.currentValue}))));
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
        const availableEvents = events[Symbol(ticker)];
        const randomEvent = availableEvents[Math.random()*availableEvents.length]
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
        sty.currentValue += sty.currentValue*sty.recentEvents[0].impact;
    })
}

export function updateSecurityState(securities:Array<Security>):Array<Security>{
    const newSecurities = securities.map(x=>({...x}));
    // update prices for current month
    updateSecurityPrices(newSecurities);
    // assignevents for up coming months
    assignEvent(newSecurities);

    return newSecurities;
}

