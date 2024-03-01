'use client'
import { signIn, signOut, useSession } from "next-auth/react"

const Navbar = () => {
  const {data: session} = useSession()
  return (
   <header className=" max-sm:gap-2 max-sm:flex-row max-sm:items-center max-sm:justify-center w-full text-sm py-0 sm:py-2">
  <nav className="relative max-w-7xl w-full mx-auto px-4 max-sm:flex max-sm:items-center max-sm:justify-between" aria-label="Global">
    <div className="flex items-center justify-between max-sm:justify-center max-sm:gap-12">
      <a className="flex-none text-3xl max-sm:text-xl font-semibold text-white">PromoGenie</a>
      {session ? (
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div
            className="px-8 py-2  bg-black  rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent"
            onClick={() => signOut()}
          >
            Sign Out
          </div>
        </button>
      ) : (
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div
            className="px-8 py-2  bg-black  rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent"
            onClick={() => signIn('google')}
          >
            Sign up
          </div>
        </button>
      )}
    </div>
  </nav>
</header>


  )
}

export default Navbar