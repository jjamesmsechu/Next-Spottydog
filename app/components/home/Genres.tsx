export const Genres = () => {
    return(
        <div className=" text-left ml- align-top inline-block w-3/5 mt-2 h-8 bg-slate-700 rounded-full border-2 border-slate-800">
            <img className=" inline-block border-2 content-center size-7  border-slate-600 rounded-lg" src="data:image/jpeg;base64,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" alt="" />
            <h1 className=" ml-1 inline-block">Genre</h1>
        </div>
    )
}