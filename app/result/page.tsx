"use client";
import React, { FormEventHandler, useState, useEffect } from "react";
import styles from "@/app/result/result.module.css";
import DrawNums from "@/components/DrawNums";
import { BiSearch } from "react-icons/bi";
import { GoCalendar } from "react-icons/go";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import AppTable from "@/components/AppTable";
import { DRAW_COLUMNS } from "@/components/drawColumns";
import MOCK_DATA from "@/components/MOCK_DATA.json";
import { AuthContext } from "../context/AuthContext";
import { Metadata, NextPage } from "next";
import GameButton from "@/components/GameButton";
import { useGame } from "../context/GameContext";
import GameCat from "@/components/GameCat";
import axios from "axios";
import {AppCalender} from "@/components/AppCalender"

const Result = () => {
 
  const { gameNamesData, setGameNamesData, gameDraws, setGameDraws, setGameCategory, gameCategory, setIsLoading } = useGame();

  const gameNamesUrl =  "http://69.49.228.42/1kball/dev/api/v1/gamecat/"
  const firstCategoryUrl = "http://69.49.228.42/1kball/dev/api/v1/catgames/1"


  useEffect(() => {

    getInitialData()

  }, [])



const getInitialData = async () => {
  const gameNamesPromise  =  axios.get(gameNamesUrl)
  const firstCategoryPromise = axios.get(firstCategoryUrl)


  const [gameNamesRes, firstCategoryRes] = await Promise.all([ gameNamesPromise, firstCategoryPromise])

  setGameNamesData(gameNamesRes.data);
  setGameCategory(firstCategoryRes.data)
}


  return (
    <>
      <main className={styles.main}>
        <div>
          <div>
            <h1 style={{ color: "white", marginBottom: 10, paddingTop: 20 }}>
              1K Ball Results
            </h1>
          </div>
          <div>
            <h5 style={{ color: "white" }}>
              The latest 1kball results are published here immediately after the
              draw has taken place.
              <br />
              You can view the latest numbers including detailed information of
              winners and prizes.
            </h5>
          </div>
        </div>
        <section>
          <div style={{ marginTop: 25 }}>
            <GameButton gameNamesData={gameNamesData} />
          </div>
          <div className={styles.resultSection}>
            <div className={styles.gameNames}>
              <div className={styles.gameNamesHeader}>
                {" "}
                <BiSearch className={styles.searchIcon} size={30} />{" "}
              </div>
              <ul>
                <GameCat />
              </ul>
            </div>
            <div className={styles.gameDraws} style={{ padding: "15px" }}>
              <div>
                <div className={styles.drawsTableHeader}>
                  <div className={styles.datesWrapper}>
                    
                  </div>
                  <AppCalender/>
                  {/* <div className={styles.activeDate}>All Games</div>
                  <div className={styles.datesWrapper}>
                    <div>SUN</div> <div>26 FEB</div>{" "}
                  </div>
                  <div className={styles.datesWrapper}>
                    <div style={{ color: "tomato" }}>MON</div>{" "}
                    <div style={{ color: "tomato" }}>26 FEB</div>{" "}
                  </div>
                  <div className={styles.datesWrapper}>
                    <div>TUE</div> <div>26 FEB</div>{" "}
                  </div>
                  <div className={styles.datesWrapper}>
                    <div>WED</div> <div>26 FEB</div>{" "}
                  </div>
                  <div className={styles.datesWrapper}>
                    <div>THUR</div> <div>26 FEB</div>{" "}
                  </div>
                  <div className={styles.datesWrapper}>
                    <div>FRI</div> <div>26 FEB</div>{" "}
                  </div>
                  <div className={styles.datesWrapper}>
                    <div>SAT</div> <div>26 FEB</div>{" "}
                  </div>
                  <div>
                    {" "}
                    <GoCalendar size={30} />{" "}
                  </div> */}
                </div>
                <AppTable drawColumns={DRAW_COLUMNS} drawData={gameDraws} />
              </div>
            </div>
          </div>
        </section>
        <div className={styles.footer}>
          <h5>Trusted and Secured</h5>
          <VscWorkspaceTrusted style={{ margin: 5 }} />
        </div>
      </main>
    </>
  );
};

export default Result;
