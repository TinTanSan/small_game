import  {Property} from "@/interfaces/property";
import { generateUUID } from "../commons";
import { propertyDefaults, specialProperties } from "./constants";

export function importProperties(): Array<Property>{
    if(typeof window !== "undefined"){
        const propStr = localStorage.getItem("properties");
        if (propStr !== null){
            return JSON.parse(propStr);
        }
        else{
            console.warn("type of window was undefined, could not import properties properly")
            localStorage.setItem("properties", "[]");
        }
    }
    return [];
}

export function exportProperties(properties:Array<Property>){
    if(typeof window !== "undefined"){
        localStorage.setItem("properties", JSON.stringify(properties));
    }else{
        console.warn("type of window was undefined, could not export properties properly")
    }
    
}

export function createRandomProperties(curMonth: number):Array<Property>{
    if (typeof window !== "undefined"){
        // 0.1% x the month chance to be a special property
        // this way, the special properties are more readily availble towards the end of the game
        const shouldBeSpecialProperty = Math.random() < (0.001*curMonth);
        const props:Array<Property> = [];
        if (shouldBeSpecialProperty){
            // return any of the 10 special properties
            props.push(specialProperties[Math.floor(Math.random()*10)])
        }
        props.concat(propertyDefaults.propertySize.map((size,i)=>{
            const pType = propertyDefaults.propertyType[Math.floor(Math.random()*propertyDefaults.propertyType.length)];
            const name = size + " "+pType;
            const rPrice = propertyDefaults.recommendedPrice[Math.min(i*3,Math.floor(Math.random()*3*i))]
            const rIncome = propertyDefaults.recommendedIncome[Math.min(i*3,Math.floor(Math.random()*3*i))];
            const rexpense = propertyDefaults.recommendedExpenses[Math.min(i*3,Math.floor(Math.random()*3*i))]
            return {
                id: generateUUID(),
                loan: {loanAmountRemaining:rPrice, downPayment: rPrice*0.2, interestRate: propertyDefaults.interestRates[i], startMonth:-1},
                name,
                totalValue: rPrice,
                income: rIncome,
                expenses: rexpense,
                isPPR : false,
            }
        }))
        exportProperties(props);
        return props;
    }else{
        console.warn("Cannot create random properties, typeof window is undefined in createRandomProperties");
        return [];
    }
}


export function buyProperty(properties:Array<Property>,downPayment:number, property:Property, fullBuy:boolean){
    if (fullBuy){
        property.loan.loanAmountRemaining = 0;
        
    }
    property.loan.downPayment = downPayment;
    properties.push(property);
}


export function sellProperty(properties:Array<Property>, id: string){
    const idx = properties.findIndex(x=>x.id===id);
    if (idx !== -1){
        const property =properties.splice(idx,1)
        return (property[0].totalValue - property[0].loan.loanAmountRemaining);
    }else{
        console.warn("tried to sell property, but the property was not found in the list of properties, no property with id:" + id)

    }
    return 0;
}


export function collectIncome(properties:Array<Property>):number{
    return properties.reduce((acc:number, prop:Property)=>{
        let payment = 0;
        if (prop.loan.loanAmountRemaining > 0){
            payment += prop.loan.loanAmountRemaining*(((prop.loan.interestRate/12)+1)^360) / ((((prop.loan.interestRate/12)+1)^360)-1)
        }
        payment += prop.expenses;
        
        // this number is allowed to be less than 0
        return prop.income - prop.expenses;
    },0)
}
