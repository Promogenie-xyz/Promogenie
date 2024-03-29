'use client'

import axios from "axios"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

const Page = () => {
  const {data:session}=useSession()
  const userEmail=session?.user?.email
  return (
    <div></div>
  )
}

export default Page