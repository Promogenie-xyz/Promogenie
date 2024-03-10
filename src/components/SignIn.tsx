'use client'

import { useStore } from "@/app/store/UseStore"
import { signIn, signOut, useSession } from "next-auth/react"
import { redirect, useRouter } from "next/navigation"


const SignIn = () => {
    const {data: session} = useSession()
    // const userProfile=useStore(state=>state.user)
    // console.log(session?.user)
    // console.log(userProfile)
    // const setUserProfile=useStore(state=>state.setUser)
    
    return(
        <div className="py-20 text-2xl max-sm:text-lg">
            <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black  rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent"
            onClick={() => signIn('google')}
            >
              Sign up for the waitlist =={'>'}
            </div>
            </button>
        </div>
    )
}

export default SignIn