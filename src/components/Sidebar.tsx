'use client'
import { FaLinkedin,FaInstagram,FaWhatsapp,FaArrowLeft    } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
import { MdOutlineMail } from "react-icons/md";
import { ImBlogger } from "react-icons/im";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "./ui/cn";
import FreeCounter from "./FreeCounter";
import { IoSettingsSharp } from "react-icons/io5";
import { Button } from "./ui/button";
const Sidebar = () => {
    const routes=[
        {
            id:1,
            icon:<FaLinkedin className="h-6 w-6" />,
            href:'/dashboard/Linkedin_Post',
            label:'LinkedIn Post',
            color:'text-[#0077b5ff]'
        },
        {
            id:2,
            icon:<FaXTwitter className="h-6 w-6"/>,
            href:'/dashboard/Twitter_Post',
            label:'Twitter Post',
            color:'text-white'
        },
        {
            id:3,
            icon:<FaInstagram className="h-6 w-6" />,
            href:'/dashboard/Instagram_caption',
            label:'Instagram Caption',
            color:'text-[#c13b84ff]'
        },
        {
            id:4,
            icon:<MdOutlineMail className="h-6 w-6" />,
            href:'/dashboard/Cold_Email',
            label:'Cold Email',
            color:'text-[#c5221eff]'
        },
        {
            id:5,
            icon:<ImBlogger className="h-6 w-6"/>,
            href:'/dashboard/Blog_Page',
            label:'Blogs',
            color:'text-[#f48c32ff]'
        },
        {
            id:6,
            icon:<FaWhatsapp  className="h-6 w-6"/>,
            href:'/dashboard/Whatsapp_biz',
            label:'WhatsApp Business',
            color:'text-[#2ab13fff]'
        },

    ]
    const pathname=usePathname()
  return (
    <div className="space-y-3 flex flex-col  justify-center p-6 h-full z-0">
        <div className=" flex flex-col gap-y-4">
            {routes.map((item)=>(
                <Link href={item.href} key={item.href} className={cn('text-sm group flex items-center p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',pathname === item.href?'text-white bg-white/10':'text-gray-400')}>
                    <div className="flex gap-x-2 items-center">
                    <div className={`mr-3 h-8 w-8 ${item.color} `}>{item.icon}</div>
                    <div className={``}>{item.label}</div>
                    </div>
                </Link>
            ))}
        </div>
    
    </div>
  )
}

export default Sidebar