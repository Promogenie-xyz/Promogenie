'use client'
import { useStore } from "@/app/store/UseStore"
import Heading from "@/components/Heading"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaArrowLeft } from "react-icons/fa"

const Page = () => {
    // const userProfile=useStore(state=>state.user)
    // console.log(userProfile)
    const [post,setPost]=useState<string>()
    const [prodDesc,setProdDesc]=useState<string>()
    const [length,setLength]=useState<string>()
    const [topic,setTopic]=useState<string>()
    const [generations,setGenerations]=useState<string[]>([])

    const handleSubmit=()=>{
        try{
            setPost('')
            setProdDesc('')
            setLength('')
            setTopic('')
        }catch(err:any){
            console.log(err);
        }
    }
    
    const router=useRouter()
  return (
    <div className="w-full h-screen flex flex-col items-center">
        <div className="pt-20 flex items-center justify-center p-4 text-white">
            <Link href='/dashboard'>
            <FaArrowLeft className="hover:cursor-pointer w-6 h-6 lg:hidden mb-10 text-gray-400" />
            </Link>
            <Heading
            title='Whatsapp Business Message Generator'
            description="Most advanced business message generator"
            color="text-[#2ab13fff]"
            />
        </div>

        <div className="w-full md:w-[60%] lg:w-[40%] mx-auto px-4">
            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={topic} placeholder="Topic of advertisement" onChange={(e)=>setTopic(e.target.value)} />
                </div>

                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={post} placeholder="Purpose of advertisement" onChange={(e)=>setPost(e.target.value)} />
                </div>
            
                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={prodDesc} placeholder="Product description for the advertisement" onChange={(e)=>setProdDesc(e.target.value)} />
                </div>

                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={length} placeholder="Length in words" onChange={(e)=>setLength(e.target.value)} />
                </div>
                <Button variant={'default'} className="w-full hover:scale-90 duration-200 text-base bg-[#2ab13fff] hover:bg-[#2ab13fff] font-semibold transition-all"> Submit </Button>
            </form>
        </div>
        <div>
            {generations.length>0 ?(
                <div>{generations.map((item,index)=>(
                        <div key={index}></div>
            ))}</div>):( <p className="  text-white">no searches yet</p> )}
        </div>
    </div>
  )
}

export default Page
