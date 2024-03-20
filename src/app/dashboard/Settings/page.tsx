'use client'

import Heading from "@/components/Heading"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center text-white">
        <div className="pt-20 flex items-center justify-center p-4 text-white">
            <Link href='/dashboard' className="lg:hidden">
                <FaArrowLeft className="hover:cursor-pointer w-6 h-6 lg:hidden mb-10 text-gray-400" />
            </Link>

            <Heading
            title='Settings'
            description=""
            color="text-[#ef4444]"
            />
        </div>
        <div className="flex gap-x-5 items-center">
            <p>You are currently at a <span>FREE</span> plan.</p>
            <Button variant={'destructive'}>Log Out</Button>
        </div>
    </div>
  )
}

export default page