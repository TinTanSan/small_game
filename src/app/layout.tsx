'use client'
import { useEffect, useState } from "react";
import "./globals.css";
import { GameState, GameStateContext } from "./contexts/gameStateContext";
import { importFromLocalStorage, setUpLocalStorage } from "@/utils/commons";
import Navbar from "./components/navbar";
import { PageContext } from "./contexts/pageContext";

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
          
            
          <body>
            <Navbar />
            {children}
          </body>
        </PageContext.Provider>
      </GameStateContext.Provider>
      
    </html>
  );
}
