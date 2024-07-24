import { Profile } from "./Profile";
import { Signout } from "./Signout";
import { Settings } from "./Settings";
import { getUserAuth } from "@/app/actions/actions";
export function LeftBar() {
    return (
      <div className="inline-block h-screen text-center  w-1/5 text bg-slate-600 border-slate-500 border-2 rounded-md">
            <Profile></Profile>
            <Settings></Settings>
            <Signout></Signout>
            <button className="size-4 bg-white" onClick={getUserAuth}></button>

      </div>
    );
}
