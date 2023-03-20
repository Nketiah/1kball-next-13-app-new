import React from "react";
import styles from "../draw.module.css";


async function getDrawNumbers(url: string){
   const baseUrl = "http:/69.49.228.42/1kball/dev/api/v1"
   const response = await fetch(`${baseUrl}/${url}`)
   if(!response.ok) throw new Error("failed to get draw numbers")

   return response.json()
}


type Params = {
   params: {
      url: string
   }
}

const page = async ({ params: {url} }: Params) => {

const drawData: Promise<GameDraw[]> = getDrawNumbers(url)
const data = await drawData as any


  return (
    <>
      <main className={styles.container}>
         <div className={styles.header}>{url}</div>
         {
            data.slice(0, 20).map((data: any) =>(
               <div key={Math.random()} className={styles.drawItems}>
                  <h3>{data.draw_date}</h3>
                  <h3>{data.draw_time}</h3>
                  <h3>{data.draw_number}</h3>
                  <h3>{data.get_time && data.get_time}</h3>
               </div>
            ))
         }
      </main>
    </>
  )
}

export default page;
