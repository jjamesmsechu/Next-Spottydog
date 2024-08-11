'use client'

import { LeftBar } from "../ui/home/LeftBar"
import { Console } from "../ui/home/Console";
import { RightBar } from "../ui/home/Rightbar";
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useRef, useState } from "react";
import { useUserStore } from "../service/store";
import { getUserData } from "../actions/actions";
 
export default function Home() {

  // Variables storing user data to be displayed and functions to change that data 
  const setPfp = useUserStore((state) => state.setPfp)
  const setName = useUserStore((state) => state.setName)
  const profilePicture = useUserStore((state) => state.profilePicture)
  const access_token = useUserStore((state) => state.access_token)


  //checking if the access token has been fetched, and updating store with user data
  useEffect(  () => {
    getUserData(access_token).then((response) => {
      setPfp(response.images[1].url)
      setName(response.display_name)
    }
  )  }, []
  )

  return (
    <>
      <LeftBar></LeftBar>
      <Console></Console>
      <RightBar></RightBar>
    </>
  );
  
}
