import {create} from 'zustand'
interface useStoreInterface{
    user:User | null ,
    setUser:(user:User | null)=>void
}
export const useStore=create<useStoreInterface>((set)=>({
    user:{name:'',email:'',image:''},
    setUser:(user)=>set({user})
}))