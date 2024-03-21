'use client'

import { ProModalStore, myStore } from "@/app/store/MyStore"
import Heading from "@/components/Heading"
import ProModalUi from "@/components/pro-modal-ui"
import { Button } from "@/components/ui/button"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useRouter } from "next/router"
import { FaArrowLeft } from "react-icons/fa"

const page = () => {
    const premiumMember=myStore(state=>state.premium)
    const proModalStates=ProModalStore()
    const {data: session} = useSession()
 
    if(!session) {
        redirect("/")
    } 

  return (
    <div className="w-full h-screen flex flex-col items-center text-white">
        <div className="pt-20 flex items-center justify-center p-4 text-white">
            <Link href='/dashboard' className="lg:hidden">
                <FaArrowLeft className="hover:cursor-pointer w-6 h-6 lg:hidden mb-10 text-gray-400" />
            </Link>

            <Heading
            title='Settings'
            description=""
            color="text-[#ef4444]"
            />
        </div>
        <div className="flex flex-col gap-y-4 ">
            <p className="text-fuchsia-200 text-base md:text-lg lg:text-xl">You are currently at a <span className="text-lg md:text-xl lg:text-2xl text-fuchsia-400 font-bold">{premiumMember === true?'PREMIUM':`FREE`}</span> plan.</p>
           {premiumMember===false && <p className=" text-base md:text-lg lg:text-xl font-semibold italic text-fuchsia-400 hover:underline hover:cursor-pointer" onClick={proModalStates.onOpen}>Become a premium member now!</p>}
            <Button variant={'destructive'} onClick={() => signOut()}>Log Out</Button>
        </div>
    </div>
  )
}

export default page