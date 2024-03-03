'use client'
import { usePremiumContext } from "@/components/IsPremium"
import Navbar from "@/components/Navbar"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"


const Pricing = () => {

 const Yearly = "https://promogenie2.lemonsqueezy.com/checkout/buy/3b45b65a-1a75-4e48-b2cb-56450c05e71c"

  const Monthly = "https://promogenie2.lemonsqueezy.com/checkout/buy/eabe00e6-3647-4584-beda-9bbbc3ca055e"

  const {data: session} = useSession()
    const premium = usePremiumContext()
    console.log(premium)

  const handleClick = () => {
    window.location.replace(Yearly)
  }

  const handleClick2 = () => {
    window.location.replace(Monthly)
  }
  return (
    <div className="bg-black bg-grid-gray-100/[0.1]">
    <Navbar />
    <div className=" px-4 py-20  sm:px-6 mx-auto text-white">

<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
  <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Pricing</h2>
  <p className="mt-1  ">Whatever your status, our offers evolve according to your needs.</p>
</div>

<div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center">

  <div className="flex flex-col border border-gray-300  text-center rounded-xl p-8 ">
    <h4 className="font-medium text-lg  ">Free</h4>
    <span className="mt-7 font-bold text-5xl  ">Free</span>

    <ul className="mt-7 space-y-2.5 text-sm">
      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
          2 Projects
        </span>
      </li>

      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
          10 urls inside projects
        </span>
      </li>

      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
          Analytics (only clicks)
        </span>
      </li>
    </ul>

   {session ? (
        <Link className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" 
    href="/dashboard"
    >
    Head to Dashboard
    </Link>
    ) : (
        <button className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" 
    onClick={() => signIn("google")}
    >
    Sign Up
    </button>
    )}
  </div>



  <div className="flex flex-col border-2 border-white text-center shadow-xl rounded-xl p-8 ">
    <p className="mb-3"><span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800  ">Most popular</span></p>
    <h4 className="font-medium text-lg  ">Monthly</h4>
    <span className="mt-5 font-bold text-5xl  ">
      <span className="font-bold text-2xl ">$</span>
      10
    </span>
    

    <ul className="mt-7 space-y-2.5 text-sm">
      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
          Unlimited Projects
        </span>
      </li>

      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
         Unlimited Urls
        </span>
      </li>

      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
          Complete Analytics
        </span>
      </li>
    </ul>

    {session ? (
        <button className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" 
    onClick={handleClick2}
    >
    Buy
    </button>
    ) : (
        <button className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" 
    onClick={() => signIn("google")}
    >
    Sign Up
    </button>
    )}
  </div>

  <div className="flex flex-col border border-gray-300 text-center rounded-xl p-8 ">
    <h4 className="font-medium text-lg  ">Annual</h4>
    <span className="mt-5 font-bold text-5xl  ">
      <span className="font-bold text-2xl ">$</span>
      75
    </span>

    <ul className="mt-7 space-y-2.5 text-sm">
      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
          Same as monthly plan
        </span>
      </li>

      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
          Cost Saving <span className=" line-through">$60  </span> $30
        </span>
      </li>

      <li className="flex space-x-2">
        <svg className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span className=" ">
          No monthly payment hassle 
        </span>
      </li>
    </ul>

      {session ? (
        <button className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" 
    onClick={handleClick2}
    >
    Buy
    </button>
    ) : (
        <button className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" 
    onClick={() => signIn("google")}
    >
    Sign Up
    </button>
    )}
  </div>

</div>
</div>
</div>
  )
}

export default Pricing