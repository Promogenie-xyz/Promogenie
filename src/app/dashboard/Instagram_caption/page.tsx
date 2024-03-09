'use client'
import Heading from "@/components/Heading"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaArrowLeft } from "react-icons/fa"

const Page = () => {

    const [post,setPost]=useState<string>()
    const [mood,setMood]=useState<string>()
    const [length,setLength]=useState<string>()
    const [topic,setTopic]=useState<string>()
    const [generations,setGenerations]=useState<string[]>([])

    const handleSubmit=()=>{
        try{
            setPost('')
            setMood('')
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
            title='Instagram Caption Generator'
            description="Most advanced Instagram caption generator"
            color="text-[#c13b84ff]"
            />
        </div>

        <div className="w-full md:w-[60%] lg:w-[40%] mx-auto px-4">
            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={topic} placeholder="Type of post for which you are generating" onChange={(e)=>setTopic(e.target.value)} />
                </div>

                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={post} placeholder="Purpose of caption" onChange={(e)=>setPost(e.target.value)} />
                </div>
            
                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={mood} placeholder="Type of caption you want to generate" onChange={(e)=>setMood(e.target.value)} />
                </div>

                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={length} placeholder="Length in words" onChange={(e)=>setLength(e.target.value)} />
                </div>
                <Button variant={'default'} className="w-full hover:scale-90 duration-200 text-base bg-[#c13b84ff] hover:bg-[#c13b84ff] font-semibold transition-all"> Submit </Button>
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
