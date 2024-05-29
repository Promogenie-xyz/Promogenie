'use client'

const Footer = () => {
  return (
    <div className="h-[6rem] pt-28 flex text-center items-center text-gray-400 justify-center">
        <p className="text-lg mb-6  font-semibold text-gray-400">  &copy; {new Date().getFullYear()} Promogenie. All rights reserved.
        </p>
    </div>
  )
}

export default Footer
