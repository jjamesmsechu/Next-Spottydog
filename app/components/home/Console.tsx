
import { Post } from "./Post";
export function Console() {
    return (
      <>
       <div className="align-top  inline-block text-center w-3/5 h-screen bg-slate-600 rounded-lg">
       <input className="ml- align-top inline-block w-4/5 mt-2 h-8 bg-slate-700 rounded-full border-2 border-slate-800">
       </input>
        <Post></Post>
       </div>
      </>
    );
}