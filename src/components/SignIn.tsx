'use client'

import { signIn, signOut, useSession } from "next-auth/react"
import { redirect, useRouter } from "next/navigation"

const SignIn = () => {
    // const { data: session } = useSession()
    // const userProfile=useStore(state=>state.user)
    // console.log(session?.user)
    // console.log(userProfile)
    // const setUserProfile=useStore(state=>state.setUser)

    return (
        <div className="py-20 text-2xl px-6 max-sm:text-lg">
            <button className="p-[3px] relative">
                <div className="absolute inset-0 rounded-lg" />
                <a href="https://cal.com/shobhnik13/15min" target="_blank">
                    <div className="px-6 py-2 sm:px-4 sm:py-1 md:px-8 md:py-2 text-black font-semibold rounded-[6px] relative group transition-all bg-gradient-to-r from-fuchsia-700 via-fuchsia-500 to-fuchsia-300 hover:cursor-pointer hover:scale-110  ease-in-out duration-100 text-white-border-0 text-base sm:text-sm md:text-xl lg:text-2xl">
                        Got some ideas? Schedule a meet then!
                    </div>
                </a>
            </button>
        </div>
    )
}

export default SignIn
