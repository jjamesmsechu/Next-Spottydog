'use client'
export function Login() {
    const ClickHandler = () => {
        window.location.href = "https://accounts.spotify.com/authorize?client_id=b585d26cc8f34d499f1666f26f74105d&response_type=code&redirect_uri=http://localhost:3000/home"
    }
    return (
      <>
      <div className=" inline-block w-1/5" >

      </div>
       <div className=" inline-block text-center w-3/5 h-screen bg-slate-600 rounded-lg">
       <button onClick={ClickHandler}>Login</button>
       </div>
      </>
    );
}