import { create } from "zustand";

type UserStore = {
    username : string
    pfp : string
    setPfp: (arg0:string) => void
    setName: (arg0:string) => void
}

export const useUserStore = create<UserStore>((set) => ({
    pfp: '',
    username: '',
    setPfp: (newPfp) => {
        set({pfp:newPfp})
    },
    setName: (newName) => {
        set({username: newName })
    },
}));
