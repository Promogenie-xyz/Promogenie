'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { FaRegCopy } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaWhatsapp,FaLinkedin  } from "react-icons/fa";
import { FaXTwitter  } from "react-icons/fa6";
import { IoMdShareAlt } from "react-icons/io";
import { TextGenerateEffect } from "./ui/text-generate-effect";
interface generationCompProps{
    data:string,
    bgColor:string,
    borderColor:string,
}

const GenerationComp = ({data,bgColor,borderColor}:generationCompProps) => {
    const [isCopied,setIsCopied]=useState<boolean>(false)

    const handleCopy=()=>{
      setIsCopied(true)
      navigator.clipboard.writeText(data)
    }

    const shareOnTwitter = () => {
      const url = encodeURIComponent(data);
        const twitterURL = `https://twitter.com/intent/tweet?url=${url}`;
        window.open(twitterURL);
    };

    
    return (
    <div className="max-w-4xl mx-auto ">
        <Card className={`px-6  rounded-lg ${bgColor} ${borderColor}`} >
          <CardHeader className="">
                <div className="flex items-center justify-start ">
                    <div  className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-2 items-center justify-center">
                <Button className="w-full" size={'default'} variant={'generateCompButton'} disabled={isCopied} onClick={handleCopy}>
                {isCopied ? (
                        <>
                        Successfully copied <FaCheck className="w-4 h-4"/>
                        </>
                         ) : (
                            <>
                         Copy to clipboard <FaRegCopy className="w-4 h-4"/>
                             </>
                         )}
                </Button>
                <Button size={'default'} className="w-full" variant={'generateCompButton'} onClick={shareOnTwitter}>Share it on <FaXTwitter className="w-4 h-4"/><IoMdShareAlt/></Button>
                </div>
                </div>
          </CardHeader>
          <CardContent>
            <TextGenerateEffect words={data} />
          </CardContent>
        </Card>   
    </div>
  )
}

export default GenerationComp