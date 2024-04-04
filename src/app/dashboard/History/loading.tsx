'use client'

const loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-grid bg-black">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div> 
    </div>
  )
}

export default loading