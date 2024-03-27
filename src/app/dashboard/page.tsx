'use client'

import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import {  useSession } from "next-auth/react";
import { redirect, usePathname, useRouter } from "next/navigation";
import { FaArrowLeft, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImBlogger } from "react-icons/im";
import { MdOutlineMail } from "react-icons/md";
import { useEffect } from "react";
import { myStore, paymentStore } from "../store/MyStore";
import { IoSettingsSharp } from "react-icons/io5";
import axios from "axios";

const Page = () => {
// const {data:session}=useSession()
// if(!session){
//   redirect('/')
// }
  const userProfile=myStore(state=>state.user)
  // console.log(userProfile)
  const userEmail=userProfile.email
  const premMember=paymentStore(state=>state.isPremiumMember)
  const setPremMember=paymentStore(state=>state.setIsPremiumMember)
  const pathname=usePathname()
  const router=useRouter()
  useEffect(()=>{
    const checkCustomer=async()=>{
      const isCustomer=await axios.post('https://marketing-7do1.onrender.com/check-customer',{
        email:userEmail
      })
      console.log(isCustomer)
      if(isCustomer.data.status === "subscribed"){
        setPremMember(true)
      }
      // console.log(premMember)
    }
    checkCustomer()
  },[userEmail,pathname])
  // console.log(userProfile)
  // console.log(userEmail)
  // console.log(premMember)
  const routes=[
    {
        id:1,
        icon:<FaLinkedin className="h-6 w-6" />,
        href:'/dashboard/Linkedin_Post',
        label:'LinkedIn Post Generation',
        color:'text-[#0077b5ff]',
        bgColor:'bg-[#0077b5ff]/10'
    },
    {
        id:2,
        icon:<FaXTwitter className="h-6 w-6"/>,
        href:'/dashboard/Twitter_Post',
        label:'Twitter Post Generation',
        color:'text-white',
        bgColor:'bg-white/10',
    },
    {
        id:3,
        icon:<FaInstagram className="h-6 w-6" />,
        href:'/dashboard/Instagram_caption',
        label:'Instagram Caption Generation',
        color:'text-[#c13b84ff]',
        bgColor:'bg-[#c13b84ff]/10'
    },
    {
        id:4,
        icon:<MdOutlineMail className="h-6 w-6" />,
        href:'/dashboard/Cold_Email',
        label:'Cold Email Generation',
        color:'text-[#c5221eff]',
        bgColor:'bg-[#c5221eff]/10'
      },
      {
        id:5,
        icon:<ImBlogger className="h-6 w-6"/>,
        href:'/dashboard/Blog_Page',
        label:'Blogs Creation',
        color:'text-[#f48c32ff]',
        bgColor:'bg-[#f48c32ff]/10',
      },
      {
        id:6,
        icon:<FaWhatsapp  className="h-6 w-6"/>,
        href:'/dashboard/Whatsapp_biz',
        label:'WhatsApp Business Messages Creation',
        color:'text-[#2ab13fff]',
        bgColor:'bg-[#2ab13fff]/10'
    },
]
    // const {data:session}=useSession()
    // if(!session) {
    //   redirect("/")
    // }
  

  return (
    <div className="pt-12 ">

          <div className="mb-8 space-y-4 md:pl-36">
      
      <h2 className="text-xl md:text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 via-fuchsia-500 to-fuchsia-300">
          Explore the power of PromoGenie.
      </h2>

        <p className="text-sm w-[80%] md:w-full mx-auto md:text-lg font-light text-center text-fuchsia-200">
          Get started with the smartest AI - Experience the power of AI.
        </p>

    </div>
    {/* div for features/tools  */}
      <div className="px-4 md:px-20 lg:px-32 space-y-4 w-full">
          {routes.map((item)=>{
            return(
              <Card onClick={()=>router.push(item.href)} key={item.href} className={`${item.href === '/dashboard/Settings'?'lg:hidden':''}hover:scale-90 lg:w-[150%] p-4 border-black/5 bg-black  flex  items-center justify-between hover:shadow-md transition cursor-pointer`}>
                    {/* div for logo/icon and title  */}
                  <div className="flex items-center gap-x-4">
                    {/* div for icon/logo ->1 */}
                    <div className={cn("p-4 w-fit rounded-md",item.color)}>
                        {/* <item.icon className={cn("w-8 h-8",item.color)}/> */}
                        {item.icon}
                    </div>
                    {/* div for title -> 2 */}
                    <div className={`font-semibold text-gray-600`}>
                      {item.label}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500"/>
              </Card>
            )
          })}
      </div>
      {/* <div className="flex lg:hidden px-4 md:px-20 space-y-4 w-full"> */}
      <Card onClick={()=>router.push('/dashboard/Settings')}  className={`hover:scale-90 mx-4 md:mx-20 lg:hidden mt-4 p-4 border-black/5 bg-black  flex  items-center justify-between hover:shadow-md transition cursor-pointer`}>
                    {/* div for logo/icon and title  */}
                  <div className="flex items-center gap-x-4">
                    {/* div for icon/logo ->1 */}
                    <div className={cn("p-4 w-fit rounded-md text-[#ef4444]")}>
                        {/* <item.icon className={cn("w-8 h-8",item.color)}/> */}
                        <IoSettingsSharp className="w-6 h-6"/> 
                    </div>
                    {/* div for title -> 2 */}
                    <div className={`font-semibold text-gray-600`}>
                    Go to Settings
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500"/>
              </Card>
      {/* </div> */}

      </div>
  )
}

export default Page