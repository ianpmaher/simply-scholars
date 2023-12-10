const Skeleton = () => {
    return (
        <div className="animate-pulse max-w-md border-gray-200 border" role="status">
            <div className="h-3 bg-gray-300 m-2 rounded-full max-w-[18rem] min-w-[10rem]"></div>
            <div className="h-2 bg-gray-300 m-2 rounded-full max-w-[30rem] min-w-[24em]"></div>
            <div className="h-2 bg-gray-300 m-1.5 rounded-full max-w-[22rem]"></div>
            <div className="h-2.5 bg-gray-300 m-2 rounded-full max-w-[20rem]"></div>
            <div className="h-2 bg-gray-300 m-1.5 rounded-full max-w-[22rem]"></div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default Skeleton