"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/result/result.module.css";
import { getGameCat } from "@/app/lib/fetchData";
import GameCat from "./GameCat";
import axios from 'axios'
import  { useGame }  from "../app/context/GameContext"

const GameButton = ({ gameNamesData }: { gameNamesData: GameName[] }) => {

const { setGameCategory } = useGame()
const [activeButton, setActiveButton] = useState(0)



const fetchSingleGameData = async (url: string, index: number )=> {
   const  {data} = await axios.get(url)
   setGameCategory(data)


   setActiveButton(index)
   //getFirstData(firstUrl)
}


const getFirstData = async () => {
  const  {data} = await axios.get("http://69.49.228.42/1kball/dev/api/v1/1kball5d")
   setGameCategory(data)
}


useEffect(()=> {

//getFirstData()

},[])


  return (
    <>
      {gameNamesData &&
        gameNamesData.map((game, index) => (
          <>
              <button
               key={index}
               onClick={()=> fetchSingleGameData(game.game_url, index)}
                className={`${
                  index === activeButton ? styles.activeGame : styles.buttons
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
