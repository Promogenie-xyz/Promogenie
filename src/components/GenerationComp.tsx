'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { FaRegCopy } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdShareAlt } from "react-icons/io";
import { TextGenerateEffect } from "./ui/text-generate-effect";
interface generationCompProps{
    data:string,
    bgColor:string,
    borderColor:string,
}

const GenerationComp = ({data,bgColor,borderColor}:generationCompProps) => {
    const words='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus debitis libero laboriosam, explicabo molestiae quia soluta totam voluptate consequuntur! Quos, sapiente molestiae doloribus labore expedita similique ducimus minus quibusdam ullam eveniet sunt placeat possimus animi aliquam nihil exercitationem laboriosam neque dignissimos error itaque mollitia tenetur nam ea alias. Minima cumque dolor eaque sequi nihil dolorum, commodi aliquam. Sunt molestias accusamus non aliquam esse exercitationem quam alias neque soluta, ad id in quas. Perspiciatis officia enim minima temporibus. Necessitatibus veniam ipsa cumque modi rerum est dicta dignissimos nam, veritatis omnis culpa quidem doloribus cum, quisquam accusantium quam maxime soluta odit. Sequi.'
    const [isCopied,setIsCopied]=useState<boolean>(false)
  return (
    <div className="max-w-4xl mx-auto">
        <Card className={`px-6  rounded-lg ${bgColor} ${borderColor}`}>
          <CardHeader className="">
                <div className="flex items-center justify-between ">
                    <div></div>
                    <div  className="flex  gap-x-2 items-center">
                <Button variant={'generateCompButton'} disabled={isCopied} onClick={()=>setIsCopied(!isCopied)}>
                {isCopied ? (
                        <>
                        Successfully copied <FaCheck />
                        </>
                         ) : (
                            <>
                         Copy to clipboard <FaRegCopy />
                             </>
                         )}
                </Button>
                <Button variant={'generateCompButton'} >Share it on <FaXTwitter/><IoMdShareAlt/></Button>
                <Button variant={'generateCompButton'} >Share it on <FaWhatsapp/><IoMdShareAlt/></Button>
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