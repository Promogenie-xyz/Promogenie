'use client'
import Heading from "@/components/Heading"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { FaArrowLeft } from "react-icons/fa"

const Page = () => {
  const [company,setCompany]=useState<string>('')
  const [senderName,setSenderName]=useState<string>('')
  const [receiverName,setReceiverName]=useState<string>('')
  const [workxp,setWorkxp]=useState<string>('')
  const [field,setField]=useState<string>('')
  const [tools,setTools]=useState<string>('')
  const [role, setRole] = useState<string>('');
  const [generations,setGenerations]=useState<string[]>([])
  
  
  // console.log(role);
  const roles = [
    {
        id: 1,
        value: 'Internship', 
        label: 'Internship',
    },
    {
        id: 2,
        value: 'Full-time', 
        label: 'Full-time',
    },
    {
        id: 3,
        value: 'Contract-based',
        label: 'Contract-based'
    },
    {
        id: 4,
        value: 'Freelance',
        label: 'Freelance'
    }
]
  const handleSubmit=()=>{
    try{
      setCompany('')
      setSenderName('')
      setReceiverName('')
      setWorkxp('')
      setField('')
      setTools('')
      
  }catch(err:any){
      console.log(err);
  }
    
  }
  return (
    <div className="w-full h-full  flex flex-col items-center">
      <div className="pt-20 flex items-center justify-center p-4 text-white">
            <Link href='/dashboard'>
            <FaArrowLeft className="hover:cursor-pointer w-6 h-6 lg:hidden mb-10 text-gray-400" />
            </Link>
            <Heading
            title='Cold Email Generator'
            description="The best cold email generator for all your referral needs"
            color="text-red-500"
            />
        </div>
        <div className="w-full md:w-[60%] lg:w-[40%] mx-auto px-4">
            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={company} placeholder="Name of the company" onChange={(e)=>setCompany(e.target.value)} />
                </div>

                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={senderName} placeholder="Your Name" onChange={(e)=>setSenderName(e.target.value)} />
                </div>
            
                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={receiverName} placeholder="Receiver's name" onChange={(e)=>setReceiverName(e.target.value)} />
                </div>

                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={workxp} placeholder="Work experience in years/months" onChange={(e)=>setWorkxp(e.target.value)} />
                </div>

                {/* select  */}
                      <select
                        className="rounded-lg p-2  bg-black hover:outline-none focus:outline-none text-gray-400"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}>
                        {roles.map((role) => (
                            <option className="" value={role.value} key={role.id}>{role.label}</option>
                        ))}
                    </select>
 
                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={field} placeholder="Name of the position that you are applying for" onChange={(e)=>setField(e.target.value)} />
                </div>

                <div className="flex flex-col gap-y-2">
                    <input type="text" aria-required className="p-3 focus:outline-none text-gray-300 rounded-lg bg-black w-full placeholder:text-gray-400" required value={tools} placeholder="Tools on which you are building stuff" onChange={(e)=>setTools(e.target.value)} />
                </div>

                <div className="flex flex-col gap-y-2">
                </div>
                <Button variant={'default'} className="w-full hover:scale-90 duration-200 text-base bg-red-500 hover:bg-red-500 font-semibold transition-all"> Submit </Button>
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