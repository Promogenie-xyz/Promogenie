import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

const DashboardLayout=async({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) =>{
    return(
        <div className="relative bg-black bg-grid-gray-100/[0.1] h-[100vh]">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-black">
                <Sidebar/>
            </div>
            <main>
                {/* <Navbar/> */}
                {children}
            </main>
        </div>
    )
}
export default DashboardLayout