'use client'
import { useStore } from "@/app/store/UseStore"
import {myStore} from '@/app/store/MyStore'
import { signIn, signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { redirect, usePathname, useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa"
const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  
  const handleLogOut=async()=>{
    try{
      await signOut()
      router.push('/')
    }catch(err:any){
      console.log('error logging out');
    }
  }
  const setUserProfile=myStore(state=>state.setUser)
  const userProfile=myStore(state=>state.user)
  const handleSignIn = async () => {
    try {
      await signIn('google')
      setIsOpen(false);
    } catch (err: any) {
      console.log(err);
    }
  };
  
  const { data: session, status } = useSession();
  useEffect(()=>{
    const getUser=()=>{
      if(session?.user){
        setUserProfile(session.user)
        // redirect('/dashboard')
      }
    
      // console.log(userProfile)
      // redirect('/dashboard')
    }
    getUser()
  },[session])
  // console.log(userProfile)
  
  // console.log(session?.user)
  const toDashboard=()=>{
    router.push('/dashboard')
  }
  return (
    <div className="">
      {/* Desktop navigation */}
      {!pathname.includes('/dashboard') && <div className="glassy-background sticky hidden md:flex justify-between items-center p-5 mx-4 mt-4 rounded-full">
        {/* Navigation links */}
        <div className="flex text-gray-400 text-lg font-normal justify-between items-center gap-x-8">
          <a href="#features">
            <div className="hover:underline underline-offset-1 cursor-pointer">Features</div>
          </a>
          <a href="#pricing">
            <div className="hover:underline underline-offset-1 cursor-pointer">Pricing</div>
          </a>
          <a href="#testimonials">
            <div className="hover:underline underline-offset-1 cursor-pointer">Testimonials</div>
          </a>
        </div>
        {/* Logo */}
        <a href="/">
          <div className="bg-gradient-to-r from-fuchsia-500 via-fuchsia-400 to-fuchsia-300 text-transparent bg-clip-text flex text-5xl pr-24 pb-2 font-extrabold justify-start items-center">
            promogenie.
          </div>
        </a>
        {/* Sign-in/sign-out button and Try free button */}
        <div className="flex text-white items-center gap-x-3 text-lg font-normal">
          {status === "authenticated" ? (
            <Button className="text-lg rounded-lg text-gray-400 hover:underline bg-inherit hover:bg-inherit hover:text-gray-400" onClick={() => signOut()} variant={'outline'}>Sign out</Button>
          ) : (
            <Button className="text-lg rounded-lg text-gray-400 hover:underline bg-inherit hover:bg-inherit hover:text-gray-400" onClick={handleSignIn} variant={'outline'}>Sign in</Button>
          )}
            {
              status ==="authenticated" ?<Button className="text-lg hover:scale-90 ease-in-out transition-all duration-75" variant='premium' onClick={toDashboard}>Try free</Button> : <a href="#pricing"><Button className="text-lg hover:scale-90 ease-in-out transition-all duration-75" variant='premium'>Try free</Button></a> 
            }
         
        </div>
      </div>}

      {/* Mobile navigation */}
     {!pathname.includes('/dashboard') && <div className="visible md:hidden">
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
            {status === "authenticated" ? (
              <Button className="text-lg rounded-lg text-gray-400 hover:underline bg-inherit hover:bg-inherit hover:text-gray-400" onClick={() => signOut()} variant={'outline'}>Sign out</Button>
            ) : (
              <Button className="text-lg rounded-lg text-gray-400 hover:underline bg-inherit hover:bg-inherit hover:text-gray-400" onClick={handleSignIn} variant={'outline'}>Sign in</Button>
            )}
            {
              status ==="authenticated" ?<a href="/dashboard"><Button className="text-lg hover:scale-90 ease-in-out transition-all duration-75" variant='premium'>Try free</Button></a> : <a href="#pricing"><Button className="text-lg hover:scale-90 ease-in-out transition-all duration-75" variant='premium'>Try free</Button></a> 
            }
          </div>
        )}
      </div>}

      {/* for dashboard  */}
      {pathname ==='/dashboard' && (<div className="flex bg-black p-4 justify-between items-center">
                <p className="flex items-center lg:hidden text-gray-400"><FaArrowLeft className="h-4 w-4 mr-2"/> Go back to Homepage</p>
                <div className="hidden lg:flex"></div>
                <Button onClick={handleLogOut}>Log Out</Button>
        </div>)}
    </div>
  );
};

export default Navbar;