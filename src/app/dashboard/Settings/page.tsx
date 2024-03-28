'use client'

import { ProModalStore, myStore, paymentStore } from "@/app/store/MyStore"
import Heading from "@/components/Heading"
import ProModalUi from "@/components/pro-modal-ui"
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { redirect } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa"

const Page = () => {
//    const premMember=paymentStore(state=>state.isPremiumMember)
// //    console.log(premMember)
//     const proModalStates=ProModalStore()   
//     const {data: session} = useSession()
 
//     if(!session) {
//         redirect("/")
//     } 

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
            {/* <Button variant={'destructive'} onClick={() => signOut()}>Log Out</Button> */}
            <UserButton/>
        </div>
    </div>
  )
}

export default Page