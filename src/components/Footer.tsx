'use client'

const Footer = () => {
  return (
    <div className="bg-black h-[6rem] pt-12 mb-10 md:mb-0 flex text-center items-center justify-center">
        <p className="text-3xl mb-6 text-white font-semibold">Built with love by 
            <a href="https://twitter.com/Shobhnik__13" target="_blank"><span className="cursor-pointer font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"> Shobhnik </span></a>
            <span className=" font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">&</span>
            <a href="https://twitter.com/arrpitttwts" target="_blank"><span className=" cursor-pointer font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"> Arpit</span></a>
        </p>
    </div>
  )
}

export default Footer