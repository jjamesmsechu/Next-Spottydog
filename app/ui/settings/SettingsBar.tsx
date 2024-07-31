import Link from "next/link";

export default function SettingsBar() {
  return (
    <>
    <div className=" align-top inline-block h-screen text-center  w-4/5 text bg-slate-600 border-slate-500 border-2 rounded-md">
    <h1>Settings</h1>
    <Link
        className=""
        href="/home"
      >
        <button type="button" className= " origin-bottom hover:bg-slate-700 border-2 border-slate-900 bg-slate-800 w-9/12 rounded-full mb-4">Home</button>
      </Link>
    </div>
    </>
  );
}