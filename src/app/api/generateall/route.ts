import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

const genAi = new GoogleGenerativeAI(process.env.API_KEY!)

const map = new Map()
export async function POST(req : Request) {
    try {
        const reqBody = await req.json()

        const ip = req.headers.get('x-forwarded-for');
        const limit = 1
        const windowTime =  365 * 24 * 60 * 60 * 1000

        if(!map.has(ip)) {
            map.set(ip,{
                token : 0,
                lastReset : Date.now()
            })
        }

        const ipData = map.get(ip)
        if(Date.now() - ipData.token > windowTime ) {
            ipData.token = 0
            ipData.lastReset = Date.now()
        }

        if(ipData.token >= limit) {
            return NextResponse.json("Too many Requests",{status : 429})
        }

        ipData.token += 1

        const model = genAi.getGenerativeModel({model : "gemini-pro"})

        const response = await model.generateContent(reqBody.prompt)

        const text = response.response.text()

        return NextResponse.json(text)

    } catch (error) {
        return NextResponse.json("Internal Server Error", {status: 500})
    }
}