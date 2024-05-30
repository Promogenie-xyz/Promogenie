
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import authOptions from "@/lib/authOptions"
import supabaseClient from "@/utils/supabase-connect"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const DashboardLayout=async({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) =>{
  const session = await getServerSession(authOptions)
  const email = session?.user?.email
  const data = await supabaseClient.from("users").select("paid").eq("email",email)

  // if (data !== null && data.data !== null && data.data[0].paid === true) {
    return(
        <div className="relative bg-black  bg-grid-gray-100/[0.1] h-full pb-10 ">
            <div className="z-50">
                <Navbar/>
            </div>
            <div className="z-0 hidden h-full lg:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-black">
                <Sidebar/>
            </div>
            <main className="flex justify-center items-center">
                {/* <Navbar/> */}
                {children}
            </main>
        </div>
    )
  // } else {
  //   redirect("/")
  // }
  }
export default DashboardLayout
