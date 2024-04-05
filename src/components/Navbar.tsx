'use client'
import {myStore} from '@/app/store/MyStore'
import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import {  usePathname } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa"
import Link from 'next/link'
import { useState } from 'react';
import Logout from './Logout';
const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="">
      {/* Desktop navigation exclusing dashboard*/}
      {
  !pathname.includes('/dashboard') && (
    <div className="glassy-background hidden md:flex justify-between items-center p-5 mx-4 mt-4 rounded-full">
      {/* Navigation links */}
      <div className="flex text-gray-400 text-lg font-normal justify-between items-center gap-x-3 lg:gap-x-8">
        <a href="#features">
          <div className="hover:underline underline-offset-1 cursor-pointer">Features</div>
        </a>
        <a href="#faq">
          <div className="hover:underline underline-offset-1 cursor-pointer">FAQ&apos;s</div>
        </a>
        <a href="#testimonials">
          <div className="hover:underline underline-offset-1 cursor-pointer">Testimonials</div>
        </a>
      </div>
      {/* Logo */}
      <a href="/">
        <div className="bg-gradient-to-r from-fuchsia-500 via-fuchsia-400 to-fuchsia-300 text-transparent bg-clip-text flex md:text-3xl text-5xl lg:pr-24 pb-2 font-extrabold justify-start items-center">
          promogenie.
        </div>
      </a>
      {/* Sign-in/sign-out button and Try free button */}
      <div className="flex text-white items-center gap-x-3 text-lg font-normal">
          <Button className="text-lg rounded-lg text-gray-400 hover:underline bg-inherit hover:bg-inherit hover:text-gray-400" onClick={() => signIn("google")} variant={'outline'}>Sign in</Button>
          </div>
      {/* <div className='w-full bg-white'><UserButton/></div> */}
      {/* <div className="flex text-white items-center gap-x-3 text-lg font-normal">
        <Link href={`${isSignedIn?'/dashboard':'/sign-up'}`}>
          <Button className="text-lg hover:scale-90 ease-in-out transition-all duration-75" variant='premium' >Try free</Button>
        </Link>
        <Link href={`${isSignedIn?'/dashboard':'/sign-in'}`}>
          <Button className="text-lg rounded-lg text-gray-400 hover:underline bg-inherit hover:bg-inherit hover:text-gray-400" variant={'outline'}>{isSignedIn?'Go to Dashboard':'Sign-in'}</Button>
        </Link>
      </div> */}
    </div>
  )
}

      {/* Mobile navigation excluding dashboard */}
     {!pathname.includes('/dashboard') && <div className="block md:hidden">
        <div className="flex justify-between items-center md:hidden z-10 glassy-background mx-4 mt-4 p-5 rounded-full">
          <a href="/">
            <div className="text-xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-fuchsia-400 to-fuchsia-300 text-transparent bg-clip-text">
              promogenie.
            </div>
          </a>
          <div className="text-white hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (<IoMdClose className="w-6 h-6" />) : (<RxHamburgerMenu className="w-6 h-6" />)}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="flex flex-col text-gray-400 mt-2 gap-y-3 glassy-background rounded-2xl mx-4 text-lg text-center">
            <a href="#features">
              <div className="hover:bg-[#464646] hover:mx-2 hover:rounded-2xl mt-1" onClick={() => setIsOpen(false)}>Features</div>
            </a>
            <a href="#pricing">
              <div className="hover:bg-[#464646] hover:mx-2 hover:rounded-2xl" onClick={() => setIsOpen(false)}>Pricing</div>
            </a>
            <a href="#testimonials">
              <div className="hover:bg-[#464646] hover:mx-2 hover:rounded-2xl" onClick={() => setIsOpen(false)}>Testimonials</div>
            </a>
            <Button className="text-lg rounded-lg text-gray-400 hover:underline bg-inherit hover:bg-inherit hover:text-gray-400" onClick={() => signIn("google")} variant={'premium'}>Sign in</Button>
          </div>
        )}
      </div>}

      {/* for dashboard of mobiles and laps */}
      {pathname ==='/dashboard' && (<div className="flex bg-black p-4 z-50 justify-between items-center">
                {/* <div className='text-white'>Promogenie.</div> */}
                <div className='text-white'></div>
        
                <Logout/>
        </div>)}
    </div>
  );
};

export default Navbar;