'use client'
import { DataStore, myStore } from "@/app/store/MyStore"
import GenerationComp from "@/components/GenerationComp"
import Heading from "@/components/Heading"
import { Button } from "@/components/ui/button"
import { getCurrentDate } from "@/lib/GetCurrentDate"
import axios from "axios"
import { ArrowLeft, Loader2 } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa"
const Page = () => {
   const {data: session} = useSession()
    const [isLoading,setIsLoading]=useState<boolean>(false)
    const [post,setPost]=useState<string>()
    const [length,setLength]=useState<string>()
    const [topic,setTopic]=useState<string>()
    const [generations,setGenerations]=useState<string>('')
    const currentDate=getCurrentDate()

    // console.log(currentDate)
    // console.log(const userEmail= session?.user?.email)
    const userEmail= session?.user?.email
    const userPrompt=`Imagine you are a Social Media Manager tasked with creating a twitter post to launch a new product named OneBuck that has the following description : This website let's user's promote their product for just one dollar on the website and shares them on the company twitter account also . Craft a compelling post that captures attention, creates buzz, and drives engagement among our target audience.Also , use normal and simple english words that normal humans write .`
    // console.log(userEmail)
    // console.log(userEmail,userPrompt)
    const handleSubmit=async(event: React.FormEvent)=>{
        setIsLoading(true)
        setGenerations('')
        event.preventDefault()
        try{
            const res= await axios.post('/api/generatepaid',{
                // email:userEmail,
                prompt:userPrompt,
                // title:topic,
                // presentDate:currentDate,
                // type:'LinkedIn',
            })
            // console.log(res.data)
            // console.log(res.data.response)
            setGenerations(res.data.response)
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
    
    const router=useRouter()
  
  return (
    <div className={`w-full ${generations.length>0 ?'h-full':'h-screen'} flex flex-col items-center overflow-x-hidden bg-black bg-grid-gray-100/[0.1]` }>
      
        <div className="pt-20 flex items-center justify-center p-4 text-white">
            <Link href='/dashboard' className="lg:hidden">
            <FaArrowLeft className="hover:cursor-pointer w-6 h-6 lg:hidden mb-10 text-gray-400" />
            </Link>
            <Heading
            title='LinkedIn Post Generator'
            description="Most advanced LinkedIn post generator"
            color="text-[#0077b5ff]"
            />
        </div>

        <div className="w-full md:w-[60%] lg:w-[40%] mx-auto px-4">
            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={topic} placeholder="Topic of post" onChange={(e)=>setTopic(e.target.value)} />
                </div>

                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={post} placeholder="Purpose of post" onChange={(e)=>setPost(e.target.value)} />
                </div>

                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={length} placeholder="Length in words" onChange={(e)=>setLength(e.target.value)} />
                </div>
                <Button disabled={isLoading || (!post  ||!length ||!topic)} variant={'default'} className="w-full hover:scale-90 duration-200 text-base bg-[#0077b5ff] hover:bg-[#0077b5ff] font-semibold transition-all"> {isLoading?(<>Generating... <Loader2 className="h-4 w-4 animate-spin ml-1"/></>):(<>Submit</>)} </Button>
            </form>
        </div>
        <div className=" w-[80%] lg:ml-[15rem] overflow-x-hidden mt-24 ">
          {generations && generations.length > 0 && <GenerationComp data={generations} bgColor='bg-[#0077b5]/10' borderColor='border-[#0077b5]/10' />}
        </div>
    </div>
  )
}

export default Page
