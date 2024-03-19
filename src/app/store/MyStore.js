import  {create} from 'zustand';

export const myStore = create((set) => ({
    user:{},
    setUser: (user) => set({user}),
}));
export const ProModalStore=create((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))