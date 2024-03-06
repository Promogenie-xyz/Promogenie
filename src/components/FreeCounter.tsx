'use client'

import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Progress } from "./ui/progress"
import { Zap } from "lucide-react"
const FreeCounter = () => {
  return (
    <div className="px-3">
        <Card className="bg-white/10 border-0">
            <CardContent className="py-6">
                <div className="text-center text-sm text-white mb-2 space-y-2">
                    <p>0 / 10 Free Generations</p>
                    <Progress className="h-3" value={(0/10)*100}/>
                </div>
                <Button variant={'premium'} className="w-full hover:scale-90 duration-200 text-base font-semibold transition-all">Upgrade <Zap className="w-4 h-4 ml-2 fill-white text-white border-none "/></Button>
            </CardContent>
        </Card>
    </div>
  )
}

export default FreeCounter