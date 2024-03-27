import  {create} from 'zustand';

export const myStore = create((set) => ({
    user:{},
    setUser: (user) => set({user}),
    premium:false,
    isPremium:(premium)=>set({premium})
}));
export const ProModalStore=create((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false}),
}))

export const DataStore=create((set)=>({
    linkedin:'',
    setLinkedin:(linkedin)=>set({linkedin})
}))

export const paymentStore=create((set)=>({
    isPremiumMember:false,
   setIsPremiumMember:(isPremiumMember)=>set({isPremiumMember}) 
}))