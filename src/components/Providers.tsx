'use client'

import { useStore } from "@/app/store/UseStore"
import { NextUIProvider } from "@nextui-org/react"
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"


interface Props{
    children:ReactNode,
}


const Providers = ({children}:Props) => {
  // const userProfile=useStore(state=>state.user)
  // console.log(userProfile);
  
  return (
    <SessionProvider>
          <NextUIProvider>
              {children}
         </NextUIProvider>
    </SessionProvider>
  )
}

export default Providers