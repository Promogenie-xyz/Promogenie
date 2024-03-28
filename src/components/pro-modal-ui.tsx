'use client'

import { Check, Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon, Zap } from "lucide-react"
import { Badge } from "./ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Card } from "./ui/card"
import { cn } from "../lib/utils"
import { Button } from "./ui/button"
import axios from "axios"
import { useState } from "react"
import { ProModalStore } from "@/app/store/MyStore"
import { RiAiGenerate } from "react-icons/ri"
import { MdOutlineWorkspacePremium } from "react-icons/md"
import { AiOutlineCustomerService } from "react-icons/ai"
import { MdOutlineAccessTime } from "react-icons/md"
const tools=[
    {
        id:1,
        feature:'Unlimited Generations',
        icon:<RiAiGenerate className="w-6 h-6"/>,
        color:'text-blue-400'
    },
    {
        id:2,
        feature:'Access to premium content templates',
        icon:<MdOutlineWorkspacePremium className="w-6 h-6"/>,
        color:'text-green-400'
    },
    {
        id:3,
        feature:'Priority Customer Support',
        icon:<AiOutlineCustomerService className="w-6 h-6"/>,
        color:'text-gray-400'
    },
    {
        id:4,
        feature:'Early access to newly launced templates',
        icon:<MdOutlineAccessTime className="w-6 h-6"/>,
        color:'text-red-400'
    }
    
  ]
  
  const ProModalUi = () => {
    const Yearly = "https://promogenie2.lemonsqueezy.com/buy/47e6a174-e7ed-4442-91a3-d17b912da47b"

    const Monthly = "https://promogenie2.lemonsqueezy.com/checkout/buy/eabe00e6-3647-4584-beda-9bbbc3ca055e"
    const handleClick = () => {
        window.location.replace(Yearly)
      }
      
      const handleClick2 = () => {
        window.location.replace(Monthly)
      }
    const [loading,setLoading]=useState(false)
    const proStoreStates=ProModalStore()
    const onSub=async()=>{
      try{
        setLoading(true)
        
     
      }catch(error){
        // console.log(error,'stripe client error')
        
      }finally{
          setLoading(false)
        }
    }
  return (
    <div className="">
   <Dialog open={proStoreStates.isOpen}  onOpenChange={proStoreStates.onClose}>
      <DialogContent className="bg-black w-[90%] md:w-full rounded-lg">
        {/* dialog content contains a dialog header/footer  */}
        <DialogHeader>
          {/* dialog header contains a dilogtite and dilog desc  */}

            <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                {/* all divs in a col  */}
                {/* div1 -> badge + heading  (in row)*/}
                <div className="flex text-white items-center justify-center gap-x-2 font-bold py-1">
                    Upgrade to Promogenie
                    <Badge variant="premium" className="text-sm py-1">PRO</Badge>
                </div>
            </DialogTitle>

            <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                     {tools.map((item)=>(
                        <Card key={item.id} className="flex justify-between items-center p-3 bg-black border-gray-900">
                                <div className={`flex items-center gap-x-4 ${item.color}`}>
                                        <div className="p-2 w-fit rounded-md">{item.icon}</div>
                                        <div className="text-sm font-semibold">{item.feature}</div>
                                </div>
                                <Check className={`w-5 h-5 text-gray-400`}/>
                        </Card>
                     ))}
            </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex items-center gap-x-5 gap-y-2">
          <Button onClick={handleClick2} variant="premium" className="text-white w-full">
            Choose Monthly
            <Zap className="fill-white w-4 h-4 ml-2 border-none"/>
          </Button>
          <Button onClick={handleClick} variant="premium" className="text-white w-full" >
            Choose Yearly
            <Zap className="fill-white w-4 h-4 ml-2 border-none"/>
          </Button>
        </DialogFooter>
      </DialogContent>
   </Dialog>
   </div>
  )
}

export default ProModalUi