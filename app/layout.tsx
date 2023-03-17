import AppNavigation from '@/components/AppNavigation'
import { ReactNode } from 'react'
import '@/app/globals.css' 
import { GameProvider  } from "../app/context/GameContext"


export const metadata = {
  title: '1Kball App V2',
  description: 'Generated by create next app',
}

// This component is a wrapper for all the pages in the application

export default function RootLayout({ children}: {children: ReactNode }) {

  return (
    <html lang="en">
      <body>
          <GameProvider>
            <AppNavigation/>
            {children}
          </GameProvider>
      </body>
    </html>
  )
}
