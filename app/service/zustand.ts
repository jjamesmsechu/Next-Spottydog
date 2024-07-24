// 'use server'

import { useActionState } from "react";
import { create } from "zustand";
import { getUserAuth, getUserData } from "../actions/actions";

type State = {
    username : string
}

type Action = { 
    updateUsername : (username: State['username']) => void 
}

export const useStore = create<State & Action>((set) => ({
    username : '' +  getUserAuth(),
    updateUsername: (username) => set(() => ({username : username}))
}))

// export const test = () => {console.log(username)}
export function test(){
    console.log('test')
}

// export const username = useStore((state) => state.username)
export const username = useStore((state) => state.username)
export const updateUsername = useStore((state) => state.updateUsername)