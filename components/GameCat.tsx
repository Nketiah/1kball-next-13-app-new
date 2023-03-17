"use client"
import axios from "axios"
import React, { useState, useEffect } from "react";
import  { useGame }  from "../app/context/GameContext"
import styles from "../app/result/result.module.css"

const GameCat = () => {


  const { setGameDraws, gameDraws, gameCategory, setIsLoading } = useGame()
  const [activeLink, setActiveLink] = useState(0)

  const getData = async (url: string, index: number) => {
    setIsLoading(true)
    const  {data} = await axios.get(url)

    setGameDraws(data)
    setIsLoading(false)

    setActiveLink(index)
    //getFirstData(firstUrl)

  }

  const getFirstData = async () => {
    
    const  {data} = await axios.get("http://69.49.228.42/1kball/dev/api/v1/1kball5d")
    setGameDraws(data)
    setIsLoading(false)
  }


  useEffect(()=> {
      getFirstData()
  },[gameDraws])


  return (
    <>
      {gameCategory &&
        gameCategory.map((game, index) => (
          <div  className={`${index === activeLink ? styles.activeLink : styles.gameLink}`} onClick={()=> getData(game.data_url, index)} style={{ alignSelf: "flex-start" }} key={Math.random()}>
            {game.game_name}
          </div>
        ))}
    </>
  );
};

export default GameCat;
