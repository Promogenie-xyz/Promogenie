'use client'
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const Comparison = () => {
  const data=[
    {
      id:2,
      label:'Priority customer support',
      promIcon:<FaCheck className="w-4 h-4 md:w-8 md:h-8"/>,
      compIcon:<ImCross className="w-4 h-4 md:w-8 md:h-8"/>
    },
    {
      id:3,
      label:'Easy to use',
      promIcon:<FaCheck className="w-4 h-4 md:w-8 md:h-8"/>,
      compIcon:<ImCross className="w-4 h-4 md:w-8 md:h-8"/>
    },
    {
      id:4,
      label:'Continuous addition of unique features',
      promIcon:<FaCheck className="w-4 h-4 md:w-8 md:h-8"/>,
      compIcon:<ImCross className="w-4 h-4 md:w-8 md:h-8"/>
    },
    {
      id:5,
      label:'Unlimited generations',
      promIcon:<FaCheck className="w-4 h-4 md:w-8 md:h-8"/>,
      compIcon:<ImCross className="w-4 h-4 md:w-8 md:h-8"/>
    },
    {
      id:6,
      label:'5+ content templates available',
      promIcon:<FaCheck className="w-4 h-4 md:w-8 md:h-8"/>,
      compIcon:<ImCross className="w-4 h-4 md:w-8 md:h-8"/>
    },
    {
      id:7,
      label:'Available history for your previously generated content',
      promIcon:<FaCheck className="w-4 h-4 md:w-8 md:h-8"/>,
      compIcon:<ImCross className="w-4 h-4 md:w-8 md:h-8"/>
    }
  ]
  return (
    <div className="flex flex-col justify-center text-white p-4 md:p-8 rounded-lg mt-44  md:mx-14 gap-y-8">
    <div className="flex flex-col items-center gap-y-2">
        <p className="text-sm text-gray-400">Why choose us over competitors?</p>
        <p className="text-2xl font-bold md:text-4xl md:leading-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-fuchsia-200">promogenie vs competitors</p>
    </div>
    <div className="flex flex-col justify-center">
          <div className="flex justify-between items-center">
            <div></div>
            <div className="flex items-center gap-x-12 md:gap-x-24 ">
              <span className="text-sm md:text-base text-gray-400">promogenie</span>
              <span className="text-sm md:text-base text-gray-400">competitors</span>
            </div>
          </div>

          <div className="flex flex-col gap-y-8 mt-10">
            {data.map((item)=>(
              <div key={item.id} className="text-xs md:text-base  text-gray-400 flex justify-between items-center">
                  <div className="max-w-[150px] md:max-w-none">{item.label}</div>
                  <div className="flex items-center justify-between gap-x-28 md:gap-x-[10rem]">
                    <span className="text-green-500">{item.promIcon}</span>
                    <span className="text-red-500">{item.compIcon}</span>
                  </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Comparison
