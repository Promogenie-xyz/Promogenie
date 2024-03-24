import { googleClientId, googleClientSecret, supaSecret, supaUrl } from "@/lib/credential";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from 'next-auth/providers/google'

 const authOptions = {
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

  export default authOptions