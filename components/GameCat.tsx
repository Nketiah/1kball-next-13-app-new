"use client"
import React, { useState, useEffect } from "react";
import  { useGameCategory }  from "../app/context/GameContext"


const GameCat = () => {


  const { setGameCategory, gameCategory } = useGameCategory()


  return (
    <>
      {gameCategory &&
        gameCategory.map((game: any) => (
          <li style={{ alignSelf: "flex-start" }} key={Math.random()}>
            {game.game_name}
          </li>
        ))}
    </>
  );
};

export default GameCat;
