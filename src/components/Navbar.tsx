'use client'
import { signIn, signOut, useSession } from "next-auth/react"

const Navbar = () => {
  const {data: session} = useSession()
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap  w-full  text-sm py-0 sm:py-2">
  <nav
    className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-0"
    aria-label="Global"
  >
    <div className="flex items-center justify-between">
      <a
        className="flex-none text-3xl font-semibold text-white"
      >
        PromoGenie
      </a>
    </div>
 {session ? (
  <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black  rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent"
            onClick={() => signOut()}
            >
              Sign Out 
            </div>
            </button>
 ) : (
  <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black  rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent"
            onClick={() => signIn('google')}
            >
              Sign up 
            </div>
            </button>
 )}
  </nav>
</header>
  )
}

export default Navbar