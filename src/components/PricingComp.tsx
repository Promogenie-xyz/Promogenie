'use client'
import { usePremiumContext } from "@/components/IsPremium"
import Navbar from "@/components/Navbar"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { MdOutlineCheck } from "react-icons/md";


const Pricing = () => {

    const Yearly = "https://promogenie2.lemonsqueezy.com/checkout/buy/3b45b65a-1a75-4e48-b2cb-56450c05e71c"

  const Monthly = "https://promogenie2.lemonsqueezy.com/checkout/buy/eabe00e6-3647-4584-beda-9bbbc3ca055e"

  const handleClick = () => {
    window.location.replace(Yearly)
  }
  
  const handleClick2 = () => {
    window.location.replace(Monthly)
  }
  const signInwithGoogle=()=>{
     signIn("google")
  }
  const router=useRouter()
  const toDashboard=()=>{
    router.push('/dashboard')
  }
  
  const {data: session} = useSession()
    const premium = usePremiumContext()
    // console.log(premium)
  const data=[
    {
        id:1,
        heading:'BEGINNER FRIENDLY',
        priceCategory:'Default',
        cost:'Free',
        features:[
            'Perfect for beginners.',
            '10 Free generations.',
            'Limited access to templates.'
        ],
        btnBeforeSession:'Sign Up',
        btnAfterSession:'Head to dashboard',
        funcBeforeSession:signInwithGoogle,
        funcAfterSession:toDashboard
    },
    {
        id:2,
        heading:'MOST POPULAR',
        priceCategory:'Monthly',
        cost:'10',
        features:[
            'Unlimited generations.',
            'Unlimited access to templates.',
            'Priority customer support.'
        ],
        btnBeforeSession:'Sign Up',
        btnAfterSession:'Checkout Now',
        funcBeforeSession:signInwithGoogle,
        funcAfterSession:handleClick2,
  
    },
    {
        id:3,
        heading:'-30% DISCOUNTED',
        priceCategory:'Yearly',
        cost:'85',
        features:[
            'Save 30% with this plan.',
            'Unlimited generations.',
            'Unlimited access to templates.',
        ],
        btnBeforeSession:'Sign Up',
        btnAfterSession:'Checkout Now',
        funcBeforeSession:signInwithGoogle,
        funcAfterSession:handleClick,
    
    },

]


  return (
    <div className="bg-black bg-grid-gray-100/[0.1] pt-28">
    <div className="px-4 py-20  sm:px-6 mx-auto text-white">

<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
  <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-fuchsia-200">Pricing</h2>
  <p className="mt-1 bg-clip-text text-transparent bg-gray-400">Whatever your status, our offers evolve according to your needs.</p>
</div>

<div className="mt-12 grid sm:grid-cols-1 sm:px-16 lg:grid-cols-3 gap-8 lg:items-center">

    {data.map((item)=>(
      <div key={item.id} className={`${item.id ===2?'lg:px-[16.3px] lg:py-[21.8px] px-[2px] py-[2.2px]':'p-[1px]'} rounded-xl bg-gradient-to-r from-indigo-500  to-purple-500`}>
        <div  className={`flex flex-col  bg-black  rounded-xl text-center  shadow-xl  p-8 ${item.id === 2 ? 'lg:scale-110 ':''} `} >
        <p className="mb-3"><span className={`inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase  bg-blue-100  ${(item.heading === '-30% DISCOUNTED') ? 'text-green-600 font-extrabold':'text-blue-800 font-semibold'} `}>{item.heading}</span></p>
        <h4 className="font-medium text-lg  ">{item.priceCategory}</h4>
        <span className="mt-5 font-bold text-5xl  ">
          <span className={`font-bold text-2xl ${item.cost==='Free'?'hidden':''}`}>$</span>
          {item.cost}
        </span>
        
        {item.features.map((ft,index)=>(
      <div key={index} className="mt-7 flex flex-col justify-center items-start space-y-2.5 text-sm">
            <div className="flex gap-x-2 justify-start items-center">
                <div className="w-4 h-4">
               <MdOutlineCheck className="text-blue-600 " />
                </div>
                <p>{ft}</p>
            </div>
    </div>
        ))}
       
        {session ? (
            <button className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" 
        onClick={item.funcAfterSession}
        > 
        {item.btnAfterSession}
        </button>
        ) : (
            <button className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" 
        onClick={item.funcBeforeSession}
        >
        {item.btnBeforeSession}
        </button>
        )}
      </div>
      </div>
    ))}
  



</div>
</div>
</div>
  )
}

export default Pricing