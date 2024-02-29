import Headercomp from "@/components/HeaderComp";
import SignIn from "@/components/SignIn";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  
  return (
    <div className="h-[50rem] w-full bg-black bg-grid-gray-100/[0.1] -z-0 relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 z-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <Headercomp/>
  </div>

  );
}
