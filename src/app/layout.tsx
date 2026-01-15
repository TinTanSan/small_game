'use client'
import { isValidElement, ReactElement, ReactNode, useEffect, useState } from "react";
import "./globals.css";
import { GameState, GameStateContext } from "./contexts/gameStateContext";
import { importFromLocalStorage, setUpLocalStorage } from "@/utils/commons";
import Navbar from "./components/navbar";
import { PageContext } from "./contexts/pageContext";
import { headers } from "next/headers";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const [gameState, setGameState] = useState<GameState | undefined>(undefined);
  const [page, setPage] = useState("Home");

  useEffect(()=>{
    setUpLocalStorage() 
    setGameState(importFromLocalStorage())
  },[])
  return (
    <html lang="en">
      <GameStateContext.Provider value={{gameState, setGameState}}>
        <PageContext.Provider value={{page, setPage}}>  
          <body className="flex flex-col w-screen h-screen p-2 overflow-hidden bg-slate-500">
            <Navbar />
            {children}
          </body>
        </PageContext.Provider>
      </GameStateContext.Provider>
      
    </html>
  );
}
