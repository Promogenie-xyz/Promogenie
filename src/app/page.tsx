
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Headercomp from "@/components/HeaderComp";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/PricingComp";
import Testimonials from "@/components/Testimonials";
import authOptions from "@/lib/authOptions";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { myStore } from "./store/MyStore";
import Faq from "@/components/Faq";
import Problem from "@/components/Problem";

export default async function Home() {
  const session = await getServerSession(authOptions as Object)
 if(session) {
     redirect('/dashboard')
  }
  console.log(session)
  
  return (
    <div className="bg-black  bg-grid-gray-100/[0.1] flex flex-col justify-center">
      <Navbar/>
      <div className="h-[50rem]  w-full overflow-x-hidden -z-0 relative flex  items-center justify-center ">
        <div className=" absolute pointer-events-none inset-0 z-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <Headercomp/>
      </div>
      <Problem/>
      <Features/>
      <Pricing/>
      <Faq/>
      <Testimonials/>
      {/* <Footer/> */}
    </div>
  );
}
