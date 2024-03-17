'use client'
import { useStore } from "@/app/store/UseStore"
import { signIn, signOut, useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const userProfile=useStore(state=>state.user)
  const setUserProfile=useStore(state=>state.setUser)
  const [isOpen,setIsOpen]=useState<boolean>(false)
  const handleSignIn=async()=>{
    try{
      await signIn('google')
      setIsOpen(false)
      // const {data:session}=useSession()
     
    }catch(err:any){
      console.log(err)
    }
  }
  const {data: session} = useSession()
  //   useEffect(() => {
  //   if (session?.user) {
  //     const { name, email, image } = session.user;
  //     const loggedInUser: User = { 
  //     name: name ?? 'Unknown',
  //     email: email ?? 'Unknown',
  //     image: image ?? 'Unknown' };
  //     setUserProfile(loggedInUser);
  //   }
  // }, [setUserProfile,session?.user]);
  // if(userProfile){
    // console.log('tmkc');
    // console.log(userProfile)
  // }
  return (
    <div className="">
        <div className="glassy-background sticky hidden md:flex justify-between items-center p-5 mx-4 mt-4 rounded-full">
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
        <a href="/">
            <div className="bg-gradient-to-r from-fuchsia-500 via-fuchsia-400 to-fuchsia-300 text-transparent bg-clip-text flex text-5xl pr-24 pb-2 font-extrabold justify-start items-center">
              promogenie.
        </div>
        </a>
        <div className="flex text-white items-center gap-x-3 text-lg font-normal">
          {
            session ?(
              <Button className="text-lg rounded-lg text-gray-400 hover:underline bg-inherit hover:bg-inherit hover:text-gray-400" onClick={() => signOut()}  variant={'outline'}>Sign out</Button>
            ):(
              <Button className="text-lg rounded-lg text-gray-400 hover:underline bg-inherit hover:bg-inherit hover:text-gray-400" onClick={handleSignIn}  variant={'outline'}>Sign in</Button>
            )
          }
          <Button className="text-lg hover:scale-90 ease-in-out transition-all duration-75" variant='premium'>Try free</Button>
        </div>
      </div>
        
        <div className="visible md:hidden">
          <div className="flex justify-between items-center md:hidden z-10 glassy-background mx-4 mt-4 p-5 rounded-full">
             <a href="/">
              <div className="text-xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-fuchsia-400 to-fuchsia-300 text-transparent bg-clip-text">
               promogenie.
              </div>
              </a>
               <div className="text-white hover:cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
                {isOpen ? (<IoMdClose className="w-6 h-6"/>) :(<RxHamburgerMenu className="w-6 h-6"/>)}
              </div>
           </div>

            {isOpen && (
              <div className="flex flex-col text-gray-400 mt-2 gap-y-3 glassy-background rounded-2xl mx-4 text-lg text-center">
                <a href="#features">
                  <div className="hover:bg-[#464646] hover:mx-2 hover:rounded-2xl mt-1" onClick={()=>setIsOpen(false)}>Features</div>
                  </a>
                  <a href="#pricing">
                  <div className="hover:bg-[#464646] hover:mx-2 hover:rounded-2xl" onClick={()=>setIsOpen(false)}>Pricing</div>
                  </a>
                  <a href="#testimonials">
                  <div className="hover:bg-[#464646] hover:mx-2 hover:rounded-2xl" onClick={()=>setIsOpen(false)}>Testimonials</div>
                  </a>
                  {
                   session ?(
                      <Button className="text-lg rounded-lg text-gray-400 hover:underline bg-inherit hover:bg-inherit hover:text-gray-400" onClick={() => signOut()}  variant={'outline'}>Sign out</Button>
                       ):(
                      <Button className="text-lg rounded-lg text-gray-400 hover:underline bg-inherit hover:bg-inherit hover:text-gray-400" onClick={handleSignIn}  variant={'outline'}>Sign in</Button>
                      )
                 }
          <Button className="text-lg " variant='premium'>Try free</Button>
              </div>
            )}
    </div>
</div>

  )
}

export default Navbar