export const Post = () =>{
    return (
        <>
        <div className="h-4/6 w-5/6  bg-slate-700 border-2 rounded-lg m-auto mt-4 border-slate-800  ">
        <div className=" border-b-2 border-b-slate-600 text-left">
            <img  alt="" className=" m-3  size-12  inline-block border-2 rounded-full border-slate-950" src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
            <h1 className="mt-6 inline-block ">Username</h1>
        </div>
        <div className=" float-end align-top h-4/5 w-2/6 border-2 border-slate-600 rounded-md">
            <h1>Comments</h1>
        </div>
        <div className=" text-left  m-2 rounded-lg w-4/6">
    <img className=" m-3  left inline-block border-2 border-slate-800 rounded-md box-border size-52" src="data:image/jpeg;base64,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" alt="" />
    <div className="inline-block align-top mt-4">
        <h1 className=" text-xl">Title</h1>
        <h1 className=" text-md">Album</h1>
        <h1 className=" text-md">Artist</h1>
    </div>
    </div>
    <div className=" text-center w-4/6 border-2 rounded-md h-1/5 border-slate-600">
            <h1>Caption</h1>
        </div>
        </div>
        </>

    )
}   