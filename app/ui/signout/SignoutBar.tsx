import Link from "next/link";

export default function SignoutBar() {
  return (
    <>
        <div className=" align-top inline-block h-screen text-center  w-4/5 text bg-slate-600 border-slate-500 border-2 rounded-md">

    <Link href="/home">
    <button className= "hover:bg-slate-700 border-2 border-slate-900 bg-slate-800 w-9/12 rounded-full mb-4">Home</button>
    </Link>
  
    <Link
        className=""
        href="http://localhost:3000"
      >
        <button type="button" className= "hover:bg-slate-700 border-2 border-slate-900 bg-slate-800 w-9/12 rounded-full mb-4">Sign-Out</button>
      </Link>
    </div>
    </>
  );
}