"use client";

import React, { useState } from "react";
import styles from "@/app/result/result.module.css";
import { getGameCat } from "@/app/lib/fetchData";
import GameCat from "./GameCat";
import axios from 'axios'
import  { useGameCategory }  from "../app/context/GameContext"

const GameButton = ({ gameNamesData }: { gameNamesData: GameName[] }) => {

const { setGameCategory } = useGameCategory()


const fetchSingleGameDate = async (url: any) => {
   const  {data} = await axios.get(url)
   setGameCategory(data)
}



  return (
    <>
      <div>{/* <GameCat gameCategoryData={data}/> */}</div>
      {gameNamesData &&
        gameNamesData.map((game, index) => (
          <>
              <button
               key={index}
               onClick={()=> fetchSingleGameDate(game.game_url)}
                className={`${
                  index === 0 ? styles.activeGame : styles.buttons
                }`}
              >
                {game.category_name}
              </button>
          </>
        ))}
    </>
  );
};

export default GameButton;
