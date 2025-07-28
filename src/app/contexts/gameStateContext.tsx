import { Deposit } from "@/interfaces/deposit";
import { Property } from "@/interfaces/property";
import { Holding, Security } from "@/interfaces/securities";
import { createContext, useState } from "react";


export interface GameState{
    month:number,
    balance:number,
    
    securities: Array<Security>,
    holdings: Array<Holding>,

    deposits: Array<Deposit>,
    properties: Array<Property>
}

interface GameStateCtxType{
    gameState: GameState | undefined,
    setGameState: React.Dispatch<React.SetStateAction<GameState | undefined>>
}




export const GameStateContext = createContext<GameStateCtxType | undefined>(undefined)