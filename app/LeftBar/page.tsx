import { Profile } from "./profile/page";
export function LeftBar() {
    return (
      <div className="inline-block h-fit text-center  w-1/5 text bg-slate-600 border-slate-500 border-2 rounded-md">
            <Profile></Profile>
      </div>
    );
}
