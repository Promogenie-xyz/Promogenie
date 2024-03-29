'use client'

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { redirect, usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";

const Logout = () => {
    const router=useRouter()
    
    const pathname=usePathname()
    const {data:session}=useSession()
    useEffect(()=>{
        const getUser=()=>{
            if(!session?.user){
                redirect('/')
            }
        }

        getUser()
    },[pathname,session?.user])
    return (
        <div>
        <Dialog>
        <DialogTrigger className="" asChild>
        <Button className='flex items-center text-black font-semibold' variant={'premium'}>Logout</Button>
        </DialogTrigger>
    <DialogContent className=" bg-black h-[280px] sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-white">Are you sure you want to logout from promogenie?</DialogTitle>
            <DialogDescription className="pt-6 text-gray-400 text-sm">
              After logout you will be redirected to the home page of promogenie. But no worries you can login afterwards to use and see your previous generations. Thanks for using promogenie!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex gap-x-1 items-center gap-4">
            <Button onClick={()=>signOut()} className="text-red-500 font-semibold text-base"  variant={'link'}>Log out</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      </div>
    )
}
export default Logout