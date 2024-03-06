import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

const DashboardLayout=async({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) =>{
    return(
        <div className="relative bg-black bg-grid-gray-100/[0.1] h-full pb-10">
            <div className="hidden h-full lg:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-black">
                <Sidebar/>
            </div>
            <main className="flex justify-center items-center">
                {/* <Navbar/> */}
                {children}
            </main>
        </div>
    )
}
export default DashboardLayout