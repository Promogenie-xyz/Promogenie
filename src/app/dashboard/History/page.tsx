'use client'

import { Badge } from "@/components/ui/badge"
import axios from "axios"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useEffect, useState } from "react"

const Page = () => {
  const [type,setType]=useState<string>('all')
  const {data:session}=useSession()
  const [apiData,setApiData]=useState([])
  const userEmail=session?.user?.email
  useEffect(()=>{
    const fetchData=async()=>{
      const res=await axios.post(`https://marketing-7do1.onrender.com/history?${type}`,{
        email:userEmail
      })
    }
    fetchData()
  },[type]) 
  const types=[
    {
      id:1,
      label:'All generations',
      typeInfo:'all',
    },
    {
      id:2,
      label:'Instagram Captions',
      typeInfo:'insta',
    },
    {
      id:3,
      label:'LinkedIn Posts',
      typeInfo:'linkedin',
    },
    {
      id:4,
      label:'Twitter Posts',
      typeInfo:'twitter',
    },
    {
      id:5,
      label:'Cold Emails',
      typeInfo:'emails',
    },
    {
      id:6,
      label:'Blogs',
      typeInfo:'blog',
    },
    {
      id:7,
      label:'Whatsapp business ',
      typeInfo:'wapp',
    },
  ]
  return (
    <div className="w-full h-full flex flex-col items-center pt-20 ">
      <div className="flex  justify-center gap-x-8 items-center  ml-72">
            {types.map((item)=>(
              <div key={item.id} className="" onClick={()=>setType(item.typeInfo)}>
                <Badge className={`text-xs cursor-pointer ${item.typeInfo === type?'bg-gray-300 text-black':''} `} variant={'mera'}>
                  {item.label}
                </Badge>
              </div>   
            ))}     
      </div>
      <div className="ml-48 mt-2">
            <Image src={'/empty.png'} alt="nothing_img" className="" width={500} height={500}/>
      </div>
      <div className="flex justify-center ml-48 -mt-[10px]">
        <h1 className="text-3xl text-center font-semibold text-gray-400 italic">Nothing to show here. Keep generating....</h1>
      </div>
    </div>
  )
}

export default Page