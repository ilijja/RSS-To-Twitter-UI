const RightContainer = ({children}) => {
    return <>
        <div className="w-screen h-screen overflow-auto bg-zinc-950 px-8">
            {children}
        </div>
    </>
}

export default RightContainer;