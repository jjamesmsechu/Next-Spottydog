import { Caption } from "./Caption/Caption"
import { Comments } from "./Comments/Comments"
import { Song } from "./Song/Song"
import { UserProf } from "./UserProf/UserProf"
export const Posts = () =>{
    return (
        <>
        <div className="h-4/6 w-5/6  bg-slate-700 border-2 rounded-lg m-auto mt-4 border-slate-800  ">
        <UserProf></UserProf>
        <Comments></Comments>
        <Song></Song>
        <Caption></Caption>
        </div>
        </>

    )
}   