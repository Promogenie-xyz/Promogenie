import { NextResponse } from "next/server"
import {GoogleGenerativeAI } from "@google/generative-ai"
import supabaseClient from "@/utils/supabase-connect"
import { getServerSession } from "next-auth"
import authOptions from "@/lib/authOptions"

const genAi = new GoogleGenerativeAI(process.env.API_KEY!)

export async function POST(req:Request) {
    const session = await getServerSession(authOptions)
    const email = session?.user?.email
    try {
        const reqBody = await req.json()

        const prompt = reqBody.prompt

        const model = genAi.getGenerativeModel({model : "gemini-pro"})
        const response = await model.generateContent(prompt)
        const text = response.response.text()

        let data  = await supabaseClient
        .from("users")
        .select("twitter")
        .eq("email", "atofficial2410@gmail.com")
        .single();
      
        let updatedTwitterArray = [...data.data?.twitter, text];
      
        // Update the column with the new array
        await supabaseClient
          .from("users")
          .update({ twitter: updatedTwitterArray })
          .eq("email", "atofficial2410@gmail.com");
      
        return NextResponse.json(text)
    } catch (error) {
        console.log(error)
        return NextResponse.json("Internal Server Error",{status:500})
    }
}
