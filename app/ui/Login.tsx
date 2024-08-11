'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { getAccessToken, useStore, useUserStore } from "../service/store";
import {useRouter} from "next/router";
import { redirect } from 'next/navigation'




export async function Login() {
    // const setName = useUserStore((state) => state.setName)
    // const setPfp = useUserStore((state) => state.setPfp)
    // const username = useUserStore((state) => state.username)
    // const {data,loading,fetchData} = useStore()
    const searchParams = useSearchParams()
    const setAccess_Token = useUserStore((state) => state.setAccess_Token)
    const access_token = useUserStore((state) => state.access_token)


    const ClickHandler = () => {
      window.location.href = "https://accounts.spotify.com/authorize?client_id=b585d26cc8f34d499f1666f26f74105d&response_type=code&redirect_uri=http://localhost:3000?redirected=true"
    }
    // Check if user has already logged in and fetch code
    if (searchParams.has('redirected')){

        useEffect( () => {
             getAccessToken(searchParams.get('code')!.toString())
             .then(response => setAccess_Token(response)).then
                      }, []);
    }
    if (access_token && searchParams.has('redirected')){
      redirect('/home')
    }
    return (
      <>
      <div className=" inline-block w-1/5" >

      </div>
       <div className=" inline-block text-center w-3/5 h-screen bg-slate-700 rounded-lg">
       <button className="bg-green-500 hover:bg-green-300 m-auto text-white font-bold py-2 px-4 rounded" onClick={ClickHandler}>Login</button>
       </div>
      </>
    );
}


