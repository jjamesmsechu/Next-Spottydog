import { create } from "zustand";

type UserStore = {
    username : string
    change: (arg0:string) => void
}

export const useUserStore = create<UserStore>((set) => ({
    username: 'user',
    change: (newName) => {
        set({username: newName })
    },
}));
