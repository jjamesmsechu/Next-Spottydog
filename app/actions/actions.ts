import { useSearchParams } from "next/navigation"

// Fetch Bearer token to access user Data
  export const  getUserAuth = async () => {
    const searchParams = useSearchParams()

    var redirect_uri = "http://127.0.0.1:5500/spotprof.html"
    var code = searchParams.get('code')
    var grant_type ="authorization_code"

    const params = {
        'grant_type': grant_type,
        'code': code!,
        'redirect_uri': 'http://localhost:3000/home'
    } 

    const response = await fetch('https://accounts.spotify.com/api/token',
        {method:'POST', 
         headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization' : 'Basic YjU4NWQyNmNjOGYzNGQ0OTlmMTY2NmYyNmY3NDEwNWQ6YmRlZTMxODk0ZmQ1NGM0ZDljZDJkYjkzMTE4ZTdhMTE='},
         body:new URLSearchParams(params).toString()})
        }

    // fetching user data 
    export const getUserData = async (access_token: string) => {

        var req = await fetch('https://api.spotify.com/v1/me',{
            method : 'GET',
            headers : {'Authorization' : 'Bearer ' + access_token }
        }).then((data) => data.json())
        return req
    }