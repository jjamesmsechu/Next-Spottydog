import Link from "next/link"

export const Signout = () =>{
    return(
        <>
        <Link  href={'/signout'}>
        <button type="button" className="hover:bg-slate-700 border-2 border-slate-900 bg-slate-800 w-9/12 rounded-full">Sign Out</button>
        </Link>
        
        </>
    )
}