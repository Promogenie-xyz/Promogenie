'use client'

import Navbar from "@/components/Navbar";
import {  useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Page = () => {
    const {data: session} = useSession()
    const name = session?.user?.name
    
    // if(!session) {
      // redirect("/")
    // }
  
  return (
    <div className="">
          
      </div>
  )
}

export default Page