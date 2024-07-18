
import { NavBar } from "./NavBar/page";
import { Posts } from "./Posts/Posts";

export function Console() {
    return (
      <>
       <div className="align-top  inline-block text-center w-3/5 h-screen bg-slate-600 rounded-lg">
        <NavBar></NavBar>
        <Posts></Posts>
       </div>
      </>
    );
}