'use client'
import { useStore } from "@/app/store/UseStore"
import { signIn, signOut, useSession } from "next-auth/react"
import { useEffect } from "react"
import { Button } from "./ui/button"

const Navbar = () => {
  const userProfile=useStore(state=>state.user)
  const setUserProfile=useStore(state=>state.setUser)
  const handleSignIn=async()=>{
    try{
      await signIn('google')
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
<div className="glassy-background sticky  flex justify-between items-center p-5 mx-4 mt-4 rounded-full">
<div className="flex text-gray-400 text-lg font-normal justify-between items-center gap-x-8">
    <div className="hover:underline underline-offset-1 cursor-pointer">Features</div>
    <div className="hover:underline underline-offset-1 cursor-pointer">Pricing</div>
    <div className="hover:underline underline-offset-1 cursor-pointer">Testimonials</div>
</div>
<div className="bg-gradient-to-r from-fuchsia-500 via-fuchsia-400 to-fuchsia-300 text-transparent bg-clip-text flex text-5xl pr-24 pb-2 font-extrabold justify-start items-center">
    promogenie.
</div>
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


  )
}

export default Navbar