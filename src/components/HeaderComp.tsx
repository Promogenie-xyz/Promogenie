'use client'

import { SparklesCore } from "./ui/sparkles"
import { TextRevealCard } from "./ui/text-reveal-card"

const Headercomp = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-28">
      <div className="h-[12rem] px-[220px] relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-3xl z-10">
        <h1 className="md:text-7xl text-3xl  lg:text-9xl font-bold text-center text-transparent relative z-20">
          <span className="bg-gradient-to-r from-fuchsia-700 via-fuchsia-500 to-fuchsia-300 text-transparent bg-clip-text relative z-20 position-relative">promogenie.</span>
        </h1>
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={1.2}
            maxSize={2.4}
            particleDensity={280}
            className="w-full h-full"
            particleColor="#a21caf"
          />
        </div>
      </div>
        <div className=" italic">
          <TextRevealCard text=" 'Gear Your Marketing.' " revealText=" 'By using promogenie.' "/>
        </div>
      {/* <h1 className=" text-5xl text-center max-w-[70%] font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-fuchsia-200 italic">
        "The only content and self marketing tool you ever need is this"
      </h1> */}
    </div>
  )
}

export default Headercomp
