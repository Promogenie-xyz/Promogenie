import {create} from 'zustand'
interface useStoreInterface{
    user:{} ,
    setUser:(user:{})=>void
}
export const useStore=create<useStoreInterface>((set)=>({
    user:{},
    setUser:(user)=>set({user})
}))