import { create } from "zustand";


type UserStore = {
    username : string
    profilePicture : string
    access_token : string
    setAccess_Token : (access_token : UserStore['access_token']) => void 
    setPfp: (profilePicture : UserStore['profilePicture']) => void
    setName: (username : UserStore['username']) => void
}

export const useUserStore = create<UserStore>((set) => ({
    profilePicture: '',
    username: '',
    access_token: '',
    setAccess_Token: (token) => {
      set({access_token:token })  
    },
    setPfp: (newprofilePicture) => {
        set({profilePicture:newprofilePicture})
    },
    setName: (newName) => {
        set({username: newName })
    },
}));

export const useStore = create((set) => ({
    data: null,
    loading: false,
    fetchData: async (url:string) => {
      set({ loading: true, error: null });
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        set({ data, loading: false });
      } catch (error) {
        // set({ error: error.message, loading: false });
      }
    },
  }));


// export const getUserData = async (access_token: string) => {
//     const response = await fetch('https://api.spotify.com/v1/me',
//         {method : 'GET',
//         headers : {'Authorization' : 'Bearer ' + access_token}
//             })
//             return (await response.json());
// }



  export const getAccessToken = async (code: string) => {
    const grant_type = 'authorization_code';
    const redirect_uri = 'https://spottydog.vercel.app?redirected=true';
    const params = {
        grant_type,
        code: code!,
        redirect_uri,
    };
    const header = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic' +
            ' YjU4NWQyNmNjOGYzNGQ0OTlmMTY2NmYyNmY3NDEwNWQ6YmRlZTMxODk0ZmQ1NGM0ZDljZDJkYjkzMTE4ZTdhMTE=',
    };
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: header,
        body: new URLSearchParams(params).toString(),
    });                                                     
    
    // console.log((await response.json()));
    return (await response.json()).access_token;
};

// export const getUserData = async (accessToken:string) => {

//     const hello = "hello";

//    const res = await fetch('https://api.spotify.com/v1/me',
//         { method: 'GET',
//             headers: { Authorization: Bearer + hello },
//         });

//    console.log(`Bearer ` + accessToken);
//    return res.json();
// };