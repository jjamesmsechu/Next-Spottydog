import { Profile } from "./profile/page";
import { Signout } from "./Signout/page";
import { Settings } from "./Settings/page";
export function LeftBar() {
    return (
      <div className="inline-block h-screen text-center  w-1/6 text bg-slate-600 border-slate-500 border-2 rounded-md">
            <Profile></Profile>
            <Settings></Settings>
            <Signout></Signout>
      </div>
    );
}
