"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '@/app/navbar.module.css'
import { RxHome } from "react-icons/rx"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import Link from 'next/link'
import { BiDownArrow } from "react-icons/bi"
import axios from 'axios'
import { useGame } from "../app/context/GameContext"


const AppNavigation = () => {

// Navigation for the entire app
// This will appear on the top of every page

const {gameCategory, setGameCategory, setHidePage} = useGame()
const [showApis, setShowApis] = useState(false)
const [data, setData] = useState([])


const getApiData = async () => {
  const {data} = await axios.get("http://69.49.228.42/1kball/dev/")
  setData(data)
  //setGameCategory(data)
}


const getEachData = (url: string) => {
  window.open(url, '_blank')
}


const toggleApi  = () => {
  setShowApis(!showApis)
  setHidePage(!showApis)
  getApiData()

}


useEffect(()=> {
  getApiData()

  console.log("xx ", gameCategory);
  
},[])


  return (
    <>
      <header className={styles.container}>
        <Image
          src="/images/navigation_bg.png"
          alt="Next.js Logo"
          width={100}
          height={127}
          className={styles.navImage}
          style={{ width: '100vw'}}
        />
        <div className={styles.navItem}>
          <div className={styles.flexItem}>
            <div className={styles.logoContainer}>
              <Image
                src="/images/applogo.png"
                alt='1kball logo'
                width={70}
                height={40}
              />
            </div>
            <div className={styles.searchBox}>
              <div className={styles.container}>
                <input className={styles.searchInput} type="text" id='search' />
                 <BsSearch className={styles.searchIcon} />
                <button className={styles.searchButton} type='submit'>Search</button>
              </div>
              <div className={styles.navLink}>
                <div className={styles.linkItem}>
                  <RxHome className={styles.navIcon} />
                  <Link href="/"> Home</Link>
                </div>
                <div className={styles.linkItem}>
                  <RxHome className={styles.navIcon} />
                  <Link href="result">Result</Link>
                </div>
                {/* <div className={styles.linkItem}>
                  <AiOutlineInfoCircle className={styles.navIcon} />
                  <Link href="about">About</Link>
                </div> */}
                <div className={styles.linkItem} >
                  <Link href="/#" >
                    <li onClick={()=> toggleApi()} className={styles.apiLink}>Api <BiDownArrow className={styles.navIcon} /></li>
                      <ul className={styles.apisItems} style={{ visibility: `${showApis ? 'visible' : 'hidden'}` }}>
                        {
                          data && data.map((game: any, index)=> (
                            <div key={index} style={{backgroundColor:"white", width:"30%", zIndex:"500px", paddingLeft:"8px"}}>
                            <li onClick={(e)=> getEachData(game.data_url) } className={styles.eachLink}>{game.game_name}</li>
                          </div>
                          ))
                        }
                      </ul>
                   </Link>
                </div>
              </div>
            </div>
            <div className={styles.notice} >
              <p className={styles.notification}>Friday, February 24, 2023, 8:53 PM   Time Zone: China(GMT+8)</p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default AppNavigation