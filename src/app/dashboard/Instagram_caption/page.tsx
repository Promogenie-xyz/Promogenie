'use client'
import GenerationComp from "@/components/GenerationComp"
import Heading from "@/components/Heading"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { ArrowLeft, Loader2 } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaArrowLeft } from "react-icons/fa"

const Page = () => {
    const {data: session} = useSession()
    const [isLoading,setIsLoading]=useState<boolean>(false)
    const [post,setPost]=useState<string>()
    const [mood,setMood]=useState<string>()
    const [length,setLength]=useState<string>()
    const [topic,setTopic]=useState<string>()
    const [generations,setGenerations]=useState<string>('')
    // console.log(const userEmail= session?.user?.email)
    const userEmail= session?.user?.email
    const userPrompt=`Generate me an Instagram Caption for a post based on topic called ${topic} that should solve a purpose of ${post} and should be in a ${mood} mood of length ${length} words.`
    // console.log(userEmail,userPrompt)
    const handleSubmit=async(event: React.FormEvent)=>{
            event.preventDefault()
            setIsLoading(true)
        try{
            const res=await axios.post('https://marketing-7do1.onrender.com/instagram',{
                email:userEmail,
                prompt:userPrompt
            })
            // console.log(res.data)
            setGenerations(res.data)
            setIsLoading(false)
            setPost('')
            setMood('')
            setLength('')
            setTopic('')
        }catch(err:any){
            console.log(err);
        }finally{
            setIsLoading(false)
        }
    }
    
    const router=useRouter()
  return (
    <div className={`w-full ${generations.length>0 ?'h-full':'h-screen'} flex flex-col items-center overflow-x-hidden bg-black bg-grid-gray-100/[0.1]` }>
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
                <Button disabled={isLoading || (!post || !mood ||!length ||!topic)} variant={'default'} className="w-full hover:scale-90 duration-200 text-base bg-[#c13b84ff] hover:bg-[#c13b84ff] font-semibold transition-all"> {isLoading?(<>Generating... <Loader2 className="h-4 w-4 animate-spin ml-1"/></>):(<>Submit</>)} </Button>
            </form>
        </div>
        <div className=" w-[80%] lg:ml-[15rem] overflow-x-hidden mt-24 ">
          {generations && generations.length > 0 && <GenerationComp data={generations} bgColor='bg-[#c13b84ff]/10' borderColor='border-[#c13b84ff]/10' />}
        </div>
    </div>
  )
}

export default Page
