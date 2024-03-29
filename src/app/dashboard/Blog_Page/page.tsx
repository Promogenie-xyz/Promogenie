'use client'
import { myStore } from "@/app/store/MyStore"
import GenerationComp from "@/components/GenerationComp"
import Heading from "@/components/Heading"
import { Button } from "@/components/ui/button"
import { getCurrentDate } from "@/lib/GetCurrentDate"
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
    const [length,setLength]=useState<string>()
    const [topic,setTopic]=useState<string>()
    const [generations,setGenerations]=useState<string>('')
    const userEmail = session?.user?.email
    const userPrompt=`Write a blog on the topic ${topic} which should be for the purpose ${post} and have a length of ${length} words`
    const currentDate=getCurrentDate()
    const handleSubmit=async(event: React.FormEvent)=>{
        setIsLoading(true)
        setGenerations('')
        event.preventDefault()
        try{
            const res= await axios.post('https://marketing-7do1.onrender.com/blog',{
                email:userEmail,
                prompt:userPrompt,
                title:topic,
                presentDate:currentDate,
                type:'Blog',
            })
            // console.log(res)
            setGenerations(res.data)
            setIsLoading(false)
            setPost('')
            setLength('')
            setTopic('')
        }catch(err:any){
            setIsLoading(false)
            console.log(err);
        }finally{
            setIsLoading(false)
        }
    }
    // f48c32
    const router=useRouter()
  return (
    <div className={`w-full ${generations.length>0 ?'h-full':'h-screen'} flex flex-col items-center overflow-x-hidden bg-black bg-grid-gray-100/[0.1]` }>
        <div className="pt-20 flex items-center justify-center p-4 text-white">
            <Link href='/dashboard'>
            <FaArrowLeft className="hover:cursor-pointer w-6 h-6 lg:hidden mb-10 text-gray-400" />
            </Link>
            <Heading
            title='Blog Generator'
            description="The best Blog content generator."
            color="text-[#f48c32]"
            />
        </div>

        <div className="w-full md:w-[60%] lg:w-[40%] mx-auto px-4">
            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={topic} placeholder="Topic of blog" onChange={(e)=>setTopic(e.target.value)} />
                </div>

                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={post} placeholder="Purpose of blog" onChange={(e)=>setPost(e.target.value)} />
                </div>
            
                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={length} placeholder="Length in words" onChange={(e)=>setLength(e.target.value)} />
                </div>
                <Button disabled={isLoading || (!post ||!length ||!topic)} variant={'default'} className="w-full hover:scale-90 duration-200 text-base bg-[#f48c32] hover:bg-[#f48c32] font-semibold transition-all"> {isLoading?(<>Generating... <Loader2 className="h-4 w-4 animate-spin ml-1"/></>):(<>Submit</>)} </Button>
            </form>
        </div>
        <div className=" w-[80%] lg:ml-[15rem] overflow-x-hidden mt-24 ">
          {generations && generations.length > 0 && <GenerationComp data={generations} bgColor='bg-[#f48c32]/10' borderColor='border-[#f48c32]/10' />}
        </div>
    </div>
  )
}

export default Page
