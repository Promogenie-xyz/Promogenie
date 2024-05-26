import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

const genAi = new GoogleGenerativeAI(process.env.API_KEY!)


export async function POST(req : Request) {
    try {
        const reqBody = await req.json()

        const model = genAi.getGenerativeModel({model : "gemini-pro"})

        const response = await model.generateContent(reqBody.prompt)

        const text = response.response.text()

        return NextResponse.json(text)

    } catch (error) {
        return NextResponse.json("Internal Server Error", {status: 500})
    }
}