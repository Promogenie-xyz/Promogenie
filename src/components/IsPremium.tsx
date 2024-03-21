'use client'
import { myStore } from "@/app/store/MyStore";
import axios from "axios"
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState, ReactNode } from "react"

export const PremiumContext = createContext({});

export const usePremiumContext = () => useContext(PremiumContext);

interface Props {
    children: ReactNode;
  }

const IsPremiumContextProvider = (props: Props) => {

    const {data: session} = useSession()
    const email = session?.user?.email
    const [premium, setPremium] = useState<boolean>(false)
    const premiumMember=myStore(state=>state.premium)
    const setPremiumMember=myStore(state=>state.setPremium)
        useEffect(() => {

            const checkIsRegistered = async () => {
            await axios.post("https://marketing-7do1.onrender.com/register", {email})
            }

            const fetchPremium = async () => {
                try {
                const data = await axios.post(`https://marketing-7do1.onrender.com/check-customer`,{
                    email
                },
                {
                    withCredentials: false,
                  } )  
                if(data.data.status === "subscribed") {
                    // console.log(data);
                    setPremiumMember(true)
                } else {
                    setPremiumMember(false)
                }             
                } catch (error) {
                    console.log(error)
                }
            }
    
            const delay = 1000; //  in milliseconds
            const timeoutId = setTimeout(() => {
              checkIsRegistered()
              fetchPremium();
            }, delay);
        
            // Clear the timeout if the component unmounts before the delay
            return () => clearTimeout(timeoutId);
        }, [email])

    return (
        <PremiumContext.Provider value={premium}>
           {props.children}
        </PremiumContext.Provider>
    );
}

export default IsPremiumContextProvider