import { googleClientId, googleClientSecret, supaSecret, supaUrl } from "@/lib/credential";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import {  NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

 const handler =NextAuth({
    providers:[
        GoogleProvider({
            clientId: googleClientId ?? "",
            clientSecret: googleClientSecret ?? "",
          }),
    ],
    adapter: SupabaseAdapter({
        url: supaUrl ?? "",
        secret: supaSecret ?? "",
      }) as Adapter,
})
export {handler as GET , handler as POST}