"use client";
import React, { createContext, useState, useContext } from "react";

const GameContext = createContext()


export const GameProvider = ({ children }) => {

  const [gameCategory, setGameCategory] = useState([])

  return (
    <GameContext.Provider
      value={{
        gameCategory,
        setGameCategory
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameCategory = () => useContext(GameContext)
