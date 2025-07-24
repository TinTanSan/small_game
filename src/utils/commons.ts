import { Property } from "@/interfaces/property";
import { setUpSecurities } from "./securities/functions";
import { Deposit } from "@/interfaces/deposit";
import { Holding } from "@/interfaces/securities";

export function generateUUID(): string{
    if(typeof window !== "undefined"){
       return window.crypto.randomUUID();
    }
    return "";
}

export function getMonth():number{
    if (typeof window !== "undefined"){
        const monthStr = localStorage.getItem("month")
        if (monthStr ===null){
            throw new Error("Month not found in localstorage")
        }
        return JSON.parse(monthStr);
    }
    throw new Error("window object was undefined")
}

export function setLocalstorageMonth(month:number){
    if (typeof window !=='undefined'){
        localStorage.setItem("month", month.toString());
    }else{
        throw new Error("window object was undefined")
    } 
}

export function getBalance():number{
    if (typeof window !== 'undefined'){
        const balanceStr = localStorage.getItem("balance");
        if (balanceStr == null){
            throw new Error("balance not found in localstorage")
        }
        return JSON.parse(balanceStr) 
    }
    throw new Error("window object was undefined")
}

export function setLocalstorageBalance(balance:number){
    if (typeof window !=='undefined'){
        localStorage.setItem("balance", balance.toString());
    }else{
        throw new Error("window object was undefined")
    }
    
}

export function getProperties():Array<Property>{
    if (typeof window !== 'undefined'){
        const propertyStr = localStorage.getItem("properties");
        if (propertyStr == null){
            throw new Error("properties not found in localstorage")
        }
        return JSON.parse(propertyStr) 
    }
    throw new Error("window object was undefined")
}

export function setLocalstorageProperties(properties:Array<Property>){
    if (typeof window !=='undefined'){
        localStorage.setItem("properties", JSON.stringify(properties));
    }else{
        throw new Error("window object was undefined")
    }
}

export function getDeposits():Array<Deposit>{
    if (typeof window !== "undefined"){
        const depositStr = localStorage.getItem("deposits");
        if (depositStr === null){
            throw new Error("deposits not found in localstorage")
        }
        return JSON.parse(depositStr)
    }
    throw new Error("window object was undefined")
}

export function setLocalstorageDeposits(deposits:Array<Deposit>){
    if (typeof window !=='undefined'){
        localStorage.setItem("deposits", JSON.stringify(deposits));
    }else{
        throw new Error("window object was undefined")
    }
    
}

export function getHoldings():Array<Holding>{
    if (typeof window !== "undefined"){
        const holdingsStr = localStorage.getItem("holdings");
        if (holdingsStr === null){
            throw new Error("holdings not found in localstorage")
        }
        return JSON.parse(holdingsStr)
    }
    throw new Error("window object was undefined")
}

export function setLocalstorageHoldings(holdings:Array<Holding>){
    if (typeof window !=='undefined'){
        localStorage.setItem("holdings", JSON.stringify(holdings));
    }else{
        throw new Error("window object was undefined")
    }
    
}

export function setUpLocalStorage(){
    if (typeof window !== "undefined"){
        // set up localstorage only if the localstorage's length is not 5
        console.log(localStorage.length)
        if (localStorage.length !== 6){
            console.log("setting up localStorage")
            if (localStorage.length > 0){
                console.warn("localstorage bad state, clearing localstorage before continuing")
                localStorage.clear()
            }
            localStorage.setItem("securities", JSON.stringify(setUpSecurities()));
            localStorage.setItem("properties", JSON.stringify([]));
            localStorage.setItem("deposits",JSON.stringify([]));
            localStorage.setItem("holdings",JSON.stringify([]));
            localStorage.setItem("month","13");
            localStorage.setItem("balance","1200");
        }
    }else{
        throw new Error("Cannot set up local storage, window is undefined")
    }
    
}

export function tearDownLocalStorage(){
    if (typeof window !== "undefined"){
        localStorage.clear();
        console.log("successfully cleared localStorage")
    }
}