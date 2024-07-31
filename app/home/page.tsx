'use client'

import { LeftBar } from "../ui/home/LeftBar"
import { Console } from "../ui/home/Console";
import { RightBar } from "../ui/home/Rightbar";
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useRef, useState } from "react";
import { useUserStore } from "../service/store";



export default function Home() {
    const setName = useUserStore((state) => state.setName)
    const setPfp = useUserStore((state) => state.setPfp)
    var render = useRef(false)

    const searchParams = useSearchParams()

    var redirect_uri = "http://127.0.0.1:5500/spotprof.html"
    var code = searchParams.get('code')
    var grant_type ="authorization_code"
    

    const params = {
        'grant_type': grant_type,
        'code': code!,
        'redirect_uri': 'http://localhost:3000/home'
    } 
    useEffect(() => {
        
        const fetchUserData = async () => {

            // Post request for access_token
            fetch('https://accounts.spotify.com/api/token',
                {method:'POST', 
                headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization' : 'Basic YjU4NWQyNmNjOGYzNGQ0OTlmMTY2NmYyNmY3NDEwNWQ6YmRlZTMxODk0ZmQ1NGM0ZDljZDJkYjkzMTE4ZTdhMTE='},
                body:new URLSearchParams(params).toString()}).then(
            response => {
                response.json()

            //Get request for user data then setting data
            .then( data => {
                fetch('https://api.spotify.com/v1/me',
                    {method : 'GET',
                    headers : {'Authorization' : 'Bearer ' + data.access_token}
                        })
                .then(response => {
                    response.json()
                .then(data => {
                                setName(data.display_name)
                                setPfp(data.images[1].url)
                                render.current = true
                                console.log(render.current)                                
        })
                        })
                    })
                }
             )
            }

            if (render.current == false){
                fetchUserData()
            }
    },[])
    
  return (
    <Suspense>
      <LeftBar></LeftBar>
      <Console></Console>
      <RightBar></RightBar>
    </Suspense>
  );
  
}
