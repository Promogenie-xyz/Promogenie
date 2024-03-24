import { googleClientId, googleClientSecret, supaSecret, supaUrl } from "@/lib/credential";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
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
}

 const handler =NextAuth(authOptions)
export {handler as GET , handler as POST}
