
export const getGameNames = async () => {
    const response = await fetch("http://69.49.228.42/1kball/dev/api/v1/gamecat/")
    if(!response.ok) throw new Error("failed to fetch game names")

    return response.json()
}

export const getGameCat = async (url: string = "http://69.49.228.42/1kball/dev/api/v1/catgames/1") => {
   
console.log(url)
 const response = await fetch(url, { cache: 'no-store' })
   if(!response.ok) throw new Error("failed to fetch game category data")

   const data = response.json()
   return data
}


export const getSingleGame = (urls: any) =>{

}


const useFetch = async (url: any, errMessage?: string) => {
    const response = await fetch(url)
    if(!response.ok) throw new Error(`failed to fetch ${errMessage}`)
 
    return response.json()
}