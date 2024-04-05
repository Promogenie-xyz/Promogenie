'use client'

const Footer = () => {
  return (
    <div className="h-[6rem] pt-28 flex text-center items-center text-gray-400 justify-center">
        <p className="text-xl mb-6  font-semibold text-gray-400">Developed and designed by 
            <a href="https://twitter.com/Shobhnik__13" target="_blank"><span className="cursor-pointer font-semibold text-xl text-gray-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-fuchsia-400 to-fuchsia-200"> Shobhnik </span></a>
            <span className=" font-semibold text-xl text-gray-400">&</span>
            <a href="https://twitter.com/arrpitttwts" target="_blank"><span className="text-gray-400  font-semibold hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-fuchsia-400 to-fuchsia-200 cursor-pointer text-xl "> Arpit</span></a>
        </p>
    </div>
  )
}

export default Footer