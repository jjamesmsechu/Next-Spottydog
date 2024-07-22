'use client'

import Link from "next/link"
import path from "path"

export const Settings = () => {

    return ( 
        <>
        <Link
        className=""
        href="/settings"
      >
        <button type="button" className= " hover:bg-slate-700 border-2 border-slate-900 bg-slate-800 w-9/12 rounded-full mb-4">Settings</button>
      </Link>
        
        </>
    )
}