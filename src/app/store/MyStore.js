import  {create} from 'zustand';

export const myStore = create((set) => ({
    user:{},
    setUser: (user) => set({user}),
}));