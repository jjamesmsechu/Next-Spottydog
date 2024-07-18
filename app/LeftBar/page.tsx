import { Profile } from "./profile/page";
import { Signout } from "./Signout/page";
export function LeftBar() {
    return (
      <div className="inline-block h-screen text-center  w-1/5 text bg-slate-600 border-slate-500 border-2 rounded-md">
            <Profile></Profile>
            <Signout></Signout>
      </div>
    );
}
