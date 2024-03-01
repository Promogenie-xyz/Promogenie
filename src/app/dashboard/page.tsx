'use client'

import Navbar from "@/components/Navbar";
import { googleClientId, googleClientSecret, supaSecret, supaUrl } from "@/lib/credential";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const page = () => {
    const {data: session} = useSession()
    const name = session?.user?.name
    
    if(!session) {
      redirect("/")
    }
  
  return (
    <div className="bg-black bg-grid-gray-100/[0.1]">
       <Navbar/>
   <div className="h-[50rem] w-full  -z-0 relative flex items-center justify-center ">
      <div className="absolute pointer-events-none inset-0 z-0 flex items-center justify-center   [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className="flex flex-col justify-center items-center gap-6">
        <h1 className=" lg:text-5xl text-3xl text-center max-w-[70%] font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-fuchsia-200 italic">
         Thanks for signing up {name} !
      </h1>
       <h1 className=" lg:text-5xl text-3xl text-center max-w-[70%] font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-fuchsia-200 italic">
         We will notify you once we are live with our product .
      </h1>
    </div>
  </div>
      </div>
  )
}

export default page