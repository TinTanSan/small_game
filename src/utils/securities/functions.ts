import {Security, Event, Holding} from "@/interfaces/securities";
import {commodities, companies, events} from "@/utils/securities/constants";
export function setUpSecurities():Array<Security>{
    const securities = companies.concat(commodities);
    console.log(securities.length)
    assignEvent(securities);
    return securities;
}

export function importSecurities():Array<Security>{
    if (typeof window !== "undefined"){
        return JSON.parse(localStorage.getItem("securities") || "[]")
    }
    return [];
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
        // random chance to have a boring month where there are no major events happening with the security
        const randomChance = Math.round(Math.random()*10);
        const randIdx = Math.floor(Math.random()*availableEvents.length);
        const randomEvent = availableEvents[randIdx];
        // 
        if (randomChance <=1){
            randomEvent.title = "A boring month for "+security.ticker;
            randomEvent.description = "Nothing really interesting happened this month, investors are busy min-maxing profits and news agencies are busy elsewhere";
            randomEvent.impact = security.recentEvents[0].impact * 0.99;
        }
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

export function getSecurity(ticker:string):Security | undefined{
    const t = ticker.toUpperCase();
    if (typeof window !== 'undefined'){
        
        let securities:Array<Security> = JSON.parse(localStorage.getItem("securities")||"[]");
        return securities.find(x=>x.ticker === t);
    }
    return undefined;
}
