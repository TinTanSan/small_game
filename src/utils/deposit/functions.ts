import { Deposit } from "@/interfaces/deposit";
import { generateUUID } from "../commons";


export function exportDeposits(deposits: Array<Deposit>){
    // write/update whatever is in localstorage with new state
    localStorage.setItem("deposits",JSON.stringify(deposits));
}
export function importDeposits():Array<Deposit>{
    // import frmo localstorage
    return JSON.parse(localStorage.getItem("deposits") || "[]")

}

/*
modifies the deposits array in place
*/
export function addDeposit(deposits:Array<Deposit>,amount:number,startMonth:number, interestRate:number , minimumTerm:number){
    deposits.push({id:generateUUID(),startingAmount:amount, startMonth, interestRate, minimumTerm})
    exportDeposits(deposits);
}


export function willIncurFee(deposit:Deposit, curMonth:number){
    return deposit.startMonth + deposit.minimumTerm < curMonth;
}

export function withdraw(deposits:Array<Deposit> , id:string, curMonth:number){
    const idx = deposits.findIndex(x=>x.id === id); 
    if (idx === -1){
        return 0;
    }
    const deposit = deposits.splice(idx,1)[0];
    return deposit.startingAmount+((curMonth-deposit.startMonth)*deposit.interestRate*deposit.startingAmount);
}
