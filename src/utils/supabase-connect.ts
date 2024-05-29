import { createClient } from "@supabase/supabase-js";

console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);


const supabaseClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!,
    {
     db: {
       schema: "next_auth"
     }
    }
 )

 export default supabaseClient